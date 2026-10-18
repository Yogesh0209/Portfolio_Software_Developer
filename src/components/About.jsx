import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Compass, BookOpen, Gamepad2, Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_INFO, ABOUT_HEADING, ABOUT_PARAGRAPHS } from '../data/portfolioData';
import Hl from './Hl';
import RichText from './RichText';
import TiltCard from './TiltCard';

function CyberHUDPortrait() {
  const [hasError, setHasError] = useState(false);

  if (!PERSONAL_INFO.photo || hasError) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="w-full h-full flex flex-col items-center justify-center"
    >
      <TiltCard className="hud-portrait-card relative w-full max-w-[390px] lg:max-w-none aspect-[3/4] rounded-2xl bg-[#08080a] border border-white/10 group overflow-hidden shadow-[0_0_35px_rgba(31,111,255,0.12)] hover:shadow-[0_0_45px_rgba(31,111,255,0.28)] hover:border-[#00A3FF]/50 transition-all duration-500">
        
        {/* Subtle background tech grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none z-10" />

        {/* Portrait Image */}
        <div className="relative w-full h-full overflow-hidden">
          <img
            src={PERSONAL_INFO.photo}
            alt={PERSONAL_INFO.photoAlt || PERSONAL_INFO.name}
            width={800}
            height={800}
            loading="lazy"
            decoding="async"
            onError={() => setHasError(true)}
            className="w-full h-full object-cover object-top contrast-[1.04] group-hover:scale-105 transition-all duration-700 ease-out"
          />

          {/* Vignette & bottom fade to transparent */}
          <div className="hud-vignette absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent pointer-events-none z-10" />

          {/* Biometric Scanline on Hover */}
          <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#00A3FF] to-transparent opacity-0 group-hover:opacity-100 -translate-y-full group-hover:translate-y-[600px] transition-all duration-1000 ease-in-out pointer-events-none z-20 shadow-[0_0_12px_#00A3FF]" />
        </div>

        {/* HUD Corner Crosshairs */}
        <div className="absolute top-3 left-3 text-[#00A3FF] font-mono text-xs font-bold leading-none select-none z-20 opacity-80 group-hover:opacity-100 transition-opacity">
          +
        </div>
        <div className="absolute top-3 right-3 text-[#00A3FF] font-mono text-xs font-bold leading-none select-none z-20 opacity-80 group-hover:opacity-100 transition-opacity">
          +
        </div>
        <div className="absolute bottom-3 left-3 text-[#00A3FF] font-mono text-xs font-bold leading-none select-none z-20 opacity-80 group-hover:opacity-100 transition-opacity">
          +
        </div>
        <div className="absolute bottom-3 right-3 text-[#00A3FF] font-mono text-xs font-bold leading-none select-none z-20 opacity-80 group-hover:opacity-100 transition-opacity">
          +
        </div>

        {/* HUD Top Bar: Status & Telemetry */}
        <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between text-[10px] font-mono z-20 pointer-events-none">
          <div className="hud-status-badge inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-[#00A3FF]/40 text-[#38bdf8] shadow-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00A3FF] opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00A3FF]" />
            </span>
            <span className="tracking-wider uppercase">SYS_ACTIVE // DEV_01</span>
          </div>

          <div className="hud-loc-badge hidden sm:inline-flex items-center px-2 py-1 rounded bg-black/75 backdrop-blur-md border border-white/10 text-silver-400 text-[9px] tracking-widest uppercase">
            LOC: 23.25°N 77.41°E
          </div>
        </div>

        {/* HUD Bottom Panel: Identity & Role Signature */}
        <div className="hud-bottom-panel absolute bottom-3.5 inset-x-3.5 p-3.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 z-20 pointer-events-none group-hover:border-[#00A3FF]/30 transition-colors duration-300">
          <div className="flex items-center justify-between gap-2">
            <div>
              <span className="block font-mono text-xs sm:text-sm font-bold text-white tracking-wide">
                {PERSONAL_INFO.name}
              </span>
              <span className="block font-mono text-[10px] text-silver-400 tracking-wider uppercase mt-0.5">
                // Backend-focused Software Developer
              </span>
            </div>
            <div className="hidden sm:block text-right">
              <span className="text-[9px] font-mono text-[#00A3FF] uppercase tracking-widest block">
                CORE_STACK
              </span>
              <span className="text-[10px] font-mono text-silver-300 block">
                SPRING &bull; NODE
              </span>
            </div>
          </div>

          {/* Micro HUD line */}
          <div className="mt-2.5 pt-2 border-t border-white/[0.08] flex items-center justify-between text-[9px] font-mono text-silver-500">
            <span>ENGINEER_ID: 0x7E3</span>
            <span className="text-syntax-keyword">STATUS: AVAILABLE</span>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}

