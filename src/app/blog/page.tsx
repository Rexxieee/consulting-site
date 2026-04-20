"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    slug: "future-of-ai",
    title: "The Future of Generative AI in Enterprise Solutions",
    excerpt: "Exploring how LLMs are transforming executive decision-making and operational efficiency in 2024 and beyond.",
    category: "AI & Tech",
    date: "Oct 24, 2024",
    author: "Alex Rivera",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "designing-for-scale",
    title: "Designing for Scale: Beyond Minimalist Aesthetics",
    excerpt: "How high-fidelity design systems empower growing businesses to maintain brand integrity across global markets.",
    category: "Design",
    date: "Oct 20, 2024",
    author: "Elena Vance",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "cloud-security",
    title: "Securing the Cloud: A Trailblazing Approach to Infrastructure",
    excerpt: "Why zero-trust architecture is no longer optional for modern software-driven enterprises.",
    category: "Cybersecurity",
    date: "Oct 15, 2024",
    author: "Marcus Thorne",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
  }
];

export default function BlogList() {
  return (
    <div className="pt-24 pb-24 lg:pt-32 max-w-5xl mx-auto px-6">
      <div className="mb-20">
        <div className="section-marker uppercase italic">Insights — 01</div>
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
            Latest <br /> <span className="text-accent underline decoration-accent/10">Perspectives</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-lg font-bold">
            Deep dives into the technology, strategy, and design systems defining the next era of business excellence.
        </p>
      </div>

      <div className="space-y-16">
        {posts.map((post, i) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group grid lg:grid-cols-12 gap-8 items-center border-b border-border pb-16 last:border-0"
          >
            <div className="lg:col-span-5 aspect-[4/3] rounded-[2.5rem] bg-muted overflow-hidden border border-border">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
            </div>
            <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-accent">
                    <span className="bg-accent/10 px-3 py-1 rounded-full">{post.category}</span>
                    <span className="text-muted-foreground flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.date}</span>
                </div>
                <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-tight group-hover:text-accent transition-colors">
                        {post.title}
                    </h2>
                </Link>
                <p className="text-muted-foreground leading-relaxed font-bold">
                    {post.excerpt}
                </p>
                <div className="pt-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-muted border border-border" />
                        <span className="text-xs font-black uppercase tracking-widest text-foreground">{post.author}</span>
                    </div>
                    <Link href={`/blog/${post.slug}`} className="flex items-center text-xs font-black uppercase tracking-widest hover:translate-x-2 transition-transform">
                        Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
