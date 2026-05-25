'use client'

import { Moon, SunMedium, Monitor } from 'lucide-react'
import { useTheme } from '../providers/ThemeProvider'

const cycleTheme = (theme: 'light' | 'dark' | 'system') => {
  if (theme === 'system') return 'dark'
  if (theme === 'dark') return 'light'
  return 'system'
}

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme()
  return (
    <button
      type="button"
      onClick={() => setTheme(cycleTheme(theme))}
      aria-label="Toggle theme"
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 shadow-soft transition hover:bg-white/10"
    >
      {theme === 'system' ? (
        <Monitor size={18} className="text-slate-200" />
      ) : theme === 'dark' ? (
        <Moon size={18} />
      ) : (
        <SunMedium size={18} />
      )}
    </button>
  )
}
