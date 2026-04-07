"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import MotionDiv from "@/components/ui/MotionDiv";
import { fadeUp } from "@/lib/motion/config";

export function StackComparison() {
  return (
    <Section>
      <MotionDiv {...fadeUp}>
        <div className="section-eyebrow text-[11px] font-medium tracking-[0.08em] uppercase text-[var(--text3)] mb-10 font-mono">
          The 2026 Shift — Engineering Evolution
        </div>
      </MotionDiv>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Old Card: The Legacy Pattern */}
        <MotionDiv {...fadeUp}>
          <GlassCard 
            padding="p-10" 
            className="border-red-500/10 h-full transition-transform duration-300 hover:scale-[1.015]"
          >
            <div className="flex items-center gap-3 mb-8">
              <AlertCircle size={20} className="text-red-500/60" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-red-500/60 font-mono">
                Legacy Approach (Avoid)
              </span>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-[var(--text2)]">
                  <span className="font-light">Meaningless Progress Bars</span>
                  <span className="font-mono text-xs">90%</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-white/20 w-[90%]" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-[var(--text2)]">
                  <span className="font-light">Skill Inflation</span>
                  <span className="font-mono text-xs">85%</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-white/20 w-[85%]" />
                </div>
              </div>
              <p className="text-[14px] text-[var(--text3)] pt-6 border-t border-white/5 leading-relaxed italic font-light">
                Logo grids and pseudo-metric bars that offer zero technical signal. Percentage bars are subjective and unverifiable.
              </p>
            </div>
          </GlassCard>
        </MotionDiv>

        {/* New Card: The Production Pattern */}
        <MotionDiv {...fadeUp}>
          <GlassCard 
            padding="p-10" 
            className="border-[#5DCAA5]/20 h-full transition-transform duration-300 hover:scale-[1.015]"
          >
            <div className="flex items-center gap-3 mb-8">
              <CheckCircle2 size={20} className="text-[#5DCAA5]" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#5DCAA5] font-mono">
                2026 Standard (Engineered)
              </span>
            </div>
            
            <div className="space-y-5">
              {[
                "3-tier depth signals (Expert / Proficient / Growing)",
                "Time-based metadata (Years of Production)",
                "Live 'Current Build' activity signal",
                "AI & Infrastructure hierarchy",
                "Production-grade context vs. vanity metrics",
              ].map((text, idx) => (
                <div key={idx} className="flex items-start gap-3.5 text-[15px] text-[var(--text2)] font-light leading-snug">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#5DCAA5] mt-2 mb-2" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </MotionDiv>
      </div>
    </Section>
  );
}
