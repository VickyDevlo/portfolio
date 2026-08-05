import { useState, useRef } from "react";
import { Reveal } from "../shared/Reveal";
import { CONTACT } from "../data/content";
import { Link } from "react-router-dom";
import { ArrowRight, FileDown, Check } from "lucide-react";
import { FrameworkComparison } from "../shared/FrameworkComparison";

export const HeroSection = () => {
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(false);
  const timeoutRef = useRef(null);

  const handleClick = () => {
    if (downloading) return;
    setDownloading(true);
    setProgress(true);

    timeoutRef.current = setTimeout(() => {
      setProgress(false);
      setTimeout(() => setDownloading(false), 450);
    }, 1700);
  };

  return (
    <Reveal>
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
          below to see both sides of how i build.
        </p>

        <div className="flex flex-wrap max-sm:gap-4 gap-3 mb-10">
          <Link
            to="/work"
            className="inline-flex items-center gap-2.5 rounded-lg bg-ember
             px-3 py-2 font-mono text-xs uppercase tracking-widest text-paper transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-8px_rgba(255,106,57,0.55)]"
          >
            See my work <ArrowRight size={14} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg border border-mist px-3 py-2 font-mono text-xs uppercase tracking-widest text-mist hover:text-paper transition-colors duration-300 ease-in-out hover:border-paper"
          >
            Let's Talk
          </Link>
          <a
            href="/pranav_resume.pdf"
            download
            onClick={handleClick}
            className="relative inline-flex items-center gap-2 py-2 font-mono text-xs uppercase tracking-widest text-mist hover:text-paper transition-colors duration-300 ease-in-out cursor-pointer overflow-hidden"
          >
            <span className="relative inline-flex h-3.5 w-3.5 items-center justify-center">
              <FileDown
                size={14}
                className={`absolute transition-all duration-450 ease-out ${
                  downloading
                    ? "translate-y-2 opacity-0 scale-75"
                    : "translate-y-0 opacity-100 scale-100"
                }`}
              />
              <Check
                size={14}
                className={`absolute transition-all duration-450 ease-out ${
                  downloading
                    ? "translate-y-0 opacity-100 scale-100"
                    : "-translate-y-2 opacity-0 scale-75"
                }`}
              />
            </span>

            <span className="relative">
              {downloading ? "Downloaded" : "Resume"}
            </span>

            <span
              className={`absolute left-0 bottom-0 h-px bg-paper transition-all ease-out ${
                progress ? "w-full duration-[1300ms]" : "w-0 duration-0"
              }`}
            />
          </a>
        </div>
        <FrameworkComparison />
      </section>
    </Reveal>
  );
};
