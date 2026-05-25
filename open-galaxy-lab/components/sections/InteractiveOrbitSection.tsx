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
  const activeDuration = isHovered ? 50 : 25

  const positions = useMemo(() => {
    return orbitNodes.map((node, index) => {
      const angle = (index / orbitNodes.length) * Math.PI * 2
      
      // Map sin/cos from [-1, 1] over to percentage positions [8%, 92%]
      // Radius factor is set to 42% away from absolute 50% midpoint
      const topPercentage = 50 + Math.sin(angle) * 42
      const leftPercentage = 50 + Math.cos(angle) * 42

      return {
        ...node,
        top: `${topPercentage}%`,
        left: `${leftPercentage}%`,
      }
    })
  }, [])

  return (
    <div className="mx-auto max-w-[1440px] px-4 sm:px-8 py-16 overflow-hidden">
      <div className="grid gap-16 lg:grid-cols-[1fr_500px] items-center justify-items-center lg:justify-items-stretch">
        
        {/* Left Column: Context Typography */}
        <div className="flex flex-col justify-center gap-5 text-center lg:text-left order-2 lg:order-1 max-w-xl lg:max-w-none">
          <p className="text-xs uppercase tracking-[0.35em] text-amber-600 dark:text-amber-400 font-bold">
            Interactive experience
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-950 dark:text-white leading-[1.15]">
            A premium orbital system that feels alive.
          </h2>
          <p className="mx-auto lg:mx-0 max-w-xl text-sm sm:text-base font-light leading-relaxed text-slate-500 dark:text-slate-400">
            Smooth motion, equal spacing, and responsive hover behavior create a playful yet calm interaction zone.
          </p>
          
          <div className="grid gap-4 sm:grid-cols-2 pt-4 text-left">
            <div className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur-md dark:border-white/5 dark:bg-white/[0.01]">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400 font-semibold">Interaction</p>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                Hover to slow the orbit, reveal nodes, and keep the motion calm and tactile.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur-md dark:border-white/5 dark:bg-white/[0.01]">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400 font-semibold">Motion</p>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                Every rotation is smooth and continuous, with controlled easing and a premium rhythm.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Fluid Orbit Canvas System */}
        <div className="relative flex items-center justify-center select-none order-1 lg:order-2 w-full max-w-[290px] xs:max-w-[340px] sm:max-w-[420px] md:max-w-[460px] aspect-square">
          
          {/* Ambient Glow Underlay */}
          <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-rose-400/10 to-amber-400/10 blur-3xl dark:from-purple-900/10 dark:to-emerald-900/10 pointer-events-none" />

          {/* Master Rotating Wheel Ring */}
          <motion.div
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            animate={{ rotate: 360 }}
            transition={{ duration: activeDuration, ease: 'linear', repeat: Infinity }}
            className="relative flex h-full w-full items-center justify-center rounded-full border border-slate-200/80 bg-white/[0.01] dark:border-white/[0.05] shadow-inner"
          >
            {/* Inner Tracer Ring Track Line */}
            <div className="absolute inset-[16%] rounded-full border border-dashed border-slate-200 dark:border-white/[0.06] pointer-events-none" />

            {/* Orbital Nodes Mapping */}
            {positions.map((node) => {
              return (
                <div
                  key={node.label}
                  className="absolute w-[24%] h-[24%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
                  style={{
                    top: node.top,
                    left: node.left,
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    className="w-full h-full"
                  >
                    {/* Counter-Rotation maintains absolute upward text gravity */}
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: activeDuration, ease: 'linear', repeat: Infinity }}
                      className="w-full h-full"
                    >
                      <button
                        type="button"
                        className="flex h-full w-full flex-col items-center justify-center rounded-full border border-slate-200 bg-white p-1 text-center shadow-sm transition-all duration-300 dark:border-white/10 dark:bg-[#0d0d12] text-slate-800 dark:text-slate-200 hover:border-amber-400 dark:hover:border-amber-400/50 hover:shadow-md cursor-pointer"
                        style={{
                          background: `radial-gradient(circle at top left, hsla(${node.hue}, 85%, 92%, 0.45), rgba(255,255,255,0.98) 75%)`
                        }}
                      >
                        <span className="w-full truncate px-1.5 text-[9px] xs:text-[10px] sm:text-xs font-semibold">
                          {node.label.split(' ')[0]}
                        </span>
                        <span className="text-[8px] sm:text-[9px] text-slate-400 dark:text-slate-500 font-normal mt-0.5">
                          {node.label.split(' ')[1]}
                        </span>
                      </button>
                    </motion.div>
                  </motion.div>
                </div>
              )
            })}
          </motion.div>

          {/* Core Central Lab Pivot Anchor Block */}
          <div className="absolute grid h-[28%] w-[28%] place-items-center rounded-full border border-slate-200 bg-white p-2 text-center shadow-lg dark:border-white/10 dark:bg-[#07070a] pointer-events-none">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-200/20 to-rose-200/20 dark:from-amber-500/5 dark:to-purple-500/5 blur-sm" />
            <div className="relative z-10 flex flex-col items-center justify-center w-full">
              <span className="text-[9px] sm:text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white text-center line-clamp-2">
                Open Galaxy
              </span>
              <span className="text-[7px] sm:text-[9px] text-amber-600 dark:text-amber-400 uppercase tracking-widest font-mono mt-0.5 font-bold">
                Lab Core
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}