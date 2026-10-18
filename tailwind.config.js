/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      colors: {
        background: '#050505',
        surface: {
          DEFAULT: '#0a0a0a',
          card: '#0d0d0d',
          hover: '#141414',
          border: 'rgba(255, 255, 255, 0.1)',
          borderHover: 'rgba(255, 255, 255, 0.25)',
        },
        silver: {
          100: '#ffffff',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
        },
        electric: {
          start: '#1F6FFF',
          end: '#00A3FF',
          glow: 'rgba(31, 111, 255, 0.45)',
        },
        syntax: {
          function: '#DCDCAA',
          type: '#4EC9B0',
          string: '#CE9178',
          keyword: '#569CD6',
          number: '#B5CEA8',
          control: '#C586C0',
          comment: '#6A9955',
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'glow-subtle': '0 0 40px -10px rgba(255, 255, 255, 0.12)',
        'glow-silver': '0 0 60px -15px rgba(220, 225, 235, 0.15)',
        'glow-electric': '0 0 24px rgba(31, 111, 255, 0.45)',
        'glow-electric-lg': '0 0 35px rgba(0, 163, 255, 0.6)',
        'card-inner': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'subtle-card': 'linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)',
        'gradient-electric': 'linear-gradient(135deg, #1F6FFF 0%, #00A3FF 100%)',
      }
    },
  },
  plugins: [],
}
