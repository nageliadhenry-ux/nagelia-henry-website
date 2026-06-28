"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/* ─── Case Study Modal ──────────────────────────────────────── */
const caseStudySections = [
  {
    number: "01",
    title: "The Challenge",
    content: `Most beauty brands targeting Gen Z are loud. They're all over TikTok, throwing product at creators, hoping something sticks. LUMIÈRE is different — a fictional luxury skincare brand built around the idea that confidence is cultivated, not performed.

The challenge: launch LUMIÈRE to a Gen Z and millennial audience that is deeply skeptical of traditional beauty marketing, oversaturated with sponsored content, and hungry for brands that actually understand them.

The goal wasn't just awareness. It was belonging. We needed people to feel like LUMIÈRE was theirs before they ever bought a product.`,
  },
  {
    number: "02",
    title: "Research",
    content: `Before building the campaign, I needed to understand what the audience actually responds to — not what brand playbooks say they respond to.

Key findings from audience research:
→ 74% of Gen Z say they trust peer recommendations over influencer ads
→ Authenticity signals matter more than production quality
→ Beauty content that shows "the process" outperforms "the result" by 3x on TikTok
→ Luxury resonates with Gen Z when it feels personal and exclusive — not aspirational and distant
→ Color, texture, and sensory content drives the highest saves and shares

Competitor gap identified: most luxury beauty brands still communicate downward. LUMIÈRE's opportunity is to communicate across — brand to community, not brand to consumer.`,
  },
  {
    number: "03",
    title: "Audience",
    content: `Primary: Women 18–28, beauty-aware, culturally curious, digital-native. They follow aesthetics accounts, save more than they share, and make purchasing decisions based on community signal rather than ads.

Secondary: Women 28–35, career-building, values-driven. They want products that feel intelligent and intentional. Less trend-driven, more identity-driven.

Audience insight that shaped everything: This audience doesn't want to be marketed to. They want to be invited in. The campaign needed to feel like a discovery, not a launch.

Platform mix: TikTok (primary acquisition), Instagram (community + brand depth), Substack (long-form brand storytelling), Pinterest (visual identity + search).`,
  },
  {
    number: "04",
    title: "Strategy",
    content: `Campaign name: "The Ritual."

Positioning: LUMIÈRE isn't a skincare routine. It's a daily act of choosing yourself.

Three-phase strategy:

Phase 1 — Whisper (Weeks 1–2): Seed the brand before the launch. No logo. No product shots. Just mood content — textures, light, morning routines, handwritten notes. Build intrigue before the reveal.

Phase 2 — Reveal (Week 3): The brand identity drops across all channels simultaneously. Founder story. Product debut. First editorial campaign. Press release goes live.

Phase 3 — Community (Weeks 4–8): Shift from broadcasting to conversation. UGC prompts, creator partnerships with micro-influencers (10K–80K), and a Substack series called "The Ritual Letters" — personal essays about confidence, beauty, and becoming.

KPIs: 50K TikTok followers in 60 days, 10K newsletter subscribers, 500 pieces of organic UGC, $0 in paid ads for Phase 1.`,
  },
  {
    number: "05",
    title: "PR Plan",
    content: `Media targets: Allure, Byrdie, Who What Wear, Into The Gloss, Teen Vogue (digital), Refinery29, and three Substack beauty newsletters with combined readerships over 200K.

PR angle: "The skincare brand that launched with no ads and a handwritten letter."

Pre-launch: Seed 20 beauty editors and 15 micro-creators with hand-wrapped product, no branding, just a note that says: "Something is coming. Open this on Friday." Drives organic coverage before the official launch.

Launch day: Embargo lift at 8AM EST. Exclusive interview with Allure placed two weeks prior. Simultaneously, the brand's TikTok drops the founder video — unpolished, real, 90 seconds.

Post-launch: Pitch the UGC story at Week 4. "LUMIÈRE launched with no paid ads. Here's what happened." Positions the brand as a case study in community-first marketing. Gets covered by marketing trade press as well as beauty media.`,
  },
  {
    number: "06",
    title: "Creative Direction",
    content: `Visual language: cream, ivory, soft light. Morning windows. Hands. Texture. Everything is warm, slow, and intentional. Nothing is harsh or hurried.

Typography: Cormorant Garamond for brand headlines. Clean sans-serif for product callouts. Handwritten notes used in campaign imagery as an authenticity signal.

Video style: Natural light, no ring lights. Close-up textures. Real skin. No filters. The "realness" is the luxury.

Color palette: Ivory, warm sand, dusty rose, a single accent of deep navy. The palette communicates restraint — which communicates quality.

Campaign tagline: "For the mornings that are just for you."

Creator brief direction: Don't show us the product. Show us your ritual. What does your morning feel like? LUMIÈRE is just part of it.`,
  },
  {
    number: "07",
    title: "Mock Press Release",
    content: `FOR IMMEDIATE RELEASE

LUMIÈRE BEAUTY LAUNCHES WITH A LETTER, NOT AN AD

New York, NY — LUMIÈRE Beauty today announced the launch of its debut skincare collection, built entirely around the philosophy that a skincare routine is not a chore — it is a ritual of self-selection.

Unlike traditional beauty launches, LUMIÈRE's debut campaign, "The Ritual," relied entirely on organic community building, handwritten product seeding, and creator partnerships selected for authenticity rather than reach.

"We didn't want to advertise our way into people's lives," said the brand's creative team. "We wanted to earn it."

The debut collection — featuring a three-step morning ritual anchored by the brand's hero product, the Luminous Moisture Veil — ships beginning March 15th. Products are available exclusively at lumiere.com.

The brand's TikTok, launched with zero paid promotion, reached 40,000 followers in its first 45 days.

Press contact: press@lumiere.com
Website: lumiere.com
Instagram: @lumiere.beauty
TikTok: @lumiere`,
  },
  {
    number: "08",
    title: "Social Rollout",
    content: `TikTok (primary):
Week 1–2: Mood content only. Textures, light, slow mornings. No branding. 3 posts/week.
Week 3: Launch video — founder tells the brand story in 90 seconds. Raw, quiet, real.
Week 4+: "The Ritual" series — one creator per week shares their morning ritual with LUMIÈRE. Brief: make it feel like your diary, not a review.

Instagram:
Feed: Editorial imagery. One product shot per three lifestyle shots. Every caption is a sentence worth screenshotting.
Stories: Behind the scenes, polls ("do you have a morning ritual?"), Q&A with the founder.
Reels: Repurposed TikTok content with captions optimized for save behavior.

Pinterest:
Build a "The Ritual" board before launch. 200 curated pins — morning light, textures, coffee, journals, skincare flats. The brand page becomes a reference before it's a brand.

Substack — "The Ritual Letters":
Bi-weekly essays. Not about product. About confidence, mornings, becoming. LUMIÈRE mentioned once, naturally, per letter. Converts readers to brand believers before they're customers.`,
  },
  {
    number: "09",
    title: "Results (Projected)",
    content: `Based on comparable community-first beauty brand launches and current platform benchmarks:

TikTok: 40,000–60,000 followers in 60 days at zero paid spend
Instagram: 15,000 followers by end of launch month
Newsletter: 8,000–12,000 Substack subscribers by end of Phase 3
Press placements: 6–10 earned media features across target publications
UGC: 400–700 pieces of organic creator content tagged to campaign
Website traffic: 85,000 unique visitors in launch month
Conversion rate: 3.2% (above beauty industry average of 2.1%)
Email list: 6,500 signups from launch landing page

Most importantly: brand sentiment. The goal of a community-first launch isn't just numbers — it's the quality of who shows up. The audience this campaign attracts would be the right audience: engaged, loyal, and likely to evangelize.`,
  },
  {
    number: "10",
    title: "Reflection",
    content: `What this campaign taught me about marketing:

The best campaigns don't feel like campaigns. They feel like an invitation. LUMIÈRE's strategy worked — in concept — because it prioritized belonging over broadcasting. It treated the audience as the media, not the target.

The biggest strategic risk was also the biggest asset: no paid ads in Phase 1. It forced the brand to be interesting enough to spread on its own. That constraint produced better creative than a budget would have.

If I were to build on this:
→ Add a community layer earlier — a waitlist with a ritual prompt, not just an email field
→ Develop a creator program with longer-term brand partnerships, not one-off features
→ Use the Substack as a conversion funnel, not just a brand builder

This case study reflects the kind of strategist I want to be: someone who builds community first, then builds the brand around it.`,
  },
];

function CaseStudyModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto"
        style={{ background: "rgba(28,58,94,0.85)", backdropFilter: "blur(16px)" }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-3xl mx-4 my-12 rounded-3xl overflow-hidden"
          style={{ background: "#FAF8F4" }}
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative px-10 pt-12 pb-10 overflow-hidden" style={{ background: "linear-gradient(135deg, #1C3A5E 0%, #2D4E7A 60%, #4A7FA5 100%)" }}>
            <div className="absolute top-6 right-6">
              <button
                onClick={onClose}
                className="font-sans text-[10px] uppercase tracking-[0.25em] px-4 py-2 rounded-full transition-all duration-200"
                style={{ color: "rgba(184,212,236,0.8)", border: "1px solid rgba(184,212,236,0.25)" }}
              >
                Close ✕
              </button>
            </div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-[1px]" style={{ background: "rgba(184,212,236,0.5)" }} />
              <span className="font-sans text-[10px] font-medium uppercase tracking-[0.3em]" style={{ color: "rgba(184,212,236,0.7)" }}>Mock Campaign Case Study</span>
            </div>
            <h2 className="font-serif font-light mb-3" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", lineHeight: 1.08, color: "#FAF8F4" }}>
              LUMIÈRE Beauty<br /><em>Launch Campaign</em>
            </h2>
            <p className="font-sans text-sm leading-relaxed mb-6" style={{ color: "rgba(184,212,236,0.8)", maxWidth: 480 }}>
              A community-first luxury beauty brand launch — strategy, PR, creative direction, and social rollout built from scratch.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Social Media Strategy", "PR Campaign", "Brand Launch", "Creative Direction", "Community Building"].map(tag => (
                <span key={tag} className="font-sans text-[9px] uppercase tracking-widest px-3 py-1.5 rounded-full" style={{ background: "rgba(184,212,236,0.15)", color: "#B8D4EC", border: "1px solid rgba(184,212,236,0.2)" }}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Sections */}
          <div className="divide-y" style={{ borderColor: "rgba(184,212,236,0.15)" }}>
            {caseStudySections.map((section, i) => (
              <motion.div
                key={section.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="px-10 py-8 group"
                style={{ background: i % 2 === 0 ? "#FAF8F4" : "#F5F0E8" }}
              >
                <div className="flex items-start gap-6">
                  <span className="font-serif text-4xl font-light flex-shrink-0 mt-1" style={{ color: "#B8D4EC", lineHeight: 1 }}>{section.number}</span>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl mb-4" style={{ color: "#1C3A5E" }}>{section.title}</h3>
                    <div className="font-sans text-sm leading-relaxed whitespace-pre-line" style={{ color: "#3D3D3D" }}>
                      {section.content}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <div className="px-10 py-8 text-center" style={{ background: "#EAF4FB" }}>
            <p className="font-caveat text-lg mb-2" style={{ color: "#4A7FA5" }}>This is a concept campaign — strategy, copy, and creative direction by Nagelia Henry.</p>
            <p className="font-sans text-[10px] uppercase tracking-[0.25em]" style={{ color: "#7BAFD4" }}>More campaigns coming soon.</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ─── Butterfly SVG ─────────────────────────────────────────── */
function Butterfly({ size = 40, opacity = 0.4, color1 = "#B8D4EC", color2 = "#7BAFD4" }: { size?: number; opacity?: number; color1?: string; color2?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity }} aria-hidden="true">
      <ellipse cx="20" cy="24" rx="17" ry="12" fill={color1} transform="rotate(-22 20 24)" />
      <ellipse cx="44" cy="24" rx="17" ry="12" fill={color2} transform="rotate(22 44 24)" />
      <ellipse cx="18" cy="37" rx="11" ry="8" fill={color2} fillOpacity="0.7" transform="rotate(-15 18 37)" />
      <ellipse cx="46" cy="37" rx="11" ry="8" fill={color1} fillOpacity="0.7" transform="rotate(15 46 37)" />
      <line x1="32" y1="14" x2="32" y2="52" stroke="#1C3A5E" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M29 14 Q32 10 35 14" stroke="#1C3A5E" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/* ─── Lightbox Gallery ──────────────────────────────────────── */
interface GalleryImage { src: string; caption?: string; }

function Lightbox({ images, open, startIndex = 0, onClose, title }: { images: GalleryImage[]; open: boolean; startIndex?: number; onClose: () => void; title?: string }) {
  const [current, setCurrent] = useState(startIndex);

  const prev = () => setCurrent(i => (i - 1 + images.length) % images.length);
  const next = () => setCurrent(i => (i + 1) % images.length);

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center"
        style={{ background: "rgba(28,58,94,0.92)", backdropFilter: "blur(12px)" }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.92, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="relative max-w-4xl w-full mx-6"
          onClick={e => e.stopPropagation()}
        >
          {/* Close */}
          <button onClick={onClose} className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors text-sm font-sans uppercase tracking-widest">
            Close ✕
          </button>

          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden bg-navy" style={{ aspectRatio: "16/10" }}>
            <Image src={images[current].src} alt={images[current].caption || ""} fill className="object-contain" />
          </div>

          {/* Caption */}
          {images[current].caption && (
            <p className="font-caveat text-center text-white/70 mt-4 text-lg">{images[current].caption}</p>
          )}

          {/* Nav */}
          {images.length > 1 && (
            <div className="flex items-center justify-between mt-6">
              <button onClick={prev} className="btn-ghost-light text-sm" style={{ padding: "8px 20px" }}>← Prev</button>
              <span className="font-sans text-xs text-white/50 tracking-widest">{current + 1} / {images.length}</span>
              <button onClick={next} className="btn-ghost-light text-sm" style={{ padding: "8px 20px" }}>Next →</button>
            </div>
          )}

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="flex gap-2 mt-4 justify-center flex-wrap">
              {images.map((img, i) => (
                <button key={i} onClick={() => setCurrent(i)} className="relative w-12 h-12 rounded-lg overflow-hidden transition-all duration-200" style={{ opacity: i === current ? 1 : 0.45, outline: i === current ? "2px solid #B8D4EC" : "none" }}>
                  <Image src={img.src} alt={img.caption || ""} fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ─── Project Card ──────────────────────────────────────────── */
interface Project {
  title: string;
  role: string;
  category: string;
  skills: string[];
  summary: string;
  image: string;
  gallery?: GalleryImage[];
  link?: string;
  accent?: string;
  rotate?: number;
  comingSoon?: boolean;
}

function ProjectCard({ project, onGallery, onCaseStudy }: { project: Project; onGallery?: () => void; onCaseStudy?: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group bg-white rounded-3xl overflow-hidden transition-all duration-500"
      style={{ boxShadow: "0 2px 16px rgba(28,58,94,0.07)" }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/9", background: project.accent || "#EAF4FB" }}>
        <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.6, ease: "easeOut" }} className="w-full h-full">
          <Image src={project.image} alt={project.title} fill className="object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
        </motion.div>

        {/* Category badge */}
        <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full backdrop-blur-md font-sans text-[9px] font-medium uppercase tracking-[0.2em]" style={{ background: "rgba(255,255,255,0.88)", color: "#1C3A5E" }}>
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-7">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-serif text-2xl mb-1" style={{ color: "#1C3A5E" }}>{project.title}</h3>
            <p className="font-sans text-xs uppercase tracking-[0.2em]" style={{ color: "#7BAFD4" }}>{project.role}</p>
          </div>
        </div>

        <p className="font-sans text-sm leading-relaxed mb-5" style={{ color: "#6B6B6B" }}>{project.summary}</p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.skills.map(s => (
            <span key={s} className="font-sans text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full" style={{ background: "#EAF4FB", color: "#4A7FA5" }}>{s}</span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex gap-3 items-center">
          {project.comingSoon && onCaseStudy && (
            <button onClick={onCaseStudy} className="btn-primary text-xs" style={{ padding: "8px 18px" }}>
              View Case Study
            </button>
          )}
          {!project.comingSoon && project.gallery && onGallery && (
            <button onClick={onGallery} className="btn-secondary text-xs" style={{ padding: "8px 18px" }}>
              View Gallery
            </button>
          )}
          {!project.comingSoon && project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs" style={{ padding: "8px 18px" }}>
              View Project ↗
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── DATA ──────────────────────────────────────────────────── */
const projects: Project[] = [
  {
    title: "Mock Campaigns",
    role: "Strategist & Creative Director",
    category: "Campaign Strategy & PR",
    skills: ["Social Media Campaigns", "PR Strategy", "Brand Campaigns", "Creative Direction", "Content Strategy"],
    summary: "A collection of mock social media campaigns, PR activations, and brand marketing concepts — demonstrating strategic thinking, creative execution, and audience-first storytelling across beauty, lifestyle, and culture.",
    image: "/images/projects/lido.jpg",
    accent: "#EAF4FB",
    comingSoon: true,
  },
  {
    title: "University Student Senate",
    role: "Director of Engagement",
    category: "Marketing · Strategy · Community",
    skills: ["Campaign Design", "Communications", "Event Strategy", "Social Media", "Community Engagement"],
    summary: "This wasn't a passive role. I led the communications and marketing function for an entire student government — building campaign strategies, designing engagement initiatives, and turning a bureaucratic institution into something students actually wanted to interact with.",
    image: "/images/senate/jamaica-flag-event.jpg",
    accent: "#C8DCF0",
    gallery: [
      { src: "/images/senate/senate-poster-1.png", caption: "USS Event Poster" },
      { src: "/images/projects/gallery.png", caption: "Campus Campaign Design" },
      { src: "/images/projects/official.png", caption: "Official USS Graphics" },
    ],
  },
  {
    title: "SAGA",
    role: "President, Sexuality & Gender Alliance",
    category: "Community Leadership & Events",
    skills: ["Event Strategy", "Inclusive Programming", "Community Building", "DEI", "Communications"],
    summary: "Led The New School's LGBTQIA+ student organization as President — fostering an inclusive campus community through events, outreach, executive board leadership, and collaborative programming. Championed DEI initiatives and created affirming spaces for queer students and allies.",
    image: "/images/saga/saga-1.jpg",
    accent: "#D6EEE8",
    gallery: [
      { src: "/images/saga/saga-1.jpg", caption: "SAGA Community Event" },
      { src: "/images/saga/saga-2.jpg", caption: "SAGA Programming" },
      { src: "/images/saga/saga-poster.png", caption: "SAGA Event Poster" },
    ],
  },
  {
    title: "New School Free Press",
    role: "Social Media Editor",
    category: "Editorial & Student Media",
    skills: ["Social Media", "Digital Storytelling", "Editorial", "Audience Engagement", "Content Strategy"],
    summary: "Worked with The New School Free Press creating social media content, digital storytelling, audience engagement, and promoting student journalism. Shaped the publication's digital presence and built community around independent student media.",
    image: "/images/projects/free-press.jpg",
    accent: "#FAF8F4",
  },
  {
    title: "Campus Campaign Design",
    role: "Designer & Creative Strategist",
    category: "Design & Visual Campaigns",
    skills: ["Graphic Design", "Campaign Visuals", "Canva", "Brand Identity", "Event Promotion"],
    summary: "Designed promotional graphics, campaign visuals, event posters, and marketing materials for student organizations at The New School — including Senate mixers, Jamaica Flag Day events, and community programming.",
    image: "/images/projects/gallery.png",
    accent: "#EAF4FB",
    gallery: [
      { src: "/images/projects/gallery.png", caption: "Campus Campaign — Gallery View" },
      { src: "/images/projects/official.png", caption: "Official Graphics" },
      { src: "/images/senate/senate-poster-1.png", caption: "USS Mixer Poster" },
    ],
  },
  {
    title: "Content Creation",
    role: "Creator — TikTok & Instagram",
    category: "Creator & Social Media",
    skills: ["TikTok", "Instagram", "Personal Branding", "Audience Growth", "Video Content"],
    summary: "Built an authentic personal brand across TikTok (@bynagelia, 2.2K followers, 16.4K likes) and Instagram (@____nageliahenry, 2.1K followers) — creating content around beauty, lifestyle, wellness, college, and storytelling.",
    image: "/images/social/social-1.jpg",
    accent: "#D6EEE8",
    link: "https://www.tiktok.com/@bynagelia",
  },
];

export default function WorkPage() {
  const [lightbox, setLightbox] = useState<{ images: GalleryImage[]; index: number; title?: string } | null>(null);
  const [caseStudyOpen, setCaseStudyOpen] = useState(false);

  const openGallery = (images: GalleryImage[], title?: string, index = 0) => {
    setLightbox({ images, index, title });
  };

  return (
    <main className="min-h-screen overflow-x-hidden" style={{ background: "#FAF8F4" }}>

      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, #EAF4FB 0%, #D6EEE8 40%, #FAF8F4 100%)" }} />
        <div className="absolute top-16 right-16 pointer-events-none">
          <motion.div animate={{ y:[-8,10,-8], rotate:[0,6,0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}>
            <Butterfly size={52} opacity={0.35} />
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-10 pointer-events-none">
          <motion.div animate={{ y:[0,-12,0], rotate:[0,-4,0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}>
            <Butterfly size={34} opacity={0.22} color1="#D6EEE8" color2="#7BAFD4" />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <motion.div initial={{ opacity:0, x:-20 }} animate={{ opacity:1, x:0 }} transition={{ duration: 0.7 }} className="flex items-center gap-3 mb-8">
            <div className="w-8 h-[1px]" style={{ background: "#7BAFD4" }} />
            <span className="font-sans text-[10px] font-medium uppercase tracking-[0.3em]" style={{ color: "#4A7FA5" }}>Selected Work</span>
          </motion.div>

          <motion.h1 initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ duration: 0.9, delay: 0.1 }} className="font-serif font-light mb-6" style={{ fontSize: "clamp(3rem, 7vw, 6rem)", lineHeight: 1.04, letterSpacing: "-0.025em", color: "#1C3A5E" }}>
            Work &<br /><em>Projects.</em>
          </motion.h1>

          <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration: 0.8, delay: 0.3 }} className="font-sans text-base max-w-xl leading-relaxed" style={{ color: "#6B6B6B" }}>
            Strategy, storytelling, and experiences across brand, community, editorial, and digital.
          </motion.p>
        </div>
      </section>

      {/* ─── PROJECTS GRID ──────────────────────────────────────── */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                onGallery={project.gallery ? () => openGallery(project.gallery!, project.title) : undefined}
                onCaseStudy={project.comingSoon ? () => setCaseStudyOpen(true) : undefined}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── USS SPOTLIGHT ─────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden" style={{ background: "linear-gradient(160deg, #EAF4FB 0%, #D6EEE8 100%)" }}>
        <div className="absolute top-0 left-0 right-0 h-12 torn-top" style={{ background: "#FAF8F4" }} />

        <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration: 0.8 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-[1px]" style={{ background: "#7BAFD4" }} />
                <span className="font-sans text-[10px] font-medium uppercase tracking-[0.3em]" style={{ color: "#4A7FA5" }}>Spotlight</span>
              </div>
              <h2 className="font-serif mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: 1.1, color: "#1C3A5E" }}>
                University Student Senate
              </h2>
              <p className="font-sans text-sm mb-6 leading-relaxed" style={{ color: "#6B6B6B" }}>
                As Director of Engagement, I was responsible for the student body&apos;s connection to its institution. That meant more than sending emails — it meant building a real presence.
              </p>

              <div className="space-y-4">
                {[
                  "Directed student engagement strategy across The New School campus",
                  "Planned and executed campus-wide community events and programming",
                  "Managed all student body communications and digital outreach",
                  "Created marketing materials including promotional graphics and campaign assets",
                  "Designed event posters, social media content, and senate identity materials",
                  "Increased student engagement through strategic communications campaigns",
                  "Collaborated directly with student leadership and faculty advisors",
                  "Represented the student voice in institutional planning and initiatives",
                ].map((item, i) => (
                  <motion.div key={i} initial={{ opacity:0, x:-16 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration: 0.5, delay: i * 0.07 }} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: "#7BAFD4" }} />
                    <p className="font-sans text-sm leading-relaxed" style={{ color: "#3D3D3D" }}>{item}</p>
                  </motion.div>
                ))}
              </div>

              <button
                onClick={() => openGallery([
                  { src: "/images/senate/senate-poster-1.png", caption: "USS Mixer Poster" },
                  { src: "/images/projects/gallery.png", caption: "Campus Campaign Gallery" },
                  { src: "/images/projects/official.png", caption: "Official Senate Graphics" },
                ], "University Student Senate Gallery")}
                className="btn-secondary mt-8"
              >
                View Senate Gallery
              </button>
            </motion.div>

            {/* Gallery grid */}
            <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration: 0.8, delay: 0.2 }} className="grid grid-cols-2 gap-4">
              {[
                { src: "/images/senate/jamaica-flag-event.jpg", caption: "Jamaica Flag Day Event", rotate: "-1.5deg" },
                { src: "/images/senate/senate-poster-1.png", caption: "USS Mixer Poster", rotate: "2deg" },
                { src: "/images/projects/gallery.png", caption: "Campaign Design", rotate: "-2.5deg" },
                { src: "/images/projects/official.png", caption: "Official Graphics", rotate: "1deg" },
              ].map((img, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -6, rotate: 0 }}
                  style={{ transform: `rotate(${img.rotate})` }}
                  onClick={() => openGallery([
                    { src: "/images/senate/senate-poster-1.png", caption: "USS Mixer Poster" },
                    { src: "/images/projects/gallery.png", caption: "Campus Campaign" },
                    { src: "/images/projects/official.png", caption: "Official Graphics" },
                  ], "USS Gallery", i)}
                  className="polaroid transition-all duration-400 cursor-pointer"
                >
                  <div className="relative rounded-sm overflow-hidden" style={{ aspectRatio: "1", background: "#C8DCF0" }}>
                    <Image src={img.src} alt={img.caption} fill className="object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                  </div>
                  <p className="font-caveat text-center text-navy mt-2 text-sm">{img.caption}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CTA ────────────────────────────────────────────────── */}
      <section className="py-24 text-center" style={{ background: "#FAF8F4" }}>
        <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration: 0.8 }} className="max-w-xl mx-auto px-6">
          <div className="flex justify-center mb-6"><Butterfly size={36} opacity={0.38} /></div>
          <h2 className="font-serif mb-4" style={{ fontSize: "2.2rem", color: "#1C3A5E" }}>Let&apos;s create something together.</h2>
          <p className="font-sans text-sm leading-relaxed mb-8" style={{ color: "#6B6B6B" }}>Available for internships, collaborations, and brand partnerships.</p>
          <Link href="/contact" className="btn-primary">Get in Touch</Link>
        </motion.div>
      </section>

      {/* ─── LIGHTBOX ──────────────────────────────────────────── */}
      {lightbox && (
        <Lightbox
          images={lightbox.images}
          open={true}
          startIndex={lightbox.index}
          onClose={() => setLightbox(null)}
          title={lightbox.title}
        />
      )}

      {/* ─── CASE STUDY MODAL ──────────────────────────────────── */}
      {caseStudyOpen && <CaseStudyModal onClose={() => setCaseStudyOpen(false)} />}
    </main>
  );
}
