import React from 'react'
import { Reveal } from '../shared/Reveal'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ProjectCard } from '../shared/ProjectCard'
import { PROJECTS } from '../data/content'

export const FeaturedWork = () => {
  const featuredProjects = PROJECTS.slice(0, 2);
  return (
    <Reveal>
        <section className="py-14 border-t border-mist/15">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-xl font-semibold">
              Featured work
            </h2>
            <Link
              to="/work"
              className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-blue"
            >
              View all <ArrowRight size={13} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {featuredProjects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </section>
      </Reveal>
  )
}
