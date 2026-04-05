"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

// Extracted stagger variants here to keep it self-contained if needed
const VARIANTS = {
    staggerContainer: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    },
};

interface MotionSectionProps extends HTMLMotionProps<"section"> {
    delay?: number;
}

export function MotionSection({
    children,
    className,
    delay = 0,
    ...props
}: MotionSectionProps) {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={VARIANTS.staggerContainer}
            className={cn("relative", className)}
            {...props}
        >
            {children}
        </motion.section>
    );
}
