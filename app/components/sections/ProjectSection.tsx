import Image from "next/image";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-32 bg-neutral-950 py-32"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="mb-12 text-3xl font-semibold text-neutral-100 md:text-4xl">
          Featured Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* CARD */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <Image
              src="/project-1.jpg"
              alt="Project preview"
              width={800}
              height={500}
              className="h-auto w-full rounded-xl object-cover"
            />

            <h3 className="mt-4 text-lg font-medium text-neutral-100">
              Event Platform
            </h3>

            <p className="mt-2 text-sm text-neutral-400">
              High-performance event discovery platform with SSR and caching.
            </p>
          </div>

          {/* CARD */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <Image
              src="/project-2.jpg"
              alt="Project preview"
              width={800}
              height={500}
              className="h-auto w-full rounded-xl object-cover"
            />

            <h3 className="mt-4 text-lg font-medium text-neutral-100">
              Booking System
            </h3>

            <p className="mt-2 text-sm text-neutral-400">
              Scalable booking flow with clean domain separation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
