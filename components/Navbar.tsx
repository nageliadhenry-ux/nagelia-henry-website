"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/content", label: "Content" },
  { href: "/leadership", label: "Leadership" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-ivory/95 backdrop-blur-md border-b border-cream-dark/60 shadow-card" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-16 flex items-center justify-between h-20">
          <Link href="/" className="group flex flex-col">
            <span className="font-serif text-[1.35rem] text-navy leading-none tracking-wide">Nagelia Henry</span>
            <span className="font-sans text-[9px] tracking-[0.25em] uppercase text-slate-blue mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity">Digital Strategist</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {links.map(({ href, label }) => (
              <Link key={href} href={href}
                className={`nav-link ${pathname === href ? "text-navy border-b border-navy pb-0.5" : ""}`}>
                {label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary text-[10px] py-2 px-5 ml-2">
              Let&apos;s Talk
            </Link>
          </nav>

          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 flex flex-col gap-1.5" aria-label="Menu">
            <span className={`w-6 h-px bg-navy block transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-6 h-px bg-navy block transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`w-6 h-px bg-navy block transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-ivory paper-ivory flex flex-col pt-24 px-8 lg:hidden"
          >
            <nav className="flex flex-col">
              {[{ href: "/", label: "Home" }, ...links].map(({ href, label }) => (
                <Link key={href} href={href}
                  className={`font-serif text-[2.8rem] leading-tight text-navy border-b border-cream-dark py-3 hover:text-slate-blue transition-colors ${pathname === href ? "text-slate-blue" : ""}`}>
                  {label}
                </Link>
              ))}
            </nav>
            <div className="flex gap-6 mt-8">
              {["Instagram","TikTok","LinkedIn"].map(s => (
                <a key={s} href={s === "Instagram" ? "https://www.instagram.com/____nageliahenry/" : s === "TikTok" ? "https://www.tiktok.com/@bynagelia" : "https://www.linkedin.com/in/nagelia-henry-7a2946234"}
                  target="_blank" rel="noopener noreferrer"
                  className="font-sans text-xs tracking-widest uppercase text-charcoal-light hover:text-navy transition-colors">{s}</a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
