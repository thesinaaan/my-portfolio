"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface StaggeredPixelProps {
  children: React.ReactNode;
  className?: string;
  gridSize?: number;
}

export function StaggeredPixel({ children, className = "", gridSize = 10 }: StaggeredPixelProps) {
  const [isHovered, setIsHovered] = useState(false);
  const blocks = Array.from({ length: gridSize * gridSize });

  return (
    <div 
      className={`relative w-full h-full overflow-hidden cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-cursor="VIEW"
    >
      {/* Base content (dimmed on hover) */}
      <div 
        className="w-full h-full transition-opacity duration-300"
        style={{ opacity: isHovered ? 0.2 : 1 }}
      >
        {children}
      </div>
      
      {/* Pixelated Reveal Layer */}
      <div 
        className="absolute inset-0 grid pointer-events-none"
        style={{ 
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          gridTemplateRows: `repeat(${gridSize}, 1fr)` 
        }}
      >
        {blocks.map((_, i) => {
          const x = i % gridSize;
          const y = Math.floor(i / gridSize);
          const distance = Math.sqrt(x * x + y * y);
          const delay = distance * 0.03 + (Math.random() * 0.05);

          return (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={isHovered ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ 
                duration: 0.3, 
                ease: "circOut", 
                delay: isHovered ? delay : delay * 0.5 
              }}
              className="relative w-full h-full overflow-hidden origin-center bg-cyan-500/20 backdrop-blur-md"
            >
              {/* Optional: duplicate children inside to reveal them pixel by pixel.
                  For a simpler visual effect, we just render frosted cyan blocks to signify a "scan" or digital render. */}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
