"use client";

import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

export function DiscoveryCallButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="apple-glass px-8 py-4 rounded-full flex items-center gap-4 group transition-all duration-300 hover:border-[#5DCAA5]/50 overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-[#5DCAA5]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      <PhoneCall size={18} className="text-[#5DCAA5]" />
      <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[var(--text)]">
        Book Discovery Session
      </span>
    </motion.button>
  );
}
