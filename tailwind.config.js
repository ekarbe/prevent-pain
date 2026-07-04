/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      colors: {
        apple: {
          lightBg: "#f5f5f7",
          darkBg: "#000000",
          primaryTextLight: "#1d1d1f",
          secondaryTextLight: "#86868b",
          primaryTextDark: "#f5f5f7",
          secondaryTextDark: "#86868b",
          cardLight: "rgba(255, 255, 255, 0.65)",
          cardDark: "rgba(28, 28, 30, 0.65)",
          borderLight: "rgba(0, 0, 0, 0.04)",
          borderDark: "rgba(255, 255, 255, 0.1)",
        },
      },
      borderRadius: {
        bento: "2rem",
      },
      boxShadow: {
        apple: "0 4px 24px rgba(0, 0, 0, 0.04)",
        appleHover: "0 8px 32px rgba(0, 0, 0, 0.08)",
      },
      animation: {
        in: "animate-in .5s ease-out",
        "mesh-pulse": "mesh-pulse 15s ease-in-out infinite alternate",
      },
      keyframes: {
        "animate-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "mesh-pulse": {
          "0%": { transform: "scale(1) translate(0, 0)" },
          "50%": { transform: "scale(1.05) translate(-1%, 1%)" },
          "100%": { transform: "scale(1.1) translate(1%, -1%)" },
        },
      },
    },
  },
  plugins: [],
};
