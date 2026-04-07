"use client";

import React from "react";
import HorizontalScroll from "@/components/animations/HorizontalScroll";
import { InfiniteImageSpin } from "@/components/animations/InfiniteImageSpin";
import { SKILL_TIERS, SKILL_CATEGORIES } from "@/constants";
import { Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";
import MotionDiv from "@/components/ui/MotionDiv";
import { fadeUp } from "@/lib/motion/config";

export function TechSection() {
  const allSkills = SKILL_TIERS.map(s => s.name);

  const getTrafficColor = (idx: number) => {
    if (idx === 0) return "#28C840"; // Green / Expert
    if (idx === 1) return "#FEBC2E"; // Yellow / Proficient
    return "#FF5F57"; // Red / Growing
  };

  return (
    <>
      {/* 1. Ticker Section (Standardized padding) */}
      <Section className="border-t border-white/5 py-16">
        <MotionDiv {...fadeUp}>
          <div className="text-[11px] text-center font-bold tracking-[0.3em] font-mono text-[var(--text2)] mb-12 uppercase">
            Technology Stack
          </div>
          <InfiniteImageSpin items={allSkills} speed={30} />
        </MotionDiv>
      </Section>

      {/* 2. Horizontal Scroll Section (Using Section wrapper) */}
      <Section className="pt-0 overflow-hidden">
        <MotionDiv {...fadeUp}>
          <HorizontalScroll className="pb-8">
            {SKILL_CATEGORIES.map((group, idx) => (
              <div 
                key={idx} 
                className="w-[85vw] md:w-[60vw] h-[60vh] flex-shrink-0 pr-6 md:pr-12 last:pr-0"
              >
                <GlassCard padding="p-12 md:p-16" className="h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-xs md:text-sm font-bold uppercase tracking-[0.2em] font-mono text-[var(--text)] mb-12">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: getTrafficColor(idx) }} />
                      {group.category}
                    </div>
                    
                    <div className="text-4xl md:text-6xl font-serif text-[var(--text)] leading-tight">
                      {group.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="block mb-4 text-[var(--text3)] hover:text-[var(--text)] transition-colors cursor-default">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="w-16 h-16 rounded-full border border-[var(--border2)] flex items-center justify-center bg-white/5 text-[var(--text)] shadow-inner">
                      +
                    </div>
                  </div>
                </GlassCard>
              </div>
            ))}
            {/* Buffer block for scroll flow */}
            <div className="w-[10vw] flex-shrink-0" />
          </HorizontalScroll>
        </MotionDiv>
      </Section>
    </>
  );
}
