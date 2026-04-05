import React from "react";
import { SKILL_TIERS } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function SkillsSection() {
  const expert = SKILL_TIERS.filter(s => s.status === "expert");
  const proficient = SKILL_TIERS.filter(s => s.status === "proficient");
  const growing = SKILL_TIERS.filter(s => s.status === "growing");

  return (
    <section className="mb-20">
      <div className="flex items-center justify-between mb-8">
        <div className="section-label text-[11px] uppercase tracking-[0.2em] text-[var(--text3)]">
          Technical Skills
        </div>
        <Link 
          href="/skills" 
          className="text-[12px] text-[var(--text2)] hover:text-[var(--text)] transition-colors flex items-center gap-1 font-medium"
        >
          View full stack <span className="text-[10px]">↗</span>
        </Link>
      </div>
      
      <div className="skills-grid grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { title: "Expert", skills: expert, color: "var(--green)" },
          { title: "Proficient", skills: proficient, color: "var(--blue)" },
          { title: "Growing", skills: growing, color: "var(--amber)" },
        ].map((col, idx) => (
          <div key={idx} className="skill-col bg-[var(--bg3)] border border-[var(--border)] rounded-[14px] p-5 shadow-sm group hover:border-[var(--border2)] transition-all">
            <div className="skill-col-title text-[11px] font-medium text-[var(--text3)] mb-4 pb-2 border-b border-[var(--border)] uppercase tracking-wider font-mono flex items-center gap-2">
              <div className="w-1 h-1 rounded-full" style={{ backgroundColor: col.color }} />
              {col.title}
            </div>
            <div className="flex flex-col gap-3">
              {col.skills.slice(0, 4).map((skill, sIdx) => (
                <div key={sIdx} className="skill-row flex items-center justify-between group/row">
                  <span className="skill-name text-[14px] text-[var(--text)] font-light">
                    {skill.name}
                  </span>
                  <div className="flex items-center gap-3">
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
                <div className="text-[11px] text-[var(--text3)] pt-1 italic">
                  + {col.skills.length - 4} more
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
