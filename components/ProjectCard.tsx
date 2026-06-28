"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "./Icons";

export interface Project {
  id: string;
  title: string;
  role: string;
  category: string;
  skills: string[];
  summary: string;
  image: string;
  color?: string;
  caseStudyHref?: string;
}

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="card group cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-powder-blue-light">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Category pill */}
        <div className="absolute top-4 left-4">
          <span className="bg-cream/95 backdrop-blur-sm text-navy text-xs tracking-widest uppercase px-3 py-1.5 rounded-full font-sans font-medium">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-7">
        <p className="section-label mb-2">{project.role}</p>
        <h3 className="font-serif text-2xl text-navy mb-3 leading-tight">{project.title}</h3>
        <p className="font-sans text-sm text-charcoal-light leading-relaxed mb-5">
          {project.summary}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.skills.map((skill) => (
            <span
              key={skill}
              className="text-xs font-sans text-navy/70 bg-powder-blue-light px-3 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* CTA */}
        {project.caseStudyHref ? (
          <Link
            href={project.caseStudyHref}
            className="inline-flex items-center gap-2 text-sm font-sans font-medium text-navy hover:text-powder-blue-mid transition-colors group/link"
          >
            View Case Study
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </Link>
        ) : (
          <span className="inline-flex items-center gap-2 text-sm font-sans font-medium text-navy/40">
            Case Study Coming Soon
          </span>
        )}
      </div>
    </motion.div>
  );
}
