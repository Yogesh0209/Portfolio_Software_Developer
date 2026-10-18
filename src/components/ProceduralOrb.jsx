import React from 'react';

/**
 * Procedural 3D Chrome / Silver / Iridescent Orb
 * Pure CSS & SVG gradients - zero external heavy 3D bundles, ultra-fast render, retina-sharp.
 */
export default function ProceduralOrb({ variant = "silver-mercury", className = "" }) {
  if (variant === "iridescent-ring") {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        {/* Soft electric blue background glow */}
        <div className="absolute w-36 h-36 rounded-full bg-gradient-to-tr from-[#1F6FFF]/25 to-[#00A3FF]/20 blur-2xl animate-pulse" style={{ animationDuration: '4s' }} />
        <svg viewBox="0 0 200 200" className="w-full h-full max-w-[200px] max-h-[200px] drop-shadow-[0_10px_25px_rgba(31,111,255,0.25)]">
          <defs>
            <radialGradient id="ringCore" cx="45%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="35%" stopColor="#d4d4d8" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#3f3f46" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#09090b" stopOpacity="1" />
            </radialGradient>
            <linearGradient id="ringSheen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="25%" stopColor="#a1a1aa" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="75%" stopColor="#52525b" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.7" />
            </linearGradient>
            <filter id="ringBlur">
              <feGaussianBlur stdDeviation="3" />
            </filter>
          </defs>

          {/* Outer diffuse halo */}
          <ellipse cx="100" cy="100" rx="75" ry="42" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="8" filter="url(#ringBlur)" transform="rotate(-25 100 100)" />
          
          {/* Main Saturn-like chrome ring */}
          <ellipse cx="100" cy="100" rx="72" ry="32" fill="none" stroke="url(#ringSheen)" strokeWidth="5.5" transform="rotate(-25 100 100)" />
          
          {/* Central orb */}
          <circle cx="100" cy="100" r="46" fill="url(#ringCore)" />
          
          {/* High-specular rim highlight */}
          <ellipse cx="90" cy="80" rx="30" ry="16" fill="rgba(255,255,255,0.4)" transform="rotate(-30 90 80)" filter="url(#ringBlur)" />
          <circle cx="82" cy="74" r="5" fill="#ffffff" />
          
          {/* Foreground segment of the ring for 3D depth */}
          <path d="M 35 125 A 72 32 0 0 0 162 76" fill="none" stroke="url(#ringSheen)" strokeWidth="5.5" transform="rotate(-25 100 100)" />
        </svg>
      </div>
    );
  }

  if (variant === "chrome-sphere") {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <div className="absolute w-36 h-36 rounded-full bg-gradient-to-tr from-[#1F6FFF]/30 to-[#00A3FF]/20 blur-3xl" />
        <svg viewBox="0 0 200 200" className="w-full h-full max-w-[200px] max-h-[200px] drop-shadow-[0_12px_30px_rgba(31,111,255,0.28)]">
          <defs>
            <radialGradient id="chromeBall" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="20%" stopColor="#f4f4f5" />
              <stop offset="45%" stopColor="#a1a1aa" />
              <stop offset="70%" stopColor="#27272a" />
              <stop offset="90%" stopColor="#09090b" />
              <stop offset="100%" stopColor="#000000" />
            </radialGradient>
            <linearGradient id="chromeHorizon" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
              <stop offset="48%" stopColor="#d4d4d8" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#000000" stopOpacity="0.9" />
              <stop offset="65%" stopColor="#71717a" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.5" />
            </linearGradient>
            <filter id="softGlow">
              <feGaussianBlur stdDeviation="4" />
            </filter>
          </defs>

          {/* Core sphere */}
          <circle cx="100" cy="100" r="54" fill="url(#chromeBall)" />
          
          {/* Internal chrome reflection horizon */}
          <circle cx="100" cy="100" r="53" fill="url(#chromeHorizon)" style={{ mixBlendMode: 'overlay' }} />

          {/* Top gloss specular highlight */}
          <ellipse cx="80" cy="65" rx="22" ry="12" fill="#ffffff" opacity="0.65" transform="rotate(-35 80 65)" filter="url(#softGlow)" />
          <circle cx="74" cy="60" r="4.5" fill="#ffffff" />

          {/* Bottom ambient bounce reflection */}
          <ellipse cx="118" cy="136" rx="26" ry="8" fill="rgba(31,111,255,0.35)" filter="url(#softGlow)" />
        </svg>
      </div>
    );
  }

  if (variant === "holographic-eclipse") {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <div className="absolute w-36 h-36 rounded-full bg-gradient-to-tr from-[#1F6FFF]/25 to-[#00A3FF]/20 blur-2xl" />
        <svg viewBox="0 0 200 200" className="w-full h-full max-w-[200px] max-h-[200px] drop-shadow-[0_10px_28px_rgba(31,111,255,0.26)]">
          <defs>
            <linearGradient id="eclipseRim" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="30%" stopColor="#e4e4e7" />
              <stop offset="70%" stopColor="#52525b" />
              <stop offset="100%" stopColor="#18181b" />
            </linearGradient>
            <radialGradient id="darkVoid" cx="40%" cy="40%" r="65%">
              <stop offset="0%" stopColor="#1c1c1f" />
              <stop offset="60%" stopColor="#09090b" />
              <stop offset="100%" stopColor="#000000" />
            </radialGradient>
            <filter id="hollowGlow">
              <feGaussianBlur stdDeviation="5" />
            </filter>
          </defs>

          {/* Outer glowing halo ring */}
          <circle cx="100" cy="100" r="56" fill="none" stroke="#00A3FF" strokeWidth="2.5" opacity="0.8" filter="url(#hollowGlow)" />
          <circle cx="100" cy="100" r="56" fill="none" stroke="url(#eclipseRim)" strokeWidth="3" />

          {/* Eclipse Body */}
          <circle cx="97" cy="98" r="52" fill="url(#darkVoid)" />

          {/* Crescent silver rim light */}
          <path d="M 52 82 A 52 52 0 0 1 140 60 A 52 52 0 0 0 52 82" fill="#ffffff" opacity="0.9" />

          {/* Geometric orbit ticks */}
          <circle cx="100" cy="100" r="74" fill="none" stroke="rgba(31,111,255,0.3)" strokeWidth="1" strokeDasharray="3 7" />
          <circle cx="152" cy="50" r="3" fill="#00A3FF" opacity="0.9" />
        </svg>
      </div>
    );
  }

  // Default: Liquid Silver Mercury Orb
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div className="absolute w-36 h-36 rounded-full bg-gradient-to-tr from-[#1F6FFF]/30 to-[#00A3FF]/20 blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
      <svg viewBox="0 0 200 200" className="w-full h-full max-w-[200px] max-h-[200px] drop-shadow-[0_12px_32px_rgba(31,111,255,0.28)]">
        <defs>
          <radialGradient id="mercuryCore" cx="35%" cy="32%" r="68%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="25%" stopColor="#f4f4f5" />
            <stop offset="50%" stopColor="#a1a1aa" />
            <stop offset="75%" stopColor="#3f3f46" />
            <stop offset="95%" stopColor="#18181b" />
            <stop offset="100%" stopColor="#09090b" />
          </radialGradient>
          <linearGradient id="liquidSheen" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="35%" stopColor="#d4d4d8" stopOpacity="0.1" />
            <stop offset="65%" stopColor="#ffffff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#27272a" stopOpacity="0.8" />
          </linearGradient>
          <filter id="mercuryFilter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feSpecularLighting in="blur" surfaceScale="5" specularConstant="1.2" specularExponent="20" lightingColor="#ffffff" result="spec">
              <fePointLight x="60" y="50" z="200" />
            </feSpecularLighting>
            <feComposite in="SourceGraphic" in2="spec" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
          </filter>
        </defs>

        {/* Ambient shadow underneath */}
        <ellipse cx="100" cy="162" rx="42" ry="10" fill="rgba(0,0,0,0.6)" opacity="0.8" />

        {/* Main liquid mercury sphere */}
        <circle cx="100" cy="98" r="54" fill="url(#mercuryCore)" />
        
        {/* Curving liquid contour light */}
        <path d="M 60 75 Q 100 50 135 75 Q 150 115 125 135 Q 85 145 65 120 Z" fill="url(#liquidSheen)" opacity="0.35" />

        {/* Primary specular bright spot */}
        <ellipse cx="78" cy="72" rx="16" ry="9" fill="#ffffff" opacity="0.85" transform="rotate(-30 78 72)" />
        <circle cx="73" cy="69" r="3.5" fill="#ffffff" />
        
        {/* Secondary subtle rim highlight */}
        <path d="M 142 98 A 46 46 0 0 1 122 136" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}
