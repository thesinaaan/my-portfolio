import { HeroSection } from "@/components/sections/HeroSection";
import { StatsBarSection } from "@/components/sections/StatsBarSection";
import { ProjectGrid } from "@/components/sections/ProjectGrid";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <StatsBarSection />
      <ProjectGrid featuredOnly />
      
      <div className="mt-20 text-center pb-20">
        <p className="text-[13px] text-[var(--text3)] mb-4 uppercase tracking-widest">
          Curated selection of work
        </p>
        <a 
          href="/work" 
          className="text-[15px] text-[var(--text)] font-serif no-underline border-b border-[var(--text)] pb-0.5 hover:text-[var(--sage)] hover:border-[var(--sage)] transition-colors"
        >
          View all projects →
        </a>
      </div>
    </div>
  );
}
