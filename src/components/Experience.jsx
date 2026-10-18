import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import Hl from './Hl';
import RichText from './RichText';

export default function Experience() {
  const containerRef = useRef(null);

  // Timeline line draws itself as you scroll down
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 50%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 border-t border-white/[0.06] overflow-visible">
      {/* Section Tag */}
      <div className="flex items-center gap-3 mb-6 sm:mb-8">
        <Hl type="comment" className="text-xs uppercase tracking-widest">// 03</Hl>
        <span className="h-[1px] w-8 bg-white/20" />
        <h2 className="font-mono text-sm tracking-widest uppercase text-silver-300">Industry Experience</h2>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
        <div className="overflow-hidden">
          <motion.h3
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white font-mono"
          >
            Work History
          </motion.h3>
        </div>
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono text-silver-400"
        >
          Internship experience
        </motion.span>
      </div>

      {/* Timeline List with dynamic line drawing adapted for mobile single-column */}
      <div ref={containerRef} className="relative ml-2 sm:ml-4 pl-5 sm:pl-8 space-y-8 sm:space-y-12">
        {/* Background static line */}
        <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-white/[0.08]" />

        {/* Dynamic drawing electric blue timeline line */}
        <motion.div
          style={{ scaleY }}
          className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-[#1F6FFF] to-[#00A3FF] origin-top shadow-[0_0_12px_#00A3FF] z-10"
        />

        {EXPERIENCE_DATA.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Timeline node - pulses when current is true */}
            <div
              className={`absolute -left-[27px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-black border-2 border-[#00A3FF] flex items-center justify-center z-20 ${
                item.current
                  ? 'shadow-[0_0_16px_rgba(0,163,255,0.9)] animate-pulse'
                  : 'shadow-[0_0_14px_rgba(0,163,255,0.7)]'
              }`}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#00A3FF]" />
            </div>

            {/* Experience Card */}
            <div className="dark-card p-5 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.07] pb-4 sm:pb-5">
                <div>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <h4 className="text-lg sm:text-xl font-bold text-white font-mono">
                      <Hl type="control">{item.role}</Hl>
                    </h4>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/10 text-[#38bdf8] border border-[#00A3FF]/30 inline-flex items-center gap-1.5">
                      {item.current && (
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00A3FF] opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00A3FF]" />
                        </span>
                      )}
                      <span>{item.badge}</span>
                    </span>
                  </div>
                  <div className="text-sm text-silver-300 font-sans mt-1 font-medium">
                    <Hl type="type">{item.company}</Hl>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono text-silver-400">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#00A3FF]" />
                    <RichText text={item.period} />
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#00A3FF]" />
                    <RichText text={item.location} />
                  </span>
                </div>
              </div>

              {/* Bullet Points */}
              <div className="mt-5 space-y-3">
                <span className="text-[11px] font-mono uppercase text-silver-500 tracking-wider block">
                  <Hl type="comment">// Key Deliverables &amp; Responsibilities:</Hl>
                </span>
                <ul className="space-y-2.5">
                  {item.highlights.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-sm text-silver-300 font-sans leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#00A3FF] shrink-0 mt-0.5 opacity-80" />
                      <RichText text={bullet} />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies used */}
              <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center gap-2 flex-wrap">
                <span className="text-[11px] font-mono text-silver-500 mr-2">Tech:</span>
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 rounded bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono text-syntax-keyword hover:border-[#00A3FF]/40 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
