"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
}

export function GlassButton({ children, onClick, className = "", href }: GlassButtonProps) {
  const content = (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`relative px-8 py-4 rounded-full overflow-hidden group border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 ease-out hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] ${className}`}
      data-cursor="CLICK"
    >
      <span className="relative z-10 block text-sm font-bold tracking-widest uppercase text-white mix-blend-difference">
        {children}
      </span>
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent z-0 group-hover:animate-[shine_1.5s_ease-out_infinite]"
      />
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    );
  }

  return content;
}
