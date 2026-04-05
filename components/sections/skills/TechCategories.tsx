"use client";

import React from "react";
import { SKILL_CATEGORIES } from "@/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function TechCategories() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      {SKILL_CATEGORIES.map((cat, idx) => (
        <motion.div 
          key={cat.category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="glass-card p-6"
        >
          <span className="text-[11px] font-medium tracking-[0.08em] uppercase text-[var(--text3)] mb-4 block font-mono">
            {cat.category}
          </span>
          <div className="flex flex-wrap gap-2">
            {cat.skills.map((skill) => (
              <span 
                key={skill} 
                className={cn(
                  "px-3 py-1.5 rounded-[8px] text-[13px] border border-[var(--border)] transition-all cursor-default",
                  "bg-white dark:bg-[var(--bg2)] text-[var(--text)] hover:border-[var(--border2)]"
                )}
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
