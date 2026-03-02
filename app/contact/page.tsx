import PageTransition from "@/app/components/ui/PageTransition";
import ContactSection from "@/app/components/sections/ContactSection";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-transparent pt-20">
      <PageTransition>
        <ContactSection />
      </PageTransition>
    </main>
  );
}
