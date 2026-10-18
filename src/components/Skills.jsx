import React from 'react';
import { motion } from 'framer-motion';
import { Server, Layout, Database, Wrench } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import Hl from './Hl';
import CountUp from './CountUp';

export default function Skills() {
  const categoryIcons = {
    backend: Server,
    frontend: Layout,
    database: Database,
    tools: Wrench,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const chipVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 8 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="skills" className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 border-t border-white/[0.06] overflow-visible">
      {/* Section Tag */}
      <div className="flex items-center gap-3 mb-6 sm:mb-8">
        <Hl type="comment" className="text-xs uppercase tracking-widest">// 04</Hl>
        <span className="h-[1px] w-8 bg-white/20" />
        <h2 className="font-mono text-sm tracking-widest uppercase text-silver-300">Technical Competencies</h2>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
        <div className="overflow-hidden">
          <motion.h3
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white font-mono"
          >
            Skills &amp; Technologies
          </motion.h3>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm font-mono text-silver-400 max-w-md"
        >
          Structured proficiency across the stack. Focused on scalable <Hl type="control">backend services</Hl> and clean integration layers.
        </motion.p>
      </div>

      {/* Grouped Skills Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(SKILLS_DATA).map(([key, group], index) => {
          const Icon = categoryIcons[key] || Server;
          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="dark-card p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-white/[0.05] border border-white/10 text-[#00A3FF]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white font-mono">{group.category}</h4>
                    <p className="text-xs text-silver-500 font-sans mt-0.5">{group.description}</p>
                  </div>
                </div>

                {/* Staggered popping skill chips */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="mt-6 flex flex-wrap gap-2"
                >
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={chipVariants}
                      className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-xs font-mono text-silver-200 hover:border-[#00A3FF]/50 hover:bg-[#00A3FF]/[0.08] hover:text-white transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-end text-[11px] font-mono text-silver-500">
                <span>
                  <CountUp to={group.skills.length} /> competencies
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
