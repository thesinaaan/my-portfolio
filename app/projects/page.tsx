"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/data";
import { DetailedProjectCard } from "@/app/components/ui/DetailedProjectCard";
import PageTransition from "@/app/components/ui/PageTransition";

export default function ProjectsPage() {
  return (
    <PageTransition>
      <main className="min-h-screen pt-32 pb-20 px-6">

        {/* Header Section */}
        <section className="container mx-auto max-w-7xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-cyan-400 font-mono text-sm tracking-[0.3em] uppercase mb-4 block">
              Archive Access
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 tracking-tighter mix-blend-difference">
              MISSION <br /> LOGS
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed">
              A comprehensive database of deployed systems, experimental interfaces, and full-stack applications.
            </p>
          </motion.div>
        </section>

        {/* Projects Grid */}
        <section className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {PROJECTS.map((project, i) => (
              <DetailedProjectCard
                key={project.slug}
                index={i}
                title={project.title}
                category={project.category}
                image={project.image}
                href={`/projects/${project.slug}`}
                tech={project.tech}
              />
            ))}
          </div>
        </section>

      </main>
    </PageTransition>
  );
}
