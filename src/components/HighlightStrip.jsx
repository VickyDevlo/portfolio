import { Reveal } from "../shared/Reveal";
import { HIGHLIGHTS } from "../data/content";

export const HighlightStrip = () => {
  return (
    <Reveal>
      <section className="py-10 border-t border-mist/15">
        <div className="grid sm:grid-cols-3 gap-6">
          {HIGHLIGHTS.map((h) => (
            <div key={h.label}>
              <div className="font-display text-3xl font-semibold text-blue mb-1">
                {h.value}
              </div>
              <div className="text-sm text-mist">{h.label}</div>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
};
