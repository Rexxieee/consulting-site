"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const teamItems = [
  { name: "Emily Rodriquez", role: "Quality Assurance Manager", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&h=400" },
  { name: "Marcus Thorne", role: "Sr. Product Strategist", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400" },
  { name: "Elena Vance", role: "Creative Director", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400" },
  { name: "David Park", role: "Full Stack Lead", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400" },
  { name: "Sarah Chen", role: "AI Research Head", image: "https://images.unsplash.com/photo-1598550874175-4d0fe4a2c90d?auto=format&fit=crop&w=400&h=400" }
];

export const HomeTeamSection = () => {
  return (
    <section className="px-6 py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <div className="section-marker uppercase italic mb-6">05 — Our team</div>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase leading-none mt-4">
              Meet our <span className="text-accent underline decoration-accent/10">professional</span> <br />
              & friendly team
            </h2>
          </div>
          <Link href="/team">
            <Button className="rounded-full bg-accent hover:bg-accent/90 text-white px-8 h-12">
              See our team
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-12 snap-x hide-scrollbar">
          {teamItems.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="min-w-[280px] lg:min-w-[320px] snap-center group relative aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-muted/20 border border-border cursor-pointer"
            >
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
              />
              
              {/* Blue Info Box Overlay */}
              <div className="absolute inset-x-4 bottom-4 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-accent p-6 rounded-[1.5rem] shadow-2xl">
                 <h4 className="text-lg font-black text-white uppercase tracking-tighter leading-none mb-1">{member.name}</h4>
                 <p className="text-[10px] font-black text-white/70 uppercase tracking-widest mb-4">{member.role}</p>
                 <div className="flex gap-3">
                    <ShieldCheck className="w-3.5 h-3.5 text-white/50 hover:text-white transition-colors" />
                    <Cpu className="w-3.5 h-3.5 text-white/50 hover:text-white transition-colors" />
                    <Zap className="w-3.5 h-3.5 text-white/50 hover:text-white transition-colors" />
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
