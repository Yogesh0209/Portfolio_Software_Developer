import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/useTheme';

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={`relative inline-flex items-center justify-center p-2 rounded-xl border transition-all duration-300 min-w-[42px] min-h-[42px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A3FF] cursor-pointer ${
        isDark
          ? 'border-white/10 hover:border-[#00A3FF]/50 bg-white/[0.04] text-silver-300 hover:text-white shadow-[0_0_15px_rgba(0,0,0,0.5)]'
          : 'border-slate-200 hover:border-[#00A3FF]/60 bg-white text-slate-700 hover:text-slate-900 shadow-sm'
      } ${className}`}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-center pointer-events-none"
      >
        {isDark ? (
          <Sun className="w-4 h-4 text-[#38bdf8] hover:text-[#00A3FF] transition-colors" />
        ) : (
          <Moon className="w-4 h-4 text-indigo-600 hover:text-indigo-700 transition-colors" />
        )}
      </motion.div>
    </button>
  );
}
