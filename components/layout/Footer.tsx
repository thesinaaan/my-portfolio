import React from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().toLocaleString("en-US", { month: "long" });

  return (
    <footer className="py-8 border-t-[0.5px] border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-4 mt-auto">
      <span className="f-left text-[12px] text-[var(--text3)] uppercase tracking-widest">
        Updated {currentMonth} {currentYear}
      </span>
      <span className="f-right text-[12px] text-[var(--text3)] font-mono tracking-tighter">
        Built with Next.js · React · Framer Motion · Deployed on Vercel
      </span>
    </footer>
  );
}
