import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  showDot?: boolean;
  className?: string;
}

export function Badge({ children, showDot = true, className }: BadgeProps) {
  return (
    <div className={cn(
      "status-pill inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full",
      "bg-[var(--sage-light)] text-[var(--accent)] border border-[var(--sage-mid)]",
      "text-[12px] font-medium leading-none",
      className
    )}>
      {showDot && (
        <span className="relative flex h-2 w-2">
          <span className="dot animate-pulse absolute inline-flex h-full w-full rounded-full bg-[var(--sage)] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--sage)]"></span>
        </span>
      )}
      {children}
    </div>
  );
}
