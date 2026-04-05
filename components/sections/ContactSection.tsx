"use client";

import React from "react";
import { CONTACT_CONTENT } from "@/constants";
import { Button } from "@/components/ui/Button";

export function ContactSection() {
  return (
    <section className="mb-20">
      <div className="section-label text-[11px] uppercase tracking-[0.2em] text-[var(--text3)] mb-8">
        Hire me
      </div>
      
      <div className="contact-glass contact-glass-premium p-8 md:p-12 text-center backdrop-blur-lg mb-8">
        <h2 className="font-serif text-[32px] md:text-[44px] font-normal mb-3 text-[var(--text)]">
          {CONTACT_CONTENT.headline}
        </h2>
        <p className="text-[14px] md:text-[16px] text-[var(--text2)] max-w-xl mx-auto mb-10 leading-relaxed">
          {CONTACT_CONTENT.description}
        </p>
        <div className="contact-ctas flex flex-wrap justify-center gap-3">
          <Button variant="primary">Send an email</Button>
          <Button variant="secondary">Schedule 20 min call</Button>
          <Button variant="secondary">Download résumé PDF</Button>
        </div>
      </div>

      <div className="avail-cards grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {CONTACT_CONTENT.availableCards.map((card, idx) => (
          <div key={idx} className="avail-card bg-[var(--bg3)] border border-[var(--border)] rounded-[12px] p-4 text-center shadow-sm">
            <div className="av-label text-[11px] text-[var(--text3)] uppercase tracking-wider mb-1">
              {card.label}
            </div>
            <div className="av-val text-[13px] md:text-[14px] font-medium text-[var(--text)]">
              {card.value}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
