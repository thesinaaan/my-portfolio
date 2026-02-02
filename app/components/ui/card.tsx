import * as React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
}

export function Card({ className, interactive = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "glass-panel rounded-3xl p-6 md:p-7 relative overflow-hidden",
        interactive &&
          "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_55px_rgba(0,0,0,0.65)]",
        className
      )}
      {...props}
    />
  );
}
