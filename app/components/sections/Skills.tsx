"use client";

import { motion } from "framer-motion";
import { Glass } from "../ui/Glass";

const skills = [
  "React",
  "Next.js (App Router)",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "API Integration",
  "Performance / Lighthouse",
];

export default function Skills() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28 relative z-10">
      <div className="mb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Skills
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-white mt-2">
          A stack built for real product development.
        </h2>
      </div>

      <Glass intensity="medium" className="rounded-3xl p-6 md:p-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="text-sm text-cyan-100 bg-white/5 px-4 py-3 rounded-xl border border-white/10 shadow-sm flex items-center justify-center text-center h-full hover:bg-white/10 transition-colors"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </Glass>
    </section>
  );
}
