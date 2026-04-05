import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface GlassProps extends HTMLMotionProps<"div"> {
    intensity?: "subtle" | "regular" | "heavy";
    hover?: boolean;
}

export function Glass({
    className,
    intensity = "regular",
    hover = false,
    children,
    ...props
}: GlassProps) {

    // Premium Glass System - Refined for "Zero Gravity" feel
    const intensityMap = {
        subtle: "bg-white/[0.02] backdrop-blur-[4px] border border-white/[0.05] shadow-[inset_0_0_20px_rgba(255,255,255,0.01)]",
        regular: "bg-white/[0.03] backdrop-blur-[12px] border border-white/[0.08] shadow-[inset_0_0_30px_rgba(255,255,255,0.02),0_4px_20px_rgba(0,0,0,0.1)]",
        heavy: "bg-white/[0.07] backdrop-blur-[20px] border border-white/[0.1] shadow-[inset_0_0_40px_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.2)]",
    };

    const hoverStyles = hover
        ? "hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-500 ease-out"
        : "";

    return (
        <motion.div
            className={cn(
                "rounded-xl border relative overflow-hidden",
                intensityMap[intensity],
                hoverStyles,
                className
            )}
            {...props}
        >
            {/* Extremely subtle top highlight */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

            {children}
        </motion.div>
    );
}
