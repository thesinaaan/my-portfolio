"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode, MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface TiltProps {
    children: ReactNode;
    className?: string;
    rotationIntensity?: number;
    isStatic?: boolean;
}

export function Tilt({
    children,
    className,
    rotationIntensity = 15, // Degrees of tilt
    isStatic = false
}: TiltProps) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

    function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
        if (isStatic) return;

        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseXPos = e.clientX - rect.left;
        const mouseYPos = e.clientY - rect.top;

        const xPct = mouseXPos / width - 0.5;
        const yPct = mouseYPos / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    }

    function handleMouseLeave() {
        if (isStatic) return;
        x.set(0);
        y.set(0);
    }

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [rotationIntensity, -rotationIntensity]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-rotationIntensity, rotationIntensity]);

    return (
        <motion.div
            style={{
                rotateX: isStatic ? 0 : rotateX,
                rotateY: isStatic ? 0 : rotateY,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={cn("relative will-change-transform", className)}
        >
            {children}
        </motion.div>
    );
}
