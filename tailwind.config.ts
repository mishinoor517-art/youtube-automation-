import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core dark canvas — near-black, not pure black, so glass cards have room to breathe
        canvas: "#0A0A0B",
        surface: "#121214",
        "surface-light": "#1A1A1D",
        border: "rgba(255,255,255,0.08)",
        // Electric violet — premium "AI intelligence" primary
        primary: {
          DEFAULT: "#8B5CF6",
          dark: "#6D28D9",
          light: "#A78BFA",
        },
        // Cyan accent — pairs with primary in gradients, evokes "video/tech" energy
        ember: "#22D3EE",
        ink: "#F5F5F7",
        muted: "#9A9AA3",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      backgroundImage: {
        "grain-fade":
          "radial-gradient(120% 120% at 50% 0%, rgba(139,92,246,0.18) 0%, rgba(10,10,11,0) 60%)",
        "glow-red": "linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        scrub: {
          "0%": { transform: "translateX(-6%)" },
          "50%": { transform: "translateX(6%)" },
          "100%": { transform: "translateX(-6%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3.5s ease-in-out infinite",
        scrub: "scrub 4s ease-in-out infinite",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
