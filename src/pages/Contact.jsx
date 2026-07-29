import { useState } from "react";
import { Linkedin, Mail, Phone, Check, Copy, FileDown } from "lucide-react";
import { usePageTitle } from "../hooks/usePageTitle";
import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import { CONTACT } from "../data/content";

export const Contact = () => {
  usePageTitle("Contact");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (e) {
      setCopied(false);
    }
  };

  return (
    <Reveal>
      <section className="py-16">
        <SectionHeading n="05">Contact</SectionHeading>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
          <div>
            <h2
              className="font-display font-semibold mb-4"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              Building something that needs
              <br />
              both worlds? <span className="text-ember">Let's talk.</span>
            </h2>
            <div className="flex items-center gap-3 mb-2">
              <a href={`mailto:${CONTACT.email}`} className="text-sm text-mist">
                {CONTACT.email}
              </a>
              <button
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                className="icon-btn p-1.5 rounded-md border border-mistdim"
              >
                {copied ? (
                  <Check size={13} className="text-blue" />
                ) : (
                  <Copy size={13} className="text-mist" />
                )}
              </button>
              {copied && (
                <span className="font-mono text-xs text-blue">Copied</span>
              )}
            </div>
            <a
              href={`tel:${CONTACT.phoneHref}`}
              className="text-sm block text-mist w-fit"
            >
              {CONTACT.phone}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="icon-btn p-3 rounded-full border border-mistdim"
            >
              <Linkedin size={18} className="text-paper" />
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              aria-label="Email"
              className="icon-btn p-3 rounded-full border border-mistdim"
            >
              <Mail size={18} className="text-paper" />
            </a>
            <a
              href={`tel:${CONTACT.phoneHref}`}
              aria-label="Call"
              className="icon-btn p-3 rounded-full border border-mistdim"
            >
              <Phone size={18} className="text-paper" />
            </a>
            <a
              href="/pranav_resume.pdf"
              download
              className="icon-btn inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest px-4 py-3 rounded-full bg-ember text-white"
            >
              <FileDown size={14} /> Resume
            </a>
          </div>
        </div>
      </section>
    </Reveal>
  );
};
