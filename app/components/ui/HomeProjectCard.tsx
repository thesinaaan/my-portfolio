"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Glass } from "./Glass";

interface HomeProjectCardProps {
    title: string;
    category: string;
    image: string;
    href: string;
}

export default function HomeProjectCard({ title, category, image, href }: HomeProjectCardProps) {
    return (
        <Link href={href} className="group block h-full w-[85vw] md:w-full flex-shrink-0 snap-center">
            <Glass
                intensity="regular"
                className="h-full overflow-hidden hover:border-cyan-500/30 transition-colors duration-500 flex flex-col"
            >
                {/* Image Area */}
                <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                            <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-mono">
                                {category}
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                            {title}
                        </h3>
                    </div>

                    <div className="mt-4 flex justify-end">
                        <motion.div
                            className="text-white/50 text-xs uppercase tracking-widest group-hover:text-white transition-colors"
                            whileHover={{ x: 5 }}
                        >
                            Explore &rarr;
                        </motion.div>
                    </div>
                </div>
            </Glass>
        </Link>
    );
}
