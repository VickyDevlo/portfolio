import { Link } from "react-router-dom";
import { ArrowRight, FileDown, User, Layers, Briefcase } from "lucide-react";
import { usePageTitle } from "../hooks/usePageTitle";
import { CONTACT, EXPLORE_LINKS, HIGHLIGHTS, PROJECTS } from "../data/content";
import { FrameworkComparison } from "../shared/FrameworkComparison";
import { Reveal } from "../shared/Reveal";
import { ProjectCard } from "../shared/ProjectCard";

export const Home = () => {
  usePageTitle("React & SAP UI5 Developer");
  const featuredProjects = PROJECTS.slice(0, 2);

  return (
    <div>
      {/* HERO */}
      <section className="pt-10 pb-14">
        <p className="font-mono text-xs uppercase tracking-widest mb-4 text-mistdim">
          {CONTACT.title}
        </p>
        <h1
          className="font-display font-semibold leading-tight mb-6"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          I build interfaces that feel modern on the outside{" "}
          <span className="text-ember">and run enterprise-grade</span>{" "}
          underneath.
        </h1>
        <p className="max-w-xl mb-8 text-mist">
          3+ years building responsive React applications, now extending that
          into SAP UI5 and Fiori for enterprise-grade delivery. Drag the divider
          below to see both sides of how I build.
        </p>

        <div className="flex flex-wrap gap-3 mb-10">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest px-5 py-3 rounded-full bg-paper text-ink"
          >
            See my work <ArrowRight size={14} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest px-5 py-3 rounded-full border border-mistdim text-paper"
          >
            Get in touch
          </Link>
          <a
            href="/pranav_resume.pdf"
            download
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest px-5 py-3 rounded-full border border-mistdim text-paper"
          >
            <FileDown size={14} /> Resume
          </a>
        </div>

        <FrameworkComparison />
      </section>

      {/* HIGHLIGHTS STRIP */}
      <Reveal>
        <section className="py-10 border-t border-mist/15">
          <div className="grid sm:grid-cols-3 gap-6">
            {HIGHLIGHTS.map((h) => (
              <div key={h.label}>
                <div className="font-display text-3xl font-semibold text-blue mb-1">
                  {h.value}
                </div>
                <div className="text-sm text-mist">{h.label}</div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* FEATURED WORK TEASER */}
      <Reveal>
        <section className="py-14 border-t border-mist/15">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-xl font-semibold">
              Featured work
            </h2>
            <Link
              to="/work"
              className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-blue"
            >
              View all <ArrowRight size={13} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {featuredProjects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </section>
      </Reveal>

      {/* EXPLORE MORE */}
      <Reveal>
        <section className="py-14 border-t border-mist/15">
          <h2 className="font-mono text-xs uppercase tracking-widest text-mistdim mb-2">
            Explore more
          </h2>
          <div className="flex flex-col">
            {EXPLORE_LINKS.map((l, i) => {
              const Icon = l.icon;
              const accentText =
                l.accent === "ember" ? "text-ember" : "text-blue";
              const accentBg =
                l.accent === "ember" ? "bg-ember/10" : "bg-blue/10";
              const accentBorder =
                l.accent === "ember" ? "border-emberdim" : "border-bluedim";
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`group flex items-center justify-between gap-6 py-6 ${
                    i === 0 ? "" : "border-t border-mist/15"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`p-2.5 rounded-full border ${accentBorder} ${accentBg} shrink-0`}
                    >
                      <Icon size={18} className={accentText} />
                    </span>
                    <div>
                      <h3 className="font-display font-semibold text-lg mb-1 group-hover:text-blue transition-colors">
                        {l.title}
                      </h3>
                      <p className="text-sm text-mist">{l.desc}</p>
                    </div>
                  </div>
                  <ArrowRight
                    size={18}
                    className="text-mistdim shrink-0 transition-transform group-hover:translate-x-1 group-hover:text-blue"
                  />
                </Link>
              );
            })}
          </div>
        </section>
      </Reveal>
    </div>
  );
};
