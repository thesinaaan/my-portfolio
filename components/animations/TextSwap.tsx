"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TextSwapProps {
  words: string[];
  interval?: number;
  className?: string;
  isHoverTriggered?: boolean;
}

export function TextSwap({ words, interval = 3000, className = "", isHoverTriggered = false }: TextSwapProps) {
  const [index, setIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isHoverTriggered && !isHovering) return;
    
    // Cycle if we're hovering (in hover mode) or if we're in auto mode
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, isHoverTriggered ? 1000 : interval); // Cycle faster if hover-triggered

    return () => clearInterval(timer);
  }, [words.length, interval, isHoverTriggered, isHovering]);

  return (
    <div 
        className={`relative inline-block overflow-hidden ${className}`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => {
            setIsHovering(false);
            if (isHoverTriggered) setIndex(0); // Reset to base word
        }}
    >
      <AnimatePresence mode="popLayout">
        <motion.span
          key={index}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="inline-block whitespace-nowrap"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
