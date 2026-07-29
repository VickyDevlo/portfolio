import { useState, useEffect, useRef } from "react";

export const useTypeWriter = (fullText, { active, onFinish }) => {
  const [visible, setVisible] = useState("");
  const startRef = useRef(null);
  const finishedRef = useRef(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!active) return;
    finishedRef.current = false;
    startRef.current = performance.now();
    let idx = 0;

    const tick = () => {
      idx = Math.min(idx + 1, fullText.length);
      setVisible(fullText.slice(0, idx));

      if (idx >= fullText.length) {
        if (!finishedRef.current) {
          finishedRef.current = true;
          onFinish(performance.now() - startRef.current);
        }
        return;
      }

      const justBroke = fullText[idx - 1] === "\n";
      const delay = justBroke
        ? 220 + Math.random() * 260
        : 40 + Math.random() * 55;
      timeoutRef.current = setTimeout(tick, delay);
    };

    timeoutRef.current = setTimeout(tick, 200);
    return () => clearTimeout(timeoutRef.current);
  }, [active, fullText, onFinish]);

  return visible;
};
