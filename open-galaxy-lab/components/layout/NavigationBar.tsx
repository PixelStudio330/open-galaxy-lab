'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { ThemeToggle } from '../ui/ThemeToggle'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/vision', label: 'Vision' },
  { href: '/ecosystem', label: 'Ecosystem' },
  { href: '/roadmap', label: 'Roadmap' },
  { href: '/lab', label: 'Lab' },
  { href: '/about', label: 'About' },
]

export function NavigationBar() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(true)
  const lastScroll = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY
      const shouldShow = current < 96 || current < lastScroll.current
      setIsVisible(shouldShow)
      lastScroll.current = current
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: isVisible ? 0 : -18, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-slate-200/40 bg-white/70 dark:bg-[#07070a]/70 dark:border-white/5 backdrop-blur-xl"
    >
      {/* Adjusted row padding to py-5 (and py-6 on bigger monitors) 
        to comfortably anchor a much larger logo block.
      */}
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-8 px-8 py-5 md:py-6 text-sm text-slate-600 dark:text-slate-300">
        
        {/* Full-width interactive link block */}
        <Link 
          href="/" 
          className="flex items-center transition duration-300 hover:opacity-95 group"
        >
          {/* 🚀 THE BIG BIG LOGO UNIT
            - Height exploded from h-8 (32px) to h-16 (64px) on mobile, and a massive h-20 (80px) on desktop.
            - Width extended to w-72 (288px) and w-96 (384px) to perfectly prevent horizontal text squishing.
          */}
          <div className="relative w-32 h-12 sm:w-80 sm:h-18 md:w-[420px] md:h-20 flex items-center justify-start transition-transform duration-300 group-hover:scale-[1.01]">
            <Image
              src="/logo-v2.png"
              alt="Open Galaxy Lab Premium Branding"
              fill
              priority
              sizes="(max-width: 768px) 288px, 420px"
              className="object-contain object-left scale-110 sm:scale-125 md:scale-100 dark:brightness-110"
            />
          </div>
        </Link>

        {/* Navigation links with slightly deeper gap properties to balance the big logo */}
        <nav className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative inline-flex items-center px-4 py-3 text-sm font-semibold tracking-wide transition ${
                  isActive 
                    ? 'text-slate-950 dark:text-white' 
                    : 'text-slate-500 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white'
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-4 right-4 bottom-1 h-[2px] scale-x-0 bg-amber-500 transition-transform duration-300 ${
                    isActive ? 'scale-x-100' : 'group-hover:scale-x-100'
                  }`}
                />
              </Link>
            )
          })}
        </nav>

        {/* Right Utility Matrix */}
        <div className="flex items-center gap-5">
          <ThemeToggle />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.6)] animate-pulse" />
        </div>
      </div>
    </motion.header>
  )
}