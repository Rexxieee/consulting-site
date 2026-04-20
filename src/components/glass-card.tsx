"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";

interface GlassCardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  className?: string;
  index?: number;
}

export function GlassCard({ icon: Icon, title, description, className, index = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -5, scale: 1.01 }}
      className={cn(
        "group relative p-8 rounded-2xl glass hover:glass-strong transition-all duration-500",
        className
      )}
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/5 transition-all duration-500" />

      <div className="relative z-10">
        {Icon && (
          <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:bg-blue-500/20 group-hover:text-blue-300 transition-all duration-300">
            <Icon className="w-6 h-6" />
          </div>
        )}
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-100 transition-colors">
          {title}
        </h3>
        <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
