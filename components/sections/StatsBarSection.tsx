import React from "react";
import { StatItem } from "@/components/ui/StatItem";
import { STAT_BAR } from "@/constants";
import { Section } from "@/components/ui/Section";

export function StatsBarSection() {
  return (
    <Section className="border-y border-white/5 py-12">
      <div className="flex flex-wrap gap-12 md:gap-20 justify-center md:justify-start overflow-x-auto no-scrollbar">
        {STAT_BAR.map((stat, idx) => (
          <StatItem 
            key={idx} 
            label={stat.label} 
            value={stat.value} 
          />
        ))}
      </div>
    </Section>
  );
}
