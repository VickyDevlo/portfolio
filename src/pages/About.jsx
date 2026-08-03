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
        <div className="mb-10 sm:mb-12">
          <p className="leading-7 sm:leading-8 indent-3 sm:indent-8 text-mist">
            I’m a{" "}
            <span className="text-paper font-medium">
              Frontend Developer
            </span>{" "}
            with{" "}
            <span className="text-paper font-medium">
              {" "}
              3+ years of professional experience
            </span>{" "}
            building responsive, scalable, and user-friendly web applications.
            My work focuses on creating interfaces that are fast, accessible,
            and easy to maintain.{" "}
          </p>{" "}
          <p className="leading-7 sm:leading-8 indent-3 sm:indent-8 text-mist">
            {" "}
            I specialize in{" "}
            <span className="text-paper font-medium">
              React JS, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Redux
              Toolkit, Context API, and REST API integration
            </span>
            . I also work with modern development tools such as{" "}
            <span className="text-paper font-medium">
              Git, Vite, and Webpack
            </span>
            .{" "}
          </p>{" "}
          <p className="leading-7 sm:leading-8 indent-3 sm:indent-8 text-mist">
            {" "}
            In addition, I have hands-on experience with{" "}
            <span className="text-paper font-medium">SAP UI5 / Fiori</span>{" "}
            development, building enterprise applications using{" "}
            <span className="text-paper font-medium">
              MVC architecture, JSONModel, OData services, data binding, and
              reusable UI components
            </span>
            .{" "}
          </p>{" "}
          <p className="leading-7 sm:leading-8 indent-3 sm:indent-8 text-mist">
            {" "}
            I enjoy collaborating in both{" "}
            <span className="text-paper font-medium">
              Agile product teams and enterprise environments
            </span>
            , where I can contribute through clean code, performance
            optimization, and thoughtful user experience design.{" "}
          </p>
        </div>

        <div className="card p-6 rounded-xl border border-mist/20 bg-panel inline-block">
          <p className="flex  items-center justify-between font-mono text-[11px] uppercase tracking-widest mb-3 text-mistdim">
            Education 
            <span className="text-sm text-mist">{EDUCATION.period}</span>
          </p>
          <h3 className="font-display text-lg font-semibold mb-1">
            {EDUCATION.degree}
          </h3>
          <p className="text-sm text-mist">
            {EDUCATION.college}, {EDUCATION.university} 
          </p>
        </div>
      </section>
    </Reveal>
  );
};
