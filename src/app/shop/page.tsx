"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Filter, Search, Star, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Enterprise AI License",
    category: "Software",
    price: "$2,499",
    rating: 5,
    tag: "Pro",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 2,
    name: "SaaS Scaling Package",
    category: "Consulting",
    price: "$5,999",
    rating: 4.8,
    tag: "Best Seller",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 3,
    name: "Security Audit Suite",
    category: "Security",
    price: "$1,200",
    rating: 4.9,
    tag: "Essential",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 4,
    name: "Cloud Migration Kit",
    category: "Infrastructure",
    price: "$3,500",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 5,
    name: "UX Design Retainer",
    category: "Design",
    price: "$4,000",
    rating: 5,
    tag: "Monthly",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 6,
    name: "Data Analytics Engine",
    category: "Software",
    price: "$3,000",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400"
  }
];

export default function ShopPage() {
  return (
    <div className="pt-24 pb-24 lg:pt-32 max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
        <div className="max-w-xl">
          <div className="section-marker uppercase italic">Marketplace — 01</div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none mb-0">
            Precision <span className="text-accent underline decoration-accent/10">Solutions</span>
          </h1>
        </div>
        <div className="relative w-full lg:w-96 group">
            <input 
                type="text" 
                placeholder="Search solutions..." 
                className="w-full bg-muted/30 border border-border rounded-full h-14 px-8 pr-16 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all pl-12 font-bold"
            />
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <button className="absolute right-2 top-2 h-10 w-10 rounded-full bg-accent text-white flex items-center justify-center">
                <Filter className="w-4 h-4" />
            </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar Filters */}
        <div className="lg:w-64 space-y-12 shrink-0">
            <div>
                <h3 className="text-sm font-black uppercase tracking-widest text-foreground mb-6">Categories</h3>
                <div className="space-y-3">
                    {["All Products", "Software Licenses", "Consulting", "Security", "Design"].map((cat, i) => (
                        <div key={i} className="flex items-center justify-between group cursor-pointer">
                            <span className={`text-xs font-bold uppercase tracking-widest ${i === 0 ? 'text-accent' : 'text-muted-foreground group-hover:text-foreground'} transition-colors`}>{cat}</span>
                            <span className="text-[10px] font-black text-muted-foreground/50">{i + 8}</span>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="p-8 rounded-[2rem] bg-accent/5 border border-accent/10">
                <Zap className="w-8 h-8 text-accent mb-4" />
                <h4 className="text-sm font-black uppercase tracking-widest mb-2">Support Pack</h4>
                <p className="text-[10px] font-bold text-muted-foreground leading-relaxed mb-4">Get 24/7 dedicated support for any solution.</p>
                <button className="text-[10px] font-black uppercase tracking-widest text-accent hover:underline">Learn More</button>
            </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {products.map((product, i) => (
                <motion.div
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="tecko-card p-4 bg-muted/10 border border-border group hover:bg-muted/20 transition-all duration-500 overflow-hidden"
                >
                    <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 bg-muted">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                        <div className="absolute top-4 left-4">
                            {product.tag && (
                                <span className="bg-accent text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                                    {product.tag}
                                </span>
                            )}
                        </div>
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                            <Button size="icon" className="rounded-full bg-white text-black hover:bg-accent hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300">
                                <ShoppingCart className="w-5 h-5" />
                            </Button>
                            <Button size="icon" className="rounded-full bg-white text-black hover:bg-accent hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
                                <Search className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                    
                    <div className="px-2 pb-2">
                        <div className="flex justify-between items-start mb-2">
                            <div className="text-[10px] font-black uppercase tracking-widest text-accent">{product.category}</div>
                            <div className="text-sm font-black text-foreground">{product.price}</div>
                        </div>
                        <h3 className="text-xl font-black uppercase tracking-tighter leading-tight mb-4 group-hover:text-accent transition-colors">
                            {product.name}
                        </h3>
                        <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map(star => (
                                <Star key={star} className={`w-3 h-3 ${star <= product.rating ? 'fill-yellow-500 text-yellow-500' : 'text-muted-foreground/30'}`} />
                            ))}
                            <span className="text-[10px] font-black text-muted-foreground ml-2">({product.rating})</span>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
}
