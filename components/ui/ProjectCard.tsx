"use client";

import React from "react";
import { Project } from "@/types";
import { GlassCard } from "./GlassCard";
import { ExternalLink, Github } from "lucide-react";
import MotionDiv from "./MotionDiv";
import { fadeUp } from "@/lib/motion/config";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <MotionDiv {...fadeUp}>
      <GlassCard 
        padding="p-8 md:p-12 mb-8" 
        className="transition-transform duration-500 ease-out hover:scale-[1.015] active:scale-[0.99]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Info Column */}
          <div className="lg:col-span-8 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#5DCAA5] bg-[#5DCAA5]/5 px-2 py-0.5 rounded border border-[#5DCAA5]/10">
                  {project.category}
                </span>
                {project.production && (
                  <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#3B82F6] bg-[#3B82F6]/5 px-2 py-0.5 rounded border border-[#3B82F6]/10">
                    Production
                  </span>
                )}
              </div>
              
              <h3 className="text-3xl md:text-4xl font-serif text-[var(--text)] mb-6 tracking-tight">
                {project.title}
              </h3>
              
              <p className="text-[17px] md:text-[18px] text-[var(--text2)] leading-relaxed font-light mb-10 max-w-2xl">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2.5">
                {project.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="px-3 py-1.5 rounded-lg border border-white/5 bg-white/5 text-[12px] font-mono text-[var(--text3)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex gap-4 mt-12">
              {project.links?.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className={`
                    inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all
                    ${link.isPrimary 
                      ? "bg-white/10 text-white hover:bg-white/20 border border-white/10" 
                      : "text-[var(--text3)] hover:text-white"
                    }
                  `}
                >
                  {link.label === "GitHub" ? <Github size={16} /> : <ExternalLink size={16} />}
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Metrics Column */}
          <div className="lg:col-span-4 h-full">
            <div className="h-full border-t lg:border-t-0 lg:border-l border-white/5 pt-10 lg:pt-0 lg:pl-10">
              <div className="text-[11px] uppercase tracking-[0.2em] text-[var(--text3)] mb-8 font-mono">
                Impact Metrics
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-6">
                {project.impactMetrics?.map((metric, idx) => (
                  <div key={idx} className="flex flex-col gap-1">
                    <span className="text-3xl font-serif text-[var(--text)] tracking-tight">
                      {metric.value}
                    </span>
                    <span className="text-[11px] uppercase tracking-wider text-[var(--text3)] font-mono">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </GlassCard>
    </MotionDiv>
  );
}
