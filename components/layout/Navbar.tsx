"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Glass } from "../ui/Glass";
import { cn } from "@/lib/utils";
import { INTERSTELLAR_EASE, DURATION } from "@/lib/motion/constants";
import { useTheme } from "./ThemeProvider";

const navLinks = [
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/work" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const { scrollY } = useScroll();
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    // Premium Floating Island
    const width = useTransform(scrollY, [0, 100], ["100%", "40%"]);
    const top = useTransform(scrollY, [0, 100], ["0px", "24px"]);
    const rounded = useTransform(scrollY, [0, 100], ["0px", "999px"]);
    const border = useTransform(scrollY, [0, 100], ["rgba(255,255,255,0)", "rgba(255,255,255,0.1)"]);

    return (
        <>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                style={{ top }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="fixed left-0 right-0 z-50 flex justify-center pointer-events-none"
            >
                <Glass
                    intensity="heavy"
                    style={{ width, borderRadius: rounded, borderColor: border }}
                    className="pointer-events-auto shadow-2xl bg-[#0a0a0a]/80 backdrop-blur-xl transition-all duration-500 ease-out flex items-center justify-between px-8 py-4"
                >
                    {/* Brand */}
                    <Link href="/" className="group flex items-center gap-4">
                        <span className="text-lg font-bold tracking-tighter text-white group-hover:text-neutral-400 transition-colors">
                            HOME
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-xs font-medium uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Toggle & Theme Toggle */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="theme-btn w-6 h-6 rounded-lg border-[0.5px] border-[var(--border2)] cursor-pointer flex items-center justify-center text-white text-[12px] transition-all hover:bg-[var(--bg2)]"
                            aria-label="Toggle Theme"
                        >
                            {theme === "light" ? "☽" : "☀"}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden relative z-50 p-1 text-white"
                        >
                            <div className="w-5 flex flex-col items-end gap-[4px]">
                                <span className={cn("w-5 h-[1px] bg-current transition-all", isOpen && "rotate-45 translate-y-[5px]")} />
                                <span className={cn("w-3 h-[1px] bg-current transition-all", isOpen && "opacity-0")} />
                                <span className={cn("w-5 h-[1px] bg-current transition-all", isOpen && "-rotate-45 -translate-y-[5px]")} />
                            </div>
                        </button>
                    </div>
                </Glass>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <motion.div
                initial={false}
                animate={isOpen ? { opacity: 1, pointerEvents: "auto" } : { opacity: 0, pointerEvents: "none" }}
                transition={{ duration: DURATION.base }}
                className="fixed inset-0 z-40 bg-[#020408]/90 backdrop-blur-3xl md:hidden flex items-center justify-center"
            >
                <nav className="flex flex-col items-center gap-8">
                    {navLinks.map((link, i) => (
                        <motion.div
                            key={link.name}
                            initial={{ y: 20, opacity: 0 }}
                            animate={isOpen ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                            transition={{ delay: i * 0.1, duration: DURATION.base, ease: INTERSTELLAR_EASE }}
                        >
                            <Link
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-3xl font-light tracking-tight text-white/90"
                            >
                                {link.name}
                            </Link>
                        </motion.div>
                    ))}
                </nav>
            </motion.div>
        </>
    );
}
