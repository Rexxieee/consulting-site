import Link from "next/link";
import { Zap, Globe, Send, Link2, Mail } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Book a Call", href: "/booking" },
  ],
  Services: [
    { label: "Digital Strategy", href: "/services" },
    { label: "Web Development", href: "/services" },
    { label: "Brand Identity", href: "/services" },
    { label: "AI & Automation", href: "/services" },
  ],
  Resources: [
    { label: "Case Studies", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Documentation", href: "#" },
    { label: "Support", href: "#" },
  ],
};

const socialLinks = [
  { icon: Globe, href: "#", label: "Twitter" },
  { icon: Link2, href: "#", label: "LinkedIn" },
  { icon: Send, href: "#", label: "GitHub" },
  { icon: Mail, href: "mailto:hello@novax.io", label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand col */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-background border border-white/10 flex items-center justify-center shadow-xl overflow-hidden">
                <img src="/logo.png" alt="NovaX Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Nova<span className="text-blue-400">X</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
              Premium business consulting and digital transformation services that
              accelerate growth for forward-thinking companies.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                {title}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} NovaX. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
