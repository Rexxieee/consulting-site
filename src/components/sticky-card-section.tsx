"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

interface CardProps {
  index: number;
  title: string;
  description: string;
  icon: any;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const Card = ({ index, title, description, icon: Icon, progress, range, targetScale }: CardProps) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div className="h-screen flex items-center justify-center sticky top-0 p-6 lg:p-0">
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${index * 25}px)`,
        }}
        className="relative w-full max-w-5xl h-[500px] rounded-[2.5rem] p-8 lg:p-16 flex flex-col lg:flex-row gap-12 border border-border bg-card shadow-2xl backdrop-blur-xl group overflow-hidden"
      >
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -skew-x-12 translate-x-1/4 -z-10" />
        
        {/* Text Content */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
              <Icon className="w-6 h-6" />
            </div>
            <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">0{index + 1} — Service</span>
          </div>
          
          <h3 className="text-3xl lg:text-4xl font-black tracking-tighter mb-6 uppercase leading-tight">
            {title}
          </h3>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-md">
            {description}
          </p>
          
          <Button variant="outline" className="w-fit px-8 rounded-full group/btn bg-background/50">
            View Project
            <ArrowUpRight className="ml-2 w-4 h-4 group-hover/btn:rotate-45 transition-transform" />
          </Button>
        </div>

        {/* Visual Content Placeholder (Tecko 3D style) */}
        <div className="flex-1 relative hidden lg:flex items-center justify-center">
          <div className="relative w-full aspect-square max-w-sm rounded-[3rem] bg-gradient-to-br from-accent/20 to-indigo-500/10 border border-accent/20 flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0 grid-background opacity-20" />
             <motion.div
               animate={{ rotate: 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="w-48 h-48 border-2 border-dashed border-accent/30 rounded-full flex items-center justify-center"
             >
                <div className="w-32 h-32 bg-accent/20 blur-2xl rounded-full" />
             </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const StickyCardSection = ({ services }: { services: any[] }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={container} className="relative pb-24">
      {/* Dynamic Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center sticky top-24 pt-10 pointer-events-none">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="z-50"
        >
          <div className="section-marker justify-center">01 — Software</div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tighter mb-6 uppercase leading-[1.1]">
            Empowering <span className="text-accent underline decoration-accent/10 italic">Excellence</span>: <br />
            Unveiling Our Trailblazing <br />
            Software Solutions
          </h2>
        </motion.div>
      </div>

      <div className="relative space-y-0">
        {services.map((service, i) => {
          const targetScale = 1 - ((services.length - i) * 0.05);
          return (
            <Card
              key={i}
              index={i}
              {...service}
              progress={scrollYProgress}
              range={[i / services.length, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
};
