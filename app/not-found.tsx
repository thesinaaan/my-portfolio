import React from "react";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <GlassCard intensity="heavy" className="max-w-md p-10">
        <h1 className="font-serif text-[64px] text-[var(--text)] leading-none mb-4">404</h1>
        <p className="text-[16px] text-[var(--text2)] mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved to a new coordinate.
        </p>
        <Link href="/">
          <Button variant="primary">Return Home</Button>
        </Link>
      </GlassCard>
      
      <div className="mt-10 animate-pulse">
        <div className="w-[1px] h-20 bg-gradient-to-b from-[var(--sage)] to-transparent mx-auto" />
      </div>
    </div>
  );
}

