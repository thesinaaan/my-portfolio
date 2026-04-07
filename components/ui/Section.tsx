import React from "react";
import { DESIGN } from "@/lib/design";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn(DESIGN.sectionSpacing, className)}>
      <div className={DESIGN.containerWidth}>
        {children}
      </div>
    </section>
  );
}
