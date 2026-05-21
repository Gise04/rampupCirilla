import { questions, TOTAL_QUESTIONS_EXAM, MAX_ERRORS_ALLOWED } from "../data/questions";

const categories = [...new Set(questions.map((q) => q.category))];

function StartScreen({ onStart, mode, onModeChange }) {
  return (
    <div className="start-screen">
      <div className="dgt-logo">
        <div className="logo-circle">
          <span>DGT</span>
        </div>
      </div>

      <h1>Teórico DGT</h1>
      <p className="subtitle">Practica el examen de conducir a tu ritmo</p>

      <div className="exam-info">
        <div className="info-card">
          <span className="info-number">{TOTAL_QUESTIONS_EXAM}</span>
          <span className="info-label">preguntas</span>
        </div>
        <div className="info-card">
          <span className="info-number">{MAX_ERRORS_ALLOWED}</span>
          <span className="info-label">fallos máx.</span>
        </div>
        <div className="info-card">
          <span className="info-number">30</span>
          <span className="info-label">minutos</span>
        </div>
      </div>

      <div className="mode-selector">
        <p className="mode-title">Modo de práctica</p>
        <div className="mode-buttons">
          <button
            className={`mode-btn ${mode === "exam" ? "active" : ""}`}
            onClick={() => onModeChange("exam")}
          >
            <span className="mode-icon">🎯</span>
            <span className="mode-name">Simulacro de examen</span>
            <span className="mode-desc">30 preguntas al azar · Sin ayuda</span>
          </button>
          <button
            className={`mode-btn ${mode === "practice" ? "active" : ""}`}
            onClick={() => onModeChange("practice")}
          >
            <span className="mode-icon">📚</span>
            <span className="mode-name">Modo práctica</span>
            <span className="mode-desc">Ve la explicación en cada pregunta</span>
          </button>
        </div>
      </div>

      <div className="categories-info">
        <p className="categories-title">Temas incluidos</p>
        <div className="category-tags">
          {categories.map((cat) => (
            <span key={cat} className="category-tag">
              {cat}
            </span>
          ))}
        </div>
      </div>

      <button className="start-btn" onClick={onStart}>
        Comenzar {mode === "exam" ? "simulacro" : "práctica"}
      </button>

      <p className="total-questions-note">
        Banco de {questions.length} preguntas disponibles
      </p>
    </div>
  );
}

export default StartScreen;
