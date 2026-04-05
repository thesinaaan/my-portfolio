import { ContactSection } from "@/components/sections/ContactSection";

export const metadata = {
  title: "Contact — Arjun Dev",
  description: "Get in touch for frontend, full-stack, or contract engineering roles. Available for remote and hybrid opportunities.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col py-10">
      <ContactSection />
      
      <div className="mt-12 p-8 border border-[var(--border)] rounded-[14px] bg-[var(--bg3)]">
        <h3 className="font-serif text-[24px] mb-4 text-[var(--text)]">Direct Channels</h3>
        <ul className="space-y-4">
          <li className="flex items-center gap-4 text-[15px] text-[var(--text2)]">
            <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-[var(--bg2)] text-[var(--text)] font-bold">L</span>
            <span>LinkedIn: <a href="#" className="text-[var(--sage)] hover:underline">linkedin.com/in/arjundev</a></span>
          </li>
          <li className="flex items-center gap-4 text-[15px] text-[var(--text2)]">
            <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-[var(--bg2)] text-[var(--text)] font-bold">G</span>
            <span>GitHub: <a href="#" className="text-[var(--sage)] hover:underline">github.com/thesinan</a></span>
          </li>
          <li className="flex items-center gap-4 text-[15px] text-[var(--text2)]">
            <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-[var(--bg2)] text-[var(--text)] font-bold">X</span>
            <span>Twitter: <a href="#" className="text-[var(--sage)] hover:underline">x.com/arjundev_io</a></span>
          </li>
        </ul>
      </div>
    </div>
  );
}
