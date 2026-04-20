"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles } from "lucide-react";
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

export default function PricingPage() {
  return (
    <div className="pt-24 pb-24 lg:pt-32 max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="section-marker justify-center">Investment — 01</div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Scalable <span className="text-accent italic">Pricing</span>
        </h1>
        <p className="text-muted-foreground text-lg">
          Transparent investment tiers designed to align with your business milestones.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-stretch">
        {pricingTiers.map((tier, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`tecko-card flex flex-col relative ${
              tier.highlight ? "border-accent/40 scale-[1.05] z-10 bg-accent/[0.02]" : "bg-muted/30"
            }`}
          >
            {tier.highlight && (
              <div className="absolute top-4 right-4 animate-pulse">
                <Sparkles className="w-5 h-5 text-accent" />
              </div>
            )}
            
            <div className="mb-8">
              <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-2">{tier.id} — Plan</span>
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-2">{tier.name}</h3>
              <div className="text-4xl font-black tracking-tighter text-foreground mb-4">
                {tier.price}
                {tier.price !== "Custom" && <span className="text-lg font-bold text-muted-foreground">/mo</span>}
              </div>
              <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">{tier.description}</p>
            </div>

            <div className="space-y-4 mb-10 flex-grow">
              {tier.features.map((feature, j) => (
                <div key={j} className="flex items-center gap-3 text-sm font-semibold">
                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <Check size={12} />
                  </div>
                  {feature}
                </div>
              ))}
            </div>

            <Button 
              variant={tier.highlight ? "default" : "secondary"} 
              responsive
              className="w-full h-14 uppercase tracking-widest font-black"
            >
              Choose Plan
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
