"use client";

import React from "react";
import { CURRENTLY_BUILDING } from "@/constants";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

export function CurrentBuild() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card p-6 mb-12 flex items-center gap-4 border-[var(--border-accent)]"
    >
      <div className="w-12 h-12 rounded-[12px] bg-[var(--bg-surface)] flex items-center justify-center text-[var(--text2)]">
        <Clock size={20} />
      </div>
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[10px] font-medium uppercase tracking-[0.1em] text-[var(--blue-text)] bg-[var(--blue-light)] px-2 py-0.5 rounded-full font-mono">
            Currently building with
          </span>
        </div>
        <h4 className="text-[15px] font-medium text-[var(--text)] mb-0.5 tracking-tight">
          {CURRENTLY_BUILDING.title}
        </h4>
        <p className="text-[13px] text-[var(--text2)] font-light leading-relaxed">
          {CURRENTLY_BUILDING.description}
        </p>
      </div>
    </motion.div>
  );
}
