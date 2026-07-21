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
        // YouTube-inspired red, pushed slightly toward magenta for a more premium feel
        primary: {
          DEFAULT: "#FF1440",
          dark: "#C4102F",
          light: "#FF4D6D",
        },
        // Warm ember accent — pairs with primary in gradients, evokes "rendering/upload" energy
        ember: "#FF7A45",
        ink: "#F5F5F7",
        muted: "#9A9AA3",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      backgroundImage: {
        "grain-fade":
          "radial-gradient(120% 120% at 50% 0%, rgba(255,20,64,0.16) 0%, rgba(10,10,11,0) 60%)",
        "glow-red": "linear-gradient(135deg, #FF1440 0%, #FF7A45 100%)",
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
