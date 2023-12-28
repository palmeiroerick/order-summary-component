import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      lg: "1440px",
    },
    colors: {
      /* Primary */
      PaleBlue: "#e0e8ff",
      BrightBlue: "#3829e0",

      /* Neutral */
      VeryPaleBlue: "#f5f7ff",
      DesaturatedBlue: "#7280a7",
      DarkBlue: "#1f2f56",
    },
    fontWeight: {
      medium: "500",
      bold: "700",
      black: "900",
    },
  },
  plugins: [],
};

export default config;
