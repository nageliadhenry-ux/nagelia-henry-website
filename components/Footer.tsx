"use client";

import Link from "next/link";

const navLinks = [
  ["/about", "About"],
  ["/work", "Work"],
  ["/content", "Content"],
  ["/leadership", "Leadership"],
  ["/resume", "Resume"],
  ["/contact", "Contact"],
];

const socialLinks = [
  ["Instagram", "https://www.instagram.com/____nageliahenry/"],
  ["TikTok", "https://www.tiktok.com/@bynagelia"],
  ["LinkedIn", "https://www.linkedin.com/in/nagelia-henry-7a2946234"],
  ["Substack", "https://nagelia.substack.com/"],
];

export default function Footer() {
  return (
    <footer style={{ background: "#EAF4FB", borderTop: "1px solid rgba(184,212,236,0.35)" }}>
      <div className="section-container py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* Brand */}
          <div>
            <p className="font-serif text-3xl mb-4" style={{ color: "#1C3A5E" }}>Nagelia Henry</p>
            <p className="font-sans text-sm leading-relaxed max-w-xs" style={{ color: "#6B6B6B" }}>
              Digital strategist, brand storyteller, and content creator building meaningful digital experiences.
            </p>
            <a
              href="mailto:nageliadhenry@gmail.com"
              className="mt-5 inline-block font-sans text-xs tracking-widest uppercase transition-colors duration-200"
              style={{ color: "#7BAFD4" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#1C3A5E")}
              onMouseLeave={e => (e.currentTarget.style.color = "#7BAFD4")}
            >
              nageliadhenry@gmail.com
            </a>
          </div>

          {/* Pages */}
          <div>
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase mb-6" style={{ color: "#B8D4EC" }}>Pages</p>
            <nav className="flex flex-col gap-3">
              {navLinks.map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  className="font-sans text-sm transition-colors duration-200"
                  style={{ color: "#4A7FA5" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#1C3A5E")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#4A7FA5")}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase mb-6" style={{ color: "#B8D4EC" }}>Connect</p>
            <div className="flex flex-col gap-3">
              {socialLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm flex items-center gap-2 group transition-colors duration-200"
                  style={{ color: "#4A7FA5" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#1C3A5E")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#4A7FA5")}
                >
                  <span className="w-4 h-px transition-all duration-300 group-hover:w-7" style={{ background: "#B8D4EC" }} />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: "1px solid rgba(184,212,236,0.4)" }}>
          <p className="font-sans text-xs" style={{ color: "#8A8A8A" }}>
            © {new Date().getFullYear()} Nagelia Henry. All rights reserved.
          </p>
          <p className="font-serif italic text-sm" style={{ color: "#7BAFD4" }}>Built with strategy &amp; intention.</p>
        </div>
      </div>
    </footer>
  );
}
