import { Reveal } from '../shared/Reveal'
import { CONTACT } from '../data/content'
import { Link } from 'react-router-dom'
import { ArrowRight, FileDown } from 'lucide-react'
import { FrameworkComparison } from '../shared/FrameworkComparison'

export const HeroSection = () => {
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
            into SAP UI5 and Fiori for enterprise-grade delivery. Drag the
            divider below to see both sides of how i build.
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
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest px-5 py-3 rounded-full border border-mistdim
            text-paper"
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
      </Reveal>
  )
}
