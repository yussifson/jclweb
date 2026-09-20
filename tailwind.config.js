/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          dark: "#0F172A",
          charcoal: "#18181B",
          gold: "#C59B27",
          goldLight: "#F5E7B9",
          slate: "#334155",
          muted: "#64748B",
          card: "#FFFFFF",
          surface: "#F8FAFC",
          accent: "#2563EB",
          pill: "#F1F5F9"
        }
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        'pill': '9999px',
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'float': '0 20px 40px -15px rgba(0, 0, 0, 0.08)',
        'modal': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
};
