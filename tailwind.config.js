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
          blue: "#0466c8",
          blueDark: "#034078",
          blueDeep: "#001845",
          blueLight: "#e8f1fc",
          neon: "#FF5500",
          neonLight: "#FFF0EB",
          orange: "#FF6B00",
          slate: "#334155",
          muted: "#64748B",
          card: "#FFFFFF",
          surface: "#F8FAFC",
          dark: "#0466c8",
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
        'card': '0 4px 20px -2px rgba(4, 102, 200, 0.06)',
        'float': '0 20px 40px -15px rgba(4, 102, 200, 0.12)',
        'neon': '0 8px 25px -4px rgba(255, 85, 0, 0.35)',
        'modal': '0 25px 50px -12px rgba(0, 24, 69, 0.25)',
      }
    },
  },
  plugins: [],
};
