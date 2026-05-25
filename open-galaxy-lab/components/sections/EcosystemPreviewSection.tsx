'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '../../lib/motion'
import { systems } from '../../lib/data'
import { HeartPulse, Layers, MessageCircle, Cloud, Sparkles, ShieldCheck, type LucideIcon } from 'lucide-react'
import { useMemo, useState } from 'react'

const icons: Record<string, LucideIcon> = {
  'Galaxy Social': HeartPulse,
  'Galaxy Chat': MessageCircle,
  'Galaxy AI': Sparkles,
  'Galaxy Cloud': Cloud,
  'Galaxy Studio': Layers,
  'Galaxy Identity': ShieldCheck,
}

export function EcosystemPreviewSection() {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null)
  const [mousePositions, setMousePositions] = useState<Record<string, { x: number; y: number }>>({})

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>, title: string) => {
    const rect = event.currentTarget.getBoundingClientRect()
    setMousePositions(prev => ({
      ...prev,
      [title]: {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      }
    }))
  }

  const cards = useMemo(
    () => systems.map((system) => ({
      ...system,
      icon: icons[system.title] ?? Layers,
    })),
    []
  )

  return (
    <section id="ecosystem" className="page-section section-container py-24">
      <div className="mb-16 flex flex-col gap-4 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.35em] text-amber-600 dark:text-amber-400 font-semibold">Ecosystem preview</p>
        <h2 className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-white md:text-5xl">
          Six systems, one unified experience.
        </h2>
      </div>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((system) => {
          const Icon = system.icon
          const pos = mousePositions[system.title] || { x: 0, y: 0 }
          
          return (
            <motion.div
              key={system.title}
              variants={fadeInUp}
              onMouseEnter={() => setHoveredIndex(system.title)}
              onMouseLeave={() => setHoveredIndex(null)}
              onMouseMove={(e) => handleMouseMove(e, system.title)}
              className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/40 p-8 text-left backdrop-blur-md transition-all duration-300 dark:border-white/5 dark:bg-white/[0.02] hover:border-slate-300 dark:hover:border-white/10"
            >
              {/* Radial Premium Spotlight Overlay Effect */}
              <div 
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(245, 158, 11, 0.06), transparent 40%)`
                }}
              />
              <div 
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:block hidden"
                style={{
                  background: `radial-gradient(400px circle at ${pos.x}px ${pos.y}px, rgba(255, 255, 255, 0.04), transparent 40%)`
                }}
              />

              {/* Icon Container */}
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white dark:bg-white dark:text-slate-950 shadow-md group-hover:scale-110 transition-transform duration-300">
                <Icon size={20} strokeWidth={1.5} />
              </div>
              
              {/* Typography */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-slate-950 dark:text-white tracking-tight">
                  {system.title}
                </h3>
                <p className="text-sm leading-7 text-slate-500 dark:text-slate-400 font-light">
                  {system.description}
                </p>
              </div>

              {/* Minimal Line Indicator on Card Bottom */}
              <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400/40 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}