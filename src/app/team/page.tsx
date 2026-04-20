"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, Cpu, Mail } from "lucide-react";

const team = [
  {
    name: "Alex Rivera",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400",
    socials: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    name: "Sarah Chen",
    role: "Head of AI",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400",
    socials: { linkedin: "#", github: "#", mail: "#" }
  },
  {
    name: "Marcus Thorne",
    role: "Product Strategist",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400",
    socials: { twitter: "#", linkedin: "#" }
  },
  {
    name: "Elena Vance",
    role: "Design Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400",
    socials: { twitter: "#", linkedin: "#" }
  },
  {
    name: "David Park",
    role: "Full Stack Engineer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400",
    socials: { github: "#", linkedin: "#" }
  },
  {
    name: "Jasmine Lee",
    role: "Growth Manager",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400",
    socials: { linkedin: "#", mail: "#" }
  },
];

export default function TeamPage() {
  return (
    <div className="pt-24 pb-24 lg:pt-32 max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
        <div className="max-w-xl">
          <div className="section-marker uppercase italic">The Collective — 01</div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-0 leading-none">
            Meet the <span className="text-accent underline decoration-accent/10">Trailblazers</span>
          </h1>
        </div>
        <p className="text-muted-foreground max-w-xs text-sm leading-relaxed mb-1 font-bold">
          A world-class team of engineers, designers, and strategists dedicated to 
          redefining digital precision.
        </p>
      </div>

      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        {team.map((member, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              show: { opacity: 1, scale: 1 }
            }}
            className="tecko-card p-6 bg-muted/30 hover:bg-muted/50 transition-all duration-500 group relative overflow-hidden flex flex-col items-center text-center"
          >
            {/* Member Image */}
            <div className="w-32 h-32 rounded-full border-4 border-background bg-background mb-8 relative z-10 group-hover:scale-105 transition-transform duration-500 shadow-xl overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
            </div>

            {/* Member Info */}
            <div className="relative z-10">
              <h3 className="text-xl font-black uppercase tracking-tighter mb-1">{member.name}</h3>
              <p className="text-xs font-bold text-accent uppercase tracking-widest">{member.role}</p>
            </div>

            {/* Social Overlay Bar (Slides Up) */}
            <div className="absolute inset-x-0 bottom-0 py-4 bg-accent flex justify-center gap-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
               {member.socials.twitter && <Zap className="w-4 h-4 text-white hover:scale-125 transition-transform cursor-pointer" />}
               {member.socials.linkedin && <ShieldCheck className="w-4 h-4 text-white hover:scale-125 transition-transform cursor-pointer" />}
               {member.socials.github && <Cpu className="w-4 h-4 text-white hover:scale-125 transition-transform cursor-pointer" />}
               {member.socials.mail && <Mail className="w-4 h-4 text-white hover:scale-125 transition-transform cursor-pointer" />}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
