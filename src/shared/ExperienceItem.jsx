export const ExperienceItem = ({ item, first = false, last = false }) => {
  return (
    <div
      className={`grid sm:grid-cols-[160px_1fr] gap-2 sm:gap-6 ${
        first
          ? "pb-6 border-b border-mist/15"
          : last
            ? "pt-6"
            : "py-6 border-b border-mist/15"
      }`}
    >
      <div>
        <span className="font-mono text-xs block text-mistdim">
          {item.period}
        </span>

        <span className="font-mono text-xs block mt-1 text-mistdim">
          {item.location}
        </span>
      </div>

      <div>
        <h3 className="font-display font-semibold text-base mb-1">
          {item.role}
        </h3>

        <p className="text-sm mb-3 text-blue">{item.org}</p>

        <ul className="space-y-2">
          {item.bullets.map((bullet, i) => (
            <li key={i} className="text-sm flex gap-2 text-mist">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-mistdim" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
