import { useCallback, useEffect, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";

export const CompareSlider = ({ initial = 50, height = 320 }) => {
  const [pos, setPos] = useState(initial);
  const dragging = useRef(false);
  const trackRef = useRef(null);

  const setFromClientX = useCallback((clientX) => {
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(88, Math.max(12, pct)));
  }, []);

  useEffect(() => {
    const move = (e) => {
      if (!dragging.current) return;
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      setFromClientX(x);
    };
    const up = () => {
      dragging.current = false;
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    window.addEventListener("touchmove", move);
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("touchend", up);
    };
  }, [setFromClientX]);

  const onDown = (e) => {
    dragging.current = true;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    setFromClientX(x);
  };

  return (
    <div
      ref={trackRef}
      className="relative w-full rounded-2xl overflow-hidden select-none bg-panel"
      style={{ height, touchAction: "none" }}
    >
      {/* React side */}
      <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <div
          className="relative w-full h-full"
          style={{ background: "linear-gradient(135deg, #161D2E, #201229)" }}
        >
          <div
            className="absolute rounded-full bg-ember opacity-20"
            style={{ width: 180, height: 180, top: -40, left: -30 }}
          />
          <div
            className="absolute rounded-full border-2 border-ember opacity-40"
            style={{ width: 120, height: 120, bottom: 20, left: 60 }}
          />
          <div
            className="absolute rounded-full bg-ember opacity-30"
            style={{ width: 60, height: 60, bottom: -10, right: 40 }}
          />
          <div className="absolute bottom-6 left-6 font-mono text-xs uppercase tracking-widest text-ember">
            React — fluid, composable
          </div>
        </div>
      </div>

      {/* SAP UI5 side */}
      <div className="absolute inset-y-0 right-0 overflow-hidden" style={{ width: `${100 - pos}%` }}>
        <div
          className="relative w-full h-full bg-ink"
          style={{
            backgroundImage:
              "linear-gradient(#1C3E8C 1px, transparent 1px), linear-gradient(90deg, #1C3E8C 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        >
          <div className="absolute inset-4 grid grid-cols-3 gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="border border-bluedim bg-blue/5" />
            ))}
          </div>
          <div className="absolute bottom-6 right-6 font-mono text-xs uppercase tracking-widest text-blue">
            SAP UI5 — structured, governed
          </div>
        </div>
      </div>

      {/* Handle */}
      <div
        onPointerDown={onDown}
        onTouchStart={onDown}
        className="absolute inset-y-0 flex items-center justify-center cursor-col-resize"
        role="slider"
        aria-label="Drag to compare React and SAP UI5 design languages"
        aria-valuenow={Math.round(pos)}
        aria-valuemin={12}
        aria-valuemax={88}
        tabIndex={0}
        style={{ left: `calc(${pos}% - 18px)`, width: 36 }}
      >
        <div className="w-9 h-9 rounded-full flex items-center justify-center bg-paper shadow-lg">
          <MoveHorizontal size={16} className="text-ink" />
        </div>
        <div className="absolute inset-y-0 bg-paper opacity-50" style={{ left: 17, width: 2 }} />
      </div>
    </div>
  );
}
