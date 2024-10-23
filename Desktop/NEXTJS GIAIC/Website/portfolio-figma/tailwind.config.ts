import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode:'jit',
  theme: {
    extend: {
      colors: {
        colorDark: '#043873',
      },
    },
  },
  plugins: [],
};
export default config;
