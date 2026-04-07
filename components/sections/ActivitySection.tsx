"use client";

import React from "react";
import { Heatmap } from "@/components/ui/Heatmap";
import { Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";

export function ActivitySection() {
  return (
    <Section>
      <div className="flex items-center justify-between mb-12">
        <div className="section-label text-[11px] uppercase tracking-[0.2em] text-[var(--text3)]">
          Activity Dashboard
        </div>
        <div className="flex items-center gap-2.5 text-[10px] font-mono text-[var(--text3)] opacity-60">
          <div className="w-1.5 h-1.5 rounded-full bg-[#5DCAA5]" />
          Updated: April 2026
        </div>
      </div>
      
      <GlassCard padding="p-8 md:p-12">
        <Heatmap />
      </GlassCard>
    </Section>
  );
}
