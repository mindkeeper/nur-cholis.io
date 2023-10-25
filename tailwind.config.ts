import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "992px",
      lg: "1280px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        dawn: "rgba(255, 255, 255, var(--tw-bg-opacity)",
      },
      colors: {
        primary: "#151515",
        secondary: "#202022",
        grey: "#94928a",
        "icon-gret": "#949495",
      },
      minHeight: {
        inherit: "inherit",
      },
    },
  },
  plugins: [],
};
export default config;
