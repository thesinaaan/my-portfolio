"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "glass";
  children: React.ReactNode;
}

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  const variants = {
    primary: "bg-[var(--text)] text-[var(--bg)] hover:opacity-85",
    secondary: "bg-transparent text-[var(--text)] border border-[var(--border2)] hover:bg-[var(--bg2)]",
    glass: "glass text-[var(--text)] hover:shadow-lg transition-all duration-300",
  };

  return (
    <button
      className={cn(
        "px-5 py-2.5 rounded-lg font-sans text-[13px] font-medium cursor-pointer transition-all active:scale-95",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
