"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { VARIANTS } from "@/lib/motion/constants";
import { cn } from "@/lib/utils";

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
