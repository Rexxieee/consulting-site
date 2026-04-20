"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const categories = ["All", "AI Solution", "Web App", "Mobile", "Branding"];

const projects = [
  {
    id: "quantum-ai",
    title: "Quantum AI Dashboard",
    category: "AI Solution",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    size: "large"
  },
  {
    id: "nexus-pay",
    title: "Nexus Pay App",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
    size: "small"
  },
  {
    id: "stellar-brand",
    title: "Stellar Brand Identity",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
    size: "small"
  },
  {
    id: "orbit-cloud",
    title: "Orbit Cloud Platform",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    size: "large"
  },
  {
    id: "cyber-vault",
    title: "Cyber Vault Security",
    category: "AI Solution",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    size: "small"
  },
  {
    id: "eco-trace",
    title: "Eco-Trace Analytics",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    size: "small"
  }
];

export default function PortfolioGrid() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="pt-24 pb-24 lg:pt-32 max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
        <div className="max-w-xl">
          <div className="section-marker uppercase italic">Showcase — 01</div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-0 leading-none">
            Selected <span className="text-accent underline decoration-accent/10">Productions</span>
          </h1>
        </div>
        <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                        filter === cat 
                        ? 'bg-accent text-white' 
                        : 'bg-muted/50 text-muted-foreground hover:bg-muted'
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className={`group relative overflow-hidden rounded-[2.5rem] bg-muted/30 border border-border cursor-pointer ${
                project.size === 'large' ? 'lg:col-span-2 aspect-[16/9]' : 'aspect-square'
            }`}
          >
            <Link href={`/portfolio/${project.id}`}>
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <div className="text-accent text-[10px] font-black uppercase tracking-widest mb-2">{project.category}</div>
                    <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-black text-white uppercase tracking-tighter">{project.title}</h3>
                        <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center">
                            <ArrowUpRight className="w-6 h-6" />
                        </div>
                    </div>
                </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
