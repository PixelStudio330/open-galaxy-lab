'use client'

import { AboutSection } from '../components/sections/AboutSection'
import { EcosystemPreviewSection } from '../components/sections/EcosystemPreviewSection'
import { HeroSection } from '../components/sections/HeroSection'
import { TimelineSection } from '../components/sections/TimelineSection'
import { PageTransition } from '../components/ui/PageTransition'

export default function Home() {
  return (
    <PageTransition>
      {/* 1. Changed to min-h-screen to ensure full baseline viewport depth.
        2. Added flex flex-col gap-[layout-spacing] to enforce structured, un-collapsible layout gaps.
        3. Replaced variable bg utilities with explicit baseline colors matching the mesh theme.
      */}
      <main className="min-h-screen bg-[#faf9f6] text-slate-900 dark:bg-[#07070a] dark:text-slate-100 flex flex-col gap-24 sm:gap-32 md:gap-48 overflow-x-hidden pb-32">
        
        {/* Hero acts as the relative top anchor */}
        <div className="relative z-20">
          <HeroSection />
        </div>
        
        {/* Content sections isolated with precise z-indexing to keep backgrounds clear */}
        <div className="relative z-10">
          <EcosystemPreviewSection />
        </div>
        
        <div className="relative z-10">
          <TimelineSection />
        </div>
    
        
        <div className="relative z-10">
          <AboutSection />
        </div>

      </main>
    </PageTransition>
  )
}