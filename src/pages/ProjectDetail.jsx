import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { PROJECTS } from "../data/content";
import { Reveal } from "../shared/Reveal";
import { usePageTitle } from "../hooks/usePageTitle";

const ACCENT_TEXT = { react: "text-ember", sap: "text-blue" };
const ACCENT_BG = { react: "bg-ember/10", sap: "bg-blue/10" };
const ACCENT_BORDER = { react: "border-emberdim", sap: "border-bluedim" };

export const ProjectDetail = () => {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  usePageTitle(project?.name);

  if (!project) return <Navigate to="/work" replace />;

  const borderClass = ACCENT_BORDER[project.side] || ACCENT_BORDER.sap;
  const textClass = ACCENT_TEXT[project.side] || ACCENT_TEXT.sap;
  const bgClass = ACCENT_BG[project.side] || ACCENT_BG.sap;

  return (
    <div className="relative isolate min-h-screen">
      {/* Full-page blurred background */}
      {project.image && (
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <img
            src={project.image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-top scale-105"
          />
          <div className="absolute inset-0 bg-panel/90" />
        </div>
      )}

      <Reveal>
        <section className="py-10 max-w-6xl mx-auto">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-mist mb-8"
          >
            <ArrowLeft size={14} />
            All work
          </Link>
          <div className="xl:px-8">
            <h1 className="font-display text-2xl sm:text-3xl font-semibold mb-4">
              {project.name}
            </h1>
            <p className="text-mist leading-relaxed mb-6">{project.desc}</p>

            {project?.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border ${borderClass} ${bgClass} ${textClass} font-mono text-xs uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 mb-2`}
              >
                Live Demo
                <ExternalLink size={14} />
              </a>
            )}

            <div className="p-6 mb-2">
              <h2 className="font-mono text-xs uppercase tracking-widest text-mistdim mb-4">
                What went into it
              </h2>

              <ul className="space-y-2.5">
                {project.highlights.map((h, i) => (
                  <li key={i} className="text-sm flex gap-2 text-mist">
                    <span className="text-mistdim">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] px-3 py-1.5 rounded-full border border-mistdim text-mist"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
};
