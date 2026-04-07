"use client";

import React from "react";
import { PROJECTS } from "@/constants";
import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/ui/ProjectCard";
import MotionDiv from "@/components/ui/MotionDiv";
import { fadeUp } from "@/lib/motion/config";

export function ProjectGrid({ featuredOnly = false }: { featuredOnly?: boolean }) {
  const projectsToDisplay = featuredOnly ? PROJECTS.filter(p => p.featured || p.production) : PROJECTS;

  return (
    <Section id="projects" className="border-t border-white/5">
      {/* 2. Headline Group */}
      <MotionDiv {...fadeUp}>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <div className="text-[11px] uppercase font-bold tracking-[0.3em] font-mono text-[#5DCAA5] mb-6">
              Featured Work
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-white tracking-tight leading-tight">
              Production-grade <br />
              <span className="opacity-40">engineering selected.</span>
            </h2>
          </div>
          
          <p className="max-w-[400px] text-white/40 text-[15px] font-light leading-relaxed">
            A collection of focused deep-dives into React ecosystems, performance, and UI architecture.
          </p>
        </div>
      </MotionDiv>

      {/* 3. Project Cards (Vertical Stack for Performance) */}
      <MotionDiv {...fadeUp}>
        <div className="flex flex-col gap-0">
          {projectsToDisplay.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </MotionDiv>

      {/* Optional link for entire archive */}
      {featuredOnly && (
        <MotionDiv {...fadeUp}>
          <div className="mt-16 flex justify-center">
            <a 
              href="/work" 
              className="text-[13px] font-medium text-white/40 hover:text-white transition-colors flex items-center gap-2 group"
            >
              Review entire project archive 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </MotionDiv>
      )}
    </Section>
  );
}
