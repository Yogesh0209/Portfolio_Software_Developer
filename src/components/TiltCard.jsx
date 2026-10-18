import React, { useRef, useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

/**
 * 3D Tilt Card wrapper for desktop.
 * Tilts subtly toward cursor on hover. Disables on touch and reduced motion.
 */
export default function TiltCard({ children, className = "" }) {
  const ref = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const checkEnabled = () => {
      if (typeof window === 'undefined') return;
      const isTouch = window.matchMedia('(pointer: coarse)').matches;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setEnabled(!isTouch && !prefersReducedMotion);
    };
    checkEnabled();
    const touchQuery = window.matchMedia('(pointer: coarse)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (touchQuery.addEventListener) {
      touchQuery.addEventListener('change', checkEnabled);
      motionQuery.addEventListener('change', checkEnabled);
      return () => {
        touchQuery.removeEventListener('change', checkEnabled);
        motionQuery.removeEventListener('change', checkEnabled);
      };
    }
  }, []);

  const rotateX = useSpring(0, { stiffness: 200, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e) => {
    if (!enabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = -((y - centerY) / centerY) * 6; // max 6 deg
    const rY = ((x - centerX) / centerX) * 6;

    rotateX.set(rX);
    rotateY.set(rY);
  };

  const handleMouseLeave = () => {
    if (!enabled) return;
    rotateX.set(0);
    rotateY.set(0);
  };

  if (!enabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      style={{
        transformStyle: 'preserve-3d',
        transformPerspective: 1000,
        rotateX,
        rotateY,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
