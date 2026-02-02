"use client";

import { motion } from "framer-motion";

/* ===================== DATA ===================== */

const skills = [
  {
    title: "Core Expertise",
    body: "Next.js applications, UI systems, scalable component architecture, motion.",
  },
  {
    title: "Tech Stack",
    body: "Next.js, React, TypeScript, Tailwind CSS, Framer Motion.",
  },
  {
    title: "Engineering Principles",
    body: "Predictable systems, clean abstractions, long-term maintainability.",
  },
  {
    title: "Product Focus",
    body: "Clarity, performance, and interactions that feel intentional.",
  },
];

const strengths = [
  {
    title: "Production-Ready Thinking",
    body: "I build with real users and future scaling in mind — not just visuals.",
  },
  {
    title: "Modern, Maintainable Code",
    body: "Clear structure and reusable patterns that teams can extend safely.",
  },
  {
    title: "Collaborative Process",
    body: "Clear communication, feedback loops, and steady progress.",
  },
  {
    title: "Reliable Delivery",
    body: "Consistent timelines and transparency from start to finish.",
  },
];

/* ===================== COMPONENT ===================== */

export default function AboutSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 md:px-6 space-y-20">
      {/* ===================== ABOUT HEADER ===================== */}
      <div className="space-y-3">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500"
        >
          About
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="max-w-3xl text-3xl font-semibold leading-snug text-neutral-50 md:text-4xl"
        >
          I design and build interfaces with clarity, motion, and product-level
          discipline.
        </motion.h2>
      </div>

      {/* ===================== INTRO CARD ===================== */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-7 backdrop-blur-2xl"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-indigo-500/10" />

        <div className="relative space-y-4 text-sm leading-relaxed text-neutral-300 md:text-base">
          <p>
            I’m a front-end developer focused on building clean, scalable web
            applications. I care deeply about structure, performance, and how
            interfaces feel in real use.
          </p>

          <p>
            My work emphasizes clarity over complexity — reusable components,
            thoughtful spacing, and motion that supports usability rather than
            distracting from it.
          </p>
        </div>
      </motion.div>

      {/* ===================== SKILLS ===================== */}
      <div className="space-y-3">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500"
        >
          Skills
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-2xl font-semibold text-neutral-100"
        >
          What I focus on
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="max-w-xl text-sm text-neutral-400 md:text-base"
        >
          The areas where I consistently deliver the most value.
        </motion.p>
      </div>

      {/* ===================== SKILLS GRID ===================== */}
      <div className="grid gap-4 md:grid-cols-2">
        {skills.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-transform hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-indigo-500/10" />

            <div className="relative space-y-2">
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
                {item.title}
              </p>
              <p className="text-sm text-neutral-200">{item.body}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ===================== WHY WORK WITH ME ===================== */}
      <div className="space-y-3 pt-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500"
        >
          Working Together
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-2xl font-semibold text-neutral-100 md:text-3xl"
        >
          What you can expect
        </motion.h3>
      </div>

      {/* ===================== STRENGTHS ===================== */}
      <div className="grid gap-4 md:grid-cols-2">
        {strengths.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.7 }}
            className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
          >
            <div className="relative space-y-2">
              <p className="font-medium text-neutral-100">{item.title}</p>
              <p className="text-sm text-neutral-300">{item.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
