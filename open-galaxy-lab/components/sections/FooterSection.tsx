'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '../../lib/motion'

export function FooterSection() {
  return (
    <footer className="relative border-t border-slate-200/60 bg-[#faf9f6]/80 py-16 backdrop-blur-md dark:border-white/5 dark:bg-[#07070a]/80">
      {/* Decorative ambient line accent matching top hero vibes */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-slate-300 dark:via-white/10 to-transparent" />
      
      <div className="section-container">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.1 }} 
          variants={fadeInUp} 
          className="flex flex-col gap-10 text-slate-600 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-900 dark:text-white">
              Open Galaxy Lab
            </p>
            <p className="max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400 font-light">
              A calm flagship experience designed to represent an expansive, human-first software ecosystem.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium">
            {['Vision', 'Ecosystem', 'Contact'].map((link) => (
              <motion.a 
                key={link}
                href={`#${link.toLowerCase()}`} 
                whileHover={{ y: -2 }}
                className="text-slate-500 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white transition-colors duration-200 relative py-1"
              >
                {link}
              </motion.a>
            ))}
          </div>
        </motion.div>
        
        <div className="mt-12 pt-8 border-t border-slate-200/40 dark:border-white/[0.02] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs font-light text-slate-400">
            &copy; {new Date().getFullYear()} Open Galaxy Lab. All systems operational.
          </p>
        </div>
      </div>
    </footer>
  )
}