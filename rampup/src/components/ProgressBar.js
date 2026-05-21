import { MAX_ERRORS_ALLOWED } from "../data/questions";

function ProgressBar({ current, total, errors, timeLeft }) {
  const progress = Math.round((current / total) * 100);
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const timeWarning = timeLeft <= 120;

  return (
    <div className="progress-bar-container">
      <div className="progress-stats">
        <span className="progress-label">
          Pregunta {current} de {total}
        </span>
        <div className="stats-right">
          <span className={`errors-count ${errors >= MAX_ERRORS_ALLOWED ? "errors-limit" : ""}`}>
            Fallos: {errors}/{MAX_ERRORS_ALLOWED}
          </span>
          <span className={`timer ${timeWarning ? "timer-warning" : ""}`}>
            {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
          </span>
        </div>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}

export default ProgressBar;
