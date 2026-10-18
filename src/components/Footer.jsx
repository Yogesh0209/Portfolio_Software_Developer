import React from 'react';
import { ArrowUp, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import MagneticButton from './MagneticButton';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-10 sm:py-12 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs text-silver-500 overflow-visible">
      <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
        <span className="text-silver-400 font-medium">
          &copy; {CURRENT_YEAR} {PERSONAL_INFO.name}.
        </span>
        <span className="hidden sm:inline text-silver-700">&bull;</span>
        <span>Built with React, Vite and Tailwind CSS.</span>
      </div>

      <div className="flex items-center gap-4 overflow-visible">
        <span className="flex items-center gap-1.5 text-silver-400">
          <Terminal className="w-3.5 h-3.5 text-[#00A3FF]" />
          <span>Bhopal, MP &bull; UTC+5:30</span>
        </span>

        <MagneticButton className="overflow-visible">
          <button
            type="button"
            onClick={scrollToTop}
            className="pill-button !py-1.5 !px-3 !text-[11px] group !min-h-[36px]"
            aria-label="Scroll back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </MagneticButton>
      </div>
    </footer>
  );
}
