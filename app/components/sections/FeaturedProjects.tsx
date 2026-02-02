"use client";

import dynamic from "next/dynamic";
import ProjectCard from "../ui/ProjectCard";

const ScrollStack = dynamic(
  () => import("../widgets/ScrollStack").then((m) => m.default),
  { ssr: false }
);

const ScrollStackItem = dynamic(
  () => import("../widgets/ScrollStack").then((m) => m.ScrollStackItem),
  { ssr: false }
);

const featuredProjects = [
  {
    title: "E-Commerce Platform",
    description: "High-performance storefront with refined UX.",
    image: "/images/ecommerce.jpg",
    tech: ["Next.js", "Tailwind", "Stripe"],
    href: "/projects/ecommerce",
  },
  {
    title: "Developer Portfolio",
    description: "Cinematic portfolio with disciplined motion.",
    image: "/images/portfolio.jpg",
    tech: ["Next.js", "Framer Motion"],
    href: "/projects/portfolio",
  },
  {
    title: "Dashboard System",
    description: "Internal tools focused on clarity and speed.",
    image: "/images/dashboard.jpg",
    tech: ["React", "Node.js"],
    href: "/projects/dashboard",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-32 md:px-6">
      {/* Header */}
      <div className="mb-20 space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
          Featured Work
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-neutral-100">
          Featured projects
        </h2>
        <p className="max-w-xl text-neutral-400">
          A focused set of projects that represent how I think and build.
        </p>
      </div>

      {/* ===== ScrollStack (desktop only) ===== */}
      <div className="relative min-h-screen hidden md:block">
        <ScrollStack>
          {featuredProjects.map((project) => (
            <ScrollStackItem key={project.title}>
              <div className="h-[420px] flex items-center">
                <ProjectCard {...project} />
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>

      {/* ===== SCROLL RELEASE ZONE (IMPORTANT) ===== */}
      <div className="hidden md:block h-[60vh]" />

      {/* ===== Mobile fallback ===== */}
      <div className="grid gap-8 md:hidden">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
