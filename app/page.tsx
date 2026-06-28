"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/* ─── Butterfly ─────────────────────────────────────────────── */
function Butterfly({ size = 48, opacity = 0.5, color1 = "#B8D4EC", color2 = "#7BAFD4", className = "" }: { size?: number; opacity?: number; color1?: string; color2?: string; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity }} className={className} aria-hidden="true">
      <ellipse cx="20" cy="24" rx="17" ry="12" fill={color1} transform="rotate(-22 20 24)" />
      <ellipse cx="44" cy="24" rx="17" ry="12" fill={color2} transform="rotate(22 44 24)" />
      <ellipse cx="18" cy="37" rx="11" ry="8" fill={color2} fillOpacity="0.7" transform="rotate(-15 18 37)" />
      <ellipse cx="46" cy="37" rx="11" ry="8" fill={color1} fillOpacity="0.7" transform="rotate(15 46 37)" />
      <line x1="32" y1="14" x2="32" y2="52" stroke="#1C3A5E" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M29 14 Q32 10 35 14" stroke="#1C3A5E" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/* ─── Ocean Wave SVG ──────────────────────────────────────── */
function OceanWave({ color = "#EAF4FB", opacity = 1 }: { color?: string; opacity?: number }) {
  return (
    <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity }} preserveAspectRatio="none" className="w-full">
      <path d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1380,20 1440,40 L1440,80 L0,80 Z" fill={color} />
    </svg>
  );
}

