"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [hovered, setHovered] = useState<string | null>(null);

  const current = hovered ?? pathname;

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-black/40 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">

        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-2xl bg-gradient-to-tr from-white to-neutral-400 shadow-[0_10px_30px_rgba(0,0,0,0.7)]" />
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-300">
            Sinan
          </span>
        </Link>

        {/* Center navigation */}
        <div className="hidden flex-1 justify-center md:flex">
          <div className="relative flex items-center gap-1 rounded-full bg-neutral-800/80 px-2 py-1 shadow-[0_14px_40px_rgba(0,0,0,0.8)]">
            {links.map((link) => {
              const isCurrent = current === link.href;

              return (
                <button
                  key={link.href}
                  onMouseEnter={() => setHovered(link.href)}
                  onMouseLeave={() => setHovered(null)}
                  className="relative px-3 py-2"
                >
                  {isCurrent && (
                    <motion.span
                      layoutId="nav-liquid-pill"
                      className="
                        absolute inset-0 rounded-full
                        bg-gradient-to-br from-[#2a2a2a] to-[#0f0f0f]
                        shadow-[inset_0_0_20px_rgba(255,255,255,0.08),0_4px_18px_rgba(0,0,0,0.6)]
                        border border-white/10
                        text-white
                      "
                      transition={{
                        type: "spring",
                        stiffness: 320,
                        damping: 26,
                        mass: 0.35,
                      }}
                    />
                  )}

                  <Link
                    href={link.href}
                    className={`relative z-10 text-[11px] font-medium uppercase tracking-[0.18em] ${
                      pathname === link.href
                        ? "text-white"
                        : "text-neutral-300"
                    }`}
                  >
                    {link.label}
                  </Link>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
