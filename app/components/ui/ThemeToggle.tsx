"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./button";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <Button
      size="icon"
      variant="ghost"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "dark" : "light"}
          initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.6, rotate: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="text-lg absolute inset-0 flex items-center justify-center"
        >
          {isDark ? "🌕" : "🌑"}
        </motion.span>
      </AnimatePresence>
    </Button>
  );
}
