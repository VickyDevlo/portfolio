import React from 'react'
import { Reveal } from '../shared/Reveal';
import { EXPLORE_LINKS } from '../data/content';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const ExploreMore = () => {
  return (
     <Reveal>
        <section className="py-14 border-t border-mist/15">
          <h2 className="font-mono text-xs uppercase tracking-widest text-mistdim mb-2">
            Explore more
          </h2>
          <div className="flex flex-col">
            {EXPLORE_LINKS.map((l, i) => {
              const Icon = l.icon;
              const accentText =
                l.accent === "ember" ? "text-ember" : "text-blue";
              const accentBg =
                l.accent === "ember" ? "bg-ember/10" : "bg-blue/10";
              const accentBorder =
                l.accent === "ember" ? "border-emberdim" : "border-bluedim";
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`group flex items-center justify-between gap-6 py-6 ${
                    i === 0 ? "" : "border-t border-mist/15"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`p-2.5 rounded-full border ${accentBorder} ${accentBg} shrink-0`}
                    >
                      <Icon size={18} className={accentText} />
                    </span>
                    <div>
                      <h3 className="font-display font-semibold text-lg mb-1 group-hover:text-blue transition-colors">
                        {l.title}
                      </h3>
                      <p className="text-sm text-mist">{l.desc}</p>
                    </div>
                  </div>
                  <ArrowRight
                    size={18}
                    className="text-mistdim shrink-0 transition-transform group-hover:translate-x-1 group-hover:text-blue"
                  />
                </Link>
              );
            })}
          </div>
        </section>
      </Reveal>
  )
}
