"use client";

import React from "react";
import { STACK_STRATEGY } from "@/constants";
import { motion } from "framer-motion";

export function StrategyBlocks() {
  return (
    <div className="mb-20">
      <div className="section-eyebrow text-[11px] font-medium tracking-[0.08em] uppercase text-[var(--text3)] mb-8 font-mono">
        Why each choice matters
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {STACK_STRATEGY.map((block, idx) => (
          <motion.div 
            key={block.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 bg-[var(--bg3)] dark:bg-[var(--bg2)] rounded-[14px] border border-[var(--border)] transition-all hover:border-[var(--border2)]"
          >
            <h4 className="text-[15px] font-medium text-[var(--text)] mb-2 tracking-tight">
              {block.title}
            </h4>
            <p className="text-[13px] text-[var(--text2)] font-light leading-relaxed">
              {block.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
