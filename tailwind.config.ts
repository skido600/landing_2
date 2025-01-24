import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "serif"],
      Pompiere: ["Pompiere", "serif"],
      Galada: ["Galada", "serif"],
      Poppins: ["Poppins", "serif"],
      montserrat: ["Montserrat", "serif"],
    },
  },
  plugins: [],
} satisfies Config;
