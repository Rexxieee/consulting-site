"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "Why's NovaX instead of full-time consultant?",
    answer: "How quick is quick? For most strategies, we're talking 2-3 business days. We balance speed with quality, ensuring you get top-notch execution swiftly and effectively without the overhead of a full-time hire."
  },
  {
    question: "Speed of strategy delivery?",
    answer: "Our standard turnaround time is 48-72 hours for initial audits and smaller execution tasks. Complex digital transformations are staged but always follow our rapid-delivery framework."
  },
  {
    question: "What's the project progress like?",
    answer: "You'll have access to a dedicated dashboard where you can track every task in real-time, see milestones, and communicate directly with your strategy team."
  },
  {
    question: "How to request a consultation?",
    answer: "Simply use our booking page or click the 'Email us' button on the left. We typically respond within 12 hours to set up your discovery session."
  },
  {
    question: "In which platforms do you create solutions?",
    answer: "We are platform-agnostic but specialize in Next.js, Tailwind, AI-integrations, and enterprise-grade cloud architectures like AWS and Google Cloud."
  }
];

export const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="px-6 py-24 bg-[#eef0f4] dark:bg-slate-900 border-y border-border">
      <div className="max-w-7xl mx-auto rounded-[3rem] bg-white dark:bg-slate-950 p-8 lg:p-16 border border-border">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left Column */}
          <div className="lg:col-span-4">
            <div className="section-marker uppercase italic mb-8">06 — FAQs</div>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tighter mb-8 leading-none">
              Answers You Need: <br />
              <span className="text-accent">Frequently Asked</span> <br />
              Questions
            </h2>
            <div className="mt-20">
              <p className="text-sm font-bold text-muted-foreground mb-8">Do you have any other question?</p>
              <Button size="lg" className="rounded-full bg-accent hover:bg-accent/90 text-white px-8">
                Email us
                <Send className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-8 space-y-4">
            {faqs.map((faq, i) => {
              const isActive = activeIndex === i;
              return (
                <div 
                  key={i}
                  onClick={() => setActiveIndex(isActive ? null : i)}
                  className={`cursor-pointer rounded-[2rem] p-6 lg:p-8 transition-all duration-500 overflow-hidden ${
                    isActive 
                    ? 'bg-accent text-white shadow-xl shadow-accent/20' 
                    : 'bg-muted/30 border border-border hover:border-accent/30'
                  }`}
                >
                  <div className="flex justify-between items-center gap-4">
                    <h3 className={`text-lg lg:text-xl font-bold tracking-tight uppercase ${isActive ? 'text-white' : 'text-foreground'}`}>
                      {faq.question}
                    </h3>
                    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border ${
                      isActive ? 'border-white/30 text-white' : 'border-border text-muted-foreground'
                    }`}>
                      {isActive ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </div>
                  
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      >
                        <p className="pt-6 text-sm lg:text-base font-bold leading-relaxed opacity-90">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
