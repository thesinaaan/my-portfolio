import Link from "next/link";

export default function MoreProjects() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4">

        <p className="mb-6 text-sm uppercase tracking-widest text-neutral-400">
          More Projects
        </p>

        <ul className="space-y-3 text-sm text-neutral-300">
          <li>
            <Link href="/projects/dashboard" className="hover:text-white">
              Admin Dashboard · React · Charts
            </Link>
          </li>
          <li>
            <Link href="/projects/ecommerce" className="hover:text-white">
              E-commerce UI · Next.js · Stripe
            </Link>
          </li>
          <li>
            <Link href="/projects/blog" className="hover:text-white">
              Blog Platform · MDX · SEO
            </Link>
          </li>
        </ul>

        <Link
          href="/projects"
          className="mt-8 inline-block text-sm text-neutral-400 hover:text-white"
        >
          View all projects →
        </Link>
      </div>
    </section>
  );
}
