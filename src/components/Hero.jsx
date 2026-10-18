import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Mail, FileText, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';
import Hl from './Hl';
import RichText from './RichText';
import MagneticButton from './MagneticButton';

export default function Hero() {
  const { scrollY } = useScroll();
  const [reducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  // Parallax fade and upward translation on scroll
  const heroY = useTransform(scrollY, [0, 500], reducedMotion ? [0, 0] : [0, -90]);
  const heroOpacity = useTransform(scrollY, [0, 450], reducedMotion ? [1, 1] : [1, 0.2]);

  const letterContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.045,
        delayChildren: 0.1,
      },
    },
  };

  const letterItem = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const renderLetters = (word) => {
    return word.split('').map((char, index) => (
      <motion.span
        key={index}
        variants={letterItem}
        aria-hidden="true"
        className="inline-block"
      >
        {char}
      </motion.span>
    ));
  };

  return (
    <section className="relative min-h-[90dvh] pt-28 sm:pt-32 pb-12 sm:pb-16 flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 md:px-8 overflow-visible">
      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        initial="hidden"
        animate="visible"
        className="w-full flex flex-col items-start overflow-visible"
      >
        {/* Status indicator pill */}
        <motion.div variants={itemVariants} className="mb-6 sm:mb-8 max-w-full">
          <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm font-mono text-[11px] sm:text-xs text-silver-300 max-w-full">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00A3FF] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00A3FF]" />
            </span>
            <span className="truncate sm:whitespace-normal">
              Available for <Hl type="control">Software Developer</Hl> &amp; <Hl type="control">Analyst</Hl> Roles
            </span>
          </div>
        </motion.div>

        {/* Giant Monospace Display Heading with letter-by-letter reveal & fluid clamp typography */}
        <div className="w-full font-mono select-none tracking-tight leading-[0.92] overflow-visible">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-baseline gap-4 md:gap-6 overflow-visible">
            <h1
              aria-label="Software Developer"
              className="contents"
            >
              <div className="col-span-full overflow-hidden pb-3 -mb-3">
                <motion.div
                  variants={letterContainer}
                  initial="hidden"
                  animate="visible"
                  className="text-[clamp(2.15rem,8.2vw,7.5rem)] font-bold text-white tracking-tighter whitespace-nowrap"
                >
                  {renderLetters("Software")}
                </motion.div>
              </div>
              
              <div className="overflow-hidden pb-4 -mb-4 mt-1 md:mt-2">
                <motion.div
                  variants={letterContainer}
                  initial="hidden"
                  animate="visible"
                  className="text-[clamp(2.15rem,8.2vw,7.5rem)] font-bold text-white tracking-tighter md:ml-12 lg:ml-20 whitespace-nowrap"
                >
                  {renderLetters("Developer")}
                </motion.div>
              </div>
            </h1>
            
            {/* View Projects Primary Pill button alongside heading on desktop, unconstrained & padded */}
            <div className="pt-2 md:pt-0 shrink-0 overflow-visible">
              <MagneticButton className="overflow-visible">
                <a
                  href="#projects"
                  className="pill-primary group text-xs sm:text-sm"
                  id="hero-view-projects-btn"
                >
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/20 text-white shrink-0">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </span>
                  <span>View projects</span>
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-black/40 text-white group-hover:translate-y-0.5 transition-transform duration-200">
                    <ArrowDown className="w-3.5 h-3.5" />
                  </span>
                </a>
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* Short one-line intro from data rendered with RichText */}
        <motion.div variants={itemVariants} className="mt-6 sm:mt-8 max-w-2xl">
          <p className="text-base sm:text-xl font-normal text-silver-300 leading-relaxed font-sans">
            <RichText text={PERSONAL_INFO.introLine} />
          </p>
        </motion.div>

        {/* Pill-shaped buttons and link chips with electric blue style and magnetic desktop effect */}
        <motion.div
          variants={itemVariants}
          className="mt-8 sm:mt-10 flex flex-wrap items-center gap-2.5 sm:gap-3 w-full overflow-visible"
        >
          <MagneticButton>
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="pill-button group"
              id="hero-github-link"
            >
              <GithubIcon className="w-4 h-4 transition-transform group-hover:scale-110" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80 pill-arrow transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </MagneticButton>

          <MagneticButton>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="pill-button group"
              id="hero-linkedin-link"
            >
              <LinkedinIcon className="w-4 h-4 transition-transform group-hover:scale-110" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80 pill-arrow transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </MagneticButton>

          <MagneticButton>
            <a
              href="#contact"
              className="pill-button group"
              id="hero-email-link"
            >
              <Mail className="w-4 h-4 transition-transform group-hover:scale-110" />
              <span>Email</span>
            </a>
          </MagneticButton>

          <MagneticButton>
            <a
              href={PERSONAL_INFO.socials.resume}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="pill-button group"
              id="hero-resume-link"
            >
              <FileText className="w-4 h-4 transition-transform group-hover:scale-110" />
              <span>Resume</span>
              <span className="text-[10px] opacity-75 font-mono">PDF</span>
            </a>
          </MagneticButton>
        </motion.div>

        {/* Hero quick facts banner */}
        <motion.div
          variants={itemVariants}
          className="mt-12 sm:mt-16 w-full pt-6 sm:pt-8 border-t border-white/[0.07] grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left"
        >
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-silver-500">Education</div>
            <div className="text-sm font-medium text-white mt-1">
              B.Tech CS (2027)
            </div>
            <div className="text-xs text-silver-400 font-mono mt-0.5">
              <Hl type="type">SAGE Univ.</Hl> &bull;{' '}
              <span className="text-syntax-number font-semibold">
                CGPA 8.4
              </span>
            </div>
          </div>
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-silver-500">Focus Stack</div>
            <div className="text-sm font-medium text-white mt-1">
              <Hl type="keyword">Java</Hl> &bull; <Hl type="keyword">Node.js</Hl>
            </div>
            <div className="text-xs text-silver-400 font-mono mt-0.5">
              <Hl type="keyword">Spring Boot</Hl>, <Hl type="keyword">Express</Hl>
            </div>
          </div>
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-silver-500">Current Role</div>
            <div className="text-sm font-medium text-white mt-1">
              <Hl type="type">Cybrom Technology</Hl>
            </div>
            <div className="text-xs text-silver-400 font-mono mt-0.5">
              <Hl type="control">Java Full Stack Intern</Hl>
            </div>
          </div>
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-silver-500">Current Status</div>
            <div className="text-sm font-medium text-white mt-1">Open for Roles</div>
            <div className="text-xs text-silver-400 font-mono mt-0.5">
              <Hl type="control">Fresher</Hl> / <Hl type="control">Programmer Analyst</Hl>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
