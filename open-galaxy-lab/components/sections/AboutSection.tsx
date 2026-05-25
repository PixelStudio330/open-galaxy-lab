'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../../lib/motion'

const aboutItems = [
  {
    id: '01',
    title: 'Mission',
    text: 'Create premium software systems that honor human attention, clarity, and long-term collaboration.',
  },
  {
    id: '02',
    title: 'Philosophy',
    text: 'Design with restraint, warmth, and depth so the experience feels intentional and stable.',
  },
  {
    id: '03',
    title: 'Vision',
    text: 'A future digital ecosystem that operates like a calm, elegant interface for a connected civilization.',
  },
]

export function AboutSection() {
  return (
    <section className="page-section section-container py-24 bg-transparent">
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }} 
        variants={staggerContainer} 
        className="space-y-16"
      >
        <motion.div variants={fadeInUp} className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] text-amber-600 dark:text-amber-400 font-semibold">About Our Core</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white md:text-5xl lg:text-6xl leading-[1.15]">
            Human-centered technology for a future civilization.
          </h2>
        </motion.div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {aboutItems.map((item) => (
            <motion.div 
              key={item.title} 
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group relative rounded-3xl border border-slate-200/60 bg-white/50 p-8 shadow-sm backdrop-blur-xl dark:border-white/5 dark:bg-slate-950/40 hover:border-slate-300 dark:hover:border-white/10 transition-colors duration-300"
            >
              {/* Subtle top edge lighting gradient highlight */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-slate-900/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none dark:from-white/[0.02]" />
              
              <div className="flex justify-between items-baseline">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500 font-medium">{item.title}</p>
                <span className="text-xs font-mono text-slate-300 dark:text-slate-700 font-bold">{item.id}</span>
              </div>
              <p className="mt-6 text-slate-600 dark:text-slate-300 text-base leading-8 font-light">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}