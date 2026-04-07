import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { cn } from "@/lib/utils";
import { DM_Sans, DM_Serif_Display } from "next/font/google";




import { Navbar } from "@/components/layout/Navbar";
import { ClockPill, DockPill } from "@/components/layout/SpatialPillars";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
});

export const metadata = {
  title: "Sinan — The Engineer Who Sees",
  description: "Architecting high-performance web applications with immersive liquid motion.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head />
      <body className={cn(
        "min-h-screen font-sans antialiased text-[var(--text)] bg-[var(--bg)] transition-colors duration-300",
        dmSans.variable,
        dmSerif.variable
      )}>
        <ThemeProvider>
          {/* Layer 0 — cursor glow, fixed, below everything */}

          
          {/* Layer 1 — floating pillars and restored Navbar */}
          <Navbar />
          <ClockPill />
          <DockPill />
          
          {/* Layer 9999 — custom cursor */}


          {/* Layer 2 — page content */}
          <div className="portfolio w-full flex flex-col min-h-screen relative z-1 selection:bg-[#5DCAA5]/30">
            <main className="flex-grow w-full">
              <PageTransition>
                {children}
              </PageTransition>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}


