import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { PROJECTS_DATA } from '../data/portfolioData';
import ProceduralOrb from './ProceduralOrb';
import Hl from './Hl';
import RichText from './RichText';
import TiltCard from './TiltCard';
import MagneticButton from './MagneticButton';

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e) => setReducedMotion(e.matches);
    if (media.addEventListener) {
      media.addEventListener('change', handler);
      return () => media.removeEventListener('change', handler);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Parallax scroll on glowing orb inside card
  const orbY = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [-22, 22]);

  const isHeroCard = index === 0;
  const hasButtons = Boolean(project.githubUrl || project.liveUrl);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className={`h-full ${isHeroCard ? 'md:col-span-2' : ''}`}
    >
      <TiltCard className="dark-card group overflow-visible p-5 sm:p-8 h-full transition-all duration-300">
        <div className={`flex flex-col h-full justify-between ${isHeroCard ? 'md:flex-row md:gap-8' : ''}`}>
          {/* Visual Header with Procedural 3D Orb and Parallax */}
          <div
            className={`relative rounded-2xl bg-black/60 border border-white/[0.06] overflow-hidden flex items-center justify-center group-hover:border-[#00A3FF]/40 transition-all duration-300 ${
              isHeroCard
                ? 'w-full md:w-5/12 h-52 md:h-auto min-h-[220px] mb-6 md:mb-0 shrink-0'
                : 'w-full h-44 sm:h-48 mb-6'
            }`}
          >
            {/* Subtle background grid inside card visual */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30" />
            
            {/* Procedural 3D Orb with scroll parallax and card hover glow */}
            <motion.div
              style={{ y: orbY }}
              className="relative z-10 transform group-hover:scale-105 transition-transform duration-500 ease-out"
            >
              <ProceduralOrb variant={project.orbVariant} className={isHeroCard ? 'w-44 h-44' : 'w-40 h-40'} />
            </motion.div>

            {/* Index counter badge */}
            <div className="absolute top-3 left-4 font-mono text-[11px] text-silver-500 tracking-wider z-20">
              PROJ_0<Hl type="number">{index + 1}</Hl>
            </div>

            {/* Period and Ongoing Badge (top-right of visual) */}
            <div className="absolute top-3 right-4 flex items-center gap-2 z-20">
              {project.status === 'ongoing' && (
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#00A3FF]/15 border border-[#00A3FF]/40 text-[10px] font-mono text-[#38bdf8]">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00A3FF] opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00A3FF]" />
                  </span>
                  <span>Ongoing</span>
                </span>
              )}
              <span className="font-mono text-[11px] text-silver-400">
                <RichText text={project.period} />
              </span>
            </div>

            {/* Subtitle tag */}
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-silver-400 z-20">
              <span>{project.subtitle}</span>
            </div>
          </div>

          {/* Content Body */}
          <div className={`flex-1 flex flex-col justify-between ${isHeroCard ? 'md:py-1' : ''}`}>
            <div>
              <h4 className="text-xl sm:text-2xl font-bold text-white font-mono group-hover:text-silver-200 transition-colors">
                {project.title}
              </h4>

              {/* Problem Statement Box */}
              <div className="mt-4 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.07] text-xs font-sans text-silver-400 leading-relaxed group-hover:border-white/10 transition-colors">
                <span className="font-mono text-[10px] uppercase text-silver-500 tracking-wider block mb-1">
                  <Hl type="comment">// Problem Statement:</Hl>
                </span>
                <p className="text-silver-300/90 leading-relaxed">
                  <RichText text={project.problemStatement} />
                </p>
              </div>

              {/* Bullets as Checkmark List */}
              {project.bullets && project.bullets.length > 0 && (
                <div className="mt-4 space-y-2.5">
                  <span className="font-mono text-[10px] uppercase text-silver-500 tracking-wider block">
                    <Hl type="comment">// Key Implementations:</Hl>
                  </span>
                  <ul className="space-y-2">
                    {project.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-silver-300 font-sans leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00A3FF] shrink-0 mt-0.5 opacity-80" />
                        <RichText text={bullet} />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Footer: Tech Stack Pills & Action Buttons */}
            <div className="mt-6 pt-5 border-t border-white/[0.06] flex flex-col gap-4">
              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono text-syntax-keyword hover:border-[#00A3FF]/40 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Pills - only rendered when URL is non-empty */}
              {hasButtons && (
                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <MagneticButton className="flex-1 sm:flex-none">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pill-button !py-2 !px-4 text-xs group/btn w-full justify-center"
                        aria-label={`View ${project.title} source code on GitHub`}
                      >
                        <GithubIcon className="w-3.5 h-3.5 group-hover/btn:scale-110 transition-transform" />
                        <span>GitHub</span>
                        <ExternalLink className="w-3 h-3 opacity-80 pill-arrow transition-transform duration-200 group-hover/btn:translate-x-1" />
                      </a>
                    </MagneticButton>
                  )}

                  {project.liveUrl && (
                    <MagneticButton className="flex-1 sm:flex-none">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pill-button !py-2 !px-4 text-xs group/btn w-full justify-center"
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <span>Live</span>
                        <ExternalLink className="w-3 h-3 opacity-80 pill-arrow transition-transform duration-200 group-hover/btn:translate-x-1" />
                      </a>
                    </MagneticButton>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 border-t border-white/[0.06] overflow-visible">
      {/* Section Header with Mask Slide-Up */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <Hl type="comment" className="text-xs uppercase tracking-widest">// 02</Hl>
            <span className="h-[1px] w-8 bg-white/20" />
            <h2 className="font-mono text-sm tracking-widest uppercase text-silver-300">Featured Work</h2>
          </div>
          <div className="overflow-hidden">
            <motion.h3
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white font-mono"
            >
              Selected Projects
            </motion.h3>
          </div>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm font-mono text-silver-400 max-w-md"
        >
          Full-stack applications built with React, Spring Boot and MySQL, from problem statement to working APIs.
        </motion.p>
      </div>

      {/* Projects Grid with Staggered Entrance */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
        {PROJECTS_DATA.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
