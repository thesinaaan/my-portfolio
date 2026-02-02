import Link from "next/link";
import { Button } from "../ui/button";

type HeroProps = {
  role: string;
  title: string;
  subtitle: string;
  paragraph1: string;
  paragraph2: string;
  ctaText: string;
  ctaLink: string;
  stack: string;
};

export default function Hero({
  role,
  title,
  subtitle,
  paragraph1,
  paragraph2,
  ctaText,
  ctaLink,
  stack,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-neutral-950 pt-32 pb-40">
      <div className="absolute inset-0 bg-neutral-950" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_35%_at_50%_0%,rgba(99,102,241,0.18),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03),transparent_40%,transparent_60%,rgba(99,102,241,0.04))]" />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
          {/* LEFT */}
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.32em] text-neutral-400">
              {role}
            </p>

            <h1 className="max-w-[640px] text-4xl font-semibold tracking-tight leading-[1.05] text-neutral-100 md:text-5xl lg:text-6xl">
              {title}
              <br />
              <span className="text-neutral-500">{subtitle}</span>
            </h1>

            <p className="max-w-xl text-neutral-400">{paragraph1}</p>
            <p className="max-w-xl text-neutral-500">{paragraph2}</p>

            <div className="pt-6">
              <Button asChild size="lg" className="bg-white text-black rounded-full px-6 py-3 font-medium">
                <Link href={ctaLink}>{ctaText}</Link>
              </Button>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <p className="text-xs uppercase tracking-widest text-neutral-300">
                Primary Stack
              </p>
              <p className="mt-2 text-sm text-neutral-200">{stack}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
