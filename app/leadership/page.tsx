"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import Gallery, { GalleryImage } from "@/components/Gallery";

const orientationImages: GalleryImage[] = [
  { src: "/images/orientation/orient-1.jpg", alt: "Orientation — welcoming new students", caption: "Welcoming the Class of 2025" },
  { src: "/images/orientation/orient-2.jpg", alt: "Orientation activities", caption: "Campus engagement sessions" },
  { src: "/images/orientation/orient-3.jpg", alt: "Orientation programming", caption: "Building community from day one" },
  { src: "/images/orientation/orient-4.jpg", alt: "Orientation events", caption: "Peer mentorship in action" },
];

const sagaImages: GalleryImage[] = [
  { src: "/images/saga/saga-1.jpg", alt: "SAGA event", caption: "SAGA community event" },
  { src: "/images/saga/saga-2.jpg", alt: "SAGA programming", caption: "Inclusive campus programming" },
  { src: "/images/saga/saga-poster.png", alt: "SAGA board spring 2026", caption: "SAGA Board — Spring 2026" },
];

const senateImages: GalleryImage[] = [
  { src: "/images/senate/senate-poster-1.png", alt: "Senate campaign poster", caption: "Campus campaign design" },
  { src: "/images/projects/official.png", alt: "University Student Senate", caption: "University Student Senate" },
  { src: "/images/senate/senate-2.png", alt: "Senate event", caption: "Engagement campaign" },
];

type GalleryKey = "orientation" | "saga" | "senate" | null;

