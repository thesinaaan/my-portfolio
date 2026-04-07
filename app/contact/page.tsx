import { ContactSection } from "@/components/sections/ContactSection";

export const metadata = {
  title: "Contact — Sinan",
  description: "Get in touch for frontend, full-stack, or technical strategy roles. Available for remote and hybrid opportunities.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <ContactSection />
    </div>
  );
}
