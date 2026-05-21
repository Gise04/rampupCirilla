import QuestionImage from "./QuestionImage";

function ConfettiPiece({ x, color, delay, duration }) {
  return (
    <div
      className="confetti-piece"
      style={{
        left: `${x}%`,
        backgroundColor: color,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    />
  );
}

function Confetti() {
  const colors = ["#58CC02", "#FFD900", "#FF4B4B", "#1CB0F6", "#FF9600", "#CE82FF"];
  const pieces = Array.from({ length: 24 }, (_, i) => ({
    x: (i * 4.2) % 100,
    color: colors[i % colors.length],
    delay: (i * 0.12) % 2,
    duration: 2 + (i % 3) * 0.5,
  }));
  return (
    <div className="confetti-container" aria-hidden="true">
      {pieces.map((p, i) => (
        <ConfettiPiece key={i} {...p} />
      ))}
    </div>
  );
}

function MascotHappy() {
  return (
    <svg width="90" height="90" viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg">
      <circle cx="45" cy="45" r="40" fill="#58CC02" />
      <circle cx="45" cy="45" r="40" fill="none" stroke="#46A302" strokeWidth="4" />
      <circle cx="32" cy="38" r="6" fill="white" />
      <circle cx="58" cy="38" r="6" fill="white" />
      <circle cx="33" cy="39" r="3" fill="#1a1a1a" />
      <circle cx="59" cy="39" r="3" fill="#1a1a1a" />
      <path d="M28,55 Q45,70 62,55" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" />
      <circle cx="28" cy="55" r="3" fill="white" />
      <circle cx="62" cy="55" r="3" fill="white" />
    </svg>
  );
}

function MascotSad() {
  return (
    <svg width="90" height="90" viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg">
      <circle cx="45" cy="45" r="40" fill="#FF9600" />
      <circle cx="45" cy="45" r="40" fill="none" stroke="#CC7A00" strokeWidth="4" />
      <circle cx="32" cy="38" r="6" fill="white" />
      <circle cx="58" cy="38" r="6" fill="white" />
      <circle cx="33" cy="40" r="3" fill="#1a1a1a" />
      <circle cx="59" cy="40" r="3" fill="#1a1a1a" />
      {/* Eyebrows sad */}
      <line x1="27" y1="30" x2="37" y2="34" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <line x1="53" y1="34" x2="63" y2="30" stroke="white" strokeWidth="3" strokeLinecap="round" />
      {/* Frown */}
      <path d="M30,62 Q45,52 60,62" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

function Results({ answers, questions, onRetry, onHome, timeUsed, mode, sessionXP }) {
  const correct = answers.filter((a) => a.isCorrect).length;
  const errors = answers.filter((a) => !a.isCorrect).length;
  const passed = errors <= 3;
  const minutes = Math.floor(timeUsed / 60);
  const seconds = timeUsed % 60;
  const accuracy = answers.length > 0 ? Math.round((correct / answers.length) * 100) : 0;

  const wrongAnswers = answers
    .map((a, i) => ({ ...a, question: questions[i] }))
    .filter((a) => !a.isCorrect);

  return (
    <div className="results-screen">
      {passed && <Confetti />}

      <div className="results-mascot">
        {passed ? <MascotHappy /> : <MascotSad />}
      </div>

      <h2 className={`results-verdict ${passed ? "verdict-pass" : "verdict-fail"}`}>
        {passed ? "¡APROBADO!" : "¡SIGUE PRACTICANDO!"}
      </h2>

      <p className="results-message">
        {passed
          ? "Enhorabuena, has superado el simulacro. ¡Estás listo para el examen!"
          : `Cometiste ${errors} errores. Necesitas 3 o menos para aprobar.`}
      </p>

      {/* Stats cards */}
      <div className="results-stats-row">
        <div className="result-stat-card xp-card">
          <span className="result-stat-icon">⚡</span>
          <span className="result-stat-value">{sessionXP}</span>
          <span className="result-stat-label">XP ganado</span>
        </div>
        <div className="result-stat-card acc-card">
          <span className="result-stat-icon">🎯</span>
          <span className="result-stat-value">{accuracy}%</span>
          <span className="result-stat-label">Precisión</span>
        </div>
        <div className="result-stat-card time-card">
          <span className="result-stat-icon">⏱</span>
          <span className="result-stat-value">
            {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
          </span>
          <span className="result-stat-label">Tiempo</span>
        </div>
      </div>

      {wrongAnswers.length > 0 && (
        <div className="wrong-section">
          <h3 className="wrong-section-title">Preguntas falladas</h3>
          {wrongAnswers.map((item, idx) => (
            <div key={idx} className="wrong-item">
              <div className="wrong-item-header">
                <div className="wrong-item-thumb">
                  <QuestionImage image={item.question.image} />
                </div>
                <p className="wrong-item-question">{item.question.question}</p>
              </div>
              <p className="wrong-your">
                <span className="wrong-your-label">Tu respuesta: </span>
                {item.question.options[item.selected]}
              </p>
              <p className="wrong-correct">
                <span className="wrong-correct-label">Correcta: </span>
                {item.question.options[item.question.correct]}
              </p>
              <p className="wrong-expl">{item.question.explanation}</p>
            </div>
          ))}
        </div>
      )}

      <div className="results-actions">
        <button className="duo-retry-btn" onClick={onRetry}>
          ¡REPETIR!
        </button>
        <button className="duo-home-btn" onClick={onHome}>
          INICIO
        </button>
      </div>
    </div>
  );
}

export default Results;
