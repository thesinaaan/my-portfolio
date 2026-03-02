import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Background3D from "./components/ui/Background3D";
import { cn } from "@/lib/utils";
import { Inter, Cinzel, JetBrains_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-serif" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata = {
  title: "The Celestial Archive",
  description: "Interstellar × Computational Architecture",
};

import CinematicOverlay from "./components/ui/CinematicOverlay";

// ... (previous imports)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(
        "min-h-screen bg-[#050505] font-sans text-neutral-100 antialiased selection:bg-cyan-900/50 selection:text-cyan-100",
        inter.variable,
        cinzel.variable,
        jetbrainsMono.variable
      )}>
        <CinematicOverlay />
        <Background3D />
        <Navbar />
        <main className="relative flex min-h-screen flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
