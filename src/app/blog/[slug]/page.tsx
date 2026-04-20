"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Share2, MessageCircle, Clock } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function BlogPostDetail() {
  const params = useParams();
  const slug = params.slug;

  return (
    <div className="pt-24 pb-24 lg:pt-32 max-w-4xl mx-auto px-6">
      <Link href="/blog" className="inline-flex items-center text-xs font-black uppercase tracking-widest text-accent mb-12 hover:translate-x-[-4px] transition-transform">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Insights
      </Link>

      <motion.article
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-8">
            <span className="text-accent">AI & Technology</span>
            <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> 8 Min Read</span>
            <span className="flex items-center"><MessageCircle className="w-3 h-3 mr-1" /> 12 Comments</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[1.1] mb-12">
            The Future of <span className="text-accent italic">Generative AI</span> in Enterprise Solutions
        </h1>

        <div className="flex items-center justify-between py-8 border-y border-border mb-12">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-muted border border-border" />
                <div>
                    <div className="text-sm font-black uppercase tracking-widest">Alex Rivera</div>
                    <div className="text-[10px] font-bold text-muted-foreground uppercase">CEO & Chief Strategist</div>
                </div>
            </div>
            <div className="flex gap-4">
                <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                    <Share2 className="w-4 h-4" />
                </button>
            </div>
        </div>

        <div className="aspect-[21/9] rounded-[2.5rem] bg-muted overflow-hidden border border-border mb-16">
            <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600" 
                alt="Main" 
                className="w-full h-full object-cover" 
            />
        </div>

        {/* Content Placeholder */}
        <div className="prose prose-invert max-w-none space-y-8">
            <p className="text-xl leading-relaxed text-foreground font-bold">
                As we move further into 2024, the integration of generative AI into enterprise workflows has transitioned from a theoretical advantage to an operational necessity.
            </p>
            <p className="text-muted-foreground leading-relaxed">
                Software development involves the design, creation, and maintenance of tailored software solutions to address specific organizational needs. In the context of AI, this means engineering robust, scalable architectures that can handle massive tokens while maintaining zero-latency response times.
            </p>
            <h3 className="text-2xl font-black uppercase tracking-tight text-white mt-12 mb-6">The Shift Toward Agentic Workflows</h3>
            <p className="text-muted-foreground leading-relaxed">
                The next iteration of AI is not just about chat; it&apos;s about agency. Our trailblazing research into autonomous agents suggests that businesses can automate up to 60% of middle-management decision logic by 2025.
            </p>
            <div className="bg-accent/5 border-l-4 border-accent p-8 rounded-r-3xl my-12">
                <p className="italic text-xl font-bold text-foreground">
                    &quot;The organizations that will dominate the next decade are those that view AI not as a tool, but as a foundational teammate.&quot;
                </p>
            </div>
            <p className="text-muted-foreground leading-relaxed">
                We work alongside your team to engineer these robust architectures, ensuring that every integration is secure, compliant, and optimized for your specific industry nuances.
            </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-20 pt-12 border-t border-border">
            {["AI", "Innovation", "Enterprise", "Future Tech"].map(tag => (
                <span key={tag} className="px-4 py-2 bg-muted rounded-full text-[10px] font-black uppercase tracking-widest text-muted-foreground cursor-pointer hover:bg-accent hover:text-white transition-colors">
                    #{tag}
                </span>
            ))}
        </div>
      </motion.article>
    </div>
  );
}
