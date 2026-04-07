"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { INTERSTELLAR_EASE } from "@/lib/motion/constants";
import { cn } from "@/lib/utils";

const STAR_DATA = Array.from({ length: 50 }).map(() => ({
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  scale: Math.random() * 2,
  initialOpacity: Math.random(),
  baseAnimOpacity: Math.random(),
  duration: Math.random() * 3 + 2,
}));

export default function StarsGalaxy() {
  const [showPreloader, setShowPreloader] = useState(true);

  if (!showPreloader) return null;

  return (
    <motion.div
      animate={{ opacity: [1, 1, 0] }}
      transition={{ duration: 2.4, times: [0, 0.75, 1], ease: "easeInOut" }}
      onAnimationComplete={() => setShowPreloader(false)}
      style={{ pointerEvents: showPreloader ? 'auto' : 'none' }}
      className="fixed inset-0 z-[99999] bg-[#020408] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Subtle star background */}
      <div className="absolute inset-0 opacity-40">
        {STAR_DATA.map((star, i) => (
          <motion.div
            key={i}
            initial={{ opacity: star.initialOpacity }}
            animate={{ opacity: [star.baseAnimOpacity, star.baseAnimOpacity * 0.5, star.baseAnimOpacity] }}
            transition={{ duration: star.duration, repeat: Infinity }}
            className="absolute w-[1px] h-[1px] bg-white rounded-full"
            style={{
              top: star.top,
              left: star.left,
              transform: `scale(${star.scale})`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex overflow-hidden">
        {"SINAN".split("").map((letter, i) => (
          <motion.span
            key={i}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
              delay: 0.5 + i * 0.1, // delay name reveal so stars shine first
            }}
            className="text-white text-5xl md:text-7xl font-sans font-medium tracking-[0.2em] inline-block"
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
