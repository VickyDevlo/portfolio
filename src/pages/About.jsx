import { EDUCATION } from "../data/content";
import { usePageTitle } from "../hooks/usePageTitle";
import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";

export const About = () => {
  usePageTitle("About");
  return (
    <Reveal>
      <section className="py-10">
        <SectionHeading n="01">About</SectionHeading>
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <p className="leading-relaxed text-mist">
            I'm a frontend developer with 3+ years of experience building
            responsive, scalable web applications using React, JavaScript,
            HTML5, CSS3, and Tailwind CSS. I've since expanded into SAP UI5,
            developing enterprise-grade applications that follow SAP Fiori
            design principles.
          </p>
          <p className="leading-relaxed text-mist">
            I'm comfortable in both fast-moving Agile product environments and
            structured enterprise workflows — and I care about clean code,
            performance, and delivering interfaces that feel intuitive on both
            sides.
          </p>
        </div>

        <div className="card p-6 rounded-xl border border-mist/20 bg-panel inline-block">
          <span className="font-mono text-[11px] uppercase tracking-widest mb-3 block text-mistdim">
            Education
          </span>
          <h3 className="font-display text-lg font-semibold mb-1">
            {EDUCATION.degree}
          </h3>
          <p className="text-sm text-mist">
            {EDUCATION.college}, {EDUCATION.university} — {EDUCATION.period}
          </p>
        </div>
      </section>
    </Reveal>
  );
};
