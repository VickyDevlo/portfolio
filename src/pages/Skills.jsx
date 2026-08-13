import { SKILL_GROUPS } from "../data/content";
import { usePageTitle } from "../hooks/usePageTitle";
import { Chip } from "../shared/Chip";
import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import { getColorClasses } from "../utils/colorUtils";

export const Skills = () => {
  usePageTitle("Skills");
  return (
    <Reveal>
      <section className="py-10">
        <SectionHeading n="03">Skills</SectionHeading>
        <div className="mt-2">
          {SKILL_GROUPS.map((group, index) => {
            const colors = getColorClasses(group.color);
            const isFirst = index === 0;
            const isLast = index === SKILL_GROUPS.length - 1;

            return (
              <div
                key={group.label}
                className={`group grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8 md:gap-12 ${isFirst
                    ? "pb-6 border-b border-white/10"
                    : !isLast
                      ? "py-6 border-b border-white/10"
                      : "pt-6"
                  }`}
              >
                {/* Category */}
                <div>
                  <div className="flex items-center gap-1">
                    <span className={`h-1 w-1 rounded-full ${colors.bg}`} />
                    <span
                      className={`font-mono text-xs uppercase tracking-[0.16em] ${colors.text}`}
                    >
                      {group.label}
                    </span>
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap content-start gap-2">
                  {group.items.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <div key={skill.name}>
                        <Chip color={group.color}>
                          <Icon size={14} strokeWidth={1.8} />
                          <span>{skill.name}</span>
                        </Chip>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Reveal>
  );
};
