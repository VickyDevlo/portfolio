import { PROJECTS } from "../data/content";
import { usePageTitle } from "../hooks/usePageTitle";
import { ProjectCard } from "../shared/ProjectCard.jsx";
import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";

export const Work = () => {
  usePageTitle("Work");
  return (
    <Reveal>
      <section className="py-10">
        <SectionHeading n="02">Selected work</SectionHeading>
        <p className="text-sm text-center sm:text-start text-mist mb-6">
          Things I've built, and the thinking behind them.
        </p>
        <div className="grid sm:grid-cols-2 gap-5">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </Reveal>
  );
};
