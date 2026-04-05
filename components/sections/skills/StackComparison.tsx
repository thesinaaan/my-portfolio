"use client";

import React from "react";
import { motion } from "framer-motion";

export function StackComparison() {
  return (
    <div className="mb-16">
      <div className="section-eyebrow text-[11px] font-medium tracking-[0.08em] uppercase text-[var(--text3)] mb-8 font-mono">
        What changed in 2026 — old vs new approach
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Old Card */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-6 bg-[var(--bg-surface)] dark:bg-[var(--bg2)] rounded-[14px] border border-[var(--border)]"
        >
          <span className="text-[11px] font-medium tracking-[0.08em] uppercase text-[var(--text3)] mb-6 block font-mono">
            Old (Avoid)
          </span>
          <div className="space-y-4">
            <div className="flex flex-col gap-1">
              <div className="flex justify-between text-[13px] text-[var(--text2)]">
                <span>HTML</span>
                <span>90%</span>
              </div>
              <div className="h-[2px] bg-[var(--border2)] rounded-full">
                <div className="h-full bg-[var(--text3)] w-[90%]" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between text-[13px] text-[var(--text2)]">
                <span>CSS</span>
                <span>75%</span>
              </div>
              <div className="h-[2px] bg-[var(--border2)] rounded-full">
                <div className="h-full bg-[var(--text3)] w-[75%]" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between text-[13px] text-[var(--text2)]">
                <span>JS</span>
                <span>85%</span>
              </div>
              <div className="h-[2px] bg-[var(--border2)] rounded-full">
                <div className="h-full bg-[var(--text3)] w-[85%]" />
              </div>
            </div>
            <p className="text-[13px] text-[var(--text3)] pt-4 border-t border-[var(--border)] leading-relaxed italic">
              Logo grid of 20 tools. No depth signal at all. Percentage bars are meaningless.
            </p>
          </div>
        </motion.div>

        {/* New Card */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-6 bg-[var(--green-light)] rounded-[14px] border border-[var(--border-accent)]"
        >
          <span className="text-[11px] font-medium tracking-[0.08em] uppercase text-[var(--green-text)] mb-6 block font-mono">
            2026 (Use This)
          </span>
          <div className="space-y-3">
            {[
              "3-tier depth: Expert / Proficient / Growing",
              "Years + thin bar — honest, not inflated",
              "AI / emerging tech column shows curiosity",
              "\"Currently building with\" live signal",
              "Categories: frontend, backend, tooling, AI",
            ].map((text, idx) => (
              <div key={idx} className="flex items-center gap-2 text-[14px] text-[var(--green-text)] font-medium">
                <div className="w-1 h-1 rounded-full bg-[var(--green)]" />
                {text}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
