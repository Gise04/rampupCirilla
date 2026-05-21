import { useState, useEffect, useCallback } from "react";
import "./App.css";
import StartScreen from "./components/StartScreen";
import QuestionCard from "./components/QuestionCard";
import ProgressBar from "./components/ProgressBar";
import Results from "./components/Results";
import { questions, TOTAL_QUESTIONS_EXAM, MAX_ERRORS_ALLOWED } from "./data/questions";

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const EXAM_TIME = 30 * 60;

function App() {
  const [screen, setScreen] = useState("start");
  const [mode, setMode] = useState("exam");
  const [examQuestions, setExamQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [errors, setErrors] = useState(0);
  const [timeLeft, setTimeLeft] = useState(EXAM_TIME);
  const [startTime, setStartTime] = useState(null);
  const [finished, setFinished] = useState(false);

  const finishExam = useCallback(() => {
    setFinished(true);
    setScreen("results");
  }, []);

  useEffect(() => {
    if (screen !== "quiz" || finished) return;
    const interval = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(interval);
          finishExam();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [screen, finished, finishExam]);

  function startQuiz() {
    const selected = shuffle(questions).slice(0, TOTAL_QUESTIONS_EXAM);
    setExamQuestions(selected);
    setCurrentIndex(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setErrors(0);
    setTimeLeft(EXAM_TIME);
    setStartTime(Date.now());
    setFinished(false);
    setScreen("quiz");
  }

  function handleAnswer(answerIndex) {
    const q = examQuestions[currentIndex];
    const isCorrect = answerIndex === q.correct;
    const newErrors = isCorrect ? errors : errors + 1;

    setSelectedAnswer(answerIndex);
    setErrors(newErrors);
    setAnswers((prev) => [...prev, { selected: answerIndex, isCorrect }]);

    if (mode === "exam" && newErrors > MAX_ERRORS_ALLOWED) {
      setTimeout(() => finishExam(), 1200);
      return;
    }

    if (currentIndex + 1 >= TOTAL_QUESTIONS_EXAM) {
      setTimeout(() => finishExam(), 1200);
    }
  }

  function handleNext() {
    if (currentIndex + 1 >= TOTAL_QUESTIONS_EXAM) {
      finishExam();
      return;
    }
    setCurrentIndex((i) => i + 1);
    setSelectedAnswer(null);
  }

  const timeUsed = startTime ? Math.round((Date.now() - startTime) / 1000) : 0;

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-inner">
          <span className="header-brand">Teórico DGT</span>
          {screen === "quiz" && (
            <button className="btn-abort" onClick={() => setScreen("start")}>
              Abandonar
            </button>
          )}
        </div>
      </header>

      <main className="app-main">
        {screen === "start" && (
          <StartScreen
            onStart={startQuiz}
            mode={mode}
            onModeChange={setMode}
          />
        )}

        {screen === "quiz" && examQuestions.length > 0 && (
          <div className="quiz-wrapper">
            <ProgressBar
              current={currentIndex + 1}
              total={TOTAL_QUESTIONS_EXAM}
              errors={errors}
              timeLeft={timeLeft}
            />
            <QuestionCard
              question={examQuestions[currentIndex]}
              questionNumber={currentIndex + 1}
              totalQuestions={TOTAL_QUESTIONS_EXAM}
              selectedAnswer={selectedAnswer}
              onAnswer={handleAnswer}
              mode={mode}
            />
            {selectedAnswer !== null && (
              <button className="btn-next" onClick={handleNext}>
                {currentIndex + 1 < TOTAL_QUESTIONS_EXAM
                  ? "Siguiente pregunta →"
                  : "Ver resultados"}
              </button>
            )}
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
          />
        )}
      </main>
    </div>
  );
}

export default App;
