"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { ArrowRight, Code2, Layers, Zap } from "lucide-react";
import { useRef } from "react";
import GlassPanel from "@/app/components/ui/GlassPanel";
import Planet3D from "@/app/components/ui/Planet3D";

interface HeroData {
    heroTitle: string;
    about: string;
    ctaText?: string;
}

// Split text animation component
const SplitText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
    const words = text.split(" ");

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: delay },
        },
    };

    const child: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: [0.2, 0.65, 0.3, 0.9] },
        },
    };

    return (
        <motion.h1
            className="text-5xl sm:text-6xl lg:text-8xl font-medium tracking-tighter text-white leading-[1.05] mb-8"
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {words.map((word, index) => (
                <span key={index} className="inline-block mr-[0.25em] whitespace-nowrap">
                    {word.split("").map((char, charIndex) => (
                        <motion.span key={charIndex} variants={child} className="inline-block">
                            {char}
                        </motion.span>
                    ))}
                </span>
            ))}
        </motion.h1>
    );
};

export default function HeroView({ data }: { data: HeroData }) {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Parallax & Opacity transforms
    const yContent = useTransform(scrollYProgress, [0, 1], [0, 60]);
    const opacityContent = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden py-32"
        >
            {/* Live Generative Background removed for global 3D background */}

            <div className="container mx-auto max-w-7xl px-6 relative z-10 -mt-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">

                    {/* Main Content Area (Left/Center) */}
                    <motion.div
                        style={{ y: yContent, opacity: opacityContent }}
                        className="lg:col-span-8 flex flex-col items-start text-left"
                    >
                        {/* Identity Positioning */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.1 }}
                            className="mb-10 flex items-center gap-4"
                        >
                            <div className="w-12 h-[1px] bg-white/20" />
                            <span className="text-xs font-medium tracking-[0.2em] uppercase text-white/50">
                                Sinan — Architecture & Scale
                            </span>
                        </motion.div>

                        <SplitText text={data.heroTitle} delay={0.2} />

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                            className="text-lg md:text-2xl text-slate-300/80 leading-relaxed max-w-2xl mb-12 font-light tracking-wide"
                        >
                            Building scalable, high-performance web architecture. <br className="hidden md:block" />
                            Focusing on clarity, production stability, and refined motion.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
                            className="flex items-center gap-6"
                        >
                            <GlassPanel
                                intensity="sm"
                                transparency="low"
                                className="group relative inline-flex items-center gap-3 px-8 py-5 hover:bg-white/10 transition-colors cursor-pointer rounded-full"
                                border={true}
                            >
                                <a href="projects" className="flex items-center gap-3 text-white">
                                    <span className="font-medium tracking-widest text-sm uppercase">View Selected Work</span>
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-500" />
                                </a>
                            </GlassPanel>

                            <a
                                href="/contact"
                                className="text-slate-400 hover:text-white transition-colors duration-300 text-sm font-medium tracking-widest uppercase border-b border-transparent hover:border-white/20 pb-1"
                            >
                                Get in touch
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right Visuals - 3D Planet */}
                    <motion.div
                        style={{ y: yContent }}
                        className="hidden lg:col-span-4 lg:flex justify-end items-center h-[500px]"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            className="w-full h-full relative"
                        >
                            <Planet3D />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
