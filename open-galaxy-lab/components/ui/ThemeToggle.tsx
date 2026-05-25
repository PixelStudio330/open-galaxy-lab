'use client'

import { Moon, SunMedium, Monitor } from 'lucide-react'
import { useTheme } from '../providers/ThemeProvider'

export function ThemeToggle() {
  // Pulling 'resolvedTheme' to accurately read 'light' or 'dark' even when 'theme' is set to 'system'
  const { theme, resolvedTheme, setTheme } = useTheme()

  const handleToggle = () => {
    // If the user is currently on 'system', check what the OS actually resolved to,
    // then step cleanly to the opposite choice.
    if (theme === 'system') {
      setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
    } else if (theme === 'light') {
      setTheme('dark')
    } else {
      // From dark, we loop right back into the 'system' default alignment loop!
      setTheme('system')
    }
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={`Switch theme from ${theme}`}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors focus:outline-none"
    >
      {/* 🔮 UI State Tracking:
          We track 'theme' here so the user visibly knows if their preferences are locked 
          to a state or following their overall computer hardware ('system').
      */}
      {theme === 'system' && <Monitor size={16} />}
      {theme === 'dark' && <Moon size={16} />}
      {theme === 'light' && <SunMedium size={16} />}
    </button>
  )
}