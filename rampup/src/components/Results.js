import { MAX_ERRORS_ALLOWED, TOTAL_QUESTIONS_EXAM } from "../data/questions";

function Results({ answers, questions, onRetry, onHome, timeUsed, mode }) {
  const correct = answers.filter((a) => a.isCorrect).length;
  const errors = answers.filter((a) => !a.isCorrect).length;
  const passed = errors <= MAX_ERRORS_ALLOWED;
  const minutes = Math.floor(timeUsed / 60);
  const seconds = timeUsed % 60;
  const score = Math.round((correct / TOTAL_QUESTIONS_EXAM) * 10);

  const wrongAnswers = answers
    .map((a, i) => ({ ...a, question: questions[i] }))
    .filter((a) => !a.isCorrect);

  return (
    <div className="results-screen">
      <div className={`result-badge ${passed ? "passed" : "failed"}`}>
        <span className="result-icon">{passed ? "✓" : "✗"}</span>
        <span className="result-label">{passed ? "APROBADO" : "SUSPENSO"}</span>
      </div>

      <div className="score-display">
        <span className="score-number">{score}</span>
        <span className="score-max">/10</span>
      </div>

      <div className="results-stats">
        <div className="stat-item stat-correct">
          <span className="stat-value">{correct}</span>
          <span className="stat-label">Correctas</span>
        </div>
        <div className="stat-item stat-wrong">
          <span className="stat-value">{errors}</span>
          <span className="stat-label">Incorrectas</span>
        </div>
        <div className="stat-item stat-time">
          <span className="stat-value">
            {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
          </span>
          <span className="stat-label">Tiempo</span>
        </div>
      </div>

      {!passed && (
        <p className="result-message">
          Necesitas un máximo de {MAX_ERRORS_ALLOWED} fallos para aprobar. Sigue practicando.
        </p>
      )}
      {passed && (
        <p className="result-message success-message">
          Enhorabuena, has superado el simulacro. ¡Estás listo para el examen!
        </p>
      )}

      {wrongAnswers.length > 0 && (
        <div className="wrong-answers-section">
          <h3>Preguntas falladas</h3>
          {wrongAnswers.map((item, idx) => (
            <div key={idx} className="wrong-item">
              <p className="wrong-question">{item.question.question}</p>
              <p className="wrong-your-answer">
                <span className="wrong-label">Tu respuesta:</span>{" "}
                {item.question.options[item.selected]}
              </p>
              <p className="wrong-correct-answer">
                <span className="correct-label">Respuesta correcta:</span>{" "}
                {item.question.options[item.question.correct]}
              </p>
              <p className="wrong-explanation">{item.question.explanation}</p>
            </div>
          ))}
        </div>
      )}

      <div className="results-actions">
        <button className="btn-primary" onClick={onRetry}>
          Repetir {mode === "exam" ? "simulacro" : "práctica"}
        </button>
        <button className="btn-secondary" onClick={onHome}>
          Volver al inicio
        </button>
      </div>
    </div>
  );
}

export default Results;