export default function LeadershipPage() {
  const [openGallery, setOpenGallery] = useState<GalleryKey>(null);
  const [galleryStart, setGalleryStart] = useState(0);

  const openWith = (key: GalleryKey, idx = 0) => { setOpenGallery(key); setGalleryStart(idx); };

  const galleryImages: Record<string, GalleryImage[]> = {
    orientation: orientationImages, saga: sagaImages, senate: senateImages,
  };
  const galleryTitles: Record<string, string> = {
    orientation: "Orientation Leader — The New School",
    saga: "SAGA President — The New School",
    senate: "Director of Engagement — University Student Senate",
  };

  return (
    <div className="bg-ivory overflow-hidden">
      {/* Galleries */}
      {openGallery && (
        <Gallery
          images={galleryImages[openGallery]}
          isOpen={!!openGallery}
          startIndex={galleryStart}
          onClose={() => setOpenGallery(null)}
          title={galleryTitles[openGallery]}
        />
      )}

      {/* ── HEADER ── */}
      <section className="pt-44 pb-24 paper-ivory relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-powder-blue-light/40 rounded-full blur-3xl -translate-x-1/3 pointer-events-none" />
        <div className="section-container">
          <AnimatedSection>
            <p className="label mb-6">Leadership</p>
            <h1 className="font-serif text-display-lg text-navy mb-8 max-w-3xl leading-tight">
              Every room I entered,<br />
              I built something<br />
              <em className="text-slate-blue">worth staying for.</em>
            </h1>
            <p className="font-sans text-lg text-charcoal-light max-w-2xl leading-relaxed">
              Leadership, to me, isn&apos;t about titles — it&apos;s about what you create for the people around you. These are the roles where I showed up, built something real, and left communities stronger than I found them.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ 1. ORIENTATION LEADER ════════════════ */}
      <section className="py-24 bg-ivory">
        <div className="section-container">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-px" style={{ background: "#C9A96E" }} />
                  <p className="label">The New School · May 2025 – May 2026</p>
                </div>
                <h2 className="font-serif text-display-sm text-navy mb-6 leading-tight">Orientation Leader</h2>
                <p className="font-sans text-base text-charcoal leading-[1.85] mb-8">
                  Supported incoming students throughout their most overwhelming and exciting week — their transition into university life. Through mentorship, campus programming, and genuine human connection, I helped hundreds of students feel like they belonged before they knew anyone&apos;s name.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {["Welcoming new students","Peer mentorship","Campus engagement","Student support","Building belonging","Representing The New School"].map(r => (
                    <div key={r} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-denim-blue shrink-0" />
                      <span className="font-sans text-sm text-charcoal">{r}</span>
                    </div>
                  ))}
                </div>
                <button onClick={() => openWith("orientation", 0)}
                  className="btn-primary">
                  View Gallery
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><circle cx="12" cy="13" r="3"/></svg>
                </button>
              </div>

              {/* Photo mosaic */}
              <div className="grid grid-cols-2 gap-3">
                {orientationImages.map((img, i) => (
                  <motion.button key={i} onClick={() => openWith("orientation", i)}
                    whileHover={{ scale: 1.03 }} className={`relative overflow-hidden rounded-2xl shadow-card cursor-pointer ${i === 0 ? "col-span-2 h-52" : "h-36"}`}>
                    <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="30vw" />
                    <div className="absolute inset-0 bg-navy/0 hover:bg-navy/20 transition-colors duration-300" />
                  </motion.button>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ 2. SAGA PRESIDENT ════════════════════ */}
      <section className="py-24 denim-dark relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-25">
          <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-powder-blue blur-3xl" />
        </div>
        <div className="relative section-container">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Photo grid first on desktop */}
              <div className="grid grid-cols-2 gap-3 order-2 lg:order-1">
                {sagaImages.map((img, i) => (
                  <motion.button key={i} onClick={() => openWith("saga", i)}
                    whileHover={{ scale: 1.03 }}
                    className={`relative overflow-hidden rounded-2xl shadow-card cursor-pointer ${i === 0 ? "col-span-2 h-56" : "h-40"}`}>
                    <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="30vw" />
                    <div className="absolute inset-0 bg-navy/0 hover:bg-powder-blue/20 transition-colors duration-300" />
                  </motion.button>
                ))}
              </div>

              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-px" style={{ background: "rgba(245,217,138,0.6)" }} />
                  <p className="label-light">The New School · 2025 – 2026</p>
                </div>
                <h2 className="font-serif text-display-sm text-white mb-6 leading-tight">
                  SAGA President
                  <span className="block text-xl text-powder-blue font-sans font-light tracking-wide mt-1">Sexuality & Gender Alliance</span>
                </h2>
                <p className="font-sans text-white/65 text-base leading-[1.85] mb-8">
                  Led one of The New School&apos;s most visible LGBTQIA+ organizations — creating a space that wasn&apos;t just inclusive in name, but affirming in practice. From event planning and executive operations to branding and campus advocacy, I built a community that showed up for itself.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {["Executive leadership","Event planning","Community organizing","Marketing & branding","DEI programming","Student engagement"].map(r => (
                    <div key={r} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-powder-blue shrink-0" />
                      <span className="font-sans text-sm text-white/70">{r}</span>
                    </div>
                  ))}
                </div>
                <button onClick={() => openWith("saga", 0)} className="btn-ghost-light">
                  View Gallery
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><circle cx="12" cy="13" r="3"/></svg>
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ 3. UNIVERSITY STUDENT SENATE ════════ */}
      <section className="py-24 paper-cream">
        <div className="section-container">
          <AnimatedSection>
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px" style={{ background: "#C9A96E" }} />
                <p className="label">University Student Senate · 2024 – 2025</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-10">
                <div>
                  <h2 className="font-serif text-display-sm text-navy leading-tight">
                    Director of Engagement
                    <span className="block text-xl font-sans font-light text-slate-blue tracking-wide mt-2">Marketing · Strategy · Community</span>
                  </h2>
                </div>
                <div>
                  <p className="font-sans text-base text-charcoal leading-[1.85]">
                    This wasn&apos;t a passive role. I led the communications and marketing function for an entire student government — building campaign strategies, designing engagement initiatives, and turning a bureaucratic institution into something students actually wanted to interact with.
                  </p>
                </div>
              </div>
            </div>

            {/* Campaign gallery grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
              {senateImages.map((img, i) => (
                <motion.button key={i} onClick={() => openWith("senate", i)}
                  whileHover={{ scale: 1.02, y: -4 }} transition={{ duration: 0.3 }}
                  className={`relative overflow-hidden rounded-2xl shadow-card cursor-pointer bg-powder-blue-light ${i === 0 ? "col-span-2 h-60" : "h-48"}`}>
                  <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="40vw" />
                  <div className="absolute inset-0 bg-navy/0 hover:bg-navy/20 transition-colors duration-300" />
                  {i === 0 && (
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-white/90 text-navy text-xs tracking-widest uppercase px-3 py-1.5 rounded-full font-sans font-medium">Campaign Work</span>
                    </div>
                  )}
                </motion.button>
              ))}
            </div>

            {/* Responsibilities case study */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {[
                { label: "Communications", items: ["Student communications","Digital strategy","Social media","Brand voice"] },
                { label: "Marketing & Events", items: ["Event promotion","Campus campaigns","Creative direction","Photography"] },
                { label: "Community", items: ["Audience engagement","Community outreach","Branding","Partnership building"] },
              ].map(col => (
                <div key={col.label} className="bg-white rounded-3xl p-7 shadow-card">
                  <p className="label mb-5">{col.label}</p>
                  <ul className="space-y-2">
                    {col.items.map(item => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-denim-blue shrink-0" />
                        <span className="font-sans text-sm text-charcoal">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <button onClick={() => openWith("senate", 0)} className="btn-secondary mr-4">View Campaign Gallery</button>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ AWARDS ══════════════════════════════ */}
      <section className="py-24" style={{ background: "linear-gradient(160deg, #EAF4FB 0%, #D6EEE8 100%)" }}>
        <div className="section-container">
          <AnimatedSection className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[1px]" style={{ background: "#C9A96E" }} />
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.3em]" style={{ color: "#C9A96E" }}>Recognition</p>
            </div>
            <h2 className="font-serif" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#1C3A5E" }}>Awards &amp; Certifications</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "✦", title: "Student Social Justice Campus Champion Award", org: "The New School — Student Leadership and Transition Experiences", date: "April 2026" },
              { icon: "✦", title: "University Student Senate Certificate of Completion", org: "The New School", date: "April 2026" },
            ].map((a, i) => (
              <AnimatedSection key={a.title} delay={i * 0.1}>
                <div className="bg-white rounded-3xl p-8 h-full transition-all duration-300 hover:-translate-y-1" style={{ boxShadow: "0 2px 16px rgba(28,58,94,0.08)" }}>
                  <span className="text-2xl mb-6 block" style={{ color: "#C9A96E" }}>{a.icon}</span>
                  <h3 className="font-serif text-xl mb-3 leading-tight" style={{ color: "#1C3A5E" }}>{a.title}</h3>
                  <p className="font-sans text-sm mb-2" style={{ color: "#6B6B6B" }}>{a.org}</p>
                  <p className="font-sans text-xs tracking-widest uppercase" style={{ color: "#7BAFD4" }}>{a.date}</p>
                </div>
              </AnimatedSection>
            ))}
            {/* HubSpot Certification */}
            <AnimatedSection delay={0.2}>
              <div className="rounded-3xl p-8 h-full transition-all duration-300 hover:-translate-y-1 overflow-hidden" style={{ background: "#FFFAF8", border: "1px solid rgba(255,122,89,0.2)", boxShadow: "0 2px 16px rgba(255,122,89,0.07)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-6" style={{ background: "rgba(255,122,89,0.1)" }}>
                  <span className="text-lg">🎓</span>
                </div>
                <p className="font-sans text-[9px] font-bold uppercase tracking-[0.28em] mb-2" style={{ color: "#FF7A59" }}>HubSpot Academy</p>
                <h3 className="font-serif text-xl mb-3 leading-tight" style={{ color: "#1C3A5E" }}>Digital Marketing Certification</h3>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {["SEO", "Content Strategy", "Social Media", "Email Marketing", "Campaign Analytics"].map(s => (
                    <span key={s} className="font-sans text-[9px] font-medium px-2.5 py-1 rounded-full" style={{ background: "rgba(255,122,89,0.09)", color: "#FF7A59" }}>{s}</span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
