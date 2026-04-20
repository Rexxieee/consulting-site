"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  MessageSquare, 
  Sparkles, 
  BarChart3, 
  ShieldCheck,
  Zap,
  Globe
} from "lucide-react";

export default function AIChatbotHome() {
  return (
    <div className="relative isolate min-h-screen bg-slate-950">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/30 blur-[120px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-pink-600/20 blur-[150px] rounded-full -z-10 animate-[float_10s_ease-in-out_infinite]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 blur-[180px] rounded-full -z-10 animate-pulse delay-700" />

      {/* --- HERO SECTION --- */}
      <section className="px-6 pt-32 pb-20 text-center max-w-7xl mx-auto overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-bold uppercase tracking-widest mb-8">
            <Sparkles className="w-4 h-4" />
            Empowered by AI NextGen
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.05] text-white">
            Conversational <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 italic">Intelligence</span> <br />
            Redefined
          </h1>
          
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Automate 80% of your customer support and triple your sales conversion 
            with our trailblazing AI Chatbot solutions. 
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full h-16 px-10 text-lg hover:shadow-[0_0_30px_-5px_rgba(147,51,234,0.5)] transition-shadow">
              Start Free Trial
              <MessageSquare className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full h-16 px-10 text-lg border-white/10 hover:bg-white/5 text-white backdrop-blur-sm">
              Watch Demo
              <Zap className="ml-2 w-5 h-5 text-purple-400" />
            </Button>
          </div>
        </motion.div>

        {/* SaaS Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="relative max-w-6xl mx-auto"
        >
          <div className="relative rounded-[3rem] p-4 bg-slate-900/50 border border-white/10 shadow-3xl backdrop-blur-xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/5 opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="rounded-[2.5rem] bg-slate-950 p-8 border border-white/10 min-h-[500px] flex flex-col lg:flex-row gap-8 relative z-10">
                {/* Left Sidebar Mockup */}
                <div className="hidden lg:block w-64 border-r border-white/5 pr-8 space-y-6">
                    <div className="h-6 w-32 bg-white/5 rounded-full" />
                    <div className="space-y-3 pt-4">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className={`h-10 rounded-xl transition-all duration-300 cursor-pointer ${i===1 ? 'bg-purple-600/20 border border-purple-500/30' : 'bg-white/5 border border-transparent hover:border-white/10'} flex items-center px-4 gap-3`}>
                                <div className={`w-4 h-4 rounded-md ${i===1 ? 'bg-purple-500' : 'bg-white/10'}`} />
                                <div className={`h-3 w-20 rounded-full ${i===1 ? 'bg-purple-300/50' : 'bg-white/10'}`} />
                            </div>
                        ))}
                    </div>
                </div>
                {/* Main Dashboard Content */}
                <div className="flex-1 space-y-8">
                    <div className="flex justify-between items-center">
                        <div className="h-8 w-48 bg-white/10 rounded-full" />
                        <div className="flex gap-2">
                             <div className="h-10 w-10 bg-white/5 rounded-full border border-white/10" />
                             <div className="h-10 w-10 bg-purple-600 rounded-full flex items-center justify-center font-bold text-white text-xs shadow-lg shadow-purple-600/20">JD</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                          { label: "Active Chats", val: "1,280", icon: MessageSquare, color: "text-purple-400" },
                          { label: "Sales Revenue", val: "$42k", icon: BarChart3, color: "text-pink-400" },
                          { label: "Resolution Root", val: "94%", icon: Zap, color: "text-blue-400" }
                        ].map((stat, i) => (
                           <div key={i} className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 transition-all duration-300 hover:bg-white/[0.04] group/card">
                              <stat.icon className={`w-6 h-6 ${stat.color} mb-4 group-hover/card:scale-110 transition-transform`} />
                              <div className="text-2xl font-black text-white">{stat.val}</div>
                              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
                           </div>
                        ))}
                    </div>
                    {/* Graph Mockup */}
                    <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-3xl p-8 relative overflow-hidden group/graph">
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-purple-500/5 to-transparent pointer-events-none" />
                        <div className="flex items-end justify-between gap-2 h-40">
                             {[40, 70, 45, 90, 65, 80, 55, 95, 75, 85].map((h, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h}%` }}
                                    transition={{ delay: 1 + (i*0.1), duration: 0.5 }}
                                    className="flex-1 bg-gradient-to-t from-purple-600 to-pink-500 rounded-t-lg opacity-60 hover:opacity-100 transition-opacity cursor-help relative group/bar"
                                >
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 border border-white/10 px-2 py-1 rounded text-[10px] text-white opacity-0 group-hover/bar:opacity-100 transition-opacity pointer-events-none">
                                        {h}%
                                    </div>
                                </motion.div>
                             ))}
                        </div>
                    </div>
                </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <motion.div 
            animate={{ y: [0, -20, 0] }} 
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-10 -right-10 p-6 bg-slate-900 border border-white/10 rounded-3xl shadow-2xl z-10 hidden xl:block"
          >
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 font-bold">✓</div>
                <div className="text-left">
                    <div className="text-sm font-bold text-white">Message Resolved</div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">In under 2s</div>
                </div>
             </div>
          </motion.div>
        </motion.div>
      </section>

      {/* --- FEATURE SECTION --- */}
      <section className="px-6 py-32 max-w-7xl mx-auto">
          <div className="text-center mb-20">
             <div className="section-marker justify-center">02 — Intelligence</div>
             <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
               Next-Gen Communication <br /> <span className="text-purple-400 italic">Infrastructure</span>
             </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Globe, title: "Multilingual", desc: "Recognizes and speaks 100+ languages fluently." },
              { icon: ShieldCheck, title: "Secure", desc: "Enterprise-grade encryption and GDPR compliance." },
              { icon: Zap, title: "Instant", desc: "Zero-latency response engine for maximum speed." },
              { icon: BarChart3, title: "Predictive", desc: "Learns customer behavior to anticipate needs." }
            ].map((f, i) => (
               <div key={i} className="p-8 rounded-[2rem] bg-slate-900/40 border border-white/5 hover:bg-slate-900/60 transition-colors group">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                    <f.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-tight">{f.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-semibold">{f.desc}</p>
               </div>
            ))}
          </div>
      </section>
    </div>
  );
}
