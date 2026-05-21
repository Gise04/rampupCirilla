import QuestionImage from "./QuestionImage";

function QuestionCard({ question, selectedAnswer, onAnswer, showCorrect }) {
  const answered = selectedAnswer !== null;
  const isCorrect = selectedAnswer === question.correct;

  function getOptionClass(index) {
    if (!answered) return "option";
    if (index === question.correct) return "option selected-correct";
    if (index === selectedAnswer && !isCorrect) return "option selected-wrong";
    return "option option-disabled";
  }

  return (
    <div className="question-card">
      <QuestionImage image={question.image} />

      <div className="question-category-badge">{question.category}</div>
      <p className="question-text">{question.question}</p>

      <div className="options">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={getOptionClass(index)}
            onClick={() => !answered && onAnswer(index)}
            disabled={answered}
          >
            <span className={`option-letter ${answered && index === question.correct ? "option-letter-correct" : ""} ${answered && index === selectedAnswer && !isCorrect ? "option-letter-wrong" : ""}`}>
              {["A", "B", "C", "D"][index]}
            </span>
            <span className="option-text">{option}</span>
            {answered && index === question.correct && (
              <span className="option-result-icon correct-icon">✓</span>
            )}
            {answered && index === selectedAnswer && !isCorrect && (
              <span className="option-result-icon wrong-icon">✗</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
