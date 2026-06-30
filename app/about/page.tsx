"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/* ─── Butterfly SVG ────────────────────────────────────────── */
function Butterfly({ size = 48, opacity = 0.55, className = "", color1 = "#B8D4EC", color2 = "#7BAFD4" }: { size?: number; opacity?: number; className?: string; color1?: string; color2?: string }) {
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

/* ─── Fade Section ───────────────────────────────────────── */
function FadeSection({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Passport Stamp ──────────────────────────────────────── */
function PassportStamp({ city, country, rotate = -8, color = "#7BAFD4" }: { city: string; country: string; rotate?: number; color?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.3 }}
      whileInView={{ opacity: 0.72, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
      style={{ transform: `rotate(${rotate}deg)`, borderColor: `${color}60` }}
      className="inline-flex flex-col items-center justify-center border-2 rounded-full px-5 py-3 select-none"
    >
      <span className="font-sans text-[8px] font-bold uppercase tracking-[0.25em]" style={{ color }}>{country}</span>
      <span className="font-serif text-base italic mt-0.5" style={{ color }}>{city}</span>
      <div className="w-10 h-[1px] my-1" style={{ background: color, opacity: 0.5 }} />
      <span className="font-sans text-[7px] tracking-[0.15em] uppercase" style={{ color }}>Arrived</span>
    </motion.div>
  );
}

/* ─── Glance Card ─────────────────────────────────────────── */
function GlanceCard({ emoji, label, value }: { emoji: string; label: string; value: string }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl p-5 text-center transition-all duration-300"
      style={{ boxShadow: "0 2px 16px rgba(28,58,94,0.07)" }}
    >
      <div className="text-2xl mb-2">{emoji}</div>
      <div className="font-sans text-[9px] font-medium uppercase tracking-[0.25em] mb-1" style={{ color: "#C9A96E" }}>{label}</div>
      <div className="font-serif text-sm leading-snug" style={{ color: "#1C3A5E" }}>{value}</div>
    </motion.div>
  );
}

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const glanceItems = [
    { emoji: "🇯🇲", label: "Origin", value: "Clarendon, Jamaica" },
    { emoji: "🏙", label: "Previously", value: "New York City" },
    { emoji: "📍", label: "Based in", value: "Phoenix, Arizona" },
    { emoji: "🎓", label: "Studying", value: "Digital Strategy & Audience Engagement" },
    { emoji: "🏫", label: "University", value: "Arizona State University" },
    { emoji: "💙", label: "Dream Career", value: "Marketing & Public Relations" },
    { emoji: "📱", label: "Loves", value: "Brand Strategy" },
    { emoji: "✨", label: "Passion", value: "Community Building" },
    { emoji: "📸", label: "Identity", value: "Creator" },
    { emoji: "🎨", label: "Also", value: "Designer" },
    { emoji: "📝", label: "Always", value: "Storyteller" },
    { emoji: "🌊", label: "Obsessed with", value: "Ocean, beaches & luxury travel" },
    { emoji: "🏒", label: "Unexpected Fan", value: "Hockey" },
    { emoji: "🦋", label: "Symbol", value: "Transformation" },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden" style={{ background: "#FAF8F4" }}>

      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen flex items-end overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, #EAF4FB 0%, #D6EEE8 40%, #FAF8F4 100%)" }} />
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full opacity-30" style={{ background: "radial-gradient(ellipse, #B8D4EC 0%, transparent 70%)", filter: "blur(40px)" }} />
          <div className="absolute bottom-32 left-10 w-80 h-80 rounded-full opacity-20" style={{ background: "radial-gradient(ellipse, #D6EEE8 0%, transparent 70%)", filter: "blur(50px)" }} />
        </motion.div>

        {/* Floating butterflies */}
        <motion.div animate={{ y: [-10,8,-10], x:[0,12,0], rotate:[0,8,0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute top-24 right-16 pointer-events-none z-10">
          <Butterfly size={52} opacity={0.42} />
        </motion.div>
        <motion.div animate={{ y:[0,-14,0], x:[0,-8,0], rotate:[0,-5,0] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute top-40 left-24 pointer-events-none z-10">
          <Butterfly size={32} opacity={0.28} color1="#D6EEE8" color2="#7BAFD4" />
        </motion.div>
        <motion.div animate={{ y:[6,-8,6], rotate:[3,-3,3] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-48 right-32 pointer-events-none z-10">
          <Butterfly size={36} opacity={0.3} color1="#C8DCF0" color2="#4A7FA5" />
        </motion.div>

        <motion.div style={{ opacity: heroOpacity }} className="relative z-20 w-full pb-24 pt-36">
          <div className="max-w-7xl mx-auto px-6 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-12 items-end">

              {/* Left */}
              <div>
                <motion.div initial={{ opacity:0, x:-20 }} animate={{ opacity:1, x:0 }} transition={{ duration: 0.7 }} className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-[1px]" style={{ background: "#C9A96E" }} />
                  <span className="font-sans text-[10px] font-medium uppercase tracking-[0.3em]" style={{ color: "#C9A96E" }}>About Nagelia</span>
                </motion.div>

                <motion.h1 initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration: 1, delay: 0.15 }} className="font-serif font-light mb-6" style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)", lineHeight: 1.05, letterSpacing: "-0.02em", color: "#1C3A5E" }}>
                  Every chapter<br /><em>shaped the next.</em>
                </motion.h1>

                <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration: 0.9, delay: 0.4 }} className="font-caveat text-xl mb-10" style={{ transform: "rotate(-1deg)", color: "#7BAFD4" }}>
                  digital strategist · brand storyteller · community builder
                </motion.p>

                <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap gap-4">
                  <PassportStamp city="Kingston" country="Jamaica" rotate={-7} color="#7BAFD4" />
                  <PassportStamp city="New York" country="USA" rotate={4} color="#4A7FA5" />
                  <PassportStamp city="Phoenix" country="Arizona" rotate={-3} color="#1C3A5E" />
                </motion.div>
              </div>

              {/* Right — portrait */}
              <div className="relative">
                <motion.div initial={{ opacity:0, scale:0.96 }} animate={{ opacity:1, scale:1 }} transition={{ duration: 1, delay: 0.3 }} className="relative">
                  <div className="tape absolute -top-2 right-12 w-20 h-6 z-20" style={{ transform: "rotate(3deg)" }} />

                  <div className="polaroid mx-auto max-w-xs" style={{ transform: "rotate(0.8deg)" }}>
                    <div className="relative overflow-hidden rounded-sm bg-seafoam" style={{ aspectRatio: "3/4" }}>
                      <Image src="/images/headshot.jpg" alt="Nagelia Henry" fill className="object-cover object-top" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                      <div className="absolute inset-0 flex items-center justify-center opacity-25"><Butterfly size={80} /></div>
                    </div>
                    <p className="font-caveat text-center text-navy mt-3 text-base">Nagelia Henry, 2025</p>
                  </div>

                  <motion.div initial={{ opacity:0, x:20 }} animate={{ opacity:1, x:0 }} transition={{ delay: 0.9, duration: 0.6 }} className="absolute -right-6 top-16 bg-white rounded-xl p-3 z-20 max-w-[140px]" style={{ transform: "rotate(3deg)", boxShadow: "0 4px 16px rgba(28,58,94,0.10)" }}>
                    <p className="font-caveat text-navy text-sm leading-snug">&ldquo;Always building.&rdquo;</p>
                  </motion.div>
                  <motion.div initial={{ opacity:0, x:-20 }} animate={{ opacity:1, x:0 }} transition={{ delay: 1.1, duration: 0.6 }} className="absolute -left-8 bottom-24 rounded-xl p-3 z-20 max-w-[150px]" style={{ transform: "rotate(-4deg)", background: "#D6EEE8", boxShadow: "0 4px 16px rgba(28,58,94,0.10)" }}>
                    <p className="font-caveat text-navy text-sm leading-snug">&ldquo;Community first. Always.&rdquo;</p>
                  </motion.div>
                  <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay: 1.3, duration: 0.6 }} className="absolute -bottom-2 right-0 bg-white rounded-xl p-3 z-20" style={{ transform: "rotate(2deg)", boxShadow: "0 4px 16px rgba(28,58,94,0.10)" }}>
                    <p className="font-caveat text-ocean text-sm">&ldquo;Marketing is storytelling.&rdquo;</p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-14 z-30 torn-bottom" style={{ background: "#FAF8F4" }} />
      </section>

      {/* ─── WHERE IT BEGAN ─────────────────────────────────────── */}
      <section className="relative py-32 overflow-hidden" style={{ background: "#FAF8F4" }}>
        <motion.div animate={{ y:[-8,10,-8], x:[0,14,0], rotate:[0,6,0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute top-16 right-8 pointer-events-none z-10">
          <Butterfly size={44} opacity={0.26} color1="#D6EEE8" color2="#B8D4EC" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <FadeSection>
              <div className="relative rounded-3xl p-10 overflow-hidden" style={{ background: "#EAF4FB", minHeight: 420 }}>
                <div className="relative z-10 space-y-10">
                  {[
                    { city: "Clarendon, Jamaica", note: "Where it all began.", flag: "🇯🇲", color: "#C9A96E" },
                    { city: "New York City", note: "Where ambition grew.", flag: "🗽", color: "#7BAFD4" },
                    { city: "Phoenix, Arizona", note: "Where I'm building.", flag: "🌵", color: "#4A7FA5" },
                  ].map((stop, i) => (
                    <div key={i} className="flex items-center gap-6">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-xl flex-shrink-0" style={{ boxShadow: "0 2px 12px rgba(28,58,94,0.08)" }}>{stop.flag}</div>
                        {i < 2 && <div className="w-[2px] h-10 mt-2" style={{ background: `${stop.color}50` }} />}
                      </div>
                      <div>
                        <p className="font-serif text-lg" style={{ color: "#1C3A5E" }}>{stop.city}</p>
                        <p className="font-caveat text-base mt-0.5" style={{ color: "#7BAFD4" }}>{stop.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-6 right-6 inline-flex flex-col items-center justify-center border-2 rounded-full px-4 py-2 select-none" style={{ borderColor: "rgba(123,175,212,0.4)", transform: "rotate(-8deg)" }}>
                  <span className="font-sans text-[8px] font-bold uppercase tracking-[0.2em]" style={{ color: "rgba(28,58,94,0.5)" }}>Est. Jamaica</span>
                </div>
              </div>
            </FadeSection>

            <FadeSection delay={0.2}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-[1px]" style={{ background: "#C9A96E" }} />
                <span className="font-sans text-[10px] font-medium uppercase tracking-[0.3em]" style={{ color: "#C9A96E" }}>Chapter One</span>
              </div>
              <h2 className="font-serif mb-8" style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", lineHeight: 1.1, color: "#1C3A5E" }}>Where it began.</h2>
              <div className="space-y-5 font-sans text-base leading-relaxed" style={{ color: "#3D3D3D" }}>
                <p>I grew up in Jamaica before moving to New York City — two places that shaped me in completely different ways.</p>
                <p>Jamaica taught me resilience, community, and the importance of knowing where you come from. It gave me a deep appreciation for culture, connection, and people.</p>
                <p>New York challenged me in different ways. It taught me to move with intention, embrace ambition, and understand that every opportunity is something you earn.</p>
                <p>Together, those places shaped the way I see the world — and the way I approach every project I create.</p>
              </div>
              <div className="mt-8 inline-block sticky-cream rounded-xl" style={{ transform: "rotate(-1.5deg)" }}>
                <p className="font-caveat text-navy text-lg px-5 py-4">&ldquo;Two worlds. One story.&rdquo;</p>
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ─── THE CHAPTER THAT CHANGED EVERYTHING ──────────────── */}
      <section className="relative py-40 overflow-hidden" style={{ background: "linear-gradient(160deg, #EAF4FB 0%, #F5F0E8 100%)" }}>
        <div className="absolute top-0 left-0 right-0 h-12 z-10 torn-top" style={{ background: "#FAF8F4" }} />

        <motion.div animate={{ y:[-14,6,-14], rotate:[0,-8,0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute bottom-20 left-12 pointer-events-none z-10">
          <Butterfly size={56} opacity={0.32} color1="#C8DCF0" color2="#7BAFD4" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <FadeSection>
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="w-6 h-[1px]" style={{ background: "#C9A96E" }} />
                <span className="font-sans text-[10px] font-medium uppercase tracking-[0.3em]" style={{ color: "#C9A96E" }}>Chapter Two</span>
                <div className="w-6 h-[1px]" style={{ background: "#C9A96E" }} />
              </div>
              <h2 className="font-serif mb-16" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", lineHeight: 1.08, color: "#1C3A5E" }}>
                The chapter that<br /><em>changed everything.</em>
              </h2>
            </FadeSection>

            <FadeSection delay={0.15}>
              <div className="relative py-12 px-8 mb-16">
                <span className="font-serif absolute -top-6 -left-2 select-none" style={{ fontSize: "7rem", lineHeight: 1, color: "#B8D4EC" }}>&ldquo;</span>
                <p className="font-serif italic relative z-10" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", lineHeight: 1.25, color: "#1C3A5E" }}>
                  Clarity changed<br />everything.
                </p>
              </div>
            </FadeSection>

            <FadeSection delay={0.25}>
              <div className="space-y-6 font-sans text-base md:text-lg leading-relaxed text-left max-w-2xl mx-auto" style={{ color: "#3D3D3D" }}>
                <p>When I was diagnosed with ovarian cancer, life slowed down in a way I never expected. For the first time, I wasn&apos;t thinking about what came next. I was thinking about what truly mattered.</p>
                <p>That experience completely changed how I define success. I stopped chasing opportunities simply because they existed. I started choosing work that aligns with who I am, what I believe, and the impact I hope to make.</p>
                <p className="font-serif text-lg italic" style={{ color: "#1C3A5E" }}>That chapter became the beginning of everything that came after.</p>
              </div>
            </FadeSection>

            <FadeSection delay={0.35} className="flex justify-center mt-16">
              <Butterfly size={40} opacity={0.38} />
            </FadeSection>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-12 z-10 torn-bottom" style={{ background: "#FAF8F4" }} />
      </section>

      {/* ─── LEADING WITH PURPOSE ───────────────────────────────── */}
      <section className="relative py-32 overflow-hidden" style={{ background: "#FAF8F4" }}>
        <motion.div animate={{ y:[-6,12,-6], x:[0,10,0], rotate:[0,5,0] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }} className="absolute top-12 right-16 pointer-events-none z-10">
          <Butterfly size={38} opacity={0.27} color1="#D6EEE8" color2="#7BAFD4" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <FadeSection className="mb-16">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-[1px]" style={{ background: "#C9A96E" }} />
              <span className="font-sans text-[10px] font-medium uppercase tracking-[0.3em]" style={{ color: "#C9A96E" }}>Chapter Three</span>
            </div>
            <h2 className="font-serif" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", lineHeight: 1.08, color: "#1C3A5E" }}>Leading with purpose.</h2>
          </FadeSection>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeSection>
              <div className="relative" style={{ height: 520 }}>
                <motion.div whileHover={{ rotate: -1, y: -6 }} className="polaroid absolute top-0 left-4 w-56" style={{ transform: "rotate(-3deg)", zIndex: 3 }}>
                  <div className="relative rounded-sm overflow-hidden bg-seafoam" style={{ aspectRatio: "1" }}>
                    <Image src="/images/orientation/orient-1.jpg" alt="Orientation" fill className="object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                  </div>
                  <p className="font-caveat text-center text-navy mt-2 text-sm">Orientation Leader</p>
                </motion.div>

                <motion.div whileHover={{ rotate: 1, y: -6 }} className="polaroid absolute top-8 right-0 w-52" style={{ transform: "rotate(4deg)", zIndex: 2 }}>
                  <div className="relative rounded-sm overflow-hidden" style={{ aspectRatio: "1", background: "#EAF4FB" }}>
                    <Image src="/images/saga/saga-1.jpg" alt="SAGA" fill className="object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                  </div>
                  <p className="font-caveat text-center text-navy mt-2 text-sm">SAGA President</p>
                </motion.div>

                <motion.div whileHover={{ rotate: -2, y: -6 }} className="polaroid absolute bottom-0 left-16 w-60" style={{ transform: "rotate(-1.5deg)", zIndex: 4 }}>
                  <div className="relative rounded-sm overflow-hidden" style={{ aspectRatio: "4/3", background: "#C8DCF0" }}>
                    <Image src="/images/senate/jamaica-flag-event.jpg" alt="Jamaica Flag Day Event — University Student Senate" fill className="object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                  </div>
                  <p className="font-caveat text-center text-navy mt-2 text-sm">Jamaica Flag Day — USS</p>
                </motion.div>

                <div className="tape absolute top-10 left-40 w-16 h-5 z-20" style={{ transform: "rotate(-5deg)" }} />
                <div className="tape-cream absolute bottom-28 right-4 w-12 h-4 z-20" style={{ transform: "rotate(7deg)" }} />
              </div>
            </FadeSection>

            <FadeSection delay={0.2}>
              <div className="space-y-5 font-sans text-base leading-relaxed" style={{ color: "#3D3D3D" }}>
                <p>Returning to The New School became more than continuing my education — it became an opportunity to lead.</p>
                <p>As President of the Sexuality &amp; Gender Alliance (SAGA), I helped create spaces where students felt welcomed, represented, and supported. I led an executive board, managed budgets, planned events, and collaborated with faculty to advance DEI on campus.</p>
                <p>As Director of Engagement for the University Student Senate, I led student communications, campus campaigns, marketing initiatives, and community outreach — designing promotional materials and increasing student engagement across the institution.</p>
                <p>As an Orientation Leader, I helped hundreds of incoming students feel at home during one of the biggest transitions of their lives.</p>
              </div>

              <div className="mt-8 p-6 rounded-2xl" style={{ borderLeft: "3px solid #C9A96E", background: "rgba(245,217,138,0.12)" }}>
                <p className="font-serif text-lg italic" style={{ color: "#1C3A5E", lineHeight: 1.5 }}>
                  &ldquo;Leadership isn&apos;t about titles. It&apos;s about creating environments where people feel seen.&rdquo;
                </p>
              </div>

              <div className="mt-8 space-y-3">
                {[
                  { year: "April 2026", award: "Student Social Justice Campus Champion Award — The New School" },
                  { year: "April 2026", award: "University Student Senate Certificate of Completion" },
                ].map((a, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-lg flex-shrink-0" style={{ color: "#C9A96E" }}>✦</span>
                    <div>
                      <p className="font-sans text-[10px] font-medium uppercase tracking-widest" style={{ color: "#1C3A5E" }}>{a.year}</p>
                      <p className="font-serif text-base" style={{ color: "#3D3D3D" }}>{a.award}</p>
                    </div>
                  </div>
                ))}
                {/* HubSpot Certification */}
                <div className="flex items-start gap-3 pt-1">
                  <span className="text-base flex-shrink-0 mt-0.5">🎓</span>
                  <div>
                    <p className="font-sans text-[9px] font-bold uppercase tracking-[0.28em]" style={{ color: "#FF7A59" }}>HubSpot Academy</p>
                    <p className="font-serif text-base mt-0.5" style={{ color: "#3D3D3D" }}>Digital Marketing Certification</p>
                  </div>
                </div>
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ─── WHY MARKETING ──────────────────────────────────────── */}
      <section className="relative py-40 overflow-hidden" style={{ background: "#1C3A5E" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(123,175,212,0.25) 0%, transparent 60%), radial-gradient(ellipse at 80% 30%, rgba(74,127,165,0.2) 0%, transparent 55%)" }} />

        <motion.div animate={{ y:[-10,14,-10], rotate:[0,7,0] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} className="absolute top-16 left-16 pointer-events-none">
          <Butterfly size={48} opacity={0.22} color1="#B8D4EC" color2="#7BAFD4" />
        </motion.div>
        <motion.div animate={{ y:[0,-16,0], x:[0,8,0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }} className="absolute bottom-24 right-20 pointer-events-none">
          <Butterfly size={36} opacity={0.18} color1="#D6EEE8" color2="#B8D4EC" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <FadeSection>
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="w-6 h-[1px]" style={{ background: "rgba(184,212,236,0.4)" }} />
                <span className="font-sans text-[10px] font-medium uppercase tracking-[0.3em]" style={{ color: "#B8D4EC" }}>Chapter Four</span>
                <div className="w-6 h-[1px]" style={{ background: "rgba(184,212,236,0.4)" }} />
              </div>
              <h2 className="font-serif font-light mb-12" style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)", lineHeight: 1.05, color: "#FAF8F4" }}>Why marketing?</h2>
            </FadeSection>

            <FadeSection delay={0.15}>
              <div className="space-y-6 font-sans text-base md:text-lg leading-relaxed text-left" style={{ color: "rgba(184,212,236,0.88)" }}>
                <p>I absolutely love marketing because it combines psychology, creativity, storytelling, strategy, and human connection. The ability to understand people — and create experiences that make them feel something — is what excites me most.</p>
                <p style={{ color: "rgba(214,238,232,0.82)" }}>Public relations has become my dream career because it sits at the intersection of creativity, communication, culture, and relationship building. I want to build campaigns people remember. Communities people want to belong to. Brands people genuinely trust.</p>
                <p>Whether I&apos;m working in beauty, hospitality, sports, luxury lifestyle, or entertainment, my goal is always the same:</p>
              </div>
            </FadeSection>

            <FadeSection delay={0.3}>
              <p className="font-serif italic mt-10" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", lineHeight: 1.3, color: "#FAF8F4" }}>
                Create work that leaves people<br />feeling inspired.
              </p>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ─── TODAY ──────────────────────────────────────────────── */}
      <section className="relative py-32 overflow-hidden" style={{ background: "#EDE5D8" }}>
        <div className="absolute top-0 left-0 right-0 h-12 z-10 torn-top" style={{ background: "#1C3A5E" }} />

        <motion.div animate={{ y:[-8,8,-8], x:[0,12,0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute top-24 right-10 pointer-events-none z-0">
          <Butterfly size={40} opacity={0.22} color1="#D6EEE8" color2="#B8D4EC" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-20 pt-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <FadeSection>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-[1px]" style={{ background: "#C9A96E" }} />
                <span className="font-sans text-[10px] font-medium uppercase tracking-[0.3em]" style={{ color: "#C9A96E" }}>Chapter Five</span>
              </div>
              <h2 className="font-serif mb-8" style={{ fontSize: "clamp(2.4rem, 4vw, 3.8rem)", lineHeight: 1.1, color: "#1C3A5E" }}>Today.</h2>
              <div className="space-y-5 font-sans text-base leading-relaxed" style={{ color: "#3D3D3D" }}>
                <p>Today I&apos;m studying Digital Strategy &amp; Audience Engagement at Arizona State University&apos;s Walter Cronkite School. I&apos;m continuing to build experience across every discipline that drives meaningful brands and communities.</p>
                <p>Every experience continues shaping the marketer and communicator I&apos;m becoming.</p>
              </div>
              <div className="mt-10 sticky rounded-xl" style={{ transform: "rotate(-1.2deg)" }}>
                <p className="font-caveat text-navy text-lg px-2 py-1 leading-relaxed">
                  ASU Walter Cronkite School 🌵<br />
                  Digital Strategy &amp; Audience Engagement<br />
                  Class of 2027
                </p>
              </div>
            </FadeSection>

            <FadeSection delay={0.2}>
              <div className="grid grid-cols-2 gap-3">
                {["Marketing", "Public Relations", "Digital Strategy", "Audience Growth", "Brand Storytelling", "Communications", "Creator Marketing", "Community Building", "Content Strategy", "Social Media", "Influencer Marketing", "Campaign Design"].map((skill, i) => (
                  <motion.div key={skill} initial={{ opacity:0, scale:0.9 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }} transition={{ duration: 0.4, delay: i * 0.055 }} whileHover={{ y: -3 }} className="rounded-xl px-4 py-3 text-center transition-all duration-300" style={{ background: i % 3 === 0 ? "#FAF8F4" : i % 3 === 1 ? "#F5F0E8" : "rgba(245,217,138,0.22)" }}>
                    <p className="font-sans text-xs font-medium" style={{ letterSpacing: "0.08em", color: "#1C3A5E" }}>{skill}</p>
                  </motion.div>
                ))}
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ─── AT A GLANCE ────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden" style={{ background: "linear-gradient(160deg, #F5F0E8 0%, #EDE5D8 55%, #FAF8F4 100%)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <FadeSection className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-8 h-[1px]" style={{ background: "#C9A96E" }} />
              <Butterfly size={28} opacity={0.48} color1="#F5D98A" color2="#C9A96E" />
              <div className="w-8 h-[1px]" style={{ background: "#C9A96E" }} />
            </div>
            <h2 className="font-serif" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#1C3A5E" }}>At a glance.</h2>
          </FadeSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {glanceItems.map((item, i) => <GlanceCard key={i} {...item} />)}
          </div>
        </div>
      </section>

      {/* ─── FINAL QUOTE ─────────────────────────────────────────── */}
      <section className="relative py-40 overflow-hidden" style={{ background: "#FAF8F4" }}>
        {[{ size:44, left:"10%", top:"20%", delay:0 }, { size:32, left:"80%", top:"60%", delay:2 }, { size:52, left:"60%", top:"15%", delay:1 }, { size:28, left:"25%", top:"75%", delay:3 }].map((b, i) => (
          <motion.div key={i} animate={{ y:[-10,8,-10], x:[0,8,0], rotate:[0,5,0] }} transition={{ duration: 7 + i*1.5, repeat: Infinity, ease: "easeInOut", delay: b.delay }} className="absolute pointer-events-none" style={{ left: b.left, top: b.top }}>
            <Butterfly size={b.size} opacity={0.2} color1="#B8D4EC" color2="#7BAFD4" />
          </motion.div>
        ))}

        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <FadeSection className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="w-12 h-[1px]" style={{ background: "rgba(201,169,110,0.5)" }} />
              <Butterfly size={32} opacity={0.42} color1="#F5D98A" color2="#C9A96E" />
              <div className="w-12 h-[1px]" style={{ background: "rgba(201,169,110,0.5)" }} />
            </div>

            <p className="font-serif italic mb-12" style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.5rem)", lineHeight: 1.25, letterSpacing: "-0.01em", color: "#1C3A5E" }}>
              &ldquo;I don&rsquo;t just want to market brands. I want to build communities, create meaningful stories, and make people feel something.&rdquo;
            </p>

            <div className="flex items-center justify-center gap-3 mb-12">
              <div className="w-8 h-[1px]" style={{ background: "rgba(201,169,110,0.5)" }} />
              <span className="font-caveat text-lg" style={{ color: "#C9A96E" }}>— Nagelia Henry</span>
              <div className="w-8 h-[1px]" style={{ background: "rgba(201,169,110,0.5)" }} />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/work" className="btn-primary">View My Work</Link>
              <Link href="/contact" className="btn-secondary">Get in Touch</Link>
            </div>
          </FadeSection>
        </div>
      </section>
    </main>
  );
}
