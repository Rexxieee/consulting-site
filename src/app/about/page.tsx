"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Shield, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-24 pb-24 lg:pt-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* --- HERO SECTION --- */}
        <section className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="section-marker">Our Story — 01</div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
                Scaling businesses <br />
                through <span className="text-accent underline decoration-accent/10 underline-offset-8 italic">innovation</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                NovaX was founded on the principle that digital precision is the ultimate 
                differentiator in the modern market. We don&apos;t just build platforms; 
                we engineer growth strategies that empower businesses to scale 
                indefinitely.
              </p>
              <Button size="lg" responsive className="group">
                Join our journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>

          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="tecko-card bg-accent/5 overflow-hidden min-h-[500px] flex items-center justify-center relative"
            >
              <div className="absolute inset-0 grid-background opacity-20" />
              <div className="relative z-10 text-center p-12">
                <div className="w-32 h-32 rounded-full border-2 border-accent/20 flex items-center justify-center mx-auto mb-8 bg-background relative overflow-hidden">
                  <div className="absolute inset-0 bg-accent animate-pulse opacity-10" />
                  <Star className="w-12 h-12 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter">Premium Visual Partner</h3>
                <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">Innovation — Strategy — Results</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- VALUES SECTION --- */}
        <section className="grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: Star, 
              title: "Excellence", 
              desc: "We strive for perfection in every line of code and every strategic decision." 
            },
            { 
              icon: Shield, 
              title: "Security", 
              desc: "Protecting your data and reputation is our most critical priority." 
            },
            { 
              icon: Users, 
              title: "Partnership", 
              desc: "We work as an extension of your team, not just an external vendor." 
            }
          ].map((item, i) => (
            <div key={i} className="tecko-card bg-muted/30 hover:bg-muted/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
