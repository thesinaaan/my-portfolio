"use client";

import React from "react";
import { STACK_STRATEGY } from "@/constants";
import { Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";
import { Lightbulb } from "lucide-react";

export function StrategyBlocks() {
  return (
    <Section>
      <div className="section-eyebrow text-[11px] font-medium tracking-[0.08em] uppercase text-[var(--text3)] mb-10 font-mono">
        Strategic Philosophy
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {STACK_STRATEGY.map((block, idx) => (
          <GlassCard key={block.title} className="p-8 md:p-10 group">
            <div className="flex items-center gap-3 mb-8">
              <Lightbulb size={18} className="text-[#5DCAA5] opacity-50 group-hover:opacity-100 transition-opacity" />
              <h4 className="text-[17px] font-medium text-[var(--text)] tracking-tight">
                {block.title}
              </h4>
            </div>
            
            <div className="space-y-4">
              {/* Splitting long description text into bullets for scannability */}
              {block.description.split(". ").map((bullet, bIdx) => (
                <div key={bIdx} className="flex items-start gap-3 text-[14px] text-[var(--text2)] font-light leading-relaxed">
                  <div className="w-1 h-1 rounded-full bg-white/20 mt-2 flex-shrink-0" />
                  <span>{bullet.endsWith('.') ? bullet : `${bullet}.`}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}
