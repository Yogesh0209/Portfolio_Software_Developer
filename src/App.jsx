import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { ThemeProvider } from './context/ThemeProvider';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';
import ScrollProgress from './components/ScrollProgress';
import TechMarquee from './components/TechMarquee';

export default function App() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    window.__lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const animId = requestAnimationFrame(raf);

    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        const href = target.getAttribute('href');
        if (href && href !== '#' && href.startsWith('#')) {
          const el = document.querySelector(href);
          if (el) {
            e.preventDefault();
            lenis.scrollTo(el, { offset: -80 });
          }
        }
      }
    };
    document.addEventListener('click', handleAnchorClick);

    return () => {
      cancelAnimationFrame(animId);
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="bg-page-container relative min-h-screen bg-[#050505] text-[#ededed] font-sans selection:bg-[#00A3FF] selection:text-white transition-colors duration-300" style={{ overflowX: 'clip' }}>
        {/* Scroll Progress Bar at the very top */}
        <ScrollProgress />

        {/* Film grain noise overlay (blend mode removed for 60fps mobile performance) */}
        <div className="fixed inset-0 pointer-events-none z-40 bg-grain opacity-25" />
        
        {/* Architectural subtle grid pattern */}
        <div className="fixed inset-0 pointer-events-none z-0 bg-grid-pattern opacity-40" />

        {/* Ambient background soft light spot with subtle electric blue tint (disabled on mobile for 60fps) */}
        <div className="hidden md:block fixed -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#1F6FFF]/[0.03] rounded-full blur-[140px] pointer-events-none z-0" />

        {/* Faint cursor follow glow on desktop */}
        <CursorGlow />

        {/* Main page layout */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <Hero />
            <About />
            <TechMarquee />
            <Projects />
            <Experience />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}
