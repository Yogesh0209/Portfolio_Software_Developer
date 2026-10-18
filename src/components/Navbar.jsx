import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import MagneticButton from './MagneticButton';
import ThemeToggle from './ThemeToggle';

const NAV_LINKS = [
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const lastScrollY = useRef(0);

  // Lock body scroll and pause smooth scroll engine when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      if (window.__lenis) {
        window.__lenis.stop();
      }
    } else {
      document.body.style.overflow = '';
      if (window.__lenis) {
        window.__lenis.start();
      }
    }
    return () => {
      document.body.style.overflow = '';
      if (window.__lenis) {
        window.__lenis.start();
      }
    };
  }, [mobileMenuOpen]);

  // Auto close mobile overlay if resized to desktop viewport
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll direction detection (hide on scroll down, show on scroll up)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      if (currentScrollY > 90) {
        if (currentScrollY > lastScrollY.current && !mobileMenuOpen) {
          setHidden(true); // scrolling down
        } else {
          setHidden(false); // scrolling up
        }
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  // Track active section for underline highlighting
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) => link.id);
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, href) => {
    setMobileMenuOpen(false);
    if (!window.__lenis) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${hidden ? '-translate-y-full' : 'translate-y-0'
          } ${scrolled
            ? 'bg-[#050505]/90 backdrop-blur-md border-b border-white/[0.08] py-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]'
            : 'bg-transparent py-4 sm:py-5'
          }`}
        style={{ paddingTop: 'max(0.75rem, env(safe-area-inset-top))' }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
          {/* Brand / Name */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (window.__lenis) {
                window.__lenis.scrollTo(0, { duration: 1 });
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="group flex flex-col font-mono tracking-tight text-white focus-visible:ring-2 focus-visible:ring-[#00A3FF] rounded-md px-1 py-1 min-h-[44px] justify-center"
          >
            <span className="text-sm font-semibold tracking-wide text-white group-hover:text-[#38bdf8] transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[11px] text-silver-500 font-normal">
              Bhopal, IN &bull; <span className="text-silver-400">Software Developer</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 font-mono text-[13px] tracking-wide text-silver-400">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`transition-colors duration-200 py-2 relative min-h-[44px] inline-flex items-center ${isActive ? 'text-white font-medium' : 'hover:text-white'
                    }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#1F6FFF] to-[#00A3FF] shadow-[0_0_10px_#00A3FF] rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}

            <ThemeToggle />

            <MagneticButton>
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="pill-button !py-1.5 !px-3.5 !text-[12px] group !min-h-[38px]"
                aria-label="View Yogesh's GitHub Profile"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-80 pill-arrow transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </MagneticButton>
          </nav>

          {/* Mobile Action Controls: ThemeToggle + Hamburger */}
          <div className="flex items-center gap-2.5 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center text-silver-300 hover:text-white rounded-xl border border-white/10 hover:border-[#00A3FF]/40 bg-white/[0.03] backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#00A3FF] transition-all"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#38bdf8]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Menu Overlay with locked body scroll & large touch targets */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 top-0 left-0 right-0 bottom-0 z-50 md:hidden bg-[#050505]/[0.98] backdrop-blur-2xl flex flex-col justify-between px-6 py-6 overflow-y-auto"
            style={{
              paddingTop: 'max(1.5rem, env(safe-area-inset-top))',
              paddingBottom: 'max(1.5rem, env(safe-area-inset-bottom))',
            }}
          >
            {/* Overlay Header with Logo, ThemeToggle and Close Button */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex flex-col font-mono">
                <span className="text-base font-semibold text-white tracking-wide">
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-xs text-silver-500">
                  Software Developer &bull; Portfolio
                </span>
              </div>
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setMobileMenuOpen(false)}
                  className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.05] text-silver-300 hover:text-white"
                >
                  <X className="w-5 h-5 text-[#38bdf8]" />
                </button>
              </div>
            </div>

            {/* Large Touch-friendly Navigation Links (Min 48px height) */}
            <nav className="flex flex-col justify-center gap-2 my-auto py-8 font-mono">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`min-h-[52px] px-4 py-3 rounded-xl flex items-center justify-between text-lg transition-all ${isActive
                        ? 'bg-[#1F6FFF]/15 text-[#38bdf8] font-bold border border-[#00A3FF]/30'
                        : 'text-silver-300 hover:text-white hover:bg-white/[0.04]'
                      }`}
                  >
                    <span>{link.name}</span>
                    {isActive ? (
                      <span className="w-2 h-2 rounded-full bg-[#00A3FF] shadow-[0_0_10px_#00A3FF]" />
                    ) : (
                      <ArrowUpRight className="w-4 h-4 text-silver-600" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Mobile Footer Action Chips */}
            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              <span className="text-xs font-mono text-silver-500 uppercase tracking-wider">
                Connect with Yogesh:
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill-button !py-2.5 !px-5 text-xs group flex-1 justify-center"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 pill-arrow" />
                </a>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill-button !py-2.5 !px-5 text-xs group flex-1 justify-center"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 pill-arrow" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

