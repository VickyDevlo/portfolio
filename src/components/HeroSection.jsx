import { useState, useRef, useEffect, useCallback } from "react";
import { Reveal } from "../shared/Reveal";
import { CONTACT } from "../data/content";
import { Link } from "react-router-dom";
import { ArrowRight, FileDown, Check } from "lucide-react";
import { FrameworkComparison } from "../shared/FrameworkComparison";

const CONFIRM_DURATION_MS = 1700;
const RESET_DELAY_MS = 450;

export const HeroSection = () => {
  const [downloading, setDownloading] = useState(false);
  const confirmTimeoutRef = useRef(null);
  const resetTimeoutRef = useRef(null);

  const handleClick = useCallback(() => {
    if (downloading) return;
    setDownloading(true);

    confirmTimeoutRef.current = setTimeout(() => {
      resetTimeoutRef.current = setTimeout(
        () => setDownloading(false),
        RESET_DELAY_MS,
      );
    }, CONFIRM_DURATION_MS);
  }, [downloading]);

  useEffect(() => {
    return () => {
      clearTimeout(confirmTimeoutRef.current);
      clearTimeout(resetTimeoutRef.current);
    };
  }, []);

  return (
    <Reveal>
      <section className="pt-10 pb-14">
        <div className="mb-2 inline-block max-w-full rounded-full bg-gradient-to-r from-ember/40 via-mistdim to-ember/40 p-[1px]">
          <ul className="flex w-fit max-w-full flex-wrap items-center justify-center gap-1 rounded-full bg-panel px-3 py-1.5 font-mono text-[8px] uppercase tracking-wide text-mist sm:gap-x-2 sm:px-3.5 sm:py-2 sm:text-[10px]">
            {CONTACT.designations.map((designation, index) => (
              <li
                key={designation}
                className="flex items-center gap-1.5 whitespace-nowrap tracking-widest sm:gap-2"
              >
                {index > 0 && (
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-ember/50"
                    aria-hidden="true"
                  />
                )}
                {designation}
              </li>
            ))}
          </ul>
        </div>

        <h1 className="font-display font-semibold text-3xl leading-[1.1] sm:text-4xl sm:leading-[1.15] lg:text-[3.5rem] lg:leading-[1.2]">
          Modern on the surface.{" "}
          <span className="text-ember">Enterprise-grade</span> underneath.
        </h1>

        <div className="flex flex-wrap gap-4 sm:gap-3 my-5 sm:my-8">
          <Link
            to="/work"
            className="inline-flex items-center gap-2.5 rounded-lg bg-ember px-3 py-2 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-paper transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-8px_rgba(255,106,57,0.55)]"
          >
            See my work <ArrowRight size={14} />
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg border border-mist px-3 py-2 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-mist hover:text-paper transition-colors duration-300 ease-in-out hover:border-paper"
          >
            Let's Talk
          </Link>

          <a
            href="/pranav_resume.pdf"
            download
            onClick={handleClick}
            aria-label={downloading ? "Resume downloaded" : "Download resume"}
            className="relative inline-flex items-center gap-2 py-2 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-mist hover:text-paper transition-colors duration-300 ease-in-out cursor-pointer overflow-hidden"
          >
            <span className="relative inline-flex h-3.5 w-3.5 items-center justify-center">
              <FileDown
                size={14}
                aria-hidden="true"
                className={`absolute transition-all duration-450 ease-out ${
                  downloading
                    ? "translate-y-2 opacity-0 scale-75"
                    : "translate-y-0 opacity-100 scale-100"
                }`}
              />
              <Check
                size={14}
                aria-hidden="true"
                className={`absolute transition-all duration-450 ease-out ${
                  downloading
                    ? "translate-y-0 opacity-100 scale-100"
                    : "-translate-y-2 opacity-0 scale-75"
                }`}
              />
            </span>

            <span className="relative" aria-live="polite">
              {downloading ? "Downloaded" : "Resume"}
            </span>

            <span
              aria-hidden="true"
              className={`absolute left-0 bottom-0 h-px bg-paper transition-all ease-out ${
                downloading ? "w-full duration-[1300ms]" : "w-0 duration-0"
              }`}
            />
          </a>
        </div>

        <FrameworkComparison />
      </section>
    </Reveal>
  );
};
