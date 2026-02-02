"use client";

import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
      <Card className="relative overflow-hidden glass-panel rounded-3xl p-8 md:p-12">

        {/* Gradient Accent */}
        <motion.div
          className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-500/50 to-purple-600/60 blur-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        <div className="relative grid gap-12 md:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
              Contact
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-50 leading-tight">
              Building something that needs a precise front-end?
            </h2>

            <p className="text-sm text-neutral-300 max-w-md">
              I’m open to front-end roles, collaborations, and product launches
              where UI and motion actually matter.
            </p>

            <div className="space-y-1 text-xs text-neutral-400">
              <p>
                Email:{" "}
                <span className="font-mono text-neutral-200">
                  you@example.com
                </span>
              </p>
              <p>Location: India (IST)</p>
            </div>
          </div>

          {/* RIGHT SIDE — FORM */}
          <form
            className="space-y-4 text-sm"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1">
                <label className="text-xs text-neutral-400">Name</label>
                <input
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-neutral-100 outline-none placeholder:text-neutral-600"
                  placeholder="Who's reaching out?"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-neutral-400">Email</label>
                <input
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-neutral-100 outline-none placeholder:text-neutral-600"
                  placeholder="Where can I reply?"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs text-neutral-400">Project</label>
              <textarea
                className="h-28 w-full rounded-2xl resize-none border border-white/10 bg-white/5 px-3 py-2 text-sm text-neutral-100 outline-none placeholder:text-neutral-600"
                placeholder="Share context: product, timeline, scope."
              />
            </div>

            <Button type="submit" size="lg">
              Send message
            </Button>
          </form>
        </div>
      </Card>
    </section>
  );
}
