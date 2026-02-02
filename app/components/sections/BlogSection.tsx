"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const posts = [
  {
    slug: "designing-premium-portfolio",
    title: "Designing a Premium Developer Portfolio",
    body: "Layout systems, motion discipline, glass effects, and visual hierarchy decisions.",
    meta: "Jan 12, 2025 · 4 min read",
  },
  {
    slug: "nextjs-app-router-structure",
    title: "Next.js App Router — Clean Architecture",
    body: "How I structure routes, components, animations, and layouts for scalable apps.",
    meta: "Dec 28, 2024 · 6 min read",
  },
  {
    slug: "motion-design-for-developers",
    title: "Motion Design for React Developers",
    body: "Using Framer Motion with restraint: timing, easing, and flow.",
    meta: "Nov 10, 2024 · 5 min read",
  },
];

export default function BlogSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 md:px-6 space-y-20">

      {/* HEADER */}
      <div className="space-y-3">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500"
        >
          Writing
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="max-w-3xl text-3xl md:text-4xl font-semibold leading-snug
                     text-neutral-900 dark:text-neutral-50"
        >
          Notes on UI engineering, motion, and architecture.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="max-w-xl text-sm md:text-base
                     text-neutral-600 dark:text-neutral-400"
        >
          Short breakdowns of real decisions behind modern web interfaces.
        </motion.p>
      </div>

      {/* POSTS */}
      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((post, i) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.7 }}
          >
            <Link href={`/blog/${post.slug}`} className="block h-full">
              <div
                className="
                  relative h-full rounded-3xl
                  bg-neutral-50 dark:bg-white/[0.03]
                  border border-neutral-200 dark:border-white/10
                  p-6
                  shadow-sm dark:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)]
                  transition-transform duration-300
                  hover:-translate-y-1
                "
              >
                {/* DARK MODE ONLY ATMOSPHERE */}
                <div className="absolute inset-0 hidden dark:block
                                bg-gradient-to-br from-white/[0.05] to-indigo-500/10
                                pointer-events-none rounded-3xl" />

                <div className="relative space-y-3">
                  <p className="text-xs uppercase tracking-[0.25em]
                                text-neutral-500 dark:text-neutral-400">
                    Article
                  </p>

                  <h3 className="text-xl font-semibold
                                 text-neutral-900 dark:text-neutral-100">
                    {post.title}
                  </h3>

                  <p className="text-sm leading-relaxed
                                text-neutral-600 dark:text-neutral-300">
                    {post.body}
                  </p>

                  <p className="pt-2 text-xs
                                text-neutral-500">
                    {post.meta}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
