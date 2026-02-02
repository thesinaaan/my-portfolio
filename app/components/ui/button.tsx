"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 active:scale-[0.97] disabled:opacity-60 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-200/60 dark:focus-visible:ring-neutral-700/60",
  {
    variants: {
      variant: {
        primary:
          "bg-neutral-100 text-black shadow-[0_10px_30px_rgba(0,0,0,0.45)] hover:bg-white",
        ghost:
          "bg-transparent text-neutral-200 border border-white/10 hover:bg-white/5 dark:hover:bg-white/10",
        outline:
          "border border-white/20 text-neutral-100 hover:bg-white/5 dark:hover:bg-white/10",
      },
      size: {
        default: "h-11 px-6 text-sm",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-7 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { buttonVariants };
