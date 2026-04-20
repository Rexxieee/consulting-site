"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const HeroSoftware = () => {
  return (
    <div className="relative w-full aspect-square max-w-2xl mx-auto flex items-center justify-center">
      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full rounded-[4.5rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] bg-[#010614]"
      >
        {/* Layer 1: Official Vector Grid Background */}
        <motion.img 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.25, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="/hero-grid-official.png" 
          alt="Technical Grid" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-25"
        />
        
        {/* Layer 2: Official 3D Glassmorphic Cubes */}
        <motion.img 
          initial={{ opacity: 0, y: 10, scale: 1.05 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          src="/hero-cubes-highres.avif" 
          alt="Technical 3D Visual" 
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Integrated "Learn more" Button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute top-8 right-8 z-20"
        >
          <Link 
            href="/about"
            className="group flex items-center gap-2 bg-white hover:bg-slate-100 text-black rounded-full px-5 py-2.5 transition-all duration-300 shadow-xl"
          >
            <span className="text-xs font-bold pl-1">Learn more</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>

        {/* Ambient Subtle Glow Layer */}
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-indigo-500/5 pointer-events-none" />
      </motion.div>

      {/* Background Glows */}
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/20 blur-[100px] rounded-full -z-10" />
      <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full -z-10" />
    </div>
  );
};
