import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "serif"],
    },
  },
  plugins: [],
} satisfies Config;
