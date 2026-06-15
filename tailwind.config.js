/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Plus Jakarta Sans Variable", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        sans:    ["DM Sans Variable", "DM Sans", "system-ui", "sans-serif"],
        serif:   ["Plus Jakarta Sans Variable", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      colors: {
        neu: {
          bg:     "#E0E5EC",
          fg:     "#3D4852",
          muted:  "#6B7280",
        },
        accent: {
          DEFAULT: "#6C63FF",
          light:   "#8B84FF",
          sec:     "#38B2AC",
        },
      },
      borderRadius: {
        card: "32px",
      },
      boxShadow: {
        neu:       "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5)",
        "neu-lg":  "12px 12px 20px rgb(163,177,198,0.7), -12px -12px 20px rgba(255,255,255,0.6)",
        "neu-sm":  "5px 5px 10px rgb(163,177,198,0.6), -5px -5px 10px rgba(255,255,255,0.5)",
        "neu-in":  "inset 6px 6px 10px rgb(163,177,198,0.6), inset -6px -6px 10px rgba(255,255,255,0.5)",
        "neu-in-deep": "inset 10px 10px 20px rgb(163,177,198,0.7), inset -10px -10px 20px rgba(255,255,255,0.6)",
        "neu-in-sm": "inset 3px 3px 6px rgb(163,177,198,0.6), inset -3px -3px 6px rgba(255,255,255,0.5)",
      },
      letterSpacing: {
        widest: "0.25em",
      },
    },
  },
  plugins: [],
}
