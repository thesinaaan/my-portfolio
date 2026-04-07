import React from "react";
import { Section } from "@/components/ui/Section";
import { ProficiencyTiers } from "@/components/sections/skills/ProficiencyTiers";
import { TechCategories } from "@/components/sections/skills/TechCategories";
import { CurrentBuild } from "@/components/sections/skills/CurrentBuild";
import { StackComparison } from "@/components/sections/skills/StackComparison";
import { StrategyBlocks } from "@/components/sections/skills/StrategyBlocks";
import Link from "next/link";

export default function SkillsPage() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section (Standardized padding) */}
      <Section className="text-center pt-32 pb-16">
        <h1 className="text-5xl md:text-7xl font-serif text-[var(--text)] mb-6 tracking-tight">
          Stack & Depth
        </h1>
        <p className="text-lg md:text-xl text-[var(--text2)] max-w-3xl mx-auto leading-relaxed">
          A breakdown of my technical expertise, categorized by depth of experience and real-world application. No inflated bars, just honest signals.
        </p>
      </Section>

      {/* 2. Proficiency Grid (3-Column Layout) */}
      <ProficiencyTiers />

      {/* 3. Tech Categories Stack */}
      <TechCategories />

      {/* 4. Current Focus Indicator */}
      <CurrentBuild />

      {/* 5. Old vs New Comparison (Narrative) */}
      <StackComparison />

      {/* 6. Strategic Philosophy Blocks */}
      <StrategyBlocks />

      {/* Footer / CTA links */}
      <Section className="pt-0 pb-32">
        <div className="flex justify-between items-center text-[13px] border-t border-white/5 pt-12">
          <span className="text-[var(--text3)]">Last updated April 2026</span>
          <Link 
            href="/work" 
            className="text-[var(--text)] hover:text-[var(--text3)] transition-colors flex items-center gap-1.5 font-medium"
          >
            Review implementations <span className="text-[11px]">↗</span>
          </Link>
        </div>
      </Section>
    </div>
  );
}
