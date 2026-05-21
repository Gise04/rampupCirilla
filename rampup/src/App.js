import { useState, useEffect, useCallback, useRef } from "react";
import "./App.css";
import StartScreen from "./components/StartScreen";
import QuestionCard from "./components/QuestionCard";
import ProgressBar from "./components/ProgressBar";
import Results from "./components/Results";
import FeedbackPanel from "./components/FeedbackPanel";
import { questions, TOTAL_QUESTIONS_EXAM } from "./data/questions";

const MAX_HEARTS = 5;
const EXAM_TIME = 30 * 60;

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getStreak() {
  const streak = parseInt(localStorage.getItem("dgt_streak") || "0", 10);
  const lastPlayed = localStorage.getItem("dgt_last_played");
  if (!lastPlayed) return streak;
  const today = new Date().toDateString();
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  const last = new Date(lastPlayed).toDateString();
  if (last === today || last === yesterday) return streak;
  return 0;
}

function updateStreak() {
  const today = new Date().toDateString();
  const lastPlayed = localStorage.getItem("dgt_last_played");
  const last = lastPlayed ? new Date(lastPlayed).toDateString() : null;
  let streak = parseInt(localStorage.getItem("dgt_streak") || "0", 10);
  if (last === today) {
    // already played today, no change
  } else if (last === new Date(Date.now() - 86400000).toDateString()) {
    streak += 1;
  } else {
    streak = 1;
  }
  localStorage.setItem("dgt_streak", String(streak));
  localStorage.setItem("dgt_last_played", new Date().toISOString());
  return streak;
}

function getTotalXP() {
  return parseInt(localStorage.getItem("dgt_total_xp") || "0", 10);
}

function addXP(amount) {
  const current = getTotalXP();
  const next = current + amount;
  localStorage.setItem("dgt_total_xp", String(next));
  return next;
}

function App() {
  const [screen, setScreen] = useState("start");
  const [mode, setMode] = useState("exam");
  const [examQuestions, setExamQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedbackVisible, setFeedbackVisible] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [hearts, setHearts] = useState(MAX_HEARTS);
  const [prevHearts, setPrevHearts] = useState(MAX_HEARTS);
  const [answers, setAnswers] = useState([]);
  const [sessionXP, setSessionXP] = useState(0);
  const [timeLeft, setTimeLeft] = useState(EXAM_TIME);
  const [finished, setFinished] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [streak, setStreak] = useState(getStreak);
  const [totalXP, setTotalXP] = useState(getTotalXP);

  const finishedRef = useRef(false);

  const finishExam = useCallback((currentAnswers, currentHearts, currentSessionXP) => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    setFinished(true);
    // Save streak and XP
    const newStreak = updateStreak();
    const newTotal = addXP(currentSessionXP || 0);
    setStreak(newStreak);
    setTotalXP(newTotal);
    setScreen("results");
  }, []);

  // Timer
  useEffect(() => {
    if (screen !== "quiz" || finished || mode !== "exam") return;
    const interval = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(interval);
          setAnswers((ans) => {
            setSessionXP((xp) => {
              finishExam(ans, hearts, xp);
              return xp;
            });
            return ans;
          });
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [screen, finished, mode, finishExam, hearts]);

  function startQuiz() {
    const selected = shuffle(questions).slice(0, TOTAL_QUESTIONS_EXAM);
    finishedRef.current = false;
    setExamQuestions(selected);
    setCurrentIndex(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setFeedbackVisible(false);
    setHearts(MAX_HEARTS);
    setPrevHearts(MAX_HEARTS);
    setSessionXP(0);
    setTimeLeft(EXAM_TIME);
    setFinished(false);
    setStartTime(Date.now());
    setScreen("quiz");
  }

  function handleAnswer(answerIndex) {
    if (selectedAnswer !== null || feedbackVisible) return;
    const q = examQuestions[currentIndex];
    const correct = answerIndex === q.correct;

    const xpGain = correct ? (mode === "exam" ? 15 : 10) : 0;
    const newSessionXP = sessionXP + xpGain;
    setSessionXP(newSessionXP);

    let newHearts = hearts;
    if (!correct && mode === "exam") {
      setPrevHearts(hearts);
      newHearts = hearts - 1;
      setHearts(newHearts);
    }

    const newAnswer = { selected: answerIndex, isCorrect: correct };
    const newAnswers = [...answers, newAnswer];
    setAnswers(newAnswers);

    setSelectedAnswer(answerIndex);
    setIsCorrect(correct);
    setFeedbackVisible(true);

    // If hearts gone, finish will happen on continue
  }

  function handleContinue() {
    setFeedbackVisible(false);

    const isLast = currentIndex + 1 >= TOTAL_QUESTIONS_EXAM;

    if (mode === "exam" && hearts <= 0) {
      finishExam(answers, 0, sessionXP);
      return;
    }

    if (isLast) {
      finishExam(answers, hearts, sessionXP);
      return;
    }

    setCurrentIndex((i) => i + 1);
    setSelectedAnswer(null);
  }

  const timeUsed = startTime ? Math.round((Date.now() - startTime) / 1000) : 0;

  function handleExit() {
    setScreen("start");
    setFinished(false);
    finishedRef.current = false;
  }

  return (
    <div className="app">
      {screen === "start" && (
        <StartScreen
          onStart={startQuiz}
          mode={mode}
          onModeChange={setMode}
          streak={streak}
          totalXP={totalXP}
        />
      )}

      {screen === "quiz" && examQuestions.length > 0 && (
        <div className="quiz-wrapper">
          <ProgressBar
            current={currentIndex + 1}
            total={TOTAL_QUESTIONS_EXAM}
            hearts={hearts}
            maxHearts={MAX_HEARTS}
            prevHearts={prevHearts}
            timeLeft={timeLeft}
            mode={mode}
            onExit={handleExit}
          />
          <div className="quiz-content">
            <QuestionCard
              question={examQuestions[currentIndex]}
              selectedAnswer={selectedAnswer}
              onAnswer={handleAnswer}
            />
          </div>
          <FeedbackPanel
            isCorrect={isCorrect}
            explanation={examQuestions[currentIndex]?.explanation}
            onContinue={handleContinue}
            visible={feedbackVisible}
          />
        </div>
      )}

      {screen === "results" && (
        <Results
          answers={answers}
          questions={examQuestions}
          onRetry={startQuiz}
          onHome={() => setScreen("start")}
          timeUsed={timeUsed}
          mode={mode}
          sessionXP={sessionXP}
        />
      )}
    </div>
  );
}

export default App;
