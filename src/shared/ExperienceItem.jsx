export const ExperienceItem = ({ item, first = false }) => {
  return (
    <div
      className={`grid sm:grid-cols-[160px_1fr] gap-2 sm:gap-6 py-6 ${
        first ? "" : "border-t border-mist/15"
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
        <ul className="space-y-1.5">
          {item.bullets.map((b, i) => (
            <li key={i} className="text-sm flex gap-2 text-mist">
              <span className="text-mistdim">—</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
