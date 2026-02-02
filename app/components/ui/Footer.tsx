export default function Footer() {
    return (
      <footer className="border-t border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-4 py-6 md:px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
          
          <p className="text-neutral-400">
            © {new Date().getFullYear()} Sinan. All rights reserved.
          </p>
  
          <p className="text-neutral-500">
            Built with Next.js · Crafted with precision & motion.
          </p>
        </div>
      </footer>
    );
  }
  