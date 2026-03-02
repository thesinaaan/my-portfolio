"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, Code2, Layers } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Glass } from "./Glass";

interface DetailedProjectCardProps {
    title: string;
    category: string;
    image: string;
    href: string;
    tech: string[];
    index: number;
}

export function DetailedProjectCard({ title, category, image, href, tech, index }: DetailedProjectCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    // 3D Tilt Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    function onMouseMove({ clientX, clientY }: React.MouseEvent) {
        if (!ref.current) return;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const xPct = (clientX - left) / width - 0.5;
        const yPct = (clientY - top) / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    }

    function onMouseLeave() {
        x.set(0);
        y.set(0);
    }

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);
    const shineX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);

    return (
        <Link href={href} className="block group perspective-1000">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                ref={ref}
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="w-full relative"
            >
                <Glass intensity="regular" className="rounded-xl overflow-hidden border-white/10 group-hover:border-cyan-500/50 transition-colors duration-500">

                    {/* Animated Shine Effect */}
                    <motion.div
                        className="absolute inset-0 z-10 opacity-0 group-hover:opacity-20 pointer-events-none bg-gradient-to-r from-transparent via-white to-transparent -skew-x-12"
                        style={{ x: shineX }}
                    />

                    {/* Window Header */}
                    <div className="h-10 bg-black/40 flex items-center px-4 gap-3 border-b border-white/5 backdrop-blur-md">
                        <div className="flex gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                            <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                            <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                        </div>

                        <div className="flex-1 ml-4 h-6 bg-black/20 rounded-md flex items-center px-3 gap-2 group-hover:bg-black/40 transition-colors">
                            <Layers size={10} className="text-neutral-600" />
                            <span className="text-[10px] font-mono text-neutral-500 group-hover:text-cyan-400 transition-colors">
                                {title.toLowerCase().replace(/\s+/g, '_')}.exe
                            </span>
                        </div>
                    </div>

                    {/* Viewport (Image) */}
                    <div className="relative aspect-video overflow-hidden bg-black group-hover:bg-neutral-900 transition-colors">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
                        />

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

                        {/* Hover Content Reveal */}
                        <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <div className="space-y-3">
                                <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    {tech.slice(0, 4).map((t, i) => (
                                        <span key={i} className="px-2 py-1 rounded bg-cyan-500/10 border border-cyan-500/20 text-[10px] text-cyan-300 font-mono">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Info */}
                    <div className="p-6 bg-black/40 border-t border-white/5 group-hover:bg-cyan-950/10 transition-colors">
                        <div className="flex justify-between items-start">
                            <div>
                                <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-1 block">
                                    {category}
                                </span>
                                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-100 transition-colors">
                                    {title}
                                </h3>
                            </div>
                            <div className="bg-white/5 p-2 rounded-full group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300 transform group-hover:rotate-45">
                                <ArrowUpRight size={18} />
                            </div>
                        </div>
                    </div>

                </Glass>
            </motion.div>
        </Link>
    );
}
