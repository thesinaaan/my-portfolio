"use client";

import React from "react";
import { ScrollWordReveal } from "@/components/animations/ScrollWordReveal";
import { Cube3D } from "@/components/animations/Cube3D";
import { Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";

export function AboutSection() {
  return (
    <Section id="about" className="border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
        
        {/* Left Column: Mission Narrative */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#5DCAA5] mb-8 font-mono">
            Operational History
          </div>
          <div className="text-3xl md:text-5xl font-serif text-[var(--text)] leading-[1.3] md:leading-[1.4] tracking-tight text-balance">
            <ScrollWordReveal text="I am Sinan from Kerala. I build front-end systems that feel vast yet controlled. My work prioritizes architectural stability, calm motion, and immersive atmosphere. Every animation is calculated. Every interaction is engineered. There is no noise in the signal." />
          </div>
        </div>

        {/* Right Column: Cube & Status Panel */}
        <div className="lg:col-span-4 flex flex-col items-center lg:items-end gap-12">
          <Cube3D faces={["Sinan", "Builder", "Designer", "Engineer"]} size={160} />
          
          <GlassCard className="w-full max-w-[320px]">
            <div className="flex flex-col justify-between h-full">
              <div className="text-[10px] uppercase font-mono tracking-widest text-[#5DCAA5] mb-6">System Status</div>
              <div className="text-[12px] font-mono text-[var(--text2)] leading-relaxed">
                &gt; Initializing liquid glass...<br/>
                &gt; Loading neural core...<br/>
                &gt; Syncing Kerala node...<br/>
                &gt; 100% Signal strength.
              </div>
            </div>
          </GlassCard>
        </div>

      </div>
    </Section>
  );
}
