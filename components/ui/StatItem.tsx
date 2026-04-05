import React from "react";
import { cn } from "@/lib/utils";

interface StatItemProps {
  label: string;
  value: string | number;
  className?: string;
}

export function StatItem({ label, value, className }: StatItemProps) {
  return (
    <div className={cn("stat flex flex-col min-w-[120px]", className)}>
      <span className="stat-num text-[20px] font-medium text-[var(--text)] tracking-tight">
        {value}
      </span>
      <span className="stat-lbl text-[12px] text-[var(--text3)] uppercase tracking-wider mt-0.5">
        {label}
      </span>
    </div>
  );
}
