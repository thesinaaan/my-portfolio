import Hero from "./components/sections/Hero";
import FeaturedProjects from "./components/sections/FeaturedProjects";

export default function Home() {
  return (
    <main className="flex flex-col relative w-full overflow-hidden">

      <section id="hero" className="relative z-10">
        <Hero />
      </section>

      <section id="work-preview" className="relative z-20">
        <FeaturedProjects />
      </section>

    </main>
  );
}