/* ─── Fade Section ───────────────────────────────────────── */
function FadeSection({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "22%"]);
  const heroOpacity = useTransform(heroScroll, [0, 0.65], [1, 0]);

  const pillars = [
    { icon: "◈", title: "Strategy", desc: "Every campaign starts with a clear understanding of audience, goals, and brand positioning." },
    { icon: "✦", title: "Storytelling", desc: "Marketing that moves people is rooted in story — authentic, human, and memorable." },
    { icon: "◎", title: "Community", desc: "The best brands aren't just followed. They're belonged to." },
    { icon: "❋", title: "Digital", desc: "Social media, content, and audience growth — building presence that compounds." },
  ];

  const featuredWork = [
    { title: "Lido Complex", cat: "Luxury Hospitality", img: "/images/projects/lido.jpg", bg: "#EAF4FB", href: "/work" },
    { title: "University Student Senate", cat: "Leadership & Design", img: "/images/senate/senate-poster-1.png", bg: "#C8DCF0", href: "/work" },
    { title: "SAGA", cat: "Community & Events", img: "/images/saga/saga-poster.png", bg: "#D6EEE8", href: "/work" },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden" style={{ background: "#FAF8F4" }}>

      {/* ═══════════════════════════════════════════════
          HERO — Ocean editorial parallax
      ═══════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">

        {/* Ocean gradient background with parallax */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, #1C3A5E 0%, #2D4E7A 40%, #4A7FA5 70%, #7BAFD4 100%)" }} />
          {/* Ocean shimmer layers */}
          <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(ellipse at 30% 70%, rgba(214,238,232,0.4) 0%, transparent 55%)" }} />
          <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(ellipse at 80% 20%, rgba(184,212,236,0.5) 0%, transparent 50%)" }} />
          {/* Wave layers */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="absolute bottom-0 w-full opacity-15">
              <OceanWave color="#B8D4EC" />
            </div>
          </div>
        </motion.div>

        {/* Paper noise grain */}
        <div className="absolute inset-0 opacity-5 z-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" }} />

        {/* Floating butterflies */}
        <motion.div animate={{ y:[-12,10,-12], x:[0,16,0], rotate:[0,10,0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-28 right-20 pointer-events-none z-10">
          <Butterfly size={56} opacity={0.28} color1="#B8D4EC" color2="#EAF4FB" />
        </motion.div>
        <motion.div animate={{ y:[0,-16,0], rotate:[0,-7,0] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2.5 }} className="absolute top-52 left-16 pointer-events-none z-10">
          <Butterfly size={36} opacity={0.18} color1="#D6EEE8" color2="#B8D4EC" />
        </motion.div>
        <motion.div animate={{ y:[8,-10,8], x:[0,-10,0], rotate:[0,5,0] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-40 right-40 pointer-events-none z-10">
          <Butterfly size={42} opacity={0.2} color1="#C8DCF0" color2="#7BAFD4" />
        </motion.div>
        <motion.div animate={{ y:[-6,12,-6], rotate:[0,-4,0] }} transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 3 }} className="absolute bottom-32 left-32 pointer-events-none z-10">
          <Butterfly size={28} opacity={0.15} color1="#EAF4FB" color2="#B8D4EC" />
        </motion.div>

        {/* ─── HERO CONTENT ─── */}
        <motion.div style={{ opacity: heroOpacity }} className="relative z-20 w-full">
          <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-24 pb-32">
            <div className="max-w-4xl">

              {/* Label */}
              <motion.div initial={{ opacity:0, x:-16 }} animate={{ opacity:1, x:0 }} transition={{ duration: 0.7 }} className="flex items-center gap-3 mb-10">
                <div className="w-8 h-[1px]" style={{ background: "rgba(184,212,236,0.6)" }} />
                <span className="font-sans text-[10px] font-medium uppercase tracking-[0.35em]" style={{ color: "rgba(184,212,236,0.8)" }}>Nagelia Henry</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity:0, y:28 }}
                animate={{ opacity:1, y:0 }}
                transition={{ duration: 1.1, delay: 0.12 }}
                className="font-serif font-light mb-8"
                style={{ fontSize: "clamp(2.6rem, 6.5vw, 6rem)", lineHeight: 1.04, letterSpacing: "-0.025em", color: "#FAF8F4" }}
              >
                Building brands with<br />
                <em style={{ color: "#B8D4EC" }}>strategy, storytelling,</em><br />
                and experiences<br />
                people remember.
              </motion.h1>

              {/* Sub */}
              <motion.p
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                transition={{ duration: 0.9, delay: 0.4 }}
                className="font-sans text-base md:text-lg leading-relaxed mb-10 max-w-2xl"
                style={{ color: "rgba(184,212,236,0.82)" }}
              >
                Digital strategist, brand storyteller, and content creator focused on audience engagement, brand marketing, and meaningful digital experiences.
              </motion.p>

              {/* Handwritten annotation */}
              <motion.div
                initial={{ opacity:0, rotate: -2 }}
                animate={{ opacity:1, rotate: -2 }}
                transition={{ duration: 0.8, delay: 0.65 }}
                className="inline-block mb-10 px-4 py-2 rounded-xl"
                style={{ background: "rgba(184,212,236,0.12)", border: "1px solid rgba(184,212,236,0.2)" }}
              >
                <span className="font-caveat text-lg" style={{ color: "rgba(214,238,232,0.8)" }}>
                  Jamaica → New York → Phoenix 🌊
                </span>
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity:0, y:16 }}
                animate={{ opacity:1, y:0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/work" className="btn-primary" style={{ background: "#FAF8F4", color: "#1C3A5E" }}>View My Work</Link>
                <Link href="/contact" className="btn-ghost-light">Contact Me</Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <OceanWave color="#FAF8F4" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SCROLLING MARQUEE — disciplines
      ═══════════════════════════════════════════════ */}
      <section className="relative py-6 overflow-hidden" style={{ background: "#FAF8F4", borderTop: "1px solid rgba(184,212,236,0.3)", borderBottom: "1px solid rgba(184,212,236,0.3)" }}>
        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-10 whitespace-nowrap will-change-transform"
        >
          {["Digital Strategy", "Brand Marketing", "Audience Engagement", "Content Creation", "Social Media", "Public Relations", "Storytelling", "Influencer Marketing", "Community Building", "Beauty", "Lifestyle", "Luxury Hospitality", "Sports Marketing", "Editorial"].flatMap(s => [s, "◎"]).concat(["Digital Strategy", "Brand Marketing", "Audience Engagement", "Content Creation", "Social Media", "Public Relations", "Storytelling", "Influencer Marketing", "Community Building", "Beauty", "Lifestyle", "Luxury Hospitality"].flatMap(s => [s, "◎"])).map((item, i) => (
            <span key={i} className="font-serif text-lg italic" style={{ color: item === "◎" ? "#B8D4EC" : "#4A7FA5", flexShrink: 0 }}>{item}</span>
          ))}
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════
          PILLARS — Strategy, Story, Community, Digital
      ═══════════════════════════════════════════════ */}
      <section className="relative py-32 overflow-hidden" style={{ background: "#FAF8F4" }}>
        <motion.div animate={{ y:[-8,10,-8], rotate:[0,5,0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute top-12 right-12 pointer-events-none">
          <Butterfly size={40} opacity={0.22} color1="#D6EEE8" color2="#B8D4EC" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <FadeSection className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px]" style={{ background: "#7BAFD4" }} />
              <span className="font-sans text-[10px] font-medium uppercase tracking-[0.3em]" style={{ color: "#4A7FA5" }}>What I do</span>
            </div>
            <h2 className="font-serif" style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", lineHeight: 1.1, color: "#1C3A5E" }}>
              The work that drives me.
            </h2>
          </FadeSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity:0, y:24 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="rounded-3xl p-8 transition-all duration-400"
                style={{
                  background: i === 0 ? "#EAF4FB" : i === 1 ? "#D6EEE8" : i === 2 ? "#F5F0E8" : "#FAF8F4",
                  boxShadow: "0 2px 16px rgba(28,58,94,0.06)"
                }}
              >
                <div className="text-2xl mb-5" style={{ color: "#7BAFD4" }}>{p.icon}</div>
                <h3 className="font-serif text-xl mb-3" style={{ color: "#1C3A5E" }}>{p.title}</h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FEATURED WORK — Polaroid scrapbook
      ═══════════════════════════════════════════════ */}
      <section className="relative py-32 overflow-hidden" style={{ background: "linear-gradient(160deg, #EAF4FB 0%, #D6EEE8 60%, #FAF8F4 100%)" }}>
        <div className="absolute top-0 left-0 right-0 h-12 torn-top" style={{ background: "#FAF8F4" }} />

        <motion.div animate={{ y:[-10,12,-10], x:[0,10,0] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-24 left-10 pointer-events-none">
          <Butterfly size={44} opacity={0.25} color1="#C8DCF0" color2="#7BAFD4" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-8">
          <FadeSection className="mb-16">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-6 h-[1px]" style={{ background: "#7BAFD4" }} />
                  <span className="font-sans text-[10px] font-medium uppercase tracking-[0.3em]" style={{ color: "#4A7FA5" }}>Featured Work</span>
                </div>
                <h2 className="font-serif" style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", lineHeight: 1.1, color: "#1C3A5E" }}>
                  Selected projects.
                </h2>
              </div>
              <Link href="/work" className="btn-secondary hidden md:flex">View All Work</Link>
            </div>
          </FadeSection>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredWork.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity:0, y:28 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }}
                transition={{ duration: 0.8, delay: i * 0.12 }}
              >
                <Link href={w.href} className="block group">
                  <motion.div
                    whileHover={{ y: -8, rotate: 0 }}
                    className="polaroid"
                    style={{ transform: `rotate(${i % 2 === 0 ? -1.5 : 2}deg)` }}
                  >
                    <div className="relative overflow-hidden rounded-sm" style={{ aspectRatio: "4/3", background: w.bg }}>
                      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} className="w-full h-full">
                        <Image src={w.img} alt={w.title} fill className="object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                      </motion.div>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div>
                        <p className="font-caveat text-navy text-base leading-tight">{w.title}</p>
                        <p className="font-sans text-[10px] uppercase tracking-widest mt-0.5" style={{ color: "#7BAFD4" }}>{w.cat}</p>
                      </div>
                      <span className="font-sans text-xs" style={{ color: "#B8D4EC" }}>→</span>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-10 md:hidden">
            <Link href="/work" className="btn-secondary">View All Work</Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-12 torn-bottom" style={{ background: "#FAF8F4" }} />
      </section>

      {/* ═══════════════════════════════════════════════
          AUDIENCE SNAPSHOT — social stats
      ═══════════════════════════════════════════════ */}
      <section className="relative py-32 overflow-hidden" style={{ background: "#FAF8F4" }}>
        <motion.div animate={{ y:[-8,10,-8], rotate:[0,6,0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute top-16 right-16 pointer-events-none">
          <Butterfly size={38} opacity={0.2} color1="#D6EEE8" color2="#7BAFD4" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeSection>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-[1px]" style={{ background: "#7BAFD4" }} />
                <span className="font-sans text-[10px] font-medium uppercase tracking-[0.3em]" style={{ color: "#4A7FA5" }}>Content & Audience</span>
              </div>
              <h2 className="font-serif mb-6" style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", lineHeight: 1.1, color: "#1C3A5E" }}>
                Building an audience,<br />one story at a time.
              </h2>
              <p className="font-sans text-base leading-relaxed mb-8" style={{ color: "#6B6B6B" }}>
                Across TikTok and Instagram, I create content that connects — beauty, lifestyle, wellness, and the everyday stories that make people feel seen.
              </p>

              {/* Sticky note annotation */}
              <div className="sticky rounded-xl mb-8" style={{ transform: "rotate(-1.5deg)", display: "inline-block" }}>
                <p className="font-caveat text-navy text-base px-2 py-1">
                  @bynagelia · @____nageliahenry 💙
                </p>
              </div>

              <div className="flex gap-4">
                <a href="https://www.tiktok.com/@bynagelia" target="_blank" rel="noopener noreferrer" className="btn-primary text-xs" style={{ padding: "8px 18px" }}>TikTok ↗</a>
                <a href="https://www.instagram.com/____nageliahenry/" target="_blank" rel="noopener noreferrer" className="btn-secondary text-xs" style={{ padding: "8px 18px" }}>Instagram ↗</a>
              </div>
            </FadeSection>

            <FadeSection delay={0.2}>
              <div className="grid grid-cols-2 gap-5">
                {[
                  { platform: "TikTok", handle: "@bynagelia", stat: "2,218", unit: "Followers", stat2: "16.4K", unit2: "Likes", color: "#EAF4FB", accent: "#7BAFD4" },
                  { platform: "Instagram", handle: "@____nageliahenry", stat: "2,144", unit: "Followers", stat2: "Beauty · Lifestyle", unit2: "Content Pillars", color: "#D6EEE8", accent: "#4A7FA5" },
                  { platform: "Substack", handle: "nagelia.substack.com", stat: "Writing", unit: "Essays & Stories", stat2: "Long-form", unit2: "Storytelling", color: "#F5F0E8", accent: "#C9A96E" },
                  { platform: "LinkedIn", handle: "nagelia-henry", stat: "Network", unit: "Professional", stat2: "Strategy", unit2: "Thought Leadership", color: "#FAF8F4", accent: "#1C3A5E" },
                ].map((s, i) => (
                  <motion.div
                    key={s.platform}
                    initial={{ opacity:0, scale:0.94 }}
                    whileInView={{ opacity:1, scale:1 }}
                    viewport={{ once:true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="rounded-2xl p-5 transition-all duration-300"
                    style={{ background: s.color, boxShadow: "0 2px 16px rgba(28,58,94,0.07)" }}
                  >
                    <p className="font-sans text-[10px] font-medium uppercase tracking-[0.25em] mb-3" style={{ color: s.accent }}>{s.platform}</p>
                    <p className="font-sans text-[11px] mb-4" style={{ color: "#8A8A8A" }}>{s.handle}</p>
                    <p className="font-serif text-2xl font-light" style={{ color: "#1C3A5E" }}>{s.stat}</p>
                    <p className="font-sans text-[10px] uppercase tracking-widest mt-0.5 mb-3" style={{ color: s.accent }}>{s.unit}</p>
                    <div className="h-[1px] mb-3" style={{ background: `${s.accent}30` }} />
                    <p className="font-serif text-base" style={{ color: "#1C3A5E" }}>{s.stat2}</p>
                    <p className="font-sans text-[10px] uppercase tracking-widest" style={{ color: s.accent }}>{s.unit2}</p>
                  </motion.div>
                ))}
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          ABOUT TEASER — scrapbook editorial
      ═══════════════════════════════════════════════ */}
      <section className="relative py-32 overflow-hidden" style={{ background: "#1C3A5E" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 20% 60%, rgba(123,175,212,0.2) 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, rgba(74,127,165,0.15) 0%, transparent 50%)" }} />

        <motion.div animate={{ y:[-10,12,-10], rotate:[0,7,0] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} className="absolute top-20 right-20 pointer-events-none">
          <Butterfly size={44} opacity={0.2} color1="#B8D4EC" color2="#EAF4FB" />
        </motion.div>
        <motion.div animate={{ y:[0,-14,0] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }} className="absolute bottom-20 left-16 pointer-events-none">
          <Butterfly size={30} opacity={0.15} color1="#D6EEE8" color2="#B8D4EC" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <FadeSection>
              <div className="flex items-center justify-center gap-4 mb-10">
                <div className="w-10 h-[1px]" style={{ background: "rgba(184,212,236,0.4)" }} />
                <Butterfly size={28} opacity={0.4} color1="#B8D4EC" color2="#7BAFD4" />
                <div className="w-10 h-[1px]" style={{ background: "rgba(184,212,236,0.4)" }} />
              </div>

              <p className="font-serif italic mb-8" style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)", lineHeight: 1.2, color: "#FAF8F4" }}>
                &ldquo;The work has always<br />been about people.&rdquo;
              </p>

              <p className="font-sans text-base leading-relaxed mb-10" style={{ color: "rgba(184,212,236,0.82)" }}>
                A digital strategist, brand storyteller, and community builder — from Jamaica to New York to Phoenix, shaped by resilience and driven by meaningful work.
              </p>

              {/* Passport stamps */}
              <div className="flex flex-wrap justify-center gap-5 mb-10">
                {[
                  { city: "Kingston", country: "Jamaica", rotate: -7, color: "#7BAFD4" },
                  { city: "New York", country: "USA", rotate: 5, color: "#B8D4EC" },
                  { city: "Phoenix", country: "Arizona", rotate: -3, color: "#D6EEE8" },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity:0, scale:1.2 }}
                    whileInView={{ opacity:0.65, scale:1 }}
                    viewport={{ once:true }}
                    transition={{ delay: i * 0.12 }}
                    style={{ transform: `rotate(${s.rotate}deg)`, borderColor: `${s.color}50` }}
                    className="inline-flex flex-col items-center border-2 rounded-full px-5 py-3"
                  >
                    <span className="font-sans text-[8px] font-bold uppercase tracking-[0.25em]" style={{ color: s.color }}>{s.country}</span>
                    <span className="font-serif italic text-sm mt-0.5" style={{ color: s.color }}>{s.city}</span>
                  </motion.div>
                ))}
              </div>

              <Link href="/about" className="btn-ghost-light">Read My Story</Link>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CONTACT CTA
      ═══════════════════════════════════════════════ */}
      <section className="relative py-32 overflow-hidden" style={{ background: "#FAF8F4" }}>
        {[{ s:44,l:"8%",t:"20%",d:0 }, { s:28,l:"75%",t:"65%",d:1.5 }, { s:38,l:"55%",t:"10%",d:0.8 }].map((b, i) => (
          <motion.div key={i} animate={{ y:[-10,8,-10], x:[0,8,0], rotate:[0,5,0] }} transition={{ duration: 7 + i*2, repeat: Infinity, ease: "easeInOut", delay: b.d }} className="absolute pointer-events-none" style={{ left: b.l, top: b.t }}>
            <Butterfly size={b.s} opacity={0.18} color1="#B8D4EC" color2="#7BAFD4" />
          </motion.div>
        ))}

        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <FadeSection className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-10 h-[1px]" style={{ background: "rgba(123,175,212,0.4)" }} />
              <span className="font-sans text-[10px] font-medium uppercase tracking-[0.3em]" style={{ color: "#4A7FA5" }}>Let&apos;s Connect</span>
              <div className="w-10 h-[1px]" style={{ background: "rgba(123,175,212,0.4)" }} />
            </div>

            <h2 className="font-serif mb-4" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", lineHeight: 1.08, color: "#1C3A5E" }}>
              Let&apos;s build something<br /><em>memorable.</em>
            </h2>
            <p className="font-sans text-base leading-relaxed mb-10" style={{ color: "#6B6B6B" }}>
              Available for internships, brand collaborations, and creative partnerships.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">Get in Touch</Link>
              <Link href="/work" className="btn-secondary">View My Work</Link>
            </div>

            <div className="mt-10 flex justify-center">
              <p className="font-caveat text-lg" style={{ color: "#7BAFD4", transform: "rotate(-1deg)" }}>
                nageliadhenry@gmail.com 🦋
              </p>
            </div>
          </FadeSection>
        </div>
      </section>
    </main>
  );
}
