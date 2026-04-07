"use client";

import React from "react";
import { Mail, Linkedin, Github, Calendar, Send } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";
import MotionDiv from "@/components/ui/MotionDiv";
import { fadeUp } from "@/lib/motion/config";

const contactLinks = [
  { icon: <Mail size={18} />, label: "Email", value: "hello@sinan.dev", href: "mailto:hello@sinan.dev" },
  { icon: <Linkedin size={18} />, label: "LinkedIn", value: "Sinan Sinan", href: "https://linkedin.com/in/sinan" },
  { icon: <Github size={18} />, label: "GitHub", value: "thesinan", href: "https://github.com/thesinan" },
];

export function ContactSection() {
  return (
    <Section className="border-t border-white/5">
      {/* 1. Hero / Intro Header */}
      <MotionDiv {...fadeUp}>
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-serif text-[var(--text)] mb-6 tracking-tight">
            Start a project.
          </h2>
          <p className="text-lg md:text-xl text-[var(--text2)] max-w-2xl mx-auto font-light leading-relaxed">
            Usually responds within 24 hours. Let&apos;s engineer something together.
          </p>
        </div>
      </MotionDiv>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* 2. Direct Channels: Left Column */}
        <div className="lg:col-span-12 xl:col-span-7 space-y-8">
          <div className="text-[11px] uppercase tracking-[0.2em] text-[var(--text3)] mb-8 font-mono">
            Direct Channels
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contactLinks.map((link, i) => (
              <MotionDiv key={i} {...fadeUp}>
                <a 
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <GlassCard className="transition-transform duration-300 hover:scale-[1.02] hover:bg-white/[0.08] hover:border-white/20">
                    <div className="flex items-center gap-6">
                      <div className="text-[#5DCAA5] group-hover:scale-110 transition-transform duration-300">
                        {link.icon}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase font-mono text-[var(--text3)] tracking-widest mb-1">{link.label}</span>
                        <span className="text-[15px] font-medium text-[var(--text)]">{link.value}</span>
                      </div>
                    </div>
                  </GlassCard>
                </a>
              </MotionDiv>
            ))}
          </div>
        </div>

        {/* 3. Action Hierarchy: Right Column */}
        <div className="lg:col-span-12 xl:col-span-5 space-y-8">
          <div className="text-[11px] uppercase tracking-[0.2em] text-[var(--text3)] mb-8 font-mono">
            Structured Requests
          </div>

          <div className="flex flex-col gap-4">
            {/* Primary Action Card */}
            <MotionDiv {...fadeUp}>
              <a href="#" className="group block">
                <GlassCard className="border-[#3B82F6]/20 bg-[#3B82F6]/5 hover:bg-[#3B82F6]/10 transition-all h-full hover:scale-[1.02]">
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center text-[#3B82F6]">
                      <Calendar size={22} />
                    </div>
                    <div>
                      <h4 className="text-[18px] font-medium text-[var(--text)] mb-1">Book discovery session</h4>
                      <p className="text-[13px] text-[var(--text2)] font-light leading-relaxed mb-4">
                        30-minute technical deep dive & strategy call to review your goals.
                      </p>
                      <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#3B82F6] uppercase tracking-wider font-mono">
                        <span>Reserve Slot</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </a>
            </MotionDiv>

            {/* Secondary Action Card */}
            <MotionDiv {...fadeUp}>
              <a href="mailto:hello@sinan.dev" className="group block">
                <GlassCard className="hover:bg-white/[0.08] transition-all h-full hover:scale-[1.02]">
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[var(--text3)]">
                      <Send size={22} />
                    </div>
                    <div>
                      <h4 className="text-[18px] font-medium text-[var(--text)] mb-1">Initiate direct brief</h4>
                      <p className="text-[13px] text-[var(--text2)] font-light leading-relaxed mb-4">
                        Submit a project overview, technical requirements, and goals via direct email.
                      </p>
                      <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[var(--text3)] group-hover:text-white uppercase tracking-wider font-mono">
                        <span>Send Outline</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </a>
            </MotionDiv>
          </div>
        </div>

      </div>
    </Section>
  );
}
