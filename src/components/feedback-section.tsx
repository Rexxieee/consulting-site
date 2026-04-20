"use client";

import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const feedbacks = [
  {
    name: "Bradley Gordon",
    role: "CEO & Founder, Archin Studio",
    quote: "A studio with passionate, professional and full creativity. Much more than I expected. Great services, high quality products & affordable prices. I'm extremely satisfied!",
    date: "Sep 08, 2024",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Mac Alister",
    role: "CEO & Founder, Archin Studio",
    quote: "Thank you so much for the support of NovaX team, who have been with our business for more than 3 years. A long journey with many exciting experiences and moments.",
    date: "Sep 08, 2024",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400"
  }
];

export const FeedbackSection = () => {
  return (
    <section className="px-6 py-24 relative overflow-hidden bg-background">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path d="M0,1000 C300,800 400,1200 1000,1000" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent/20" />
          <path d="M0,800 C400,600 600,1000 1000,800" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent/10" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="section-marker justify-center uppercase italic">04 — Feedback</div>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase leading-none mt-4">
            Hear from <span className="text-accent">our clients</span>
          </h2>
          <p className="text-muted-foreground mt-8 max-w-lg mx-auto text-sm font-bold uppercase tracking-wider">
            We&apos;ve helped hundreds of partners, to achieve their goals and stellar feedback, is our reward!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {feedbacks.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="novax-card bg-muted/20 p-8 lg:p-12 relative overflow-hidden border border-border"
            >
              <div className="flex items-start gap-4 mb-10">
                <div className="w-16 h-18 bg-accent/10 relative overflow-hidden [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]">
                  <img src={f.image} alt={f.name} className="w-full h-full object-cover" />
                </div>
                <div className="pt-2">
                  <h4 className="text-lg font-black uppercase tracking-tighter leading-none">{f.name}</h4>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-1">{f.role}</p>
                </div>
              </div>

              <div className="relative mb-10">
                <Quote className="absolute -top-4 -left-4 w-12 h-12 text-accent/5 -z-10" />
                <p className="text-lg text-foreground font-bold italic leading-relaxed text-center px-4">
                  &quot;{f.quote}&quot;
                </p>
              </div>

              <div className="pt-10 border-t border-border flex justify-between items-center">
                <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                  {f.date}
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-black mr-1">{f.rating.toFixed(1)}</span>
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star 
                      key={s} 
                      className={`w-3 h-3 ${s <= Math.floor(f.rating) ? 'fill-yellow-500 text-yellow-500' : 'text-muted-foreground/30'}`} 
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Carousel Controls Mockup */}
        <div className="flex justify-center items-center gap-6 mt-16">
            <button className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <div className="w-2 h-2 rounded-full bg-border" />
                <div className="w-2 h-2 rounded-full bg-border" />
            </div>
            <button className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                <ChevronRight className="w-6 h-6" />
            </button>
        </div>
      </div>
    </section>
  );
};
