import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory:       "#FAF8F4",
        cream:       "#F5F0E8",
        sand:        "#EDE5D8",
        seafoam:     "#D6EEE8",
        sky:         "#EAF4FB",
        "powder-blue":"#C8DCF0",
        powder:      "#B8D4EC",
        ocean:       "#7BAFD4",
        denim:       "#4A7FA5",
        navy:        "#1C3A5E",
        "navy-mid":  "#2D4E7A",
        charcoal:    "#3D3D3D",
        "charcoal-light":"#6B6B6B",
        muted:       "#8A8A8A",
        gold:        "#C9A96E",
        butter:      "#F5D98A",
        paper:       "#F5F0E8",
        "warm-white":"#FAF8F4",
        // legacy aliases
        "cream-dark":"#EDE5D8",
        "denim-blue":"#7BAFD4",
        "slate-blue":"#4A7FA5",
        "powder-blue-light":"#EAF4FB",
      },
      fontFamily: {
        serif:   ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
        sans:    ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
        caveat:  ["var(--font-caveat)", "Caveat", "cursive"],
      },
      fontSize: {
        "display-2xl": ["6.5rem",  { lineHeight: "1.0",  letterSpacing: "-0.03em" }],
        "display-xl":  ["5rem",    { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "display-lg":  ["3.75rem", { lineHeight: "1.08", letterSpacing: "-0.015em" }],
        "display-md":  ["3rem",    { lineHeight: "1.12", letterSpacing: "-0.01em" }],
        "display-sm":  ["2.25rem", { lineHeight: "1.18", letterSpacing: "-0.005em" }],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        polaroid:         "0 4px 20px rgba(28,58,94,0.10), 0 1px 4px rgba(28,58,94,0.06)",
        "polaroid-hover": "0 16px 48px rgba(28,58,94,0.16), 0 2px 8px rgba(28,58,94,0.08)",
        card:             "0 2px 16px rgba(28,58,94,0.07)",
        "card-hover":     "0 12px 48px rgba(28,58,94,0.13)",
        lift:             "0 20px 60px rgba(28,58,94,0.15)",
        ocean:            "0 8px 32px rgba(123,175,212,0.25)",
      },
      keyframes: {
        fadeUp:    { "0%": { opacity:"0", transform:"translateY(32px)" }, "100%": { opacity:"1", transform:"translateY(0)" } },
        fadeIn:    { "0%": { opacity:"0" },  "100%": { opacity:"1" } },
        slideLeft: { "0%": { opacity:"0", transform:"translateX(40px)" }, "100%": { opacity:"1", transform:"translateX(0)" } },
        float:     { "0%,100%": { transform:"translateY(0px) rotate(var(--rot,0deg))" }, "50%": { transform:"translateY(-10px) rotate(var(--rot,0deg))" } },
        flutter:   { "0%,100%": { transform:"scaleX(1) translateY(0)" }, "25%": { transform:"scaleX(0.65) translateY(-4px)" }, "75%": { transform:"scaleX(0.8) translateY(-2px)" } },
        wave:      { "0%": { backgroundPosition:"0% 50%" }, "50%": { backgroundPosition:"100% 50%" }, "100%": { backgroundPosition:"0% 50%" } },
      },
      animation: {
        "fade-up":   "fadeUp 0.7s ease-out forwards",
        "fade-in":   "fadeIn 0.5s ease-out forwards",
        "slide-left":"slideLeft 0.7s ease-out forwards",
        float:       "float 5s ease-in-out infinite",
        flutter:     "flutter 2.5s ease-in-out infinite",
        wave:        "wave 8s ease infinite",
      },
    },
  },
  plugins: [],
};
export default config;
