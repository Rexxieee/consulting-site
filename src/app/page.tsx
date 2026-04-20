"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Send, 
  Layers, 
  Cpu, 
  Globe, 
  Zap,
  CheckCircle2
} from "lucide-react";
import { StickyCardSection } from "@/components/sticky-card-section";
import { FeedbackSection } from "@/components/feedback-section";
import { HomeTeamSection } from "@/components/home-team-section";
import { FAQSection } from "@/components/faq-section";
import { HeroSoftware } from "@/components/hero-software";
import { PricingSection } from "@/components/pricing-section";
import { CTASection } from "@/components/cta-section";

// Mock logos data
const partners = [
  "SQUARESPACE", "DigitalOcean", "Buffer", "Basecamp", "Airtable", "Logitech"
];

const services = [
  {
    id: "01",
    label: "Service",
    title: "Digital Transformation",
    description: "Software development involves the design, creation, and maintenance of tailored software solutions to address specific organizational needs.",
    icon: Layers
  },
  {
    id: "02",
    label: "Process",
    title: "Technology Partner",
    description: "We work alongside your team to engineer robust architectures that handle enterprise-level scale and complexity.",
    icon: Cpu
  },
  {
    id: "03",
    label: "Strategy",
    title: "Global Consulting",
    description: "Align your technology roadmap with business outcomes through data-driven strategy and market analysis.",
    icon: Globe
  }
];

export default function Home() {
  return (
    <div className="relative isolate">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 novax-grid opacity-30" />
      
      {/* --- HERO SECTION --- */}
      <section className="px-6 pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="flex-1 text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 leading-[1.1]">
                Launch your <br />
                business to a <br />
                <span className="text-accent underline decoration-accent/20 decoration-8 underline-offset-8">NovaX Level</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-12 max-w-lg leading-relaxed">
                Elevate your enterprise with NovaX—where innovative software 
                meets cutting-edge strategy to optimize your global operations.
              </p>

              {/* Newsletter Input */}
              <div className="relative w-full max-w-md mb-12 group">
                <input 
                  type="email" 
                  placeholder="Your Email Address"
                  className="w-full bg-background border border-border rounded-full h-14 md:h-16 px-6 md:px-8 pr-16 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all pl-6 md:pl-8 shadow-sm text-sm"
                />
                <button className="absolute right-1.5 top-1.5 h-11 w-11 md:h-13 md:w-13 rounded-full bg-accent text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-lg shadow-accent/20">
                  <Send className="w-5 h-5" />
                </button>
              </div>

              {/* Avatar Social Proof */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-4">
                  {[
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150",
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150",
                    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150"
                  ].map((url, i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-background bg-muted overflow-hidden">
                      <img 
                        src={url} 
                        alt="User" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
                  500+ Customers are <br /> satisfied with our service
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Visual Dashboard Component */}
          <div className="flex-1">
            <HeroSoftware />
          </div>
        </div>
      </section>

      {/* --- PARTNERS MARQUEE --- */}
      <section className="px-6 py-12 border-y border-border bg-muted/30 marquee-container">
        <div className="marquee-content opacity-40 grayscale transition-all hover:grayscale-0">
          {[...partners, ...partners].map((partner, i) => (
            <span key={i} className="text-xl font-black tracking-tighter">
              {partner}
            </span>
          ))}
        </div>
      </section>

      {/* --- SERVICES SECTION (STICKY STACKING) --- */}
      <StickyCardSection services={services} />

      {/* --- FEEDBACK SECTION (04) --- */}
      <FeedbackSection />

      {/* --- HOME TEAM SECTION (05) --- */}
      <HomeTeamSection />

      {/* --- FAQ SECTION (06) --- */}
      <FAQSection />

      {/* --- PRICING SECTION (07) --- */}
      <PricingSection />

      {/* --- CTA SECTION (08) --- */}
      <CTASection />

      {/* --- STATS SECTION --- */}
      <section className="px-6 py-24 bg-accent/5 border-y border-accent/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 text-center lg:text-left">
          {[
            { value: "260+", label: "Professional Engineers" },
            { value: "400+", label: "Happy Customers" },
            { value: "1,000+", label: "Projects Completed" },
            { value: "24+", label: "Countries Served" }
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-4xl md:text-5xl font-black text-accent mb-2 tracking-tighter">
                {stat.value}
              </div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
