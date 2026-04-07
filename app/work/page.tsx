import React from "react";
import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/constants";

export const metadata = {
  title: "Work — Arjun Dev",
  description: "A collection of selected engineering projects and deep-dives into technical problem-solving.",
};

export default function WorkPage() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section (Centered) */}
      <Section className="text-center pt-32 pb-8">
        <h1 className="text-5xl md:text-7xl font-serif text-[var(--text)] mb-6 tracking-tight">
          Selected Work
        </h1>
        <p className="text-lg md:text-xl text-[var(--text2)] max-w-3xl mx-auto leading-relaxed">
          I build products that solve real problems. From real-time collaboration engines to high-performance analytics dashboards, here's a look at what I've been shipping.
        </p>
      </Section>

      {/* 2. Project List (Vertical Stack) */}
      <Section className="pt-0">
        <div className="flex flex-col gap-0">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      {/* 3. Operational History Signal (Optional: Placeholder for narrative) */}
      <Section className="pt-0 pb-32">
        <div className="flex justify-between items-center text-[13px] border-t border-white/5 pt-12">
          <span className="text-[var(--text3)]">All systems operational · May 2026</span>
          <a 
            href="/about" 
            className="text-[var(--text)] hover:text-[var(--text3)] transition-colors flex items-center gap-1.5 font-medium"
          >
            Review history <span className="text-[11px]">↗</span>
          </a>
        </div>
      </Section>
    </div>
  );
}
