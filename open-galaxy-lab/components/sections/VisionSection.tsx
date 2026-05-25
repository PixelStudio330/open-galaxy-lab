'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../../lib/motion'
import { visionStatements } from '../../lib/data'

export function VisionSection() {
  return (
    <section id="vision" className="page-section section-container py-24 relative">
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }} 
        variants={staggerContainer} 
        className="space-y-16"
      >
        <motion.div variants={fadeInUp} className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] text-amber-600 dark:text-amber-400 font-semibold">Our philosophy</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white md:text-5xl lg:text-6xl leading-[1.15]">
            Building an interconnected software civilization.
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-3">
          {visionStatements.map((statement, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="rounded-3xl border border-slate-200/60 bg-white/40 p-8 shadow-sm backdrop-blur-md transition-colors duration-300 dark:border-white/5 dark:bg-white/[0.01] hover:border-slate-300 dark:hover:border-white/10 flex flex-col justify-between min-h-[220px]"
            >
              {/* Giant elegant decorative watermarked background quotation index */}
              <div className="text-4xl font-mono font-light text-slate-200 dark:text-slate-800/40 select-none pointer-events-none mb-4">
                0{index + 1}
              </div>
              
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed font-light">
                {statement}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}