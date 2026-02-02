import Link from "next/link";
import { Button } from "../ui/button";

export default function HomeCTA() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-3xl px-4 text-center space-y-6">
        <h3 className="text-2xl font-semibold text-neutral-100">
          Let’s build something great
        </h3>

        <p className="text-neutral-400">
          I’m available for freelance work and collaborations.
        </p>

        <div className="flex justify-center gap-4">
          <Button asChild>
            <Link href="/contact">Contact Me</Link>
          </Button>

          <Button variant="ghost" asChild>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              View Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
