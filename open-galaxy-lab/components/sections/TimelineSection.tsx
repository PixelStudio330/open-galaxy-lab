'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../../lib/motion'
import { timelinePhases } from '../../lib/data'

export function TimelineSection() {
  return (
    <section className="page-section section-container py-24">
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }} 
        variants={staggerContainer} 
        className="grid gap-16 lg:grid-cols-[1fr_460px] items-start"
      >
        <motion.div variants={fadeInUp} className="space-y-6 lg:sticky lg:top-24">
          <p className="text-xs uppercase tracking-[0.35em] text-amber-600 dark:text-amber-400 font-semibold">Roadmap</p>
          <h2 className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-white md:text-5xl leading-[1.15]">
            The evolution of the Open Galaxy Lab ecosystem.
          </h2>
          <p className="max-w-xl text-base font-light leading-relaxed text-slate-500 dark:text-slate-400">
            Each phase is designed to feel thoughtful and deliberate, layering systems that support a modern digital civilization.
          </p>
        </motion.div>

        <motion.div 
          variants={fadeInUp} 
          className="relative overflow-hidden rounded-[32px] border border-slate-200/60 bg-white/40 p-8 shadow-sm backdrop-blur-md dark:border-white/5 dark:bg-white/[0.01]"
        >
          {/* Central Vertical Trace Line */}
          <div className="absolute left-[35px] top-10 h-[calc(100%-5rem)] w-[1px] bg-gradient-to-b from-slate-200 via-slate-200 to-transparent dark:from-white/10 dark:via-white/5 dark:to-transparent" />
          
          <div className="space-y-10">
            {timelinePhases.map((phase, index) => (
              <motion.div 
                key={phase.title} 
                className="relative pl-12 group"
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                {/* Custom Glowing Timeline Bullet Point */}
                <span className="absolute left-[2px] top-1.5 h-4 w-4 rounded-full border border-amber-400 bg-white dark:bg-[#07070a] flex items-center justify-center shadow-sm group-hover:scale-120 transition-transform duration-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                </span>
                
                <h3 className="text-base font-semibold text-slate-950 dark:text-white tracking-tight">{phase.title}</h3>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">{phase.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}