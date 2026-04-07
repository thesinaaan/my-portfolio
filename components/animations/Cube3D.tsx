"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface Cube3DProps {
  faces: [string, string, string, string]; // Top, Front, Bottom, Back
  size?: number;
}

export function Cube3D({ faces, size = 120 }: Cube3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Smooth out the scroll progress for rotation
  const smoothY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const rotateX = useTransform(smoothY, [0, 1], [-15, 45]);

  return (
    <div 
      ref={containerRef}
      className="relative flex items-center justify-center p-8"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="relative transform-style-3d"
        style={{
          width: size,
          height: size,
          rotateX,
          rotateY: 25, // Slight angle to see depth
          rotateZ: -10,
        }}
      >
        {/* Front */}
        <div 
          className="absolute inset-0 flex items-center justify-center apple-glass text-xs font-bold tracking-widest uppercase text-[var(--text)]"
          style={{ transform: `translateZ(${size / 2}px)` }}
        >
          {faces[1]}
        </div>
        {/* Back */}
        <div 
          className="absolute inset-0 flex items-center justify-center apple-glass text-xs font-bold tracking-widest uppercase text-[var(--text2)]"
          style={{ transform: `rotateX(180deg) translateZ(${size / 2}px)` }}
        >
          {faces[3]}
        </div>
        {/* Top */}
        <div 
          className="absolute inset-0 flex items-center justify-center apple-glass text-xs font-bold tracking-widest uppercase text-[#5DCAA5]"
          style={{ transform: `rotateX(90deg) translateZ(${size / 2}px)` }}
        >
          {faces[0]}
        </div>
        {/* Bottom */}
        <div 
          className="absolute inset-0 flex items-center justify-center apple-glass text-xs font-bold tracking-widest uppercase text-[var(--text3)]"
          style={{ transform: `rotateX(-90deg) translateZ(${size / 2}px)` }}
        >
          {faces[2]}
        </div>
      </motion.div>
    </div>
  );
}
