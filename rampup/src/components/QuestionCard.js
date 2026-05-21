function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onAnswer,
  showExplanation,
  mode,
}) {
  const answered = selectedAnswer !== null;
  const isCorrect = selectedAnswer === question.correct;

  function getOptionClass(index) {
    if (!answered) return "option";
    if (index === question.correct) return "option correct";
    if (index === selectedAnswer && !isCorrect) return "option wrong";
    return "option disabled";
  }

  return (
    <div className="question-card">
      <div className="question-header">
        <span className="category-badge">{question.category}</span>
        <span className="question-counter">
          {questionNumber} / {totalQuestions}
        </span>
      </div>

      <p className="question-text">{question.question}</p>

      <div className="options">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={getOptionClass(index)}
            onClick={() => !answered && onAnswer(index)}
            disabled={answered}
          >
            <span className="option-letter">
              {["A", "B", "C", "D"][index]}
            </span>
            <span className="option-text">{option}</span>
            {answered && index === question.correct && (
              <span className="option-icon">✓</span>
            )}
            {answered && index === selectedAnswer && !isCorrect && (
              <span className="option-icon">✗</span>
            )}
          </button>
        ))}
      </div>

      {answered && mode === "practice" && (
        <div className={`explanation ${isCorrect ? "explanation-correct" : "explanation-wrong"}`}>
          <strong>{isCorrect ? "Correcto" : "Incorrecto"}</strong>
          <p>{question.explanation}</p>
        </div>
      )}

      {answered && mode === "exam" && (
        <div className={`answer-feedback ${isCorrect ? "feedback-correct" : "feedback-wrong"}`}>
          {isCorrect ? "Respuesta correcta" : "Respuesta incorrecta"}
        </div>
      )}
    </div>
  );
}

export default QuestionCard;
