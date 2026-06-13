import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // NOTE: token names are kept (brand.cyan, brand.navy, …) so existing
        // class names keep working, but the VALUES were remapped from the old
        // navy + neon-cyan "AI default" palette to a warm "iron & chalk" scheme:
        // espresso charcoal + warm paper + an ember red-orange accent.
        brand: {
          navy: "#1A1613",       // espresso charcoal (was navy)
          slate: "#2A241E",      // warm dark card surface
          cyan: "#E2552B",       // ember accent (was neon cyan)
          "cyan-dim": "#B23E1B", // deeper ember — accent text on light bg
        },
        surface: {
          base: "#F3EFE7",       // warm paper, not pure white
          card: "#FBF9F4",
          alt: "#EAE3D5",
        },
        ink: {
          900: "#1C1917",
          800: "#2D2823",
          500: "#6F675B",
          300: "#CFC7B9",
        },
        state: {
          success: "#3F8F4F",
          warn: "#D08A1E",
          error: "#C2412B",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        // tightened from the soft 8–28px "SaaS template" range to a crisper,
        // more industrial scale
        sm: "4px",
        md: "6px",
        lg: "10px",
        xl: "14px",
      },
      boxShadow: {
        // flatter, warmer shadows — no neon ring glows
        card: "0 1px 2px rgba(28,25,23,.05), 0 6px 18px rgba(28,25,23,.07)",
        lift: "0 14px 34px rgba(28,25,23,.14)",
        glow: "0 0 0 4px rgba(226,85,43,.16)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out both",
        "pulse-glow": "pulseGlow 2.6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(226,85,43,0.45)" },
          "50%": { boxShadow: "0 0 0 12px rgba(226,85,43,0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
