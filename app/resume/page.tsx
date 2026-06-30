import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export default function ResumePage() {
  return (
    <div className="bg-ivory">
      <section className="pt-44 pb-16 paper-ivory relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-powder-blue-light/40 rounded-full blur-3xl translate-x-1/2 pointer-events-none" />
        <div className="section-container">
          <AnimatedSection>
            <p className="label mb-6">Resume</p>
            <div className="flex items-end justify-between flex-wrap gap-6">
              <h1 className="font-serif text-display-md text-navy">Nagelia Henry</h1>
              <a href="/Nagelia-Henry-Resume.pdf" download className="btn-primary">
                Download PDF
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"/></svg>
              </a>
            </div>
            <div className="flex flex-wrap gap-4 mt-4 font-sans text-sm text-charcoal-light">
              <a href="mailto:nageliadhenry@gmail.com" className="hover:text-navy transition-colors">nageliadhenry@gmail.com</a>
              <span className="text-cream-dark">·</span>
              <a href="https://www.linkedin.com/in/nagelia-henry-7a2946234" target="_blank" rel="noopener noreferrer" className="hover:text-navy transition-colors">LinkedIn</a>
              <span className="text-cream-dark">·</span>
              <a href="https://www.tiktok.com/@bynagelia" target="_blank" rel="noopener noreferrer" className="hover:text-navy transition-colors">@bynagelia</a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-container pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Sidebar */}
          <div className="space-y-8">
            <AnimatedSection>
              <div className="rounded-3xl p-8" style={{ background: "#EAF4FB" }}>
                <p className="label mb-7">Education</p>
                <div className="space-y-7">
                  <div>
                    <p className="font-serif text-lg" style={{ color: "#1C3A5E" }}>Arizona State University</p>
                    <p className="font-sans text-xs mt-1 leading-relaxed" style={{ color: "#4A7FA5" }}>B.S. Digital Strategy & Audience Engagement<br />Walter Cronkite School</p>
                    <p className="font-sans text-xs mt-2" style={{ color: "#8A8A8A" }}>Expected 2027</p>
                  </div>
                  <div className="pt-7" style={{ borderTop: "1px solid rgba(184,212,236,0.4)" }}>
                    <p className="font-serif text-lg" style={{ color: "#1C3A5E" }}>The New School</p>
                    <p className="font-sans text-xs mt-1" style={{ color: "#4A7FA5" }}>New York City</p>
                    <p className="font-sans text-xs mt-2" style={{ color: "#8A8A8A" }}>2023 – 2025</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.05}>
              <div className="bg-white rounded-3xl p-8 shadow-card">
                <p className="label mb-7">Skills</p>
                <div className="space-y-2">
                  {["Digital Strategy","Social Media Marketing","Content Creation","Brand Storytelling","Audience Engagement","Editorial Writing","Community Management","Campaign Planning","PR & Communications","Influencer Marketing","Graphic Design","Canva / Adobe Suite","TikTok & Instagram"].map(s => (
                    <div key={s} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#C9A96E" }} />
                      <span className="font-sans text-sm text-charcoal">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.08}>
              <div className="rounded-3xl p-8 overflow-hidden" style={{ background: "#FAF8F4", border: "1px solid rgba(255,122,89,0.18)" }}>
                <p className="label mb-7">Certifications</p>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(255,122,89,0.1)" }}>
                    <span className="text-base">🎓</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-sans text-[9px] font-bold uppercase tracking-[0.28em] mb-1" style={{ color: "#FF7A59" }}>HubSpot Academy</p>
                    <p className="font-serif text-base leading-snug" style={{ color: "#1C3A5E" }}>Digital Marketing Certification</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {["SEO", "Content Strategy", "Social Media", "Email Marketing", "Campaign Analytics"].map(s => (
                        <span key={s} className="font-sans text-[9px] font-medium px-2.5 py-1 rounded-full" style={{ background: "rgba(255,122,89,0.09)", color: "#FF7A59" }}>{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-cream-dark rounded-3xl p-8">
                <p className="label mb-7">Awards</p>
                <div className="space-y-6">
                  <div className="flex gap-3">
                    <span className="text-lg flex-shrink-0" style={{ color: "#C9A96E" }}>✦</span>
                    <div>
                      <p className="font-serif text-base" style={{ color: "#1C3A5E" }}>Student Social Justice Campus Champion Award</p>
                      <p className="font-sans text-xs mt-1.5" style={{ color: "#6B6B6B" }}>The New School · April 2026</p>
                    </div>
                  </div>
                  <div className="flex gap-3 pt-6" style={{ borderTop: "1px solid rgba(201,169,110,0.2)" }}>
                    <span className="text-lg flex-shrink-0" style={{ color: "#C9A96E" }}>✦</span>
                    <div>
                      <p className="font-serif text-base" style={{ color: "#1C3A5E" }}>University Student Senate Certificate of Completion</p>
                      <p className="font-sans text-xs mt-1.5" style={{ color: "#6B6B6B" }}>The New School · April 2026</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Main */}
          <div className="lg:col-span-2 space-y-8">
            <AnimatedSection>
              <div className="bg-white rounded-3xl p-8 shadow-card">
                <p className="label mb-6">Summary</p>
                <p className="font-sans text-base text-charcoal leading-relaxed">
                  Digital Strategy & Audience Engagement student with hands-on experience in social media marketing, content creation, editorial writing, brand storytelling, and student leadership. Passionate about building digital experiences across beauty, fashion, luxury hospitality, sports marketing, and PR.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.05}>
              <div className="bg-white rounded-3xl p-8 shadow-card">
                <p className="label mb-8">Experience</p>
                <div className="space-y-10">
                  {[
                    { title:"Social Media Editor", org:"New School Free Press", period:"2024–2025", bullets:["Led digital storytelling and social media strategy for independent student publication.","Created platform-native content translating complex journalism into engaging, accessible formats for Gen Z audiences.","Grew digital presence through intentional content planning and audience engagement."] },
                    { title:"Social Media Marketing Intern", org:"Beauty Roma", period:"2024", bullets:["Developed and executed social media content strategies across platforms to drive brand visibility.","Created platform-native content aligned with brand identity — photography direction, captions, story sequences.","Monitored analytics and translated insights into content optimizations."] },
                    { title:"Director of Engagement", org:"University Student Senate, The New School", period:"2024–2025", bullets:["Led student engagement strategy, campus communications, event promotion, and digital outreach.","Developed branding and social media messaging for campus-wide initiatives.","Designed campaign materials for student government programming."] },
                    { title:"President", org:"SAGA (Sexuality & Gender Alliance), The New School", period:"May 2025 – May 2026", bullets:["Led LGBTQIA+ student organization — executive board, event strategy, budgeting, campus partnerships.","Collaborated with faculty to advance diversity, equity, and inclusion programming.","Created inclusive events, marketing campaigns, and community-building experiences."] },
                    { title:"Orientation Leader", org:"The New School", period:"May 2025 – May 2026", bullets:["Supported incoming student transitions through orientation programming and peer mentorship.","Guided hundreds of students through campus community onboarding."] },
                  ].map((exp, i) => (
                    <div key={exp.title} className={i > 0 ? "border-t border-cream-dark pt-10" : ""}>
                      <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                        <div>
                          <p className="font-serif text-xl text-navy">{exp.title}</p>
                          <p className="font-sans text-sm text-slate-blue font-medium mt-0.5">{exp.org}</p>
                        </div>
                        <span className="font-sans text-xs text-charcoal-light/60 bg-ivory px-3 py-1 rounded-full">{exp.period}</span>
                      </div>
                      <ul className="space-y-2">
                        {exp.bullets.map((b, j) => (
                          <li key={j} className="flex gap-3">
                            <span className="mt-1.5 text-xs shrink-0" style={{ color: "#C9A96E" }}>◈</span>
                            <p className="font-sans text-sm text-charcoal leading-relaxed">{b}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        <AnimatedSection delay={0.1} className="mt-12">
          <div className="rounded-4xl p-10 flex flex-col sm:flex-row items-center justify-between gap-6" style={{ background: "linear-gradient(135deg, #EAF4FB 0%, #D6EEE8 100%)", border: "1px solid rgba(184,212,236,0.4)" }}>
            <div>
              <p className="font-serif text-2xl mb-2" style={{ color: "#1C3A5E" }}>Ready to connect?</p>
              <p className="font-sans text-sm" style={{ color: "#6B6B6B" }}>Download my resume or reach out directly.</p>
            </div>
            <div className="flex gap-4 flex-wrap">
              <a href="/Nagelia-Henry-Resume.pdf" download className="btn-secondary">Download PDF</a>
              <Link href="/contact" className="btn-primary">Contact Me</Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
