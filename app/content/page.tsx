"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const platforms = [
  { name: "TikTok", handle: "@bynagelia", href: "https://www.tiktok.com/@bynagelia", followers: "2,218", stat: "16.4K Likes", desc: "Short-form video storytelling about beauty, life, and becoming.", image: "/images/social/social-1.jpg", color: "bg-navy" },
  { name: "Instagram", handle: "@____nageliahenry", href: "https://www.instagram.com/____nageliahenry/", followers: "2,144", stat: "Beauty · Confidence · ASU '27", desc: "Visual diary of becoming — from NYC to Phoenix and everything in between.", image: "/images/social/social-2.png", color: "bg-slate-blue" },
  { name: "Substack", handle: "nagelia.substack.com", href: "https://nagelia.substack.com/", followers: "Essays", stat: "Independent Writing", desc: "Culture, identity, creativity, and healing. Long-form storytelling without the algorithm.", image: "/images/projects/portfolio-writing.png", color: "bg-denim-blue" },
  { name: "LinkedIn", handle: "Nagelia Henry", href: "https://www.linkedin.com/in/nagelia-henry-7a2946234", followers: "Network", stat: "Professional", desc: "Strategy, industry insight, and career building in public.", image: "/images/projects/portfolio-home.png", color: "bg-navy-mid" },
];

const pillars = [
  { label: "Beauty", emoji: "✦", desc: "Skincare, makeup, and self-care rooted in confidence and accessibility." },
  { label: "Lifestyle", emoji: "◈", desc: "Authentic moments from life as a student, creator, and young professional." },
  { label: "Wellness", emoji: "◇", desc: "Mental health, balance, and the intentional practice of becoming your fullest self." },
  { label: "College Life", emoji: "◉", desc: "The real, unfiltered experience of navigating academia and ambition." },
  { label: "Storytelling", emoji: "◎", desc: "Personal narratives — vulnerability meets strategy meets craft." },
  { label: "Personal Brand", emoji: "◆", desc: "Demystifying digital strategy, the creator economy, and building in public." },
];

export default function ContentPage() {
  return (
    <div className="bg-ivory overflow-hidden">

      {/* ── HEADER ── */}
      <section className="pt-44 pb-24 paper-ivory relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-powder-blue-light/50 rounded-full blur-3xl translate-x-1/3 pointer-events-none" />
        <div className="section-container">
          <AnimatedSection>
            <p className="label mb-6">Content Creation</p>
            <h1 className="font-serif text-display-lg text-navy mb-8 max-w-3xl leading-tight">
              Every post has a<br /><em className="text-slate-blue">strategy behind it.</em>
            </h1>
            <p className="font-sans text-lg text-charcoal-light max-w-2xl leading-relaxed">
              I don&apos;t create content to fill a feed. I create it to build something — a community, a perspective, a brand. Every platform, every caption, every essay is intentional.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── AUDIENCE SNAPSHOT ── */}
      <section className="py-20 bg-ivory">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {[
              { n: "2,218", l: "TikTok Followers" },
              { n: "2,144", l: "Instagram Followers" },
              { n: "16.4K", l: "TikTok Likes" },
              { n: "4K+", l: "Combined Reach" },
            ].map((s, i) => (
              <AnimatedSection key={s.l} delay={i * 0.08}>
                <div className="text-center p-7 bg-white rounded-3xl shadow-card">
                  <p className="font-serif text-4xl text-navy mb-2">{s.n}</p>
                  <p className="font-sans text-xs text-charcoal-light tracking-wide">{s.l}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORMS ── */}
      <section className="pb-24">
        <div className="section-container">
          <AnimatedSection className="mb-14">
            <p className="label mb-4">Platforms</p>
            <h2 className="font-serif text-display-sm text-navy">Where you&apos;ll find me</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {platforms.map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 0.1}>
                <a href={p.href} target="_blank" rel="noopener noreferrer" className="group block card-luxury overflow-hidden">
                  <div className="relative h-56 overflow-hidden bg-powder-blue-light">
                    <Image src={p.image} alt={p.handle} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="50vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                    <div className="absolute bottom-5 left-6">
                      <p className="font-serif text-3xl text-white">{p.followers}</p>
                      <p className="font-sans text-xs text-white/60">{p.stat}</p>
                    </div>
                  </div>
                  <div className="p-7 flex items-start justify-between">
                    <div>
                      <p className="font-serif text-xl text-navy mb-1">{p.name}</p>
                      <p className="font-sans text-sm text-charcoal-light mb-3">{p.handle}</p>
                      <p className="font-sans text-sm text-charcoal leading-relaxed">{p.desc}</p>
                    </div>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-navy/30 group-hover:text-navy mt-1 shrink-0 transition-colors ml-4"><path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>

          {/* YouTube + Website row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {[
              { name: "YouTube", handle: "Coming soon", href: "#", desc: "Long-form video content in development." },
              { name: "Website", handle: "nageliahenry.com", href: "/", desc: "The full picture — all in one place." },
            ].map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 0.08}>
                <a href={p.href} className="group flex items-center justify-between bg-white rounded-3xl shadow-card p-6 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300">
                  <div>
                    <p className="font-serif text-lg text-navy mb-0.5">{p.name}</p>
                    <p className="font-sans text-sm text-charcoal-light">{p.handle}</p>
                    <p className="font-sans text-xs text-charcoal-light/60 mt-1">{p.desc}</p>
                  </div>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-navy/25 group-hover:text-navy transition-colors shrink-0 ml-4"><path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTENT PILLARS ── */}
      <section className="py-24 denim-dark relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-powder-blue blur-3xl" />
        </div>
        <div className="relative section-container">
          <AnimatedSection className="mb-14">
            <p className="label-light mb-4">Content Strategy</p>
            <h2 className="font-serif text-display-sm text-white">Six pillars. One voice.</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pillars.map((p, i) => (
              <AnimatedSection key={p.label} delay={i * 0.07}>
                <div className="bg-white/5 border border-white/10 rounded-3xl p-7 hover:border-powder-blue/40 hover:bg-white/8 transition-all duration-300 h-full">
                  <span className="text-2xl text-powder-blue mb-5 block">{p.emoji}</span>
                  <h3 className="font-serif text-xl text-white mb-3">{p.label}</h3>
                  <p className="font-sans text-sm text-white/55 leading-relaxed">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── AUDIT INSIGHTS ── */}
      <section className="py-24 paper-cream">
        <div className="section-container">
          <AnimatedSection className="mb-12">
            <p className="label mb-4">Social Audit</p>
            <h2 className="font-serif text-display-sm text-navy">Strategic insights</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { h: "Cross-Platform Presence", b: "Active across TikTok, Instagram, LinkedIn, and Substack — each platform serving a distinct role within an integrated content ecosystem." },
              { h: "Authentic Brand Voice", b: "Content balances relatability and professionalism — a voice that speaks directly to Gen Z while positioning the brand for industry recognition." },
              { h: "Strategic Growth", b: "Consistent audience growth across platforms signals strong content-market fit and an engaged community built on real connection, not algorithms." },
            ].map((c, i) => (
              <AnimatedSection key={c.h} delay={i * 0.1}>
                <div className="bg-white rounded-3xl p-8 shadow-card h-full">
                  <div className="w-8 h-px bg-denim-blue mb-6" />
                  <h3 className="font-serif text-xl text-navy mb-4">{c.h}</h3>
                  <p className="font-sans text-sm text-charcoal-light leading-relaxed">{c.b}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
