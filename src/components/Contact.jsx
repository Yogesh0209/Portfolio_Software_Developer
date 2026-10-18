import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, ArrowUpRight, Mail, FileText, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';
import Hl from './Hl';
import MagneticButton from './MagneticButton';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(PERSONAL_INFO.socials.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = PERSONAL_INFO.socials.email;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const success = document.execCommand('copy');
        document.body.removeChild(textArea);
        if (success) {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }
      }
    } catch (err) {
      console.warn('Clipboard write failed:', err);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 border-t border-white/[0.06] overflow-visible">
      {/* Section Tag */}
      <div className="flex items-center gap-3 mb-6 sm:mb-8">
        <Hl type="comment" className="text-xs uppercase tracking-widest">// 05</Hl>
        <span className="h-[1px] w-8 bg-white/20" />
        <h2 className="font-mono text-sm tracking-widest uppercase text-silver-300">Get In Touch</h2>
      </div>

      <div className="dark-card p-6 sm:p-10 md:p-16 relative overflow-visible">
        {/* Subtle decorative electric blue glow in top-right corner of card */}
        <div className="absolute top-0 right-0 w-72 sm:w-80 h-72 sm:h-80 rounded-full bg-[#1F6FFF]/[0.08] blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl overflow-visible">
          {/* Big "Let's talk" heading with mask slide-up reveal */}
          <div className="overflow-hidden">
            <motion.h3
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-5xl md:text-6xl font-bold font-mono tracking-tighter text-white leading-tight"
            >
              Let's talk.
            </motion.h3>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-sm sm:text-base md:text-lg text-silver-300 font-sans leading-relaxed"
          >
            I am currently open for <Hl type="control">full-time opportunities</Hl>, <Hl type="control">internships</Hl>, and <Hl type="control">engineering roles</Hl>. If you have an open position, an ambitious project, or simply want to connect, feel free to reach out.
          </motion.p>

          {/* Email Pill with Copy Button and Primary Contact button */}
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 overflow-visible">
            <div className="inline-flex flex-wrap sm:flex-nowrap items-center gap-2 p-1.5 sm:pl-4 pl-3 rounded-full border border-white/20 bg-white/[0.03] backdrop-blur-md max-w-full overflow-visible">
              <Mail className="w-4 h-4 text-[#00A3FF] shrink-0" />
              <span className="font-mono text-xs sm:text-sm text-silver-200 select-all truncate max-w-[190px] xs:max-w-[240px] sm:max-w-none">
                {PERSONAL_INFO.socials.email}
              </span>
              <MagneticButton className="overflow-visible">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className={`pill-button !py-1.5 !px-3.5 !text-xs transition-all ${
                    copied
                      ? '!bg-[#00A3FF] !text-white !border-[#00A3FF] shadow-[0_0_20px_#00A3FF]'
                      : ''
                  }`}
                  aria-label="Copy email address"
                  id="contact-copy-email-btn"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-white" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </MagneticButton>
            </div>

            {/* Primary Action Button with Checkmark in Circle */}
            <MagneticButton className="overflow-visible">
              <a
                href={`mailto:${PERSONAL_INFO.socials.email}`}
                className="pill-primary group text-xs sm:text-sm"
                id="contact-primary-btn"
              >
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/20 text-white shrink-0">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </span>
                <span>Contact</span>
                <Send className="w-3.5 h-3.5 pill-arrow transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </MagneticButton>
          </div>

          {/* Social Links Chips */}
          <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/[0.08] flex flex-wrap items-center gap-2.5 sm:gap-3 overflow-visible">
            <span className="text-xs font-mono text-silver-500 mr-2">
              <Hl type="comment">// Profiles:</Hl>
            </span>

            <MagneticButton className="overflow-visible">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="pill-button group !text-xs"
                id="contact-github-link"
              >
                <GithubIcon className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 opacity-80 pill-arrow transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </MagneticButton>

            <MagneticButton className="overflow-visible">
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="pill-button group !text-xs"
                id="contact-linkedin-link"
              >
                <LinkedinIcon className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 opacity-80 pill-arrow transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </MagneticButton>

            <MagneticButton className="overflow-visible">
              <a
                href={PERSONAL_INFO.socials.resume}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="pill-button group !text-xs"
                id="contact-resume-link"
              >
                <FileText className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                <span>Resume</span>
                <ArrowUpRight className="w-3 h-3 opacity-80 pill-arrow transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
