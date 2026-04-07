"use client";

import { useEffect, useState } from 'react'
import { FluidFlow } from "@/components/animations/FluidFlow"
import { HeroBackground } from "@/components/ui/HeroBackground"
import { Section } from "@/components/ui/Section"
import MotionDiv from "@/components/ui/MotionDiv"
import { fadeUp, fadeIn } from "@/lib/motion/config"

// ── Hero ─────────────────────────────────────────────────────────────
export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  // Don't render on server to prevent hydration mismatch
  if (!mounted) return null

  return (
    <>
      <HeroBackground />

      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        {/* FluidFlow sits here as fixed bg — z-index -1 */}
        <FluidFlow />

        <Section className="text-center relative z-10 py-0">
          <div className="flex flex-col items-center">
            {/* 1. Identity Eyebrow (Unified Entrance) */}
            <MotionDiv {...fadeUp}>
              <div className="text-[12px] font-bold uppercase tracking-[0.4em] text-[#5DCAA5] mb-8 font-mono">
                Sinan · Full Stack Developer
              </div>
            </MotionDiv>

            {/* 2. New Engineered Headline (Static - Phase 3 candidate) */}
            <h1 className="text-5xl md:text-8xl font-serif text-white mb-8 tracking-tighter leading-[1.05] max-w-5xl mx-auto text-balance">
              Interfaces engineered for <br className="hidden md:block" />
              <span className="opacity-60">scale, speed, and clarity.</span>
            </h1>

            {/* 3. Value Proposition Subtext (Light FadeIn) */}
            <MotionDiv {...fadeIn}>
              <p className="text-lg md:text-2xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-12 font-light">
                Focused on system-driven UI architecture and production-grade software integration.
              </p>
            </MotionDiv>

            {/* 4. CTA Group (Static - No animation per rules) */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/work"
                className="px-8 py-4 rounded-full bg-white/10 text-white border border-white/10 backdrop-blur-xl hover:bg-white/15 transition-all text-sm font-medium tracking-wide shadow-inner"
              >
                View Selected Work ↓
              </a>
              <a
                href="/contact"
                className="px-8 py-4 rounded-full bg-transparent text-white/60 border border-white/5 hover:border-white/20 transition-all text-sm font-light tracking-wide"
              >
                Start a project
              </a>
            </div>

            {/* 5. Kerala Signal (Subtle reveal) */}
            <MotionDiv {...fadeUp}>
              <div className="mt-16 flex items-center justify-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#28C840] shadow-[0_0_8px_rgba(40,200,64,0.6)]" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-mono">
                  Kerala, India
                </span>
              </div>
            </MotionDiv>
          </div>
        </Section>
      </section>
    </>
  )
}
