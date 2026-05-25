'use client'

import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'

const orbitNodes = [
  { label: 'Galaxy Social', hue: 210 },
  { label: 'Galaxy Chat', hue: 170 },
  { label: 'Galaxy AI', hue: 280 },
  { label: 'Galaxy Cloud', hue: 200 },
  { label: 'Galaxy Studio', hue: 145 },
  { label: 'Galaxy Identity', hue: 50 },
]

export function InteractiveOrbitSection() {
  const [isHovered, setIsHovered] = useState(false)

  const positions = useMemo(
    () => orbitNodes.map((node, index) => {
      const angle = (index / orbitNodes.length) * Math.PI * 2
      return {
        ...node,
        x: Math.cos(angle) * 180,
        y: Math.sin(angle) * 180,
      }
    }),
    []
  )

  return (
    <div className="grid gap-16 lg:grid-cols-[1fr_520px] items-center">
      <div className="flex flex-col justify-center gap-6">
        <p className="text-xs uppercase tracking-[0.35em] text-amber-600 dark:text-amber-400 font-semibold">Interactive experience</p>
        <h2 className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-white md:text-5xl leading-[1.15]">
          A premium orbital system that feels alive.
        </h2>
        <p className="max-w-xl text-base font-light leading-relaxed text-slate-500 dark:text-slate-400">
          Smooth motion, equal spacing, and responsive hover behavior create a playful yet calm interaction zone.
        </p>
        
        <div className="grid gap-6 sm:grid-cols-2 pt-4">
          <div className="rounded-3xl border border-slate-200/60 bg-white/40 p-7 backdrop-blur-md dark:border-white/5 dark:bg-white/[0.01]">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400 font-medium">Interaction</p>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">Hover to slow the orbit, reveal nodes, and keep the motion calm and tactile.</p>
          </div>
          <div className="rounded-3xl border border-slate-200/60 bg-white/40 p-7 backdrop-blur-md dark:border-white/5 dark:bg-white/[0.01]">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400 font-medium">Motion</p>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">Every rotation is smooth and continuous, with controlled easing and a premium rhythm.</p>
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-center select-none">
        {/* Ambient Ring Glow */}
        <div className="absolute w-80 h-80 rounded-full bg-gradient-to-tr from-rose-200/10 to-amber-200/10 blur-3xl dark:from-purple-900/5 dark:to-emerald-900/5 pointer-events-none" />

        {/* Master Orbit Wheel */}
        <motion.div
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          animate={{ rotate: 360 }}
          transition={{ duration: isHovered ? 45 : 25, ease: 'linear', repeat: Infinity }}
          className="relative flex h-[480px] w-[480px] items-center justify-center rounded-full border border-slate-200/60 bg-white/10 dark:border-white/[0.03] dark:bg-white/[0.002]"
        >
          {/* Inner Trace Ring */}
          <div className="absolute inset-12 rounded-full border border-dashed border-slate-200/40 dark:border-white/[0.02]" />

          {positions.map((node, index) => (
            <motion.div
              key={node.label}
              className="absolute"
              style={{ 
                left: `calc(50% - 48px + ${node.x}px)`, 
                top: `calc(50% - 48px + ${node.y}px)` 
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              {/* Counter-Rotation Frame holds text straight */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: isHovered ? 45 : 25, ease: 'linear', repeat: Infinity }}
              >
                <button
                  type="button"
                  className="flex h-24 w-24 flex-col items-center justify-center rounded-full border border-slate-200/80 bg-white p-3 text-center text-xs font-medium tracking-tight text-slate-800 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-[#0d0d12] dark:text-slate-200 dark:hover:border-white/20"
                  style={{
                    background: `radial-gradient(circle at top left, hsla(${node.hue}, 85%, 88%, 0.25), rgba(255,255,255,0.96) 70%)`
                  }}
                >
                  <span className="w-full truncate">{node.label.split(' ')[0]}</span>
                  <span className="text-[10px] text-slate-400 font-light mt-0.5">{node.label.split(' ')[1]}</span>
                </button>
              </motion.div>
            </motion.div>
          ))}

          {/* Central Lab Core */}
          <div className="absolute grid h-36 w-36 place-items-center rounded-full border border-slate-200/60 bg-white p-4 text-center shadow-md dark:border-white/5 dark:bg-[#07070a]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-100/30 to-rose-100/30 dark:from-amber-500/5 dark:to-purple-500/5 blur-sm" />
            <div className="relative z-10 flex flex-col items-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white">Open Galaxy</span>
              <span className="text-[10px] text-amber-600 dark:text-amber-400 uppercase tracking-widest font-mono mt-1">Lab Core</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}