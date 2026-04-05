"use client";

import React, { useMemo } from "react";
import { cn } from "@/lib/utils";

export function Heatmap() {
  const levels = useMemo(() => [
    0,0,0,1,0,2,0,0,1,3,0,2,1,0,0,2,4,1,0,3,2,0,1,0,2,3,0,0,1,2,4,3,0,1,2,0,1,0,3,2,1,4,2,0,3,1,0,2,3,4
  ], []);

  const columns = useMemo(() => {
    const cols = [];
    for (let c = 0; c < 52; c++) {
      const cells = [];
      for (let r = 0; r < 7; r++) {
        const lvl = levels[(c * 7 + r) % levels.length];
        const noise = Math.random() > 0.7 ? Math.min(4, lvl + 1) : lvl;
        cells.push(noise);
      }
      cols.push(cells);
    }
    return cols;
  }, [levels]);

  const levelClasses = [
    "bg-[var(--bg2)]",
    "bg-[#c0dd97]", // h1
    "bg-[#97c459]", // h2
    "bg-[#639922]", // h3
    "bg-[#3b6d11]", // h4
  ];

  return (
    <div className="heatmap-wrap bg-[var(--bg3)] border border-[var(--border)] rounded-[14px] p-5">
      <div className="heatmap-header flex justify-between items-center mb-4">
        <span className="heatmap-title text-[13px] text-[var(--text2)]">GitHub contributions</span>
        <span className="heatmap-count text-[20px] font-medium text-[var(--text)]">847 this year</span>
      </div>
      <div className="heatmap-grid flex gap-0.5 overflow-hidden">
        {columns.map((cells, colIdx) => (
          <div key={colIdx} className="heatmap-col flex flex-col gap-0.5">
            {cells.map((lvl, cellIdx) => (
              <div
                key={cellIdx}
                className={cn(
                  "heatmap-cell w-2.5 h-2.5 rounded-[2px]",
                  levelClasses[lvl]
                )}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
