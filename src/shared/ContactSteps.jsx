import React from "react";
import { CONTACT_STEPS } from "../data/content";

export const ContactSteps = () => {
  return (
    <div className="lg:border-l lg:border-mistdim/20 lg:pl-10">
      <p className="font-mono text-xs uppercase tracking-widest text-mist mb-8">
        What happens next
      </p>

      <div className="flex flex-col">
        {CONTACT_STEPS.map((step, i) => (
          <div key={step.n} className="flex gap-4">
            <div className="flex flex-col items-center">
              <span className="font-mono text-xs text-ember border border-ember/40 rounded-full h-8 w-8 flex items-center justify-center shrink-0">
                {step.n}
              </span>
              {i < CONTACT_STEPS.length - 1 && (
                <span className="w-px flex-1 bg-mistdim/30 my-2" />
              )}
            </div>
            <div className={i < CONTACT_STEPS.length - 1 ? "pb-8" : ""}>
              <h3 className="font-display font-semibold text-sm text-paper mb-1.5">
                {step.title}
              </h3>
              <p className="font-body text-sm text-mist leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
