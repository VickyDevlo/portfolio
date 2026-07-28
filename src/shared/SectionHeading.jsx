export const SectionHeading = ({ n, children }) => {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="font-mono text-xs tracking-widest uppercase text-mistdim">
        {n}
      </span>
      <span className="h-px flex-1 bg-mist/20" />
      <h2 className="font-mono text-sm tracking-widest uppercase text-mist">
        {children}
      </h2>
    </div>
  );
};
