'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'

type ThemeMode = 'light' | 'dark' | 'system'

interface ThemeContextValue {
  theme: ThemeMode
  resolvedTheme: 'light' | 'dark'
  setTheme: (theme: ThemeMode) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)
const STORAGE_KEY = 'ogl-theme'

function getSystemTheme() {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyTheme(theme: ThemeMode) {
  if (typeof window === 'undefined') return
  
  const resolved = theme === 'system' ? getSystemTheme() : theme
  
  // 1. Maintain your CSS variable attribute selector
  document.documentElement.dataset.theme = resolved
  
  // 2. CRITICAL FIX: Toggle the class that Tailwind utilities depend on
  if (resolved === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  
  // Apply your beautiful smooth color change animations
  document.documentElement.classList.add('theme-transition')
  window.setTimeout(() => {
    document.documentElement.classList.remove('theme-transition')
  }, 600)
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>('system')
  
  const resolvedTheme = useMemo(
    () => (theme === 'system' ? (typeof window !== 'undefined' ? getSystemTheme() : 'light') : theme),
    [theme]
  )

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as ThemeMode | null
    const initialTheme = stored ?? 'system'
    setThemeState(initialTheme)
    applyTheme(initialTheme)

    const mediaQuery = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null
    const handleChange = () => {
      if (window.localStorage.getItem(STORAGE_KEY) === 'system') {
        applyTheme('system')
      }
    }

    if (mediaQuery) {
      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    window.localStorage.setItem(STORAGE_KEY, theme)
    applyTheme(theme)
  }, [theme])

  const setTheme = (nextTheme: ThemeMode) => {
    setThemeState(nextTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}