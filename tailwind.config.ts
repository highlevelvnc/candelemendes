import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0D384C",
          50: "#E6EDF1",
          100: "#C2D2DB",
          200: "#9AB4C2",
          300: "#7095A8",
          400: "#4F7C92",
          500: "#0D384C",
          600: "#0B3142",
          700: "#082836",
          800: "#061E29",
          900: "#03141B",
        },
        gold: {
          DEFAULT: "#F2B705",
          50: "#FEF7DC",
          100: "#FDEDB0",
          200: "#FBDD66",
          300: "#F8CB2E",
          400: "#F2B705",
          500: "#D9A304",
          600: "#B58804",
          700: "#8C6903",
        },
        graphite: {
          DEFAULT: "#2B2B2B",
          50: "#F5F5F5",
          100: "#E6E6E6",
          200: "#CFCFCF",
          300: "#A8A8A8",
          400: "#7A7A7A",
          500: "#525252",
          600: "#3D3D3D",
          700: "#2B2B2B",
          800: "#1C1C1C",
          900: "#0F0F0F",
        },
      },
      fontFamily: {
        display: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        gold: "0 10px 30px -10px rgba(242, 183, 5, 0.45)",
        navy: "0 20px 40px -20px rgba(13, 56, 76, 0.45)",
      },
      backgroundImage: {
        "gold-shine":
          "linear-gradient(135deg, #F2B705 0%, #FFD86B 45%, #F2B705 100%)",
        "navy-radial":
          "radial-gradient(circle at 30% 0%, #144B65 0%, #0D384C 55%, #082836 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) both",
        sparkle: "sparkle 3s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        sparkle: {
          "0%,100%": { opacity: "0.3", transform: "scale(0.85)" },
          "50%": { opacity: "1", transform: "scale(1.15)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
