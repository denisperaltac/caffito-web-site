import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "primary-green": "rgba(13, 214, 58, 1)",
        "primary-green-hover": "rgba(13, 214, 58, 0.5)",
        "primary-green-hover-hard": "rgba(13, 214, 58, 0.1)",
        "primary-red": "rgba(238, 0, 0, 1)",
        "primary-red-hover": "rgba(238, 0, 0, 0.5)",
        "primary-red-hover-hard": "rgba(238, 0, 0, 0.2)",
        "primary-blue": "rgba(14, 165, 233,1)",
        "primary-blue-hover": "rgba(14, 165, 233,0.5)",
        "primary-blue-hover-hard": "rgba(14, 165, 233,0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
