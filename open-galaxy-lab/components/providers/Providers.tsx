'use client'

import { ThemeProvider } from './ThemeProvider'
import { NavigationBar } from '../layout/NavigationBar'
import { FooterSection } from '../sections/FooterSection'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <NavigationBar />
      <div className="min-h-screen overflow-hidden">{children}</div>
      <FooterSection />
    </ThemeProvider>
  )
}
