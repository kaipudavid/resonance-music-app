import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Resonance brand palette
        resonance: {
          50: '#f8f6ff',
          100: '#f3edff',
          200: '#e6d9ff',
          300: '#d4b8ff',
          400: '#b891ff',
          500: '#9d5eff',
          600: '#8b3dff',
          700: '#7e2eff',
          800: '#6a1f9f',
          900: '#591a85',
        },
        // Dark theme
        dark: {
          50: '#f8f8f8',
          100: '#e8e8e8',
          200: '#d0d0d0',
          300: '#a8a8a8',
          400: '#808080',
          500: '#505050',
          600: '#383838',
          700: '#262626',
          800: '#1a1a1a',
          900: '#0f0f0f',
        },
      },
      backgroundColor: {
        'studio': '#0a0e27',
        'studio-card': '#1a1f3a',
        'studio-hover': '#252d4a',
      },
      textColor: {
        'studio': '#e8e8e8',
      },
      borderColor: {
        'studio': '#2a3550',
      },
      backgroundImage: {
        'gradient-studio': 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)',
        'gradient-accent': 'linear-gradient(135deg, #8b3dff 0%, #d4b8ff 100%)',
      },
      boxShadow: {
        'studio': '0 4px 20px rgba(0, 0, 0, 0.5)',
        'studio-lg': '0 20px 60px rgba(0, 0, 0, 0.7)',
        'studio-neon': '0 0 20px rgba(139, 61, 255, 0.3)',
      },
      animation: {
        'pulse-neon': 'pulse-neon 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'waveform': 'waveform 1s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        'pulse-neon': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'waveform': {
          '0%, 100%': { transform: 'scaleY(0.5)' },
          '50%': { transform: 'scaleY(1)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
