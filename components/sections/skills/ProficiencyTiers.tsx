"use client";

import React from "react";
import { SKILL_TIERS } from "@/constants";
import { Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";
import MotionDiv from "@/components/ui/MotionDiv";
import { fadeUp } from "@/lib/motion/config";

export function ProficiencyTiers() {
  const expert = SKILL_TIERS.filter(s => s.status === "expert");
  const proficient = SKILL_TIERS.filter(s => s.status === "proficient");
  const growing = SKILL_TIERS.filter(s => s.status === "growing");

  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <TierCard title="Expert" skills={expert} color="#5DCAA5" />
        <TierCard title="Proficient" skills={proficient} color="#3B82F6" />
        <TierCard title="Growing" skills={growing} color="#F59E0B" />
      </div>
    </Section>
  );
}

function TierCard({ title, skills, color }: { title: string; skills: typeof SKILL_TIERS; color: string }) {
  return (
    <MotionDiv {...fadeUp}>
      <GlassCard 
        className="h-full transition-transform duration-300 hover:scale-[1.02]"
      >
        <div className="flex items-center gap-3 mb-10 pb-4 border-b border-white/5">
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--text3)] font-mono">
            {title}
          </span>
        </div>
        
        <ul className="space-y-6">
          {skills.map((skill) => (
            <li key={skill.name} className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="text-[17px] font-light text-[var(--text)] tracking-tight">
                  {skill.name}
                </span>
                <span className="text-[10px] uppercase font-mono text-[var(--text3)] tracking-widest px-2 py-0.5 rounded-md bg-white/5 border border-white/5">
                  {skill.years}
                </span>
              </div>
              <div className="flex gap-1.5 opacity-40">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div 
                    key={i} 
                    className="h-1 w-4 rounded-full" 
                    style={{ 
                      backgroundColor: i < (title === "Expert" ? 3 : title === "Proficient" ? 2 : 1) ? color : "white",
                      opacity: i < (title === "Expert" ? 3 : title === "Proficient" ? 2 : 1) ? 1 : 0.1
                    }}
                  />
                ))}
              </div>
            </li>
          ))}
        </ul>
      </GlassCard>
    </MotionDiv>
  );
}
