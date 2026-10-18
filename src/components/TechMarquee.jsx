import React from 'react';
import Hl from './Hl';

const MARQUEE_ITEMS = [
  { name: 'Java', type: 'keyword' },
  { name: 'Spring Boot', type: 'keyword' },
  { name: 'Node.js', type: 'keyword' },
  { name: 'React', type: 'keyword' },
  { name: 'MySQL', type: 'keyword' },
  { name: 'Express.js', type: 'keyword' },
  { name: 'JPA / Hibernate', type: 'keyword' },
  { name: 'REST APIs', type: 'keyword' },
  { name: 'Tailwind CSS', type: 'keyword' },
  { name: 'Postman', type: 'keyword' },
  { name: 'Git', type: 'keyword' },
];

export default function TechMarquee() {
  return (
    <div
      aria-hidden="true"
      className="tech-marquee-bar relative w-full overflow-hidden py-4 sm:py-6 border-y border-white/[0.06] bg-black/40 backdrop-blur-sm"
    >
      {/* Left/Right Edge Fade Gradients */}
      <div className="marquee-fade-left absolute left-0 top-0 bottom-0 w-12 sm:w-24 z-10 pointer-events-none" />
      <div className="marquee-fade-right absolute right-0 top-0 bottom-0 w-12 sm:w-24 z-10 pointer-events-none" />

      <div className="flex animate-marquee select-none whitespace-nowrap">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
          <div key={idx} className="flex items-center mx-5">
            <span className="font-mono text-xs sm:text-sm tracking-wide text-silver-400 flex items-center gap-3">
              <Hl type={item.type} className="font-medium">{item.name}</Hl>
              <span className="text-[#00A3FF]/40 text-xs">&bull;</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
