"use client";

import React, { useState } from "react";
import { PROJECTS } from "@/constants";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { MotionSection } from "@/app/components/ui/MotionSection";
import { Project } from "@/types";

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "saas", label: "SaaS" },
  { id: "tool", label: "Tools" },
  { id: "ui", label: "UI / Design" },
  { id: "oss", label: "Open source" },
];

export function ProjectGrid({ featuredOnly = false }: { featuredOnly?: boolean }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = PROJECTS.filter(project => {
    if (featuredOnly) return project.featured;
    if (activeFilter === "all") return true;
    return project.category === activeFilter || project.tags.some(t => t.toLowerCase().includes(activeFilter));
  });

  return (
    <MotionSection className="mb-20" delay={0.2}>
      <div className="section-header mb-8">
        <div className="section-eyebrow text-[11px] font-medium tracking-[0.08em] uppercase text-[var(--text3)] mb-2 font-mono">
          Selected work
        </div>
        <div className="section-title text-[28px] font-medium text-[var(--text)] tracking-[-0.02em] mb-2">
          Projects
        </div>
        {!featuredOnly && (
          <div className="section-meta text-[13px] text-[var(--text2)] flex items-center gap-2">
            <span>{PROJECTS.length} projects</span>
            <div className="w-[3px] h-[3px] rounded-full bg-[var(--text3)]" />
            <span>{PROJECTS.filter(p => p.production).length} in production</span>
            <div className="w-[3px] h-[3px] rounded-full bg-[var(--text3)]" />
            <span>Last updated April 2026</span>
          </div>
        )}
      </div>

      {!featuredOnly && (
        <div className="filter-row flex flex-wrap gap-1.5 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={cn(
                "px-3.5 py-1.5 rounded-full text-[12px] border border-[var(--border)] transition-all",
                activeFilter === cat.id 
                  ? "bg-[var(--text)] text-[var(--bg)] border-transparent" 
                  : "bg-transparent text-[var(--text2)] hover:border-[var(--border2)] hover:text-[var(--text)]"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}

      <motion.div 
        layout
        className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.slug} project={project} index={idx} />
          ))}
        </AnimatePresence>
      </motion.div>
    </MotionSection>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.05 }}
      className={cn(
        "proj-card glass-card group flex flex-col",
        project.featured && "md:col-span-2"
      )}
    >
      <div className="proj-preview h-[110px] md:h-[140px] bg-[var(--bg-surface)] relative overflow-hidden flex items-center justify-center">
        <PreviewPattern slug={project.slug} />
        {project.production && (
          <div className="live-indicator absolute top-2.5 right-2.5 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[var(--glass-soft)] backdrop-blur-md border border-[var(--border)] text-[10px] font-medium text-[var(--green-text)] font-mono">
            <div className="live-dot w-1.5 h-1.5 rounded-full bg-[var(--green)] animate-[pulse_2s_infinite]" />
            Live
          </div>
        )}
      </div>

      <div className="proj-body p-5 md:p-6 pb-0 flex-grow">
        <div className="proj-meta flex flex-wrap gap-1.5 mb-3">
          <span className={cn(
            "proj-badge text-[10px] px-2.5 py-0.5 rounded-full font-mono tracking-tight",
            project.category === 'saas' && "bg-[var(--green-light)] text-[var(--green-text)]",
            project.category === 'tool' && "bg-[var(--blue-light)] text-[var(--blue-text)]",
            project.category === 'ui' && "bg-[var(--amber-light)] text-[var(--amber-text)]",
            project.category === 'oss' && "border border-[var(--border2)] text-[var(--text3)]"
          )}>
            {project.category.toUpperCase()} {project.production && "· PRODUCTION"}
          </span>
          {project.featured && (
            <span className="proj-badge text-[10px] px-2.5 py-0.5 rounded-full border border-[var(--border2)] text-[var(--text3)] font-mono uppercase">
              Featured
            </span>
          )}
          {project.timeToBuild && (
            <span className="proj-badge text-[10px] px-2.5 py-0.5 rounded-full border border-[var(--border2)] text-[var(--text3)] font-mono uppercase">
              {project.timeToBuild}
            </span>
          )}
        </div>

        <h3 className="proj-title text-[15px] font-medium text-[var(--text)] mb-1.5 tracking-tight leading-snug">
          {project.title}
        </h3>
        <p className="proj-desc text-[12.5px] text-[var(--text2)] leading-relaxed mb-4 font-light">
          {project.description}
        </p>

        {project.impactMetrics && project.impactMetrics.length > 0 && (
          <div className="impact-row flex gap-4 py-3 border-y border-[var(--border)] mb-4">
            {project.impactMetrics.map((metric, mIdx) => (
              <div key={mIdx} className="impact-item flex flex-col">
                <span className="impact-num text-[15px] font-medium text-[var(--text)] tracking-tight font-mono">
                  {metric.value}
                </span>
                <span className="impact-label text-[10px] text-[var(--text3)] uppercase tracking-wider">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        )}

        <div className="tech-row flex flex-wrap gap-1.5 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="tech-pill text-[10.5px] px-2 py-0.5 rounded-[4px] bg-[var(--bg-surface)] border border-[var(--border)] text-[var(--text2)] font-mono">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="proj-footer p-5 md:p-6 pt-0 flex items-center justify-between mt-auto">
        <div className="proj-links flex gap-1.5">
          {project.links.map((link, lIdx) => (
            <a
              key={lIdx}
              href={link.href}
              className={cn(
                "proj-link text-[11.5px] px-3.5 py-1.5 rounded-[8px] border transition-all",
                link.isPrimary 
                  ? "bg-[var(--text)] text-[var(--bg)] border-transparent hover:opacity-90"
                  : "bg-transparent text-[var(--text2)] border-[var(--border)] hover:border-[var(--border2)] hover:text-[var(--text)]"
              )}
            >
              {link.label}
            </a>
          ))}
        </div>
        <span className="proj-arrow text-[13px] text-[var(--text3)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
      </div>
    </motion.div>
  );
}

function PreviewPattern({ slug }: { slug: string }) {
  if (slug === "taskflow") {
    return (
      <svg className="w-full h-full opacity-[0.08]" viewBox="0 0 800 140" preserveAspectRatio="xMidYMid slice">
        <rect x="40" y="20" width="160" height="20" rx="4" fill="currentColor" />
        <rect x="40" y="50" width="260" height="12" rx="3" fill="currentColor" opacity="0.8" />
        <rect x="40" y="70" width="200" height="12" rx="3" fill="currentColor" opacity="0.6" />
        <rect x="40" y="95" width="80" height="26" rx="6" fill="currentColor" opacity="0.9" />
        <rect x="130" y="95" width="80" height="26" rx="6" fill="currentColor" opacity="0.6" />
        <rect x="460" y="15" width="300" height="110" rx="10" fill="currentColor" opacity="0.6" />
        <rect x="476" y="28" width="100" height="10" rx="3" fill="currentColor" />
        <rect x="476" y="46" width="268" height="1" fill="currentColor" opacity="0.9" />
        <rect x="476" y="58" width="80" height="8" rx="2" fill="currentColor" opacity="0.8" />
      </svg>
    );
  }
  if (slug === "markdiff") {
    return (
      <svg className="w-full h-full opacity-[0.08]" viewBox="0 0 400 110" preserveAspectRatio="xMidYMid slice">
        <rect x="20" y="15" width="170" height="80" rx="6" fill="currentColor" opacity="0.7" />
        <rect x="210" y="15" width="170" height="80" rx="6" fill="currentColor" opacity="0.7" />
        <rect x="30" y="28" width="130" height="6" rx="2" fill="currentColor" />
        <rect x="30" y="42" width="100" height="5" rx="2" fill="currentColor" opacity="0.6" />
        <rect x="193" y="15" width="1" height="80" fill="currentColor" />
      </svg>
    );
  }
  if (slug === "glaze-ui") {
    return (
      <svg className="w-full h-full opacity-[0.08]" viewBox="0 0 400 110" preserveAspectRatio="xMidYMid slice">
        <rect x="30" y="20" width="80" height="70" rx="8" fill="currentColor" opacity="0.8" />
        <rect x="122" y="20" width="80" height="70" rx="8" fill="currentColor" opacity="0.7" />
        <rect x="214" y="20" width="80" height="70" rx="8" fill="currentColor" opacity="0.6" />
        <rect x="306" y="20" width="80" height="70" rx="8" fill="currentColor" opacity="0.7" />
      </svg>
    );
  }
  return (
    <svg className="w-full h-full opacity-[0.08]" viewBox="0 0 400 110" preserveAspectRatio="xMidYMid slice">
      <rect x="30" y="25" width="340" height="14" rx="4" fill="currentColor" opacity="0.8" />
      <rect x="30" y="47" width="240" height="10" rx="3" fill="currentColor" opacity="0.7" />
      <rect x="320" y="47" width="50" height="44" rx="6" fill="currentColor" opacity="0.7" />
    </svg>
  );
}
