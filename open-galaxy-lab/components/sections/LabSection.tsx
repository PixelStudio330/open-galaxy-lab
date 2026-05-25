'use client'

import { motion } from 'framer-motion'
import { InteractiveOrbitSection } from './InteractiveOrbitSection'

const experiments = [
  {
    title: 'Neon panels',
    description: 'A motion-first component study for calm interface rhythm.',
  },
  {
    title: 'Flow states',
    description: 'Explore soft interactions and responsive animation pacing.',
  },
  {
    title: 'System depth',
    description: 'Balanced surface layers with subtle glow and layered contrast.',
  },
]

export function LabSection() {
  return (
    <section className="page-section py-28 relative overflow-hidden" aria-label="Lab experiments">
      {/* Background Soft Mesh Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-br from-purple-100/20 to-orange-100/20 dark:from-purple-950/5 dark:to-amber-950/5 rounded-full blur-[120px] pointer-events-none select-none" />

      <div className="section-container space-y-24 relative z-10">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] text-amber-600 dark:text-amber-400 font-semibold">The Sandbox</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white md:text-5xl lg:text-6xl leading-[1.15]">
            Experimental interactions built for the system.
          </h1>
          <p className="mt-6 max-w-2xl text-base font-light leading-relaxed text-slate-500 dark:text-slate-400">
            A laboratory space for motion studies, interactive orbits, and compositional experiments that remain calm, structured, and premium.
          </p>
        </div>

        {/* Orbit Space wrapper */}
        <div className="py-6">
          <InteractiveOrbitSection />
        </div>

        {/* Lower Grid Panels */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {experiments.map((experiment) => (
            <motion.article
              key={experiment.title}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 280, damping: 22 }}
              className="rounded-3xl border border-slate-200/60 bg-white/40 p-8 shadow-sm backdrop-blur-md transition-colors duration-300 dark:border-white/5 dark:bg-white/[0.01] hover:border-slate-300 dark:hover:border-white/10"
            >
              <h2 className="text-lg font-semibold text-slate-950 dark:text-white tracking-tight">{experiment.title}</h2>
              <p className="mt-3 text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">{experiment.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}