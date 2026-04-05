import { ProjectGrid } from "@/components/sections/ProjectGrid";
import { CaseStudySection } from "@/components/sections/CaseStudySection";

export const metadata = {
  title: "Work — Arjun Dev",
  description: "A collection of selected engineering projects and deep-dives into technical problem-solving.",
};

export default function WorkPage() {
  return (
    <div className="flex flex-col py-10">
      <div className="mb-16">
        <h1 className="font-serif text-[44px] text-[var(--text)] mb-4">Selected Work</h1>
        <p className="text-[16px] text-[var(--text2)] max-w-2xl leading-relaxed">
          I build products that solve real problems. From real-time collaboration engines to high-performance analytics dashboards, here's a look at what I've been shipping.
        </p>
      </div>

      <ProjectGrid />
      <div className="mt-10">
        <CaseStudySection />
      </div>
    </div>
  );
}
