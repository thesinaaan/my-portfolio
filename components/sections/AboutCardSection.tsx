import React from "react";
import { ABOUT_METADATA } from "@/constants";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";

export function AboutCardSection() {
  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left-side Text: Biography Wrapper in GlassCard */}
        <div className="lg:col-span-8">
          <GlassCard className="h-full">
            <div className="text-[11px] uppercase tracking-[0.2em] text-[var(--text3)] mb-10 font-mono">
              Operational Brief
            </div>
            <div className="space-y-6">
              <p className="text-[17px] md:text-[19px] text-[var(--text2)] leading-relaxed font-light">
                I started writing HTML on a school computer in Kochi at age 14 because I wanted to make things that other people could use. That itch never went away — it just got more precise. These days I build web products end-to-end, with a bias toward the frontend and a soft spot for performance problems that most people file as "good enough."
              </p>
              <p className="text-[17px] md:text-[19px] text-[var(--text2)] leading-relaxed font-light">
                What I actually care about technically: time-to-interactive, state management that doesn't fight you at 10k lines, and APIs that are obvious to the next engineer. I ship with care, move fast, and document the decisions that matter.
              </p>
              <p className="text-[17px] md:text-[19px] text-[var(--text2)] leading-relaxed font-light">
                Looking for a team that builds something real — where there's genuine craft in the codebase and genuine curiosity about what comes next.
              </p>
            </div>
          </GlassCard>
        </div>
        
        {/* Right-side Info: Specs Panel Wrapper in GlassCard */}
        <div className="lg:col-span-4">
          <GlassCard className="h-full">
            <div className="text-[11px] uppercase tracking-[0.2em] text-[var(--text3)] mb-10 font-mono uppercase">
              System Specs
            </div>
            <div className="space-y-4">
              {ABOUT_METADATA.map((row, idx) => (
                <div key={idx} className="flex justify-between items-center py-3.5 border-b border-white/5 last:border-b-0 text-sm">
                  <span className="text-[var(--text3)] uppercase tracking-tight font-mono text-[10px]">{row.label}</span>
                  <span className="text-[var(--text)] font-semibold">{row.value}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 space-y-3">
              <Button variant="secondary" className="w-full text-left justify-between group h-12 bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                <span>✉ Email</span>
                <span className="text-[var(--text3)] opacity-0 group-hover:opacity-100 transition-opacity font-mono text-xs">arjun@dev.io</span>
              </Button>
              <Button variant="secondary" className="w-full text-left justify-between group h-12 bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                <span>↗ Booking</span>
                <span className="text-[var(--text3)] opacity-0 group-hover:opacity-100 transition-opacity font-mono text-xs">Schedule Call</span>
              </Button>
            </div>
          </GlassCard>
        </div>

      </div>
    </Section>
  );
}
