"use client";

import { motion } from "framer-motion";
import { Card } from "../ui/card";

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
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
      <div className="mb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
          Skills
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-neutral-50">
          A stack built for real product development.
        </h2>
      </div>

      <Card className="glass-panel rounded-3xl p-6 md:p-8">
        <div className="grid gap-4 md:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="text-sm text-neutral-200 bg-white/5 dark:bg-white/5 px-4 py-3 rounded-xl border border-white/10 shadow-sm"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </Card>
    </section>
  );
}
