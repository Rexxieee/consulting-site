"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ProjectDetail() {
  const params = useParams();
  const slug = params.slug;

  return (
    <div className="pt-24 pb-24 lg:pt-32">
      {/* Hero Header */}
      <section className="px-6 max-w-7xl mx-auto mb-16 lg:mb-24">
        <Link href="/portfolio" className="inline-flex items-center text-xs font-black uppercase tracking-widest text-accent mb-12 hover:translate-x-[-4px] transition-transform">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Showcase
        </Link>
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
            <div className="max-w-3xl">
                <div className="section-marker uppercase">Case Study — {slug}</div>
                <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
                    Trailblazing <br />
                    <span className="text-accent italic">Digital</span> Experience
                </h1>
            </div>
            <div className="flex flex-col gap-4 min-w-[200px]">
                <div className="space-y-1">
                    <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Client</div>
                    <div className="text-lg font-bold uppercase">Stellar Corp</div>
                </div>
                <div className="space-y-1">
                    <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Category</div>
                    <div className="text-lg font-bold uppercase">AI / Web App</div>
                </div>
            </div>
        </div>
      </section>

      {/* Main Feature Image */}
      <section className="px-6 max-w-screen-2xl mx-auto mb-24">
        <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full aspect-[21/9] rounded-[3rem] bg-muted overflow-hidden border border-border"
        >
            <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600" 
                alt="Case Study" 
                className="w-full h-full object-cover"
            />
        </motion.div>
      </section>

      {/* Content Grid */}
      <section className="px-6 max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 mb-24">
        <div className="lg:col-span-4 space-y-12">
            <div>
                <h3 className="text-xl font-black uppercase tracking-tighter mb-4 text-accent">The Challenge</h3>
                <p className="text-muted-foreground leading-relaxed font-bold">
                    Our client needed a robust, high-performance dashboard that could process 
                    real-time data streams while maintaining a premium, minimalist aesthetic.
                </p>
            </div>
            <div>
                <h3 className="text-xl font-black uppercase tracking-tighter mb-4 text-accent">Our Role</h3>
                <ul className="space-y-2 text-sm font-black uppercase tracking-widest text-foreground">
                    <li>→ UX/UI Engineering</li>
                    <li>→ Full-Stack Development</li>
                    <li>→ AI Architecture</li>
                </ul>
            </div>
        </div>
        <div className="lg:col-span-8 space-y-12">
            <div>
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">The Solution</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    We engineered a custom state-management engine using Next.js and Tailwind, 
                    integrated with a custom-trained LLM for automated data narration. 
                    The result is a fluid, high-fidelity experience that empowers decision-makers 
                    with instant, actionable insights.
                </p>
                <div className="grid grid-cols-2 gap-8 py-8 border-y border-border">
                    <div>
                        <div className="text-4xl font-black text-accent tracking-tighter">+120%</div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Speed Improvement</div>
                    </div>
                    <div>
                        <div className="text-4xl font-black text-accent tracking-tighter">99.9%</div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Data Accuracy</div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Next Project Footer */}
      <section className="px-6 py-24 bg-muted/30 border-t border-border mt-24">
         <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
            <span className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-4">Next Up</span>
            <Link href="/portfolio/cyber-vault" className="group">
                <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter group-hover:text-accent transition-colors duration-500">
                    Cyber Vault <ArrowRight className="inline-block w-12 h-12 md:w-20 md:h-20 ml-4 group-hover:translate-x-4 transition-transform" />
                </h2>
            </Link>
         </div>
      </section>
    </div>
  );
}
