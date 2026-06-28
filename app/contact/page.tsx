"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const socials = [
  { label: "Email", value: "nageliadhenry@gmail.com", href: "mailto:nageliadhenry@gmail.com", sub: "Best for professional inquiries" },
  { label: "Instagram", value: "@____nageliahenry", href: "https://www.instagram.com/____nageliahenry/", sub: "Content · Lifestyle · Beauty" },
  { label: "TikTok", value: "@bynagelia", href: "https://www.tiktok.com/@bynagelia", sub: "2,218 followers · 16.4K likes" },
  { label: "LinkedIn", value: "Nagelia Henry", href: "https://www.linkedin.com/in/nagelia-henry-7a2946234", sub: "Professional network" },
  { label: "Substack", value: "nagelia.substack.com", href: "https://nagelia.substack.com/", sub: "Essays & editorial writing" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name:"", email:"", type:"", subject:"", message:"" });
  const [sent, setSent] = useState(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setForm({...form, [e.target.name]: e.target.value});
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:nageliadhenry@gmail.com?subject=${encodeURIComponent(form.subject||"Website Inquiry")}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nType: ${form.type}\n\n${form.message}`)}`;
    setSent(true);
  };

  return (
    <div className="bg-ivory overflow-hidden">
      <section className="pt-44 pb-16 paper-ivory relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-powder-blue-light/40 rounded-full blur-3xl -translate-x-1/3 pointer-events-none" />
        <div className="section-container text-center">
          <AnimatedSection>
            <p className="label mb-6">Contact</p>
            <h1 className="font-serif text-display-lg text-navy mb-6 leading-tight">
              Let&apos;s build something<br /><em className="text-slate-blue">memorable.</em>
            </h1>
            <p className="font-sans text-lg text-charcoal-light max-w-xl mx-auto leading-relaxed">
              Whether you&apos;re a brand, agency, creative team, or fellow strategist — let&apos;s talk about making something worth remembering.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-32">
        <div className="section-container grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-4">
            <AnimatedSection>
              <p className="label mb-8">Reach Me</p>
              {socials.map((s, i) => (
                <motion.a key={s.label} href={s.href}
                  target={s.label !== "Email" ? "_blank" : undefined} rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 mb-3 group">
                  <div className="w-10 h-10 bg-powder-blue-light rounded-xl flex items-center justify-center text-navy shrink-0 group-hover:bg-navy group-hover:text-ivory transition-colors duration-300 font-sans text-xs font-medium tracking-wide">
                    {s.label.slice(0,2).toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <p className="font-sans text-[10px] text-charcoal-light tracking-widest uppercase mb-0.5">{s.label}</p>
                    <p className="font-serif text-base text-navy truncate">{s.value}</p>
                    <p className="font-sans text-xs text-charcoal-light/50 mt-0.5">{s.sub}</p>
                  </div>
                </motion.a>
              ))}
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="bg-navy rounded-3xl p-7 mt-6">
                <p className="label-light mb-5">Open to</p>
                <div className="flex flex-wrap gap-2">
                  {["Brand Partnerships","Internships","Social Media Strategy","Freelance Content","PR & Comms","Creative Direction","Influencer Campaigns"].map(t => (
                    <span key={t} className="font-sans text-xs text-ivory/70 bg-ivory/8 border border-ivory/15 px-3 py-1.5 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.1} direction="right" className="lg:col-span-3">
            <div className="bg-white rounded-4xl shadow-card p-8 lg:p-12">
              {sent ? (
                <div className="text-center py-16">
                  <p className="font-serif text-4xl text-navy mb-4">Thank you.</p>
                  <p className="font-sans text-charcoal-light mb-8">Your message is on its way. I&apos;ll be in touch soon.</p>
                  <button onClick={() => setSent(false)} className="btn-secondary">Send Another</button>
                </div>
              ) : (
                <>
                  <h2 className="font-serif text-2xl text-navy mb-8">Send a message</h2>
                  <form onSubmit={onSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {[["name","Name","Your name"],["email","Email","your@email.com"]].map(([n,l,p]) => (
                        <div key={n}>
                          <label className="block font-sans text-[10px] tracking-widest uppercase text-charcoal-light mb-2">{l}</label>
                          <input name={n} type={n==="email"?"email":"text"} required value={form[n as keyof typeof form]}
                            onChange={onChange} placeholder={p}
                            className="w-full bg-ivory rounded-xl px-5 py-3.5 font-sans text-sm text-charcoal border border-cream-dark focus:border-navy focus:outline-none transition-colors placeholder:text-muted" />
                        </div>
                      ))}
                    </div>
                    <div>
                      <label className="block font-sans text-[10px] tracking-widest uppercase text-charcoal-light mb-2">Inquiry Type</label>
                      <select name="type" value={form.type} onChange={onChange}
                        className="w-full bg-ivory rounded-xl px-5 py-3.5 font-sans text-sm text-charcoal border border-cream-dark focus:border-navy focus:outline-none transition-colors appearance-none">
                        <option value="">Select</option>
                        {["Brand Partnership","Internship","Freelance Project","Creative Collaboration","PR & Media","General"].map(o => <option key={o}>{o}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block font-sans text-[10px] tracking-widest uppercase text-charcoal-light mb-2">Subject</label>
                      <input name="subject" type="text" value={form.subject} onChange={onChange} placeholder="What's this about?"
                        className="w-full bg-ivory rounded-xl px-5 py-3.5 font-sans text-sm text-charcoal border border-cream-dark focus:border-navy focus:outline-none transition-colors placeholder:text-muted" />
                    </div>
                    <div>
                      <label className="block font-sans text-[10px] tracking-widest uppercase text-charcoal-light mb-2">Message</label>
                      <textarea name="message" rows={6} required value={form.message} onChange={onChange}
                        placeholder="Tell me about your project, opportunity, or idea..."
                        className="w-full bg-ivory rounded-xl px-5 py-3.5 font-sans text-sm text-charcoal border border-cream-dark focus:border-navy focus:outline-none transition-colors resize-none placeholder:text-muted" />
                    </div>
                    <button type="submit" className="btn-primary w-full justify-center">
                      Send Message
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </button>
                  </form>
                </>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
