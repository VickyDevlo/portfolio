export const LineNumbers = ({ count }) => (
  <div
    className="select-none text-right pr-3 font-mono text-[11px] leading-relaxed text-white/20 shrink-0"
    style={{ minWidth: 30 }}
  >
    {Array.from({ length: count }).map((_, i) => (
      <div key={i}>{i + 1}</div>
    ))}
  </div>
);
