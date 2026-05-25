'use client'

import { useMemo, useState, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowRight, Layers } from 'lucide-react'
import { fadeInUp, staggerContainer } from '../../lib/motion'

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Mouse tracking for the premium liquid glow effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { stiffness: 60, damping: 25, mass: 0.8 }
  const glowX = useSpring(mouseX, springConfig)
  const glowY = useSpring(mouseY, springConfig)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    // Center the glow on the cursor position
    mouseX.set(e.clientX - rect.left - 250) 
    mouseY.set(e.clientY - rect.top - 250)
  }

  // Premium floating background nodes
  const floatingNodes = useMemo(
    () => [
      { size: 'w-72 h-72', bg: 'bg-orange-200/20 dark:bg-orange-500/10', top: '15%', left: '10%', delay: 0 },
      { size: 'w-96 h-96', bg: 'bg-purple-200/20 dark:bg-indigo-500/10', bottom: '10%', right: '5%', delay: 2 },
    ],
    []
  )

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="page-section relative min-h-screen overflow-hidden bg-[#faf9f6] text-slate-900 transition-colors duration-500 dark:bg-[#07070a] dark:text-slate-100 flex items-center"
    >
      {/* Dynamic Ambient Backgrounds (Inspo Match) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none opacity-70 dark:opacity-50">
        {floatingNodes.map((node, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: node.delay,
            }}
            className={`absolute rounded-full blur-[80px] ${node.size} ${node.bg}`}
            style={{ top: node.top, left: node.left, right: node.right, bottom: node.bottom }}
          />
        ))}
        
        {/* Interactive Mouse Follower Mesh Glow */}
        <motion.div 
          className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-rose-300/20 to-amber-200/20 dark:from-purple-900/10 dark:to-emerald-900/10 blur-[100px]"
          style={{ x: glowX, y: glowY }}
        />
      </div>

      <div className="section-container relative z-10 w-full py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="space-y-10 max-w-4xl"
        >
          {/* Pill Badge */}
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/60 bg-white/40 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-slate-600 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
              Open Galaxy Lab
            </span>
          </motion.div>

          {/* Core Header */}
          <motion.h1 
            variants={fadeInUp} 
            className="text-5xl font-semibold leading-[1.1] tracking-[-0.03em] md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-slate-950 to-slate-700 dark:from-white dark:to-slate-400"
          >
            An immersive digital flagship for future systems.
          </motion.h1>

          {/* Simplified elegant sub-description */}
          <motion.p 
            variants={fadeInUp} 
            className="max-w-2xl text-lg leading-relaxed text-slate-600/90 dark:text-slate-400 sm:text-xl font-light"
          >
            Interconnected operating systems and digital architectures crafted with quiet motion, deep restraint, and absolute clarity.
          </motion.p>

          {/* Premium CTA Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
            <motion.a 
              href="/vision" 
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-3.5 text-sm font-medium text-white shadow-md transition-shadow hover:shadow-xl dark:bg-white dark:text-slate-950"
            >
              Explore Vision
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </motion.a>
            
            <motion.a 
              href="/ecosystem" 
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/40 px-7 py-3.5 text-sm font-medium text-slate-800 backdrop-blur-md transition-all hover:bg-white/80 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
            >
              View Ecosystem
              <Layers size={16} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}