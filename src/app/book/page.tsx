"use client";

import { motion } from "framer-motion";

export default function BookPage() {
  return (
    <div className="pt-24 pb-24 lg:pt-32 max-w-5xl mx-auto px-6">
      <div className="text-center mb-16">
        <div className="section-marker justify-center">Consultation — 01</div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Schedule <span className="text-accent italic">Success</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Select a time for a confidential discovery call to discuss your 
          strategic objectives and project requirements.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="tecko-card p-4 bg-muted/30 relative overflow-hidden"
        style={{ minHeight: "700px" }}
      >
        <div className="absolute inset-0 grid-background opacity-10" />
        {/* Placeholder Calendly Iframe Area */}
        <div className="relative z-10 w-full h-full min-h-[700px] flex items-center justify-center border border-dashed border-border rounded-xl">
           <iframe
            src="https://calendly.com/your-link?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=ffffff&text_color=0f172a&primary_color=2563eb"
            width="100%"
            height="100%"
            frameBorder="0"
            className="absolute inset-0 rounded-xl"
            title="Calendly Scheduler"
          />
          <div className="absolute inset-0 -z-10 bg-muted/50 flex items-center justify-center text-xs font-bold uppercase tracking-widest opacity-20">
            Initializing Scheduler...
          </div>
        </div>
      </motion.div>

      <p className="mt-8 text-center text-xs font-bold text-muted-foreground uppercase tracking-widest">
        All sessions are strictly confidential — 2024
      </p>
    </div>
  );
}
