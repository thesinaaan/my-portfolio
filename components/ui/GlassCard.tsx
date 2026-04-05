"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  active?: boolean;
  intensity?: "light" | "medium" | "heavy";
}

export function GlassCard({ children, className, active, intensity = "medium" }: GlassCardProps) {
  const intensities = {
    light: "backdrop-blur-[2px] bg-[var(--glass2)]",
    medium: "backdrop-blur-[6px] bg-[var(--glass)]",
    heavy: "backdrop-blur-[12px] bg-[var(--glass)] saturate-[180%]",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "glass-card p-4 border transition-all duration-300",
        intensities[intensity],
        active ? "border-[var(--sage-mid)] shadow-sm shadow-[var(--sage)/5]" : "border-[var(--border2)]",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
