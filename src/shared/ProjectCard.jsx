import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ACCENTS } from "../data/content";

export const ProjectCard = ({ project }) => {
  const accent = ACCENTS[project.side] || ACCENTS.sap;

  return (
    <Link
      to={`/work/${project.slug}`}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border ${accent.border} ${accent.hoverBorder} bg-panel p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 focus-visible:outline-none focus-visible:ring-2 ${accent.ring}`}
    >
      {/* Accent line across the top */}
      <span
        className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${accent.bar}`}
      />

      {/* Soft glow that fades in on hover */}
      <span
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent.glow} to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
      />

      <div className="relative">
        <div className="mb-4 flex items-center justify-between">
          <span
            className={`inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-widest ${accent.text} ${accent.bg}`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${accent.dot}`} />
            {project.tag}
          </span>

          <span
            className={`grid h-8 w-8 place-items-center rounded-full border ${accent.border} text-mistdim transition-colors duration-300 ${accent.arrow}`}
          >
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </span>
        </div>

        <h3 className="mb-2 font-display text-xl font-semibold leading-snug">
          {project.name}
        </h3>
        <p className="line-clamp-3 text-sm leading-relaxed text-mist">
          {project.desc}
        </p>
      </div>

      {/* mt-auto pins this to the bottom; pt-6 keeps a minimum gap */}
      <div className="relative mt-auto pt-6">
        <div
          className={`flex items-center justify-between border-t ${accent.border} pt-4 text-sm`}
        >
          <span
            className={`font-medium text-mist transition-colors duration-300 ${accent.arrow}`}
          >
            View case study
          </span>
          <ArrowUpRight
            size={14}
            className={`text-mistdim transition-all duration-300 group-hover:translate-x-1 ${accent.arrow}`}
          />
        </div>
      </div>
    </Link>
  );
};