"use client";

import React from "react";
import { PROJECTS } from "@/constants";
import { Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";

export function CaseStudySection() {
  // Finding a project with case study data (Looking at constants/index.ts structure)
  // Note: Currently PROJECTS in index.ts doesn't have .caseStudy, but this component 
  // is built to handle it if added.
  const featured = PROJECTS.find(p => (p as any).caseStudy);

  if (!featured || !(featured as any).caseStudy) return null;

  const cs = (featured as any).caseStudy;

  return (
    <Section>
      <div className="section-label text-[11px] uppercase tracking-[0.2em] text-[var(--text3)] mb-12 font-mono">
        Strategic Deep Dive
      </div>
      <GlassCard padding="p-10 md:p-16">
        <div className="flex flex-wrap items-baseline gap-4 mb-12 pb-6 border-b border-white/5">
          <h3 className="font-serif text-3xl md:text-5xl text-[var(--text)] tracking-tight">
            {featured.title}
          </h3>
          <span className="text-[10px] px-2.5 py-1 rounded-md bg-[#5DCAA5]/10 text-[#5DCAA5] font-bold uppercase tracking-widest border border-[#5DCAA5]/10">
            Case study
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--text3)] mb-4 font-mono">
              The Problem
            </div>
            <p className="text-[15px] text-[var(--text2)] leading-relaxed font-light">
              {cs.problem}
            </p>
          </div>
          
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--text3)] mb-4 font-mono">
              The Decision
            </div>
            <p className="text-[15px] text-[var(--text2)] leading-relaxed font-light">
              {cs.decision}
            </p>
          </div>

          <div className="relative">
            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--text3)] mb-4 font-mono">
              The Impact
            </div>
            <p className="text-[15px] text-[var(--text2)] leading-relaxed font-light mb-6">
              {cs.impact}
            </p>
            {cs.metricValue && (
              <div className="text-5xl md:text-7xl font-serif text-[#5DCAA5] leading-none tabular-nums tracking-tighter">
                {cs.metricValue}
              </div>
            )}
          </div>
        </div>
      </GlassCard>
    </Section>
  );
}
