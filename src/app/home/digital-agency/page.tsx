"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Monitor, 
  Smartphone, 
  PenTool, 
  TrendingUp, 
  Users,
  Award,
  Circle
} from "lucide-react";

export default function DigitalAgencyHome() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30, filter: "blur(10px)" },
    show: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { 
        type: "spring",
        staggerChildren: 0.1,
        duration: 0.8
      } as const
    }
  };

  return (
    <div className="min-h-screen bg-[#050510] relative isolate">
      {/* Background patterns */}
      <div className="absolute inset-0 grid-background opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 blur-[120px] rounded-full -z-10" />

      {/* --- BENTO HERO SECTION --- */}
      <section className="px-6 pt-32 pb-20 max-w-7xl mx-auto">
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid lg:grid-cols-12 gap-6"
        >
            {/* Main Headline Block */}
            <motion.div 
                variants={itemVariants} 
                className="lg:col-span-8 p-12 lg:p-16 rounded-[3rem] bg-gradient-to-br from-blue-600/10 to-transparent border border-white/10 flex flex-col justify-end min-h-[500px] relative overflow-hidden group shadow-2xl hover:border-blue-500/30 transition-all duration-700"
            >
               <div className="absolute top-8 right-8 w-24 h-24 rounded-full border border-blue-500/20 flex items-center justify-center animate-spin-slow group-hover:scale-110 group-hover:border-blue-500/40 transition-all">
                    <Circle className="w-12 h-12 text-blue-500/20 fill-blue-500/20" />
               </div>
               <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full group-hover:bg-blue-600/20 transition-all" />
               
               <div className="relative z-10">
                  <div className="section-marker mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20">Digital Growth — 01</div>
                  <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-none">
                    Digital <br />
                    <span className="text-blue-500 uppercase italic">Agency</span> <br />
                    Studio
                  </h1>
                  <p className="text-xl text-slate-400 max-w-md mb-8 font-semibold leading-relaxed">
                    We combine strategic design and state-of-the-art software to help global brands dominate their industries.
                  </p>
                  <Button size="lg" className="rounded-full h-16 px-10 text-lg bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-600/20">
                    View Portfolio
                    <ArrowRight className="ml-2 w-5 h-5 shadow-inner" />
                  </Button>
               </div>
            </motion.div>

            {/* Stats Block */}
            <motion.div variants={itemVariants} className="lg:col-span-4 p-8 rounded-[3rem] bg-white/[0.03] border border-white/10 flex flex-col justify-between overflow-hidden">
                <div className="space-y-8">
                    <div className="p-4 bg-blue-600/10 border border-blue-500/20 rounded-2xl w-fit">
                        <TrendingUp className="w-8 h-8 text-blue-500" />
                    </div>
                </div>
                <div className="mt-8">
                    <div className="text-7xl font-black text-white tracking-tighter mb-2">98%</div>
                    <div className="text-xs font-bold text-slate-500 tracking-widest uppercase">Client Success Rate</div>
                </div>
            </motion.div>

            {/* Service Blocks */}
            <motion.div variants={itemVariants} className="lg:col-span-4 p-8 rounded-[3rem] bg-[#0a0a20] border border-white/5 hover:border-blue-500/20 transition-all group">
                <Monitor className="w-10 h-10 text-slate-400 mb-6 group-hover:text-blue-500 transition-colors" />
                <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-tighter">Web Apps</h3>
                <p className="text-sm text-slate-500 font-bold">Scaling enterprise excellence through robust code.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="lg:col-span-4 p-8 rounded-[3rem] bg-[#0a0a20] border border-white/5 hover:border-blue-500/40 transition-all group relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors" />
                <div className="relative z-10">
                    <SmartphoneIcon className="w-10 h-10 text-slate-400 mb-6 group-hover:text-blue-500 transition-colors" />
                    <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-tighter">Mobile OS</h3>
                    <p className="text-sm text-slate-500 font-bold">Immersive mobile experiences that convert.</p>
                </div>
            </motion.div>

            <motion.div variants={itemVariants} className="lg:col-span-4 p-8 rounded-[3rem] bg-blue-600 flex flex-col items-center justify-center text-center group cursor-pointer hover:shadow-2xl hover:shadow-blue-600/40 transition-all">
                <Users className="w-12 h-12 text-white mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-white uppercase tracking-tighter">Work with us</h3>
                <p className="text-sm text-white/70 font-bold">Let&apos;s build something trailblazing.</p>
            </motion.div>
        </motion.div>
      </section>

      {/* --- RESULTS SECTION --- */}
      <section className="px-6 py-32 bg-white/[0.01] border-y border-white/5">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="max-w-xl">
               <div className="section-marker italic">Our Impact — 02</div>
               <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none uppercase">
                 Delivering <br />
                 <span className="text-blue-500 italic">Unrivaled</span> Results
               </h2>
            </div>
            <div className="grid grid-cols-2 gap-12 border-l border-white/10 pl-12">
                <div>
                    <div className="text-4xl font-black text-white">450+</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">Brands Scaled</div>
                </div>
                <div>
                    <div className="text-4xl font-black text-white">12+</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">Design Awards</div>
                </div>
            </div>
         </div>
      </section>
    </div>
  );
}

// Special Lucide replacement for mobile icon (Smartphone) to avoid character error
function SmartphoneIcon(props: any) {
    return <Smartphone {...props} />;
}
