"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollWordRevealProps {
  text: string;
  className?: string;
}

export function ScrollWordReveal({ text, className = "" }: ScrollWordRevealProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 40%"] // When top of element is 80% down viewport, until bottom is 40%
  });

  const words = text.split(" ");

  return (
    <p ref={containerRef} className={`flex flex-wrap gap-[0.25em] ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
        
        return (
          <span key={i} className="relative inline-block">
            <motion.span style={{ opacity }} className="text-white">
              {word}
            </motion.span>
          </span>
        );
      })}
    </p>
  );
}
