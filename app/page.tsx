import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TechSection } from "@/components/sections/TechSection";
import { StatsBarSection } from "@/components/sections/StatsBarSection";
import { ProjectGrid } from "@/components/sections/ProjectGrid";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. Engineered Hero */}
      <HeroSection />

      {/* 2. Global Metric Signal */}
      <StatsBarSection />

      {/* 3. Operational Narrative */}
      <AboutSection />

      {/* 4. Tech Topology */}
      <TechSection />

      {/* 5. Production Archive (Simplified for performance) */}
      <ProjectGrid featuredOnly />

      {/* 6. Context-Aware Contact */}
      <ContactSection />
    </div>
  );
}
