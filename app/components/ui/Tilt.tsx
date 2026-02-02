"use client";

import { ReactNode } from "react";
import { motion, useMotionValue, useTransform, type MotionProps } from "framer-motion";

export interface TiltProps extends MotionProps {
  children: ReactNode;
  rotationFactor?: number;
  springOptions?: any;
  isFullRotation?: boolean;
}

export default function Tilt({
  children,
  rotationFactor = 6,
  springOptions = { stiffness: 150, damping: 20 },
  isFullRotation = false,
}: TiltProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-1, 1], [rotationFactor, -rotationFactor]);
  const rotateY = useTransform(x, [-1, 1], [-rotationFactor, rotationFactor]);

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const xPos = (e.clientX - rect.left) / rect.width;
        const yPos = (e.clientY - rect.top) / rect.height;

        x.set(xPos * 2 - 1);
        y.set(yPos * 2 - 1);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      transition={springOptions}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
}
