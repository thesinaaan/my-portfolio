"use client";

import React from "react";
import { SKILL_TIERS } from "@/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function ProficiencyTiers() {
  const expert = SKILL_TIERS.filter(s => s.status === "expert");
  const proficient = SKILL_TIERS.filter(s => s.status === "proficient");
  const growing = SKILL_TIERS.filter(s => s.status === "growing");

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
      <TierCard title="Expert" skills={expert} color="var(--green)" />
      <TierCard title="Proficient" skills={proficient} color="var(--blue)" />
      <TierCard title="Growing" skills={growing} color="var(--amber)" />
    </div>
  );
}

function TierCard({ title, skills, color }: { title: string; skills: typeof SKILL_TIERS; color: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card p-5"
    >
      <div className="flex items-center gap-2 mb-6">
        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
        <span className="text-[11px] font-medium uppercase tracking-wider text-[var(--text3)] font-mono">
          {title}
        </span>
      </div>
      <div className="space-y-4">
        {skills.map((skill, idx) => (
          <div key={skill.name} className="skill-item">
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-[14px] font-medium text-[var(--text)]">{skill.name}</span>
              <span className="text-[11px] text-[var(--text3)] font-mono">{skill.years}</span>
            </div>
            <div className="h-[3px] w-full bg-[var(--border)] rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: getWidth(skill.status) }}
                transition={{ duration: 1, delay: idx * 0.1 }}
                className="h-full"
                style={{ backgroundColor: color }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function getWidth(status: string) {
  if (status === "expert") return "85%";
  if (status === "proficient") return "60%";
  return "35%";
}
