"use client";

import { motion } from "framer-motion";
import { Send, Terminal } from "lucide-react";
import { Glass } from "../ui/Glass";

export default function ContactSection() {
  return (
    <section className="relative w-full py-32 px-6 min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-900/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-950/20 text-cyan-400 backdrop-blur-sm">
              <Terminal size={14} />
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase">Secure Uplink</span>
            </div>

            <h2 className="text-6xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter mix-blend-difference">
              INITIATE
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20">
                PROTOCOL
              </span>
            </h2>

            <p className="text-neutral-400 max-w-md text-lg leading-relaxed font-light">
              Secure transmission line ready. Project inquiries and technical collaborations prioritized.
            </p>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Glass intensity="regular" className="p-8 md:p-10 border-white/10 shadow-2xl relative group">
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-500/50 -translate-x-1 -translate-y-1" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-500/50 translate-x-1 translate-y-1" />

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-cyan-400/70 uppercase tracking-widest">Identify Self</label>
                    <input
                      type="text"
                      placeholder="NAME"
                      className="w-full bg-white/5 border border-white/10 rounded p-4 text-white focus:bg-cyan-950/20 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-neutral-700 font-mono text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-cyan-400/70 uppercase tracking-widest">Return Freq</label>
                    <input
                      type="email"
                      placeholder="EMAIL"
                      className="w-full bg-white/5 border border-white/10 rounded p-4 text-white focus:bg-cyan-950/20 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-neutral-700 font-mono text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-cyan-400/70 uppercase tracking-widest">Transmission Data</label>
                  <textarea
                    rows={4}
                    placeholder="BRIEF..."
                    className="w-full bg-white/5 border border-white/10 rounded p-4 text-white focus:bg-cyan-950/20 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-neutral-700 font-mono text-sm resize-none"
                  />
                </div>

                <button className="w-full relative group overflow-hidden bg-white text-black font-bold py-4 rounded flex items-center justify-center gap-2 hover:bg-cyan-400 transition-all duration-300">
                  <span className="relative z-10 font-mono tracking-widest">TRANSMIT_DATA</span>
                  <Send size={16} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
              </form>
            </Glass>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
