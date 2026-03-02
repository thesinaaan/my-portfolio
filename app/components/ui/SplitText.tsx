"use client";

import { motion } from "framer-motion";
import { VARIANTS } from "@/lib/motion/constants";
import { cn } from "@/lib/utils";

interface SplitTextProps {
    text: string;
    className?: string;
    tag?: "h1" | "h2" | "h3" | "p";
}

export function SplitText({ text, className, tag = "h1" }: SplitTextProps) {
    const words = text.split(" ");
    const Tag = motion[tag];

    return (
        <Tag className={cn("inline-block", className)}>
            {words.map((word, i) => (
                <span key={i} className="inline-block mr-[0.25em] whitespace-nowrap overflow-hidden">
                    <motion.span
                        variants={VARIANTS.floatIn}
                        className="inline-block will-change-transform"
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </Tag>
    );
}
