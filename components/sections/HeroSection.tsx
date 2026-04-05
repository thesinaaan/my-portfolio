"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import RevealText from "@/app/components/animations/RevealText";
import Reveal from "@/app/components/animations/Reveal";
import { HERO_CONTENT, GLASS_STATS } from "@/constants";

export function HeroSection() {
  return (
    <section className="hero hero-frost grid grid-cols-1 md:grid-cols-[1fr_260px] gap-10 mb-20 items-start pt-10">
      <div className="hero-left relative z-10">
        <Badge className="mb-6">{HERO_CONTENT.status}</Badge>
        <h1 className="font-serif text-[44px] md:text-[56px] font-normal line-height-[1.15] mb-4 text-[var(--text)]">
          <RevealText delay={0.1}>Building </RevealText>
          <em className="italic text-[var(--sage)] not-italic"><RevealText delay={0.3}>{HERO_CONTENT.headlineEmphasis}</RevealText></em><br />
          <RevealText delay={0.5}>that feel inevitable.</RevealText>
        </h1>
        <Reveal delay={0.7}>
          <p className="hero-desc text-[15px] text-[var(--text2)] max-w-[440px] mb-8 leading-[1.7]">
            {HERO_CONTENT.description}
          </p>
        </Reveal>
        <Reveal delay={0.8}>
          <div className="stack-pills flex flex-wrap gap-1.5 mb-8">
            {HERO_CONTENT.stack.map((pill) => (
              <span key={pill} className="pill text-[12px] px-3 py-1 rounded-full bg-[var(--bg2)] border border-[var(--border2)] text-[var(--text2)] transition-colors hover:border-[var(--sage-mid)] hover:text-[var(--text)] cursor-default">
                {pill}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.9}>
          <div className="hero-ctas flex gap-3">
            <Button variant="primary">{HERO_CONTENT.primaryCTA}</Button>
            <Button variant="secondary">{HERO_CONTENT.secondaryCTA}</Button>
          </div>
        </Reveal>
      </div>
      
      <div className="hero-right flex flex-col gap-3 hidden md:flex">
        {GLASS_STATS.map((stat, idx) => (
          <GlassCard key={idx} active={idx === 2}>
            <div className="label text-[11px] uppercase tracking-wider text-[var(--text3)] mb-1">
              {stat.label}
            </div>
            <div className="value text-[22px] font-medium text-[var(--text)] line-height-[1.2]">
              {stat.value}
            </div>
            {stat.sub && (
              <div className="sub text-[12px] text-[var(--text2)] mt-0.5">
                {stat.sub}
              </div>
            )}
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
