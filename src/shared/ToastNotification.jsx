import { useEffect } from "react";

export const ToastNotification = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const isSuccess = type === "success";

  return (
    <div
      role="status"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-xl border shadow-lg font-body text-sm ${isSuccess
          ? "bg-panel border-blue/40 text-paper"
          : "bg-panel border-emberdim/40 text-paper"
        }`}
      style={{ animation: "toast-in 0.25s ease-out" }}
    >
      <span
        className={`h-2 w-2 rounded-full shrink-0 ${isSuccess ? "bg-blue" : "bg-ember"
          }`}
      />
      <span>{message}</span>
      <button
        onClick={onClose}
        aria-label="Dismiss"
        className="text-mist hover:text-paper ml-2 text-xs"
      >
        ✕
      </button>
      <style>{`
        @keyframes toast-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};
