"use client";

import { motion } from "framer-motion";

interface InfiniteImageSpinProps {
  items: string[];
  speed?: number;
  direction?: 1 | -1;
  className?: string;
}

export function InfiniteImageSpin({ 
  items, 
  speed = 20, 
  direction = 1,
  className = "" 
}: InfiniteImageSpinProps) {
  return (
    <div className={`w-full overflow-hidden flex relative ${className}`}>
        {/* Fading edges (Adjusted to use CSS variables for theme consistency) */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--bg)] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--bg)] to-transparent z-10 pointer-events-none" />
        
        <motion.div
            className="flex shrink-0 items-center justify-center gap-16 px-8"
            animate={{
                x: direction === 1 ? ["0%", "-50%"] : ["-50%", "0%"]
            }}
            transition={{
                duration: speed,
                ease: "linear",
                repeat: Infinity
            }}
            style={{ willChange: "transform" }}
        >
            {/* Map items twice to ensure seamless loop */}
            {[...items, ...items].map((item, i) => (
                <div key={i} className="flex items-center text-[var(--text3)] font-mono text-sm tracking-widest uppercase whitespace-nowrap opacity-40 hover:opacity-100 transition-opacity">
                    <span>{item}</span>
                    <span className="ml-16 text-[#5DCAA5]/40 font-bold">/</span>
                </div>
            ))}
        </motion.div>
    </div>
  );
}
