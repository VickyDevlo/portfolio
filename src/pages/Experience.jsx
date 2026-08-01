import { EXPERIENCE } from "../data/content";
import { usePageTitle } from "../hooks/usePageTitle";
import { ExperienceItem } from "../shared/ExperienceItem";
import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";

export const Experience = () => {
  usePageTitle("Experience");
  return (
    <Reveal>
      <section className="py-10">
        <SectionHeading n="04">Experience</SectionHeading>
        <div className="flex flex-col">
          {EXPERIENCE.map((e, i) => (
            <ExperienceItem key={e.org} item={e} first={i === 0} />
          ))}
        </div>
      </section>
    </Reveal>
  );
};
