import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Compass, BookOpen, Gamepad2, Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_INFO, ABOUT_HEADING, ABOUT_PARAGRAPHS } from '../data/portfolioData';
import Hl from './Hl';
import RichText from './RichText';

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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Bio with mask reveal heading and staggered paragraphs */}
        <div className="lg:col-span-7 flex flex-col gap-6">
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

          {/* Interests Chips */}
          <div className="pt-4">
            <span className="text-xs font-mono text-silver-500 uppercase tracking-wider block mb-3">
              <Hl type="comment">// Beyond the terminal</Hl>
            </span>
            <div className="flex flex-wrap gap-2.5">
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

        {/* Right Column: Structured Context Cards */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* Education Card */}
          <div className="dark-card p-6 border border-white/10">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-silver-500">Education</span>
                  <h4 className="text-sm font-semibold text-white mt-0.5">
                    {PERSONAL_INFO.education.degree}
                  </h4>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
              <span className="text-silver-400">
                <Hl type="type">{PERSONAL_INFO.education.institution}</Hl>
              </span>
              <span className="text-white px-2 py-0.5 rounded bg-white/10 font-medium">
                CGPA <Hl type="number">8.4</Hl>
              </span>
            </div>
            <div className="mt-1 text-[11px] font-mono text-silver-500">
              <Hl type="number">2023</Hl> &mdash; <Hl type="number">2027</Hl> (Expected)
            </div>
          </div>

          {/* Career Target Card */}
          <div className="dark-card p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10">
                <Terminal className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-silver-500">Role Focus</span>
                <h4 className="text-sm font-semibold text-white mt-0.5">Entry-Level Positions</h4>
              </div>
            </div>
            <p className="text-xs text-silver-400 leading-relaxed font-sans">
              Seeking <Hl type="control">Software Developer</Hl>, <Hl type="control">Backend Developer</Hl>, or <Hl type="control">Programmer Analyst</Hl> roles to build and ship clean, tested APIs with engineering teams.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-mono">
              <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-syntax-keyword">
                Java &bull; Spring Boot
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-syntax-keyword">
                Node.js &bull; Express
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-syntax-keyword">
                MySQL &bull; REST APIs
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
