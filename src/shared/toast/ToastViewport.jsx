import { ToastItem } from "./ToastItem";

export const ToastViewport = ({ toasts, onDismiss }) => {
  if (toasts.length === 0) return null;
 
  return (
    <div
      className="fixed top-6 right-6 z-[100] flex flex-col gap-3 w-full max-w-sm pointer-events-none"
      aria-live="polite"
      aria-atomic="true"
    >
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onDismiss={onDismiss} />
      ))}
    </div>
  );
};