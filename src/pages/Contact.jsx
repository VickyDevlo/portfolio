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

        <h2 className="font-display font-semibold mb-10 max-w-xl text-[22px] leading-tight sm:text-3xl lg:text-4xl">
          Have an idea that needs the right approach?{" "}
          <span className="text-ember">Let's build it.</span>
        </h2>
        <div className="grid grid-cols-1 min-[900px]:grid-cols-[1fr_420px] gap-10">
          <ContactForm />
          <ContactSteps />
        </div>
      </section>
    </Reveal>
  );
};