export default function About() {
  const interestIcons = {
    Reading: BookOpen,
    Gaming: Gamepad2,
    Adventuring: Compass,
    Coding: Code2,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="about" className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 border-t border-white/[0.06] overflow-visible">
      {/* Section Tag */}
      <div className="flex items-center gap-3 mb-6 sm:mb-8">
        <Hl type="comment" className="text-xs uppercase tracking-widest">// 01</Hl>
        <span className="h-[1px] w-8 bg-white/20" />
        <h2 className="font-mono text-sm tracking-widest uppercase text-silver-300">About Me</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        {/* Left Column: Narrative Bio & Telemetry Cards */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-6">
          <div className="space-y-6">
            <div className="overflow-hidden">
              <motion.h3
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-mono leading-snug"
              >
                <RichText text={ABOUT_HEADING} />
              </motion.h3>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 text-silver-300 font-sans text-base leading-relaxed"
            >
              {ABOUT_PARAGRAPHS.map((p, pIdx) => (
                <motion.p key={pIdx} variants={paragraphVariants} className="text-silver-300/90">
                  <RichText text={p} />
                </motion.p>
              ))}
            </motion.div>

            {/* Structured Telemetry: Education & Career Focus */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* Education Card */}
              <div className="dark-card p-5 border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-white/[0.05] border border-white/10 shrink-0">
                      <GraduationCap className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-silver-500">Education</span>
                      <h4 className="text-xs font-semibold text-white mt-0.5 line-clamp-1">
                        {PERSONAL_INFO.education.degree}
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono">
                  <span className="text-silver-400 truncate max-w-[65%]">
                    <Hl type="type">{PERSONAL_INFO.education.institution}</Hl>
                  </span>
                  <span className="text-white px-2 py-0.5 rounded bg-white/10 font-medium shrink-0">
                    CGPA <Hl type="number">8.4</Hl>
                  </span>
                </div>
                <div className="mt-1 text-[10px] font-mono text-silver-500">
                  <Hl type="number">2023</Hl> &mdash; <Hl type="number">2027</Hl> (Expected)
                </div>
              </div>

              {/* Career Target Card */}
              <div className="dark-card p-5 border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="p-2 rounded-xl bg-white/[0.05] border border-white/10 shrink-0">
                      <Terminal className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-silver-500">Role Focus</span>
                      <h4 className="text-xs font-semibold text-white mt-0.5">Entry-Level Positions</h4>
                    </div>
                  </div>
                  <p className="text-[11px] text-silver-400 leading-relaxed font-sans">
                    Seeking <Hl type="control">Software Developer</Hl>, <Hl type="control">Backend Developer</Hl>, or <Hl type="control">Programmer Analyst</Hl> roles.
                  </p>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5 text-[10px] font-mono">
                  <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-syntax-keyword">
                    Spring Boot
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-syntax-keyword">
                    Node.js
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-syntax-keyword">
                    MySQL &bull; APIs
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Interests Chips */}
          <div className="pt-2">
            <span className="text-xs font-mono text-silver-500 uppercase tracking-wider block mb-2.5">
              <Hl type="comment">// Beyond the terminal</Hl>
            </span>
            <div className="flex flex-wrap gap-2">
              {PERSONAL_INFO.interests.map((interest) => {
                const Icon = interestIcons[interest] || Sparkles;
                return (
                  <div
                    key={interest}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-xs font-mono text-silver-300 hover:border-[#00A3FF]/40 hover:text-white transition-colors"
                  >
                    <Icon className="w-3.5 h-3.5 text-silver-400" />
                    <span>{interest}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Cyber-HUD Portrait Frame */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <CyberHUDPortrait />
        </div>
      </div>
    </section>
  );
}
