import React from "react";
import { ABOUT_METADATA } from "@/constants";
import { Button } from "@/components/ui/Button";

export function AboutCardSection() {
  return (
    <section className="mb-20 pt-10">
      <div className="section-label text-[11px] uppercase tracking-[0.2em] text-[var(--text3)] mb-8">
        About
      </div>
      <div className="about-grid grid grid-cols-1 md:grid-cols-[1fr_320px] gap-10 md:gap-20 items-start">
        <div className="about-text space-y-6">
          <p className="text-[15px] md:text-[17px] text-[var(--text2)] leading-[1.8]">
            I started writing HTML on a school computer in Kochi at age 14 because I wanted to make things that other people could use. That itch never went away — it just got more precise. These days I build web products end-to-end, with a bias toward the frontend and a soft spot for performance problems that most people file as "good enough."
          </p>
          <p className="text-[15px] md:text-[17px] text-[var(--text2)] leading-[1.8]">
            What I actually care about technically: time-to-interactive, state management that doesn't fight you at 10k lines, and APIs that are obvious to the next engineer. I ship with care, move fast, and document the decisions that matter.
          </p>
          <p className="text-[15px] md:text-[17px] text-[var(--text2)] leading-[1.8]">
            Looking for a team that builds something real — where there's genuine craft in the codebase and genuine curiosity about what comes next.
          </p>
        </div>
        
        <div className="about-card bg-[var(--bg3)] border border-[var(--border)] rounded-[14px] p-6 md:p-8 shadow-sm">
          <div className="space-y-4">
            {ABOUT_METADATA.map((row, idx) => (
              <div key={idx} className="about-meta-row flex justify-between py-2 border-b border-[var(--border)] last:border-b-0 text-[13px]">
                <span className="about-meta-label text-[var(--text3)] uppercase tracking-tight">{row.label}</span>
                <span className="about-meta-value text-[var(--text)] font-semibold">{row.value}</span>
              </div>
            ))}
          </div>
          <div className="connect-btns mt-10 space-y-2.5">
            <Button variant="secondary" className="w-full text-left justify-start">✉ arjun@dev.io</Button>
            <Button variant="secondary" className="w-full text-left justify-start">↗ Schedule a call</Button>
            <Button variant="secondary" className="w-full text-left justify-start">⬇ Download résumé</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
