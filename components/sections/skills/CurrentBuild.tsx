"use client";

import React from "react";
import { CURRENTLY_BUILDING } from "@/constants";
import { Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";
import { Activity } from "lucide-react";
import MotionDiv from "@/components/ui/MotionDiv";
import { fadeUp } from "@/lib/motion/config";

export function CurrentBuild() {
  return (
    <Section>
      <MotionDiv {...fadeUp}>
        <GlassCard padding="p-8" className="flex flex-col md:flex-row items-start md:items-center gap-6 border-white/10">
          <div className="w-14 h-14 rounded-[16px] bg-white/5 flex items-center justify-center text-[#3B82F6] border border-white/10 shadow-inner">
            <Activity size={24} />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3B82F6] bg-white/5 px-2.5 py-1 rounded-md font-mono border border-white/5">
                Current Node
              </span>
            </div>
            <h4 className="text-[20px] font-medium text-[var(--text)] mb-2 tracking-tight">
              {CURRENTLY_BUILDING.title}
            </h4>
            <p className="text-[15px] text-[var(--text2)] font-light leading-relaxed max-w-2xl">
              {CURRENTLY_BUILDING.description}
            </p>
          </div>
        </GlassCard>
      </MotionDiv>
    </Section>
  );
}
