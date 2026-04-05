import React from "react";
import { PROJECTS } from "@/constants";

export function CaseStudySection() {
  const featured = PROJECTS.find(p => p.caseStudy);

  if (!featured || !featured.caseStudy) return null;

  return (
    <section className="mb-20">
      <div className="section-label text-[11px] uppercase tracking-[0.2em] text-[var(--text3)] mb-8">
        Case Study
      </div>
      <div className="case-study bg-[var(--bg3)] border border-[var(--border)] rounded-[14px] p-7 md:p-10 shadow-sm relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--sage)]/5 blur-3xl -z-10" />

        <div className="cs-header flex flex-wrap items-baseline gap-3 mb-8">
          <span className="cs-title font-serif text-[22px] md:text-[28px] text-[var(--text)]">
            {featured.title} — {featured.description.split('.')[0]}
          </span>
          <span className="cs-badge text-[11px] px-2.5 py-1 rounded-full bg-[var(--sage-light)] text-[var(--accent)] font-medium">
            Case study
          </span>
        </div>

        <div className="cs-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="cs-block">
            <div className="cs-label text-[11px] uppercase tracking-wider text-[var(--text3)] mb-2.5">
              Problem
            </div>
            <p className="text-[13px] text-[var(--text2)] leading-relaxed">
              {featured.caseStudy.problem}
            </p>
          </div>
          
          <div className="cs-block">
            <div className="cs-label text-[11px] uppercase tracking-wider text-[var(--text3)] mb-2.5">
              Decision
            </div>
            <p className="text-[13px] text-[var(--text2)] leading-relaxed">
              {featured.caseStudy.decision}
            </p>
          </div>

          <div className="cs-block relative">
            <div className="cs-label text-[11px] uppercase tracking-wider text-[var(--text3)] mb-2.5">
              Impact
            </div>
            <p className="text-[13px] text-[var(--text2)] leading-relaxed">
              {featured.caseStudy.impact}
            </p>
            {featured.caseStudy.metricValue && (
              <div className="cs-metric text-[32px] md:text-[44px] font-serif text-[var(--sage)] leading-none mt-4 tabular-nums">
                {featured.caseStudy.metricValue}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
