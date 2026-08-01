import { useState } from "react";

export const ToastItem = ({ toast, onDismiss }) => {
  const [leaving, setLeaving] = useState(false);
 
  const handleDismiss = () => {
    setLeaving(true);
    setTimeout(() => onDismiss(toast.id), 150);
  };
 
  const dotColor =
    toast.type === "success"
      ? "bg-blue"
      : toast.type === "error"
        ? "bg-ember"
        : "bg-mist";
 
  const borderColor =
    toast.type === "success"
      ? "border-blue/40"
      : toast.type === "error"
        ? "border-emberdim/40"
        : "border-mistdim/40";
 
  return (
    <div
      role="status"
      className={`pointer-events-auto flex items-start gap-3 px-5 py-4 rounded-xl border shadow-lg bg-panel ${borderColor}`}
      style={{
        animation: leaving
          ? "toast-out 0.15s ease-in forwards"
          : "toast-in 0.25s ease-out",
      }}
    >
      <span className={`h-2 w-2 rounded-full shrink-0 mt-1.5 ${dotColor}`} />
      <span className="font-body text-sm text-paper flex-1">
        {toast.message}
      </span>
      <button
        onClick={handleDismiss}
        aria-label="Dismiss notification"
        className="text-mist hover:text-paper text-xs shrink-0 mt-0.5"
      >
        ✕
      </button>
      <style>{`
        @keyframes toast-in {
          from { opacity: 0; transform: translateX(16px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes toast-out {
          from { opacity: 1; transform: translateX(0); }
          to { opacity: 0; transform: translateX(16px); }
        }
      `}</style>
    </div>
  );
};