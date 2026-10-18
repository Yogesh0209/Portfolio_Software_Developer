import React, { useRef, useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

/**
 * Magnetic button wrapper for desktop cursor enhancement.
 * Disables automatically on touch devices and respects prefers-reduced-motion.
 * Uses a stationary trigger wrapper with ~8px padding to provide a stable hit area,
 * eliminating edge flicker, bottom-edge drop-off, and container clipping.
 */
export default function MagneticButton({ children, className = "", strength = 0.2, maxDistance = 8 }) {
  const triggerRef = useRef(null);
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

  const x = useSpring(0, { stiffness: 180, damping: 18, mass: 0.1 });
  const y = useSpring(0, { stiffness: 180, damping: 18, mass: 0.1 });

  const handleMouseMove = (e) => {
    if (!enabled || !triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = (e.clientX - centerX) * strength;
    const distanceY = (e.clientY - centerY) * strength;

    // Constrain maximum translation distance
    const clampedX = Math.max(-maxDistance, Math.min(maxDistance, distanceX));
    const clampedY = Math.max(-maxDistance, Math.min(maxDistance, distanceY));

    x.set(clampedX);
    y.set(clampedY);
  };

  const handleMouseLeave = () => {
    if (!enabled) return;
    x.set(0);
    y.set(0);
  };

  if (!enabled) {
    return (
      <div className={`relative inline-flex items-center justify-center overflow-visible ${className}`} style={{ overflow: 'visible' }}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={triggerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-flex items-center justify-center p-2 -m-2 overflow-visible ${className}`}
      style={{ overflow: 'visible' }}
    >
      <motion.div
        style={{ x, y, overflow: 'visible' }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
        className="w-full h-full inline-flex items-center justify-center overflow-visible"
      >
        {children}
      </motion.div>
    </div>
  );
}
