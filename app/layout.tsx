import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { cn } from "@/lib/utils";
import { DM_Sans, DM_Serif_Display } from "next/font/google";

import { CustomCursor } from "@/components/ui/CustomCursor";
import Plasma from "@/app/components/animations/Plasma";
import CinematicOverlay from "@/app/components/ui/CinematicOverlay";

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
  title: "Arjun Dev — Full-stack Engineer",
  description: "Architecting high-performance web applications with a focus on simplicity and craftsmanship.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={cn(
        "min-h-screen font-sans border-t-[3px] border-[var(--sage)] transition-colors duration-300 antialiased",
        dmSans.variable,
        dmSerif.variable
      )}>
        <ThemeProvider>
          <Plasma opacity={0.3} speed={0.4} color="#556b5a" />
          <CinematicOverlay />
          <CustomCursor />
          <div className="portfolio max-w-[940px] mx-auto px-6 md:px-10 flex flex-col min-h-screen relative z-10">
            <Navbar />
            <main className="flex-grow">
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


