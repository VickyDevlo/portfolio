import { useState, useEffect, useCallback, useRef } from "react";
import { REACT_CODE, UI5_CODE } from "../data/content";
import { RacePane } from "./RacePane";

export const FrameworkComparison = () => {
  const [doneMap, setDoneMap] = useState({ react: false, ui5: false });
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const handler = (e) => setReduceMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const handleFinish = useCallback((side) => {
    setDoneMap((d) => ({ ...d, [side]: true }));
  }, []);

  const handleReactFinish = useCallback(
    () => handleFinish("react"),
    [handleFinish],
  );
  const handleUi5Finish = useCallback(
    () => handleFinish("ui5"),
    [handleFinish],
  );

  return (
    <div className="w-full">
      <style>{`
        .tok-keyword { color: #ff7b72; }
        .tok-string  { color: #a5d6ff; }
        .tok-tag     { color: #7ee787; }
        .tok-attr    { color: #79c0ff; }
        .tok-literal { color: #ffa657; }
        .tok-comment { color: #6b7280; font-style: italic; }
        .tok-brace   { color: #d2a8ff; }
      `}</style>

      <div className="text-center mb-6 sm:mb-8">
        <div className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-white/40 mb-2 sm:mb-3">
          A Practical Comparison
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight px-2">
          Same interface. Different foundations.
        </h1>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        style={{ minHeight: 340 }}
      >
        <RacePane
          fileName="Button.jsx"
          dotColor="#61dafb"
          lang="js"
          fullCode={REACT_CODE}
          active
          onFinish={handleReactFinish}
          isDone={doneMap.react}
          reduceMotion={reduceMotion}
        />
        <RacePane
          fileName="Button.view.xml"
          dotColor="#5c9de8"
          lang="xml"
          fullCode={UI5_CODE}
          active
          onFinish={handleUi5Finish}
          isDone={doneMap.ui5}
          reduceMotion={reduceMotion}
        />
      </div>
    </div>
  );
};
