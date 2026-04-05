import React from "react";
import { StatItem } from "@/components/ui/StatItem";
import { STAT_BAR } from "@/constants";

export function StatsBarSection() {
  return (
    <div className="stat-bar flex flex-wrap gap-10 py-5 border-y-[0.5px] border-[var(--border)] mb-20 overflow-x-auto no-scrollbar">
      {STAT_BAR.map((stat, idx) => (
        <StatItem 
          key={idx} 
          label={stat.label} 
          value={stat.value} 
        />
      ))}
    </div>
  );
}
