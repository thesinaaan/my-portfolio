import Link from "next/link";
import { Glass } from "./components/ui/Glass";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">

            {/* Background Glitch Effect (CSS-based) */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[1px] bg-cyan-500 blur-[20px] animate-pulse" />
            </div>

            <div className="relative z-10 text-center space-y-8">
                <div className="space-y-4">
                    <span className="text-xs font-bold tracking-[0.5em] uppercase text-red-500/80 animate-pulse">
                        Error 404
                    </span>
                    <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-white/10 select-none">
                        LOST
                    </h1>
                </div>

                <Glass intensity="high" className="p-8 max-w-md mx-auto border-red-500/20">
                    <p className="text-lg text-blue-100/70 mb-8 font-light leading-relaxed">
                        Signal lost. The coordinates you are attempting to reach do not exist in this sector.
                    </p>

                    <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 hover:text-white transition-colors">
                        <ArrowLeft size={14} />
                        Return to Orbit
                    </Link>
                </Glass>
            </div>
        </div>
    );
}
