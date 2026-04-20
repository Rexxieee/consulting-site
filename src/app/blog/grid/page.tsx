"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Bookmark } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    slug: "future-of-ai",
    title: "The Future of Generative AI in Enterprise Solutions",
    category: "AI & Tech",
    date: "Oct 24, 2024",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "designing-for-scale",
    title: "Designing for Scale: Beyond Minimalist Aesthetics",
    category: "Design",
    date: "Oct 20, 2024",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "cloud-security",
    title: "Securing the Cloud: A Trailblazing Approach",
    category: "Cybersecurity",
    date: "Oct 15, 2024",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "web-perf-2025",
    title: "Web Performance Metrics to Watch in 2025",
    category: "Tech",
    date: "Oct 10, 2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "saas-growth",
    title: "SaaS Growth Frameworks for Global Markets",
    category: "Strategy",
    date: "Oct 05, 2024",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "digital-twin",
    title: "Implementing Digital Twins in Manufacturing",
    category: "Innovation",
    date: "Oct 01, 2024",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
  }
];

export default function BlogGrid() {
  return (
    <div className="pt-24 pb-24 lg:pt-32 max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
        <div className="max-w-xl">
          <div className="section-marker uppercase italic">Insights Grid — 01</div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none mb-0">
            Tech <span className="text-accent underline decoration-accent/10">Archive</span>
          </h1>
        </div>
      </div>

      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {posts.map((post, i) => (
          <motion.div
            key={post.slug}
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              show: { opacity: 1, scale: 1 }
            }}
            className="tecko-card p-4 bg-muted/20 border border-border group hover:bg-muted/40 transition-all duration-500"
          >
            <div className="aspect-video rounded-[2rem] overflow-hidden mb-6 relative">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Bookmark className="w-4 h-4" />
                </div>
            </div>
            <div className="px-4 pb-4">
                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-accent mb-3">
                    <span>{post.category}</span>
                    <span className="text-muted-foreground flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.date}</span>
                </div>
                <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-black uppercase tracking-tighter leading-tight mb-6 group-hover:text-accent transition-colors">
                        {post.title}
                    </h3>
                </Link>
                <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-[10px] font-black uppercase tracking-widest text-foreground hover:translate-x-2 transition-transform">
                    Read Post <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
