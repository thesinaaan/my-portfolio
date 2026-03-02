"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, Code2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  href: string;
  index: number;
}

export function ProjectCard({ title, category, image, href, index }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 50, damping: 10 });
  const mouseY = useSpring(y, { stiffness: 50, damping: 10 });

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

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-7, 7]);

  return (
    <Link href={href} className="block group perspective-1000">
      <motion.div
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
        {/* Browser Window Frame */}
        <div className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl border border-white/10 group-hover:border-cyan-500/30 transition-colors duration-500">

          {/* Window Header */}
          <div className="h-9 bg-[#2d2d2d] flex items-center px-4 gap-3 border-b border-black/50">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" /> {/* Close */}
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" /> {/* Minimize */}
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" /> {/* Maximize */}
            </div>

            {/* URL Bar */}
            <div className="flex-1 ml-4 h-6 bg-[#1a1a1a] rounded flex items-center justify-center px-4 relative overflow-hidden group-hover:bg-black transition-colors">
              <div className="absolute left-2 text-neutral-600">
                <Code2 size={10} />
              </div>
              <span className="text-[10px] font-mono text-neutral-500 group-hover:text-cyan-400 transition-colors truncate">
                {title.toLowerCase().replace(/\s+/g, '-')}.app
              </span>
            </div>
          </div>

          {/* Viewport (Image) */}
          <div className="relative aspect-[16/10] overflow-hidden bg-black group-hover:bg-[#050505]">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
            />

            {/* Tech Stack Overlay (On Hover) */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-3">
                <span className="px-3 py-1 rounded-full border border-white/20 bg-black/50 text-[10px] text-white font-mono uppercase tracking-widest">
                  View Source
                </span>
                <ArrowUpRight className="text-white" size={16} />
              </div>
            </div>
          </div>

          {/* Terminal Footer */}
          <div className="bg-[#1e1e1e] p-4 border-t border-white/5 flex justify-between items-center group-hover:bg-[#252525] transition-colors">
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                {title}
              </h3>
              <p className="text-[10px] text-neutral-500 font-mono uppercase tracking-widest mt-1">
                &gt; {category}
              </p>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Github size={18} className="text-white/50 hover:text-white transition-colors" />
            </div>
          </div>

        </div>
      </motion.div>
    </Link>
  );
}
