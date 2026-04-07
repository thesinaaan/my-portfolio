"use client";

import { Terminal } from "lucide-react";

interface GitHubStatsProps {
  repo: string;
  stars?: number;
  commits?: number;
  lastUpdated?: string;
}

export function GitHubStats({ repo, stars = 124, commits = 842, lastUpdated = "2 days ago" }: GitHubStatsProps) {
  return (
    <div className="font-mono text-[10px] uppercase tracking-widest apple-glass p-4 rounded-xl flex flex-col gap-2 w-full max-w-[200px]">
      <div className="flex items-center gap-2 text-[#5DCAA5] mb-1 border-b border-[var(--border2)] pb-2">
        <Terminal size={12} />
        <span className="truncate">{repo}</span>
      </div>
      <div className="flex justify-between items-center text-[var(--text2)]">
        <span>Stars</span>
        <span className="text-[var(--text)]">{stars}</span>
      </div>
      <div className="flex justify-between items-center text-[var(--text2)]">
        <span>Commits</span>
        <span className="text-[var(--text)]">{commits}</span>
      </div>
      <div className="flex justify-between items-center text-[var(--text2)] mt-1 pt-2 border-t border-[var(--border2)]">
        <span>Updated</span>
        <span className="text-[var(--text)] lowercase">{lastUpdated}</span>
      </div>
    </div>
  );
}
