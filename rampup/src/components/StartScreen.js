import { questions, TOTAL_QUESTIONS_EXAM } from "../data/questions";

function SteeringWheelMascot() {
  return (
    <svg width="90" height="90" viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg">
      {/* Outer ring */}
      <circle cx="45" cy="45" r="40" fill="#1565C0" />
      <circle cx="45" cy="45" r="40" fill="none" stroke="#0D47A1" strokeWidth="4" />
      {/* Inner ring */}
      <circle cx="45" cy="45" r="16" fill="#0D47A1" />
      {/* Spokes */}
      <line x1="45" y1="5" x2="45" y2="29" stroke="white" strokeWidth="6" strokeLinecap="round" />
      <line x1="45" y1="61" x2="45" y2="85" stroke="white" strokeWidth="6" strokeLinecap="round" />
      <line x1="5" y1="45" x2="29" y2="45" stroke="white" strokeWidth="6" strokeLinecap="round" />
      <line x1="61" y1="45" x2="85" y2="45" stroke="white" strokeWidth="6" strokeLinecap="round" />
      {/* Eyes */}
      <circle cx="38" cy="43" r="4" fill="white" />
      <circle cx="52" cy="43" r="4" fill="white" />
      <circle cx="39" cy="44" r="2" fill="#1565C0" />
      <circle cx="53" cy="44" r="2" fill="#1565C0" />
      {/* Smile */}
      <path d="M36,52 Q45,60 54,52" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function StartScreen({ onStart, mode, onModeChange, streak, totalXP }) {
  return (
    <div className="start-screen">
      <div className="start-mascot">
        <SteeringWheelMascot />
      </div>

      <h1 className="start-title">Teórico DGT</h1>
      <p className="start-subtitle">Aprende como Duolingo, conduce con confianza</p>

      {/* Streak and XP row */}
      <div className="start-stats-row">
        <div className="start-stat-badge streak-badge">
          <span className="stat-badge-icon">🔥</span>
          <div>
            <span className="stat-badge-value">{streak}</span>
            <span className="stat-badge-label">días</span>
          </div>
        </div>
        <div className="start-stat-badge xp-badge">
          <span className="stat-badge-icon">⚡</span>
          <div>
            <span className="stat-badge-value">{totalXP}</span>
            <span className="stat-badge-label">XP total</span>
          </div>
        </div>
      </div>

      {/* Mode cards */}
      <div className="mode-cards">
        <button
          className={`mode-card ${mode === "exam" ? "mode-card-active" : ""}`}
          onClick={() => onModeChange("exam")}
        >
          <span className="mode-card-icon">🎯</span>
          <div className="mode-card-body">
            <span className="mode-card-name">Simulacro</span>
            <span className="mode-card-desc">30 preguntas · Sin ayuda</span>
          </div>
          {mode === "exam" && <span className="mode-card-check">✓</span>}
        </button>

        <button
          className={`mode-card ${mode === "practice" ? "mode-card-active" : ""}`}
          onClick={() => onModeChange("practice")}
        >
          <span className="mode-card-icon">📚</span>
          <div className="mode-card-body">
            <span className="mode-card-name">Práctica</span>
            <span className="mode-card-desc">Ve la explicación en cada pregunta</span>
          </div>
          {mode === "practice" && <span className="mode-card-check">✓</span>}
        </button>
      </div>

      {/* Exam info */}
      <div className="exam-info-row">
        <div className="exam-info-item">
          <span className="exam-info-num">{TOTAL_QUESTIONS_EXAM}</span>
          <span className="exam-info-lbl">preguntas</span>
        </div>
        <div className="exam-info-divider" />
        <div className="exam-info-item">
          <span className="exam-info-num">❤️ 5</span>
          <span className="exam-info-lbl">vidas</span>
        </div>
        <div className="exam-info-divider" />
        <div className="exam-info-item">
          <span className="exam-info-num">30'</span>
          <span className="exam-info-lbl">tiempo</span>
        </div>
      </div>

      <button className="duo-start-btn" onClick={onStart}>
        ¡EMPEZAR!
      </button>

      <p className="bank-note">{questions.length} preguntas en el banco</p>
    </div>
  );
}

export default StartScreen;
