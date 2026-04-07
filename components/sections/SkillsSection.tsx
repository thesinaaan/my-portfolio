import React from "react";
import { SKILL_TIERS } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";

export function SkillsSection() {
  const expert = SKILL_TIERS.filter(s => s.status === "expert");
  const proficient = SKILL_TIERS.filter(s => s.status === "proficient");
  const growing = SKILL_TIERS.filter(s => s.status === "growing");

  const skillGroups = [
    { title: "Expert", skills: expert, color: "#5DCAA5" },
    { title: "Proficient", skills: proficient, color: "#3B82F6" },
    { title: "Growing", skills: growing, color: "#F59E0B" },
  ];

  return (
    <Section>
      <div className="flex items-center justify-between mb-12">
        <div className="section-label text-[11px] uppercase tracking-[0.2em] text-[var(--text3)]">
          Stack & Depth
        </div>
        <Link 
          href="/skills" 
          className="text-[12px] text-[var(--text2)] hover:text-[var(--text)] transition-colors flex items-center gap-1 font-medium"
        >
          View full stack <span className="text-[10px]">↗</span>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillGroups.map((col, idx) => (
          <GlassCard key={idx} padding="p-6 md:p-8" className="group h-full">
            <div className="text-[11px] font-medium text-[var(--text3)] mb-8 pb-3 border-b border-white/5 uppercase tracking-wider font-mono flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: col.color }} />
              {col.title}
            </div>
            <div className="flex flex-col gap-5">
              {col.skills.slice(0, 4).map((skill, sIdx) => (
                <div key={sIdx} className="flex items-center justify-between group/row">
                  <span className="text-[16px] text-[var(--text)] font-light tracking-tight">
                    {skill.name}
                  </span>
                  <div className="flex items-center gap-3.5">
                    <span className="text-[11px] text-[var(--text3)] font-mono opacity-0 group-hover/row:opacity-100 transition-opacity">
                      {skill.years || "active"}
                    </span>
                    <div 
                      className="w-1.5 h-1.5 rounded-full opacity-40 group-hover/row:opacity-100 transition-opacity"
                      style={{ backgroundColor: col.color }}
                    />
                  </div>
                </div>
              ))}
              {col.skills.length > 4 && (
                <div className="text-[11px] text-[var(--text3)] pt-3 italic opacity-60 font-mono">
                  + {col.skills.length - 4} more
                </div>
              )}
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}
