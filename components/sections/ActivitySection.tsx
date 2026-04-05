"use client";

import React from "react";
import { Heatmap } from "@/components/ui/Heatmap";

export function ActivitySection() {
  return (
    <section className="mb-20">
      <div className="section-label text-[11px] uppercase tracking-[0.2em] text-[var(--text3)] mb-8">
        Activity Dashboard
      </div>
      <Heatmap />
    </section>
  );
}
