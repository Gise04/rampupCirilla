function FeedbackPanel({ isCorrect, explanation, onContinue, visible }) {
  if (!visible) return null;

  const encouragingMessages = [
    "¡Sigue así!",
    "¡Vas genial!",
    "¡Excelente trabajo!",
    "¡Eres una estrella!",
    "¡Imparable!",
  ];

  const wrongMessages = [
    "No te preocupes, sigue intentándolo.",
    "¡Aprende del error y continúa!",
    "Casi lo tenías, ¡ánimo!",
    "La práctica hace al maestro.",
    "¡Tú puedes, sigue adelante!",
  ];

  const randomEncourage = encouragingMessages[Math.floor(Math.random() * encouragingMessages.length)];
  const randomWrong = wrongMessages[Math.floor(Math.random() * wrongMessages.length)];

  return (
    <div className={`feedback-panel ${isCorrect ? "feedback-correct-panel" : "feedback-wrong-panel"}`}>
      <div className="feedback-content">
        <div className="feedback-top">
          <div className="feedback-icon-label">
            <span className="feedback-big-icon">{isCorrect ? "✓" : "✗"}</span>
            <div>
              <p className="feedback-title">
                {isCorrect ? "¡Correcto!" : "Respuesta incorrecta"}
              </p>
              <p className="feedback-subtitle">
                {isCorrect ? randomEncourage : randomWrong}
              </p>
            </div>
          </div>
          {!isCorrect && explanation && (
            <p className="feedback-explanation">{explanation}</p>
          )}
        </div>
        <button className="feedback-continue-btn" onClick={onContinue}>
          CONTINUAR
        </button>
      </div>
    </div>
  );
}

export default FeedbackPanel;
