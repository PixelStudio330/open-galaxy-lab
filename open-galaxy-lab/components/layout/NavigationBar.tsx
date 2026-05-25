'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
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
  const [isOpen, setIsOpen] = useState(false)
  const lastScroll = useRef(0)

  // Auto-close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Sticky scroll logic
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) return // Lock visibility state if menu is open
      const current = window.scrollY
      const shouldShow = current < 96 || current < lastScroll.current
      setIsVisible(shouldShow)
      lastScroll.current = current
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isOpen])

  return (
    <>
      <motion.header
        initial={{ y: -18, opacity: 0 }}
        animate={{ y: isVisible ? 0 : -18, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 dark:bg-[#07070a]/70 dark:border-white/5 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-8 py-4 md:py-6 text-sm text-slate-600 dark:text-slate-300">
          
          {/* Left: Logo block */}
          <Link 
            href="/" 
            className="flex items-center transition duration-300 hover:opacity-95 group z-50"
          >
            <div className="relative w-36 h-12 sm:w-56 sm:h-14 md:w-[280px] lg:w-[340px] md:h-16 flex items-center justify-start transition-transform duration-300 group-hover:scale-[1.01]">
              <Image
                src="/logo-v2.png"
                alt="Open Galaxy Lab Premium Branding"
                fill
                priority
                sizes="(max-width: 768px) 180px, 340px"
                className="object-contain object-left dark:brightness-110"
              />
            </div>
          </Link>

          {/* Center: Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
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

          {/* Right Action Matrix (Always Visible) */}
          <div className="flex items-center gap-3 sm:gap-5 z-50">
            <div className="flex items-center p-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-transparent">
              <ThemeToggle />
            </div>
            
            <span className="hidden sm:inline-block h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.6)] animate-pulse" />

            {/* Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 p-2 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 lg:hidden focus:outline-none"
              aria-label="Toggle Menu"
            >
              <motion.span 
                animate={isOpen ? { rotate: 45, y: 5.5 } : { rotate: 0, y: 0 }}
                className="h-0.5 w-5 bg-current transition-transform" 
              />
              <motion.span 
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="h-0.5 w-5 bg-current transition-opacity" 
              />
              <motion.span 
                animate={isOpen ? { rotate: -45, y: -5.5 } : { rotate: 0, y: 0 }}
                className="h-0.5 w-5 bg-current transition-transform" 
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Slide-out overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop blur layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-md lg:hidden"
            />

            {/* Drawer Body */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed bottom-0 right-0 top-0 z-40 flex w-full max-w-xs flex-col border-l border-slate-200 bg-white p-6 pt-28 shadow-2xl dark:border-white/10 dark:bg-[#07070a] lg:hidden"
            >
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block rounded-xl px-4 py-3.5 text-base font-medium transition ${
                        isActive
                          ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
                          : 'text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-white/5'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )
                })}
              </nav>

              {/* Status indicator inside sidebar for mobile devices */}
              <div className="mt-auto flex items-center gap-3 border-t border-slate-100 pt-6 dark:border-white/5 sm:hidden">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.6)] animate-pulse" />
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">System Status Online</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}