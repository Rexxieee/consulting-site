"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const CTASection = () => {
  return (
    <section className="px-6 py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 novax-grid opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto">
        <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-24 relative overflow-hidden border border-white/10 text-center">
          {/* Section Marker */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-10"
          >
            <div className="bg-white/5 border border-white/10 rounded-full px-6 py-2 flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-[10px] font-black uppercase tracking-widest text-white italic">08 — Ready to start?</span>
            </div>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-7xl font-black tracking-tighter text-white uppercase leading-[1.1] mb-12 max-w-4xl mx-auto"
          >
            Start your <span className="text-accent italic">Journey</span> <br />
            to success with us
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button size="lg" className="rounded-full bg-accent hover:bg-accent/90 text-white px-10 h-16 uppercase tracking-widest font-black text-sm">
                Get a quote
                <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Link 
              href="/contact" 
              className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full px-10 h-16 transition-all"
            >
              <span className="text-sm font-black uppercase tracking-widest">Connect with us</span>
            </Link>
          </motion.div>

          {/* Abstract corner decorations */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent/20 blur-[100px] rounded-full" />
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-500/20 blur-[100px] rounded-full" />
        </div>
      </div>
    </section>
  );
};
