"use client";

import { motion } from "framer-motion";
import { 
  Plus, 
  Search, 
  Bell, 
  Home, 
  BarChart2, 
  Settings, 
  User,
  Zap,
  TrendingUp,
  Layout
} from "lucide-react";

export const HeroDashboard = () => {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 blur-[120px] rounded-full" />
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full" />

      {/* Main Dashboard Window */}
      <motion.div 
        initial={{ opacity: 0, y: 40, rotateX: 10 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 w-full max-w-[600px] bg-slate-900/80 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden flex h-[420px]"
      >
        {/* Left Sidebar */}
        <div className="w-16 border-r border-white/5 bg-white/5 flex flex-col items-center py-8 gap-8">
          <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center shadow-lg shadow-accent/20">
            <Layout className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col gap-6 text-white/40">
            <Home className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
            <BarChart2 className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
            <Settings className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
            <User className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="h-16 border-b border-white/5 flex items-center justify-between px-8">
            <div className="flex items-center gap-3 text-white/40 bg-white/5 rounded-full px-4 py-1.5 border border-white/5">
              <Search className="w-4 h-4" />
              <span className="text-xs font-bold tracking-tight">Search metrics...</span>
            </div>
            <div className="flex items-center gap-4 text-white/60">
              <Bell className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
              <div className="w-8 h-8 rounded-full bg-slate-700 border border-white/10 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Grid Content */}
          <div className="p-8 flex-1 flex flex-col gap-6">
            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white/5 border border-white/5 p-4 rounded-2xl"
              >
                <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest mb-1">Total Revenue</div>
                <div className="flex items-end justify-between">
                  <span className="text-2xl font-black text-white">$24,500</span>
                  <span className="text-xs font-bold text-green-400 flex items-center mb-1">
                    <TrendingUp className="w-3 h-3 mr-1" /> +12.5%
                  </span>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white/5 border border-white/5 p-4 rounded-2xl"
              >
                <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest mb-1">Active Users</div>
                <div className="flex items-end justify-between">
                  <span className="text-2xl font-black text-white">1,280</span>
                  <span className="text-xs font-bold text-green-400 flex items-center mb-1">
                    <TrendingUp className="w-3 h-3 mr-1" /> +8.2%
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Chart Area */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="flex-1 bg-white/5 border border-white/5 p-6 rounded-3xl relative overflow-hidden flex flex-col"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-bold text-white/40 uppercase tracking-widest">Growth Performance</span>
                <div className="flex gap-2">
                   <div className="w-2 h-2 rounded-full bg-accent" />
                   <div className="w-2 h-2 rounded-full bg-purple-500" />
                </div>
              </div>
              
              {/* Stylized Bar Chart */}
              <div className="flex-1 flex items-end justify-between gap-2 px-2 pb-2">
                {[
                  { h: "40%", c: "bg-blue-400" },
                  { h: "60%", c: "bg-blue-400" },
                  { h: "35%", c: "bg-blue-400" },
                  { h: "80%", c: "bg-gradient-to-t from-pink-500 to-purple-600 shadow-[0_0_20px_rgba(236,72,153,0.5)]", active: true },
                  { h: "50%", c: "bg-blue-400" },
                  { h: "70%", c: "bg-blue-400" },
                  { h: "45%", c: "bg-blue-400" },
                  { h: "90%", c: "bg-blue-400" },
                  { h: "55%", c: "bg-blue-400" },
                  { h: "20%", c: "bg-blue-400" }
                ].map((bar, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: bar.h }}
                    transition={{ delay: 0.5 + (i * 0.05), duration: 0.8, ease: "easeOut" }}
                    className={`w-full max-w-[12px] rounded-full transition-all duration-300 ${bar.c} ${!bar.active && 'opacity-60 hover:opacity-100'}`}
                  />
                ))}
              </div>

              {/* Grid Lines Overlay */}
              <div className="absolute inset-0 pointer-events-none p-6 flex flex-col justify-between opacity-10">
                <div className="w-full h-[1px] bg-white" />
                <div className="w-full h-[1px] bg-white" />
                <div className="w-full h-[1px] bg-white" />
                <div className="w-full h-[1px] bg-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Floating Avatars */}
      <motion.div 
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-10 z-20"
      >
        <div className="relative group">
          <div className="w-20 h-20 rounded-full border-4 border-white/10 shadow-2xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-4 border-slate-900 rounded-full animate-pulse" />
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-[10px] font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Support Online
          </div>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-0 z-20"
      >
        <div className="relative group">
          <div className="w-16 h-16 rounded-full border-4 border-white/10 shadow-2xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-3 border-slate-900 rounded-full" />
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 -right-4 z-20 hidden lg:block"
      >
        <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-xl">
           <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                 <Plus className="w-4 h-4 text-green-400" />
              </div>
              <div>
                 <div className="text-[10px] text-white/60 font-bold uppercase tracking-widest">Growth</div>
                 <div className="text-sm font-black text-white">+240%</div>
              </div>
           </div>
        </div>
      </motion.div>
    </div>
  );
};
