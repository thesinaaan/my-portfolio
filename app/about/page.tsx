import { Section } from "@/components/ui/Section";
import { AboutCardSection } from "@/components/sections/AboutCardSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ActivitySection } from "@/components/sections/ActivitySection";

export const metadata = {
  title: "About — Arjun Dev",
  description: "Learn more about Arjun's journey into development, technical strengths, and professional philosophy.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section (Standardized padding from Section component) */}
      <Section className="text-center">
        <h1 className="text-5xl md:text-7xl font-serif text-[var(--text)] mb-6 tracking-tight">
          Engineering with Intent.
        </h1>
        <p className="text-lg md:text-xl text-[var(--text2)] max-w-3xl mx-auto leading-relaxed">
          I build high-latency systems, performant interfaces, and products that users actually love to use. Based in Kochi, shipping globally.
        </p>
      </Section>

      {/* 2. Main About Details (2-Column Glass Grid) */}
      <AboutCardSection />
      
      {/* 3. Skills Matrix */}
      <SkillsSection />
      
      {/* 4. Activity Dashboard */}
      <ActivitySection />
    </div>
  );
}
