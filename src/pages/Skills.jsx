import { SKILL_GROUPS } from "../data/content";
import { usePageTitle } from "../hooks/usePageTitle";
import { Chip } from "../shared/Chip";
import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";

export const Skills = () => {
  usePageTitle("Skills");
  return (
    <Reveal>
      <section className="py-14">
        <SectionHeading n="03">Skills</SectionHeading>
        <div className="grid md:grid-cols-3 gap-8">
          {SKILL_GROUPS.map((g) => (
            <div key={g.label}>
              <p
                className={`font-mono text-xs uppercase tracking-widest mb-4 ${
                  g.color === "ember"
                    ? "text-ember"
                    : g.color === "blue"
                      ? "text-blue"
                      : "text-mist"
                }`}
              >
                {g.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <Chip key={s} color={g.color}>
                    {s}
                  </Chip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
};
