import PageTransition from "@/app/components/ui/PageTransition";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-transparent pt-20">
      <PageTransition>
        <AboutSection />
      </PageTransition>
    </main>
  );
}
