import React, { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

/**
 * High-performance cursor-follow glow on desktop.
 * Uses motion values to avoid re-renders on mousemove.
 * Uses pure radial-gradient instead of heavy blur filters.
 * Only attaches listeners on devices with (hover: hover) and (pointer: fine).
 */
export default function CursorGlow() {
  const [supported, setSupported] = useState(() => {
    if (typeof window === 'undefined') return false;
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return isFinePointer && !prefersReducedMotion;
  });

  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const opacity = useMotionValue(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkSupport = () => {
      const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setSupported(isFinePointer && !prefersReducedMotion);
    };

    const pointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (pointerQuery.addEventListener) {
      pointerQuery.addEventListener('change', checkSupport);
      motionQuery.addEventListener('change', checkSupport);
    }

    if (!supported) return;

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (opacity.get() === 0) {
        opacity.set(1);
      }
    };

    const handleMouseLeave = () => {
      opacity.set(0);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (pointerQuery.removeEventListener) {
        pointerQuery.removeEventListener('change', checkSupport);
        motionQuery.removeEventListener('change', checkSupport);
      }
    };
  }, [mouseX, mouseY, opacity, supported]);

  if (!supported) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-30 w-[420px] h-[420px] rounded-full hidden md:block"
      style={{
        x: mouseX,
        y: mouseY,
        translateX: '-50%',
        translateY: '-50%',
        opacity,
        background: 'radial-gradient(circle at center, rgba(31, 111, 255, 0.08) 0%, rgba(0, 163, 255, 0.03) 40%, transparent 70%)',
      }}
    />
  );
}
