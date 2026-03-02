"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { Glass } from "../ui/Glass";
import { MotionSection } from "../ui/MotionSection";
import { SplitText } from "../ui/SplitText";
import { VARIANTS } from "@/lib/motion/constants";
import { Download, Cpu, History, Globe } from "lucide-react";
import { useEffect, useRef } from "react";

/* ===================== DATA ===================== */

const experience = [
  {
    year: "2023 - PRESENT",
    role: "Senior Full Stack Engineer",
    company: "STEALTH STARTUP",
    description: "Architecting decentralized application layers and high-performance UI systems.",
  },
  {
    year: "2021 - 2023",
    role: "Product Engineer",
    company: "DIGITAL AGENCY",
    description: "Led development of award-winning marketing sites and e-commerce platforms.",
  },
  {
    year: "2019 - 2021",
    role: "UI/UX Developer",
    company: "FREELANCE",
    description: "Crafted bespoke digital identities for global brands and creative studios.",
  },
];

const skills = [
  {
    title: "Core Expertise",
    body: "Next.js applications, scalable component architecture, physics-based motion.",
  },
  {
    title: "Tech Stack",
    body: "Next.js, React, TypeScript, Tailwind CSS, Framer Motion, Three.js.",
  },
  {
    title: "Engineering",
    body: "Predictable systems, clean abstractions, long-term maintainability.",
  },
  {
    title: "Product Focus",
    body: "Clarity, performance, and interactions that feel inevitable.",
  },
];

/* ===================== COMPONENTS ===================== */

function FloatingOrb() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics for the orb
  const springX = useSpring(x, { stiffness: 50, damping: 20 });
  const springY = useSpring(y, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX - window.innerWidth / 2);
      y.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [x, y]);

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      className="fixed top-1/2 left-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0 mix-blend-screen"
    />
  );
}

export default function AboutSection() {
  return (
    <section className="relative min-h-screen pt-40 pb-32 px-6 overflow-hidden">

      <FloatingOrb />

      <div className="container mx-auto max-w-5xl space-y-32 relative z-10">

        {/* ===================== HEADER ===================== */}
        <MotionSection className="space-y-12">
          <div className="space-y-6">
            <motion.div variants={VARIANTS.floatIn} className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-white/20" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40">
                Mission Briefing
              </span>
            </motion.div>

            <SplitText
              text="Designing for the vacuum"
              tag="h1"
              className="text-4xl md:text-6xl lg:text-7xl font-sans font-medium text-white leading-[0.95] tracking-tight"
            />
            <SplitText
              text="of space."
              tag="h1"
              className="text-4xl md:text-6xl lg:text-7xl font-sans font-medium text-white/40 leading-[0.95] tracking-tight"
            />
          </div>

          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-8">
              <motion.div variants={VARIANTS.floatIn} className="text-xl md:text-2xl text-neutral-400 font-light leading-relaxed space-y-8">
                <p>
                  I build front-end systems that feel vast yet controlled. My work prioritizes
                  architectural stability, calm motion, and deep immersive atmosphere.
                </p>
                <p>
                  Every animation is calculated. Every interaction is engineered.
                  There is no noise in the signal.
                </p>
              </motion.div>
            </div>

            <div className="md:col-span-4 flex justify-end items-start">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={VARIANTS.floatIn}
              >
                <Glass intensity="subtle" className="rounded-full px-8 py-4 flex items-center gap-3 text-sm text-white uppercase tracking-widest font-bold border-white/10 hover:bg-white/5 cursor-pointer transition-colors">
                  <Download size={16} />
                  <span>Resume</span>
                </Glass>
              </motion.div>
            </div>
          </div>
        </MotionSection>

        {/* ===================== TIMELINE EXPERIENCE ===================== */}
        <MotionSection className="space-y-12">
          <motion.div variants={VARIANTS.floatIn} className="flex items-center gap-3 mb-12">
            <History className="text-white/60" size={20} />
            <h2 className="text-2xl font-light text-white">Operational History</h2>
          </motion.div>

          <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12 pl-8 md:pl-12">
            {experience.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="relative"
              >
                {/* Dot */}
                <div className="absolute -left-[41px] md:-left-[57px] top-2 w-4 h-4 rounded-full bg-black border-2 border-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />

                <div className="space-y-2 mb-2">
                  <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
                    {job.year}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {job.role}
                  </h3>
                  <div className="text-sm font-mono text-white/40 uppercase tracking-widest">
                    {job.company}
                  </div>
                </div>
                <p className="text-neutral-400 max-w-xl leading-relaxed">
                  {job.description}
                </p>
              </motion.div>
            ))}
          </div>
        </MotionSection>

        {/* ===================== SKILLS GRID ===================== */}
        <MotionSection className="space-y-12">
          <motion.div variants={VARIANTS.floatIn} className="flex items-center gap-3">
            <Cpu className="text-white/60" size={20} />
            <h2 className="text-2xl font-light text-white">Core Systems</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Glass intensity="subtle" className="p-8 h-full border-white/5 hover:border-cyan-500/20 hover:bg-white/5 transition-all duration-500">
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/80 mb-4">{item.title}</h3>
                  <p className="text-white/50 leading-relaxed text-sm group-hover:text-white/80 transition-colors">{item.body}</p>
                </Glass>
              </motion.div>
            ))}
          </div>
        </MotionSection>

      </div>
    </section>
  );
}
