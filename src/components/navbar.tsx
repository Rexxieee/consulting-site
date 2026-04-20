"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X, Zap, ChevronDown } from "lucide-react";

const links = [
  { 
    label: "Home", 
    href: "/",
    subLinks: [
      { label: "Software Company", href: "/" },
      { label: "AI Chatbot", href: "/home/ai-chatbot" },
      { label: "Digital Agency", href: "/home/digital-agency" },
      { label: "SaaS Technology", href: "/home/ai-chatbot" },
    ]
  },
  { 
    label: "Pages", 
    href: "/about",
    subLinks: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/team" },
      { label: "Pricing", href: "/pricing" },
      { label: "Shop", href: "/shop" },
      { label: "Contact", href: "/contact" },
    ]
  },
  { 
    label: "Blog", 
    href: "/blog",
    subLinks: [
      { label: "Our Blogs", href: "/blog" },
      { label: "Blog Grid", href: "/blog/grid" },
      { label: "Single Blog", href: "/blog/future-of-ai" },
    ]
  },
  { 
    label: "Project", 
    href: "/portfolio",
    subLinks: [
      { label: "Portfolio Grid", href: "/portfolio" },
      { label: "Portfolio List", href: "/portfolio" },
      { label: "Single Project", href: "/portfolio/quantum-ai" },
    ]
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 px-6 pointer-events-none">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`max-w-5xl mx-auto flex items-center justify-between pointer-events-auto px-6 py-3 rounded-full border border-border shadow-2xl transition-all duration-300 ${
            isScrolled 
              ? "bg-background/80 backdrop-blur-xl shadow-black/5" 
              : "bg-background/50 backdrop-blur-md"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-background border border-white/10 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 overflow-hidden">
              <img src="/logo.png" alt="NovaX Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">
              Nova<span className="text-accent">X</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <div 
                key={link.label}
                className="relative group py-2"
                onMouseEnter={() => setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold transition-colors duration-300 rounded-full cursor-pointer ${
                    pathname === link.href || (activeDropdown === link.label)
                      ? "text-accent bg-accent/5"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === link.label ? "rotate-180 text-accent" : ""}`} />
                </div>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-56"
                    >
                      <div className="bg-background border border-border p-3 rounded-[2rem] shadow-2xl backdrop-blur-xl overflow-hidden">
                        {link.subLinks.map((sub, i) => (
                          <motion.div
                            key={sub.label}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                          >
                            <Link
                              href={sub.href}
                              className="block px-5 py-3 text-sm font-bold text-muted-foreground hover:text-accent hover:bg-accent/5 rounded-2xl transition-all"
                            >
                              {sub.label}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link href="/book" className="hidden sm:block">
              <Button size="sm" className="rounded-full px-6">
                Consult
              </Button>
            </Link>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden relative w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-border transition-colors"
            >
              {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-x-6 top-24 z-40 p-4 md:hidden"
          >
            <div className="rounded-3xl bg-background border border-border p-6 shadow-2xl space-y-4 max-h-[70vh] overflow-y-auto">
              {links.map((link) => (
                <div key={link.label} className="space-y-2">
                  <div className="text-xs font-black uppercase tracking-widest text-accent px-2">
                    {link.label}
                  </div>
                  {link.subLinks.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className={`block px-5 py-3 rounded-2xl text-base font-bold transition-colors ${
                        pathname === sub.href
                          ? "text-white bg-accent"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              ))}
              <div className="pt-4 border-t border-border">
                <Link href="/book">
                  <Button className="w-full rounded-2xl py-6" responsive size="lg">
                    Book a Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
