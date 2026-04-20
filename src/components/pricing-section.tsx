"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingTiers = [
  {
    id: "01",
    name: "Basic",
    price: "$1,499",
    description: "Essential services for single-project digital needs.",
    features: ["Digital Roadmap", "5-Page Website", "Basic SEO", "Standard Support"],
    highlight: false
  },
  {
    id: "02",
    name: "Pro",
    price: "$3,999",
    description: "Comprehensive solutions for growing enterprises.",
    features: ["Digital Transformation", "Custom Web App", "Advanced SEO", "Priority Support", "AI Integration"],
    highlight: true
  },
  {
    id: "03",
    name: "Enterprise",
    price: "Custom",
    description: "End-to-end strategy for large organizations.",
    features: ["Cloud Infrastructure", "Cybersecurity Suite", "SLA Agreements", "Dedicated Support"],
    highlight: false
  }
];

export const PricingSection = () => {
  return (
    <section className="px-6 py-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="section-marker justify-center italic">07 — Pricing Plans</div>
          <h2 className="text-4xl lg:text-6xl font-black tracking-tighter uppercase leading-none mt-4">
            Investment <span className="text-accent italic">Tiers</span>
          </h2>
          <p className="text-muted-foreground mt-8 text-sm font-bold uppercase tracking-wider">
            Transparent pricing designed to scale with your business milestones.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch pt-8">
          {pricingTiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`novax-card p-10 flex flex-col relative ${
                tier.highlight ? "border-accent/40 shadow-2xl shadow-accent/10 z-10 bg-accent/[0.02]" : "bg-muted/10 border-border"
              }`}
            >
              {tier.highlight && (
                <div className="absolute top-6 right-6">
                  <Sparkles className="w-5 h-5 text-accent animate-pulse" />
                </div>
              )}
              
              <div className="mb-10">
                <span className="text-[10px] font-black text-accent uppercase tracking-widest block mb-1">{tier.id} — Plan</span>
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">{tier.name}</h3>
                <div className="text-5xl font-black tracking-tighter text-foreground mb-4">
                  {tier.price}
                  {tier.price !== "Custom" && <span className="text-lg font-bold text-muted-foreground ml-1">/mo</span>}
                </div>
                <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest leading-relaxed">{tier.description}</p>
              </div>

              <div className="space-y-4 mb-12 flex-grow">
                {tier.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-4 text-xs font-bold uppercase tracking-wide">
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                      <Check size={10} strokeWidth={4} />
                    </div>
                    {feature}
                  </div>
                ))}
              </div>

              <Button 
                variant={tier.highlight ? "default" : "secondary"} 
                responsive
                className="w-full h-14 uppercase tracking-widest font-black rounded-full"
              >
                Choose Plan
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
