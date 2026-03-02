"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Planet3D from "../ui/Planet3D";
import { Glass } from "../ui/Glass";

export default function Hero() {
  const ref = useRef(null);
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section ref={ref} className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20">

      {/* Ambient Moving Gradient */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-900/20 blur-[120px] rounded-full pointer-events-none z-0"
      />

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">

          {/* Text Content */}
          <div className="w-full md:w-1/2 z-20">
            {/* Identity Tag - Parallax Slow */}
            <motion.div
              style={{ y: y2 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-8"
            >
              <Glass intensity="subtle" className="inline-block px-4 py-2 rounded-full">
                <span className="text-xs font-mono tracking-[0.3em] uppercase text-cyan-400">
                  System Architecture / UI Engineering
                </span>
              </Glass>
            </motion.div>

            {/* Headline - Floating Motion */}
            <motion.div
              style={{ y: y1 }}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="mb-8 relative"
            >
              <h1 className="text-[12vw] md:text-[6vw] leading-[0.85] font-black text-white mix-blend-difference tracking-tighter drop-shadow-2xl">
                FULL STACK
              </h1>
              <h1 className="text-[12vw] md:text-[6vw] leading-[0.85] font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500 tracking-tighter drop-shadow-2xl">
                ENGINEER
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="text-lg md:text-xl text-neutral-400 font-light max-w-xl mb-12 leading-relaxed drop-shadow-lg"
            >
              Building high-performance applications with <br />
              <span className="text-white font-medium">Next.js</span> and <span className="text-white font-medium">Scalable Architecture</span>.
              Crafting digital experiences that exist at the intersection of design and engineering.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.8, duration: 1 }}
              className="flex gap-6"
            >
              <a href="#work-preview" className="group relative px-6 py-3 overflow-hidden rounded-lg bg-white/5 text-white border border-white/10 hover:border-cyan-500/50 transition-all duration-500">
                <span className="relative z-10 font-mono text-xs tracking-widest uppercase">View Missions</span>
                <div className="absolute inset-0 bg-cyan-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </a>
            </motion.div>
          </div>

          {/* 3D Planet - Visual Anchor - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full md:w-1/2 h-[50vh] md:h-[80vh] absolute md:relative right-0 bottom-0 md:top-0 opacity-30 md:opacity-100 pointer-events-none md:pointer-events-auto mix-blend-screen md:mix-blend-normal"
          >
            <Planet3D />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
