import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const ACCENTS = {
  react: { text: "text-ember", bg: "bg-ember/10", border: "border-emberdim" },
  sap: { text: "text-blue", bg: "bg-blue/10", border: "border-bluedim" },
};

export const ProjectCard = ({ project }) => {
  const accent = ACCENTS[project.side] || ACCENTS.sap;

  return (
    <Link
      to={`/work/${project.slug}`}
      className={`card p-6 rounded-xl border ${accent.border} bg-panel flex flex-col justify-between`}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span
            className={`font-mono text-[11px] uppercase tracking-widest px-2 py-1 rounded ${accent.text} ${accent.bg}`}
          >
            {project.tag}
          </span>
          <ArrowUpRight size={16} className="text-mistdim" />
        </div>
        <h3 className="font-display text-lg font-semibold mb-2">
          {project.name}
        </h3>
        <p className="text-sm mb-4 text-mist">{project.desc}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {project.stack.map((t, i) => (
          <span key={t} className="font-mono text-[11px] text-mistdim">
            {t}
            {i !== project.stack.length - 1 ? " •" : ""}
          </span>
        ))}
      </div>
    </Link>
  );
};
