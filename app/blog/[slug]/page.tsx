import { notFound } from "next/navigation";
import { motion } from "framer-motion";

const posts = {
  "designing-premium-portfolio": {
    title: "How I Designed a Premium Portfolio",
    date: "Jan 12, 2025",
    readTime: "4 min read",
    content: `
Premium portfolios look simple—but they take serious detail work.

In this article, I break down:
- Gradient strategy  
- Motion hierarchy  
- Bento layout structuring  
- Micro-interactions  
- Text rhythm & spacing decisions

The goal is interfaces that feel engineered, not improvised.
`,
  },

  "nextjs-app-router-structure": {
    title: "Next.js App Router — Clean Architecture Guide",
    date: "Dec 28, 2024",
    readTime: "6 min read",
    content: `
A clean Next.js architecture prevents chaos as your project grows.

Topics covered:
- Route groups  
- Component folders  
- UI primitives  
- Animation layers  
- Avoiding client-heavy pages  
`,
  },

  "motion-design-for-developers": {
    title: "Motion Design for React Developers",
    date: "Nov 10, 2024",
    readTime: "5 min read",
    content: `
Motion isn't decoration—it's communication.

Learn:
- Cinematic easing curves  
- Stagger control  
- How to build focus flows  
- When to animate & when not to  
`,
  },
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];

  if (!post) return notFound();

  return (
    <section className="mx-auto max-w-3xl px-4 py-20 md:px-6 md:py-28 space-y-10">
      
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-3"
      >
        <h1 className="text-3xl md:text-4xl font-semibold text-neutral-50">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-xs text-neutral-500">
          <span>{post.date}</span>
          <span className="h-1 w-1 rounded-full bg-neutral-600" />
          <span>{post.readTime}</span>
        </div>
      </motion.div>

      {/* CONTENT */}
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="prose prose-invert prose-neutral max-w-none leading-relaxed"
      >
        {post.content.split("\n").map((p, i) =>
          p.trim() === "" ? null : (
            <p key={i} className="text-neutral-300">
              {p}
            </p>
          )
        )}
      </motion.article>
    </section>
  );
}
