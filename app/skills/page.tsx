"use client";

import React from "react";
import { motion } from "framer-motion";
import { ProficiencyTiers } from "@/components/sections/skills/ProficiencyTiers";
import { TechCategories } from "@/components/sections/skills/TechCategories";
import { CurrentBuild } from "@/components/sections/skills/CurrentBuild";
import { StackComparison } from "@/components/sections/skills/StackComparison";
import { StrategyBlocks } from "@/components/sections/skills/StrategyBlocks";

export default function SkillsPage() {
  return (
    <div className="pt-10 pb-20 max-w-[900px] mx-auto">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <span className="text-[11px] font-medium tracking-[0.08em] uppercase text-[var(--text3)] mb-2 block font-mono">
          Technical skills
        </span>
        <h1 className="text-[36px] font-medium text-[var(--text)] tracking-[-0.03em] leading-tight">
          Stack & depth
        </h1>
      </motion.div>

      {/* Grid of expert/proficient/growing */}
      <ProficiencyTiers />

      {/* Categorized blocks */}
      <TechCategories />

      {/* Currently building signal */}
      <CurrentBuild />

      {/* Comparison: Old vs New */}
      <StackComparison />

      {/* Strategy / Narrative blocks */}
      <StrategyBlocks />
      
      {/* Footer / CTA links */}
      <div className="mt-12 pt-8 border-t border-[var(--border)] flex justify-between items-center text-[13px]">
        <span className="text-[var(--text3)]">Last updated April 2026</span>
        <a 
          href="/work" 
          className="text-[var(--text)] hover:text-[var(--sage)] transition-colors flex items-center gap-1.5 font-medium"
        >
          View projects in production <span className="text-[11px]">↗</span>
        </a>
      </div>
    </div>
  );
}
