"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeader({ label, title, description, centered = true }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-16 ${centered ? "text-center" : ""}`}
    >
      {label && (
        <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-blue-400 border border-blue-500/20 bg-blue-500/5">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
