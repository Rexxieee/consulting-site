"use client";

import { motion } from "framer-motion";
import { 
  BarChart3, 
  Code2, 
  Palette, 
  Brain, 
  Cloud, 
  ShieldCheck,
  ArrowUpRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Strategic Consulting",
    description: "Data-driven roadmaps designed to align tech with business growth through in-depth market analysis and strategic execution.",
    icon: BarChart3
  },
  {
    title: "Web Development",
    description: "High-performance, scalable web applications built with the most advanced modern frameworks for superior stability.",
    icon: Code2
  },
  {
    title: "Brand Identity",
    description: "Elevating your visual presence with premium, cohesive design systems that resonate with global audiences.",
    icon: Palette
  },
  {
    title: "AI & Automation",
    description: "Integrating intelligent systems and machine learning models to streamline enterprise operations and accelerate delivery.",
    icon: Brain
  },
  {
    title: "Cloud Infrastructure",
    description: "Secure, agile cloud architectures optimized for speed, reliability, and cost-efficiency across hybrid environments.",
    icon: Cloud
  },
  {
    title: "Cybersecurity",
    description: "Proactive threat detection and enterprise-grade data protection to safeguard your digital assets in a complex world.",
    icon: ShieldCheck
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-24 lg:pt-32 max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-xl">
          <div className="section-marker">All Solutions — 01</div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-0">
            Tailored solutions for <span className="text-accent italic decoration-accent/10 underline underline-offset-8">enterprise excellence</span>
          </h1>
        </div>
        <p className="text-muted-foreground max-w-xs text-sm leading-relaxed mb-1">
          Explore our comprehensive suite of digital services designed to transform 
          your business into a high-technology powerhouse.
        </p>
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
              staggerChildren: 0.15
            }
          }
        }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((service, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 }
            }}
            className="tecko-card group hover:scale-[1.02] transition-all duration-500 cursor-pointer"
          >
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-300">
              <service.icon className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight uppercase flex items-center justify-between">
              {service.title}
              <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all text-accent group-hover:text-white" />
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              {service.description}
            </p>
            <Button variant="secondary" responsive className="px-6 rounded-full group/btn">
              Configure
            </Button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
