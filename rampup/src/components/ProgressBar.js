import Hearts from "./Hearts";

function ProgressBar({ current, total, hearts, maxHearts, prevHearts, timeLeft, mode, onExit }) {
  const progress = Math.round((current / total) * 100);
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const timeWarning = timeLeft <= 120;

  return (
    <div className="progress-bar-wrapper">
      <div className="progress-bar-row">
        <button className="exit-btn" onClick={onExit} aria-label="Salir">
          ✕
        </button>

        <div className="progress-track-outer">
          <div
            className="progress-track-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        <Hearts hearts={hearts} maxHearts={maxHearts} prevHearts={prevHearts} />
      </div>

      {mode === "exam" && (
        <div className="progress-timer-row">
          <span className={`progress-timer ${timeWarning ? "timer-warning" : ""}`}>
            ⏱ {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
          </span>
          <span className="progress-counter">
            {current} / {total}
          </span>
        </div>
      )}
      {mode === "practice" && (
        <div className="progress-timer-row">
          <span className="progress-counter">{current} / {total}</span>
        </div>
      )}
    </div>
  );
}

export default ProgressBar;
