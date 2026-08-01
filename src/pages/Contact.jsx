import { usePageTitle } from "../hooks/usePageTitle";
import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import { ContactForm } from "../shared/ContactForm";
import { ContactSteps } from "../shared/ContactSteps";

export const Contact = () => {
  usePageTitle("Contact");

  return (
    <Reveal>
      <section className="py-10">
        <SectionHeading n="05">Contact</SectionHeading>

        <h2
          className="font-display font-semibold mb-10"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
        >
          Building something that needs
          <br />
          both worlds? <span className="text-ember">Let's talk.</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16">
          {/* Left side */}
          <ContactForm />
          {/* Right side */}
          <ContactSteps />
        </div>
      </section>
    </Reveal>
  );
};
