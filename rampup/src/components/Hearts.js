import { useEffect, useState } from "react";

function Heart({ filled, wasJustLost }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (wasJustLost) {
      setAnimate(true);
      const t = setTimeout(() => setAnimate(false), 600);
      return () => clearTimeout(t);
    }
  }, [wasJustLost]);

  return (
    <span className={`heart ${filled ? "heart-filled" : "heart-empty"} ${animate ? "heart-lost" : ""}`}>
      {filled ? "❤️" : "🖤"}
    </span>
  );
}

function Hearts({ hearts, maxHearts, prevHearts }) {
  return (
    <div className="hearts-container" aria-label={`${hearts} vidas restantes`}>
      {Array.from({ length: maxHearts }, (_, i) => {
        const filled = i < hearts;
        const wasJustLost = prevHearts !== undefined && i === hearts && i < prevHearts;
        return (
          <Heart key={i} filled={filled} wasJustLost={wasJustLost} />
        );
      })}
    </div>
  );
}

export default Hearts;
