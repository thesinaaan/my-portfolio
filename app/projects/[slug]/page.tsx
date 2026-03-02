"use client";

import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import { MotionSection } from "@/app/components/ui/MotionSection";
import { SplitText } from "@/app/components/ui/SplitText";
import { Glass } from "@/app/components/ui/Glass";
import { VARIANTS, INTERSTELLAR_EASE } from "@/lib/motion/constants";
import { use } from "react";

export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const project = PROJECTS.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <article className="min-h-screen pt-32 pb-20">

            {/* ===================== HERO ===================== */}
            <section className="relative h-[60vh] md:h-[80vh] w-full mb-24 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: INTERSTELLAR_EASE }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)]/80 via-transparent to-[var(--background)]" />
                </motion.div>

                <div className="container mx-auto max-w-7xl px-6 h-full flex flex-col justify-end relative z-10 pb-12">
                    <MotionSection>
                        <Link href="/projects" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 mb-8 hover:text-white transition-colors">
                            <ArrowLeft size={14} />
                            Abort / Return
                        </Link>

                        <div className="space-y-4 mb-8">
                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/60">
                                Mission: {project.category}
                            </span>
                            <SplitText
                                text={project.title}
                                tag="h1"
                                className="text-5xl md:text-8xl font-medium text-white tracking-tight leading-[0.9]"
                            />
                        </div>

                        <p className="text-xl md:text-2xl text-blue-100/70 font-light max-w-2xl leading-relaxed">
                            {project.description}
                        </p>
                    </MotionSection>
                </div>
            </section>

            <div className="container mx-auto max-w-5xl px-6">
                <div className="grid md:grid-cols-12 gap-12 lg:gap-24">

                    {/* ===================== SIDEBAR: TECH SPECS ===================== */}
                    <div className="md:col-span-4 space-y-12">
                        <MotionSection delay={0.2}>
                            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-500 mb-6">
                                System Architecture
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech) => (
                                    <Glass key={tech} intensity="low" className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-blue-100/60 bg-white/[0.02]">
                                        {tech}
                                    </Glass>
                                ))}
                            </div>
                        </MotionSection>

                        <MotionSection delay={0.4}>
                            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-500 mb-6">
                                Timeline
                            </h3>
                            <p className="text-sm text-white/60 font-mono">
                                Cycle: {project.year}
                            </p>
                        </MotionSection>

                        <MotionSection delay={0.6}>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white hover:text-cyan-400 transition-colors"
                            >
                                Launch Live System
                                <ExternalLink size={14} />
                            </a>
                        </MotionSection>
                    </div>

                    {/* ===================== MAIN CONTENT: BRIEF & OUTCOME ===================== */}
                    <div className="md:col-span-8 space-y-16">
                        <MotionSection delay={0.3}>
                            <Glass intensity="medium" className="p-8 md:p-12 border-l-2 border-l-cyan-500/50">
                                <h3 className="text-lg font-medium text-white mb-4">Mission Brief</h3>
                                <p className="text-blue-100/60 leading-relaxed font-light text-lg">
                                    {project.mission.brief}
                                </p>
                            </Glass>
                        </MotionSection>

                        <MotionSection delay={0.5}>
                            <h3 className="text-2xl font-medium text-white mb-6">Execution Outcome</h3>
                            <p className="text-blue-100/60 leading-relaxed font-light text-lg">
                                {project.mission.outcome}
                            </p>
                        </MotionSection>
                    </div>

                </div>
            </div>
        </article>
    );
}
