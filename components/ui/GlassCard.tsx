import React from "react";
import { DESIGN } from "@/lib/design";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  padding?: string;
}

export function GlassCard({ children, className, padding = "p-8 md:p-12" }: GlassCardProps) {
  return (
    <div className={cn(DESIGN.glassStyle, padding, className)}>
      {children}
    </div>
  );
}
