"use client";

import { motion } from "framer-motion";

export default function RevealText({ children, className, delay = 0 }: any) {
  const letters = children.split("");

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {letters.map((char: string, i: number) => (
        <motion.span
          key={i}
          className="inline-block"
          variants={{
            hidden: { y: "100%", opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.45,
                delay: delay + i * 0.018,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}
