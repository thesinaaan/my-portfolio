import { AboutCardSection } from "@/components/sections/AboutCardSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ActivitySection } from "@/components/sections/ActivitySection";

export const metadata = {
  title: "About — Arjun Dev",
  description: "Learn more about Arjun's journey into development, technical strengths, and professional philosophy.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col py-10">
      <AboutCardSection />
      <SkillsSection />
      <ActivitySection />
    </div>
  );
}
