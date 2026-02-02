import Link from "next/link";
import clsx from "clsx";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  href: string;
  compact?: boolean;
}

export default function ProjectCard({
  title,
  description,
  tech,
  href,
  compact = false,
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-white/20",
        compact ? "p-6" : "p-8"
      )}
    >
      {/* Image */}
      <div
        className={clsx(
          "w-full rounded-2xl bg-gradient-to-br from-white/10 to-white/5",
          compact ? "mb-4 h-40" : "mb-6 h-56"
        )}
      />

      <h3
        className={clsx(
          "font-semibold text-neutral-100",
          compact ? "text-lg" : "text-xl"
        )}
      >
        {title}
      </h3>

      <p
        className={clsx(
          "mt-2 text-neutral-400",
          compact ? "text-sm line-clamp-2" : "text-base"
        )}
      >
        {description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="rounded-full bg-white/10 px-3 py-1 text-xs text-neutral-300"
          >
            {item}
          </span>
        ))}
      </div>
    </Link>
  );
}
