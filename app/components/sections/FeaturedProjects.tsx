"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import HomeProjectCard from "../ui/HomeProjectCard";

export default function FeaturedProjects() {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-12 md:mb-20 flex items-end justify-between">
          <div className="space-y-4">
            <span className="text-cyan-400 font-mono text-xs tracking-[0.2em] uppercase">
              System Architecture
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
              SELECTED <span className="text-white/30">WORK</span>
            </h2>
          </div>
          <Link href="/projects" className="hidden md:flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-mono tracking-widest uppercase">
            View Archive <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Desktop Grid / Mobile Scroll */}
        <div className="
            flex md:grid 
            overflow-x-auto md:overflow-visible 
            snap-x md:snap-none 
            gap-6 md:grid-cols-2 lg:grid-cols-3 
            pb-8 md:pb-0 
            -mx-6 px-6 md:mx-0 md:px-0 
            scrollbar-hide
        ">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex-shrink-0 w-[85vw] md:w-auto snap-center"
            >
              <HomeProjectCard
                title={project.title}
                category={project.category}
                image={project.image}
                href={`/projects/${project.slug}`}
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile View Archive Button */}
        <div className="mt-8 md:hidden text-center">
          <Link href="/projects" className="inline-flex items-center gap-2 text-white/60 text-sm font-mono tracking-widest uppercase">
            View Archive <ArrowUpRight size={14} />
          </Link>
        </div>

      </div>
    </section>
  );
}
