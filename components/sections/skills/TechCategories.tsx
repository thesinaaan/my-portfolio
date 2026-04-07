"use client";

import React from "react";
import { SKILL_CATEGORIES } from "@/constants";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";

export function TechCategories() {
  return (
    <Section>
      <div className="section-eyebrow text-[11px] font-medium tracking-[0.08em] uppercase text-[var(--text3)] mb-10 font-mono">
        System Overview (Categorized)
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <GlassCard key={cat.category} className="p-8">
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-[var(--text3)] mb-6 block font-mono">
              {cat.category}
            </span>
            <div className="flex flex-wrap gap-2.5">
              {cat.skills.map((skill) => (
                <span 
                  key={skill} 
                  className={cn(
                    "px-4 py-2 rounded-[10px] text-[13px] border border-white/5 transition-all cursor-default",
                    "bg-white/5 text-[var(--text)] hover:border-white/20"
                  )}
                >
                  {skill}
                </span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}
