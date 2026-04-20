"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-24 pb-24 lg:pt-32 max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
        {/* Left: Contact Info */}
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-marker uppercase italic">Contact — 01</div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-none">
                Let&apos;s Build <br /> Something <br /> <span className="text-accent underline decoration-accent/10 italic">Great</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-md font-bold">
                Whether you have a specific project in mind or just want to explore possibilities, our team is ready to scale your vision.
            </p>

            <div className="space-y-8">
                {[
                  { icon: Mail, label: "Email", val: "hello@tecko.com" },
                  { icon: Phone, label: "Phone", val: "+1 (555) 000-1111" },
                  { icon: MapPin, label: "Office", val: "123 Innovation Way, SF" }
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-6 group cursor-pointer">
                        <div className="w-12 h-12 rounded-2xl bg-muted/50 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                            <item.icon className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{item.label}</div>
                            <div className="text-lg font-bold group-hover:text-accent transition-colors">{item.val}</div>
                        </div>
                    </div>
                ))}
            </div>
          </motion.div>
        </div>

        {/* Right: Contact Form */}
        <div className="flex-1 border-l border-border pl-0 lg:pl-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="tecko-card bg-muted/20 p-8 lg:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl rounded-full" />
            
            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground pl-1">Full Name</label>
                  <input type="text" className="w-full bg-background border border-border rounded-2xl h-14 px-6 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all text-sm font-bold" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground pl-1">Email</label>
                  <input type="email" className="w-full bg-background border border-border rounded-2xl h-14 px-6 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all text-sm font-bold" placeholder="john@company.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground pl-1">Subject</label>
                <select className="w-full bg-background border border-border rounded-2xl h-14 px-6 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all text-sm font-bold appearance-none cursor-pointer">
                    <option>Software Development</option>
                    <option>Digital Strategy</option>
                    <option>AI Integration</option>
                    <option>Something Else</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground pl-1">Message</label>
                <textarea className="w-full bg-background border border-border rounded-3xl p-6 h-40 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all text-sm font-bold resize-none" placeholder="How can we help you?" />
              </div>
              <Button size="lg" className="w-full h-16 rounded-2xl group text-lg" responsive>
                  Send Message
                  <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
