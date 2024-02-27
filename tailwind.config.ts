import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
      primary: "hsl(28, 88%, 62%)",
      textColor: "hsl(0, 0% 75%)",
      lightColor: "#eeeeee",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
