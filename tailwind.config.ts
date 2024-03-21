import type { Config } from "tailwindcss";
import { fontSize } from "./src/theme/text";
import { dark } from "./src/theme/dark";
// import { spacing } from "./src/theme/spacing";
import { spacing } from "./src/theme/spacing";

export default {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.tsx", "./src/**/*.ts"],
  theme: {
    colors: dark,
    fontSize,
    spacing,
    borderWidth: ({ theme }) => {
      return {
        full: "9999px",
        ...theme("spacing"),
      };
    },
    borderRadius: ({ theme }) => {
      return {
        ...theme("spacing"),
      };
    },
    borderColor: ({ theme }) => {
      return {
        DEFAULT: theme("colors.n.3", "currentColor"),
        ...theme("colors"),
      };
    },
    divideColor: ({ theme }) => {
      return {
        DEFAULT: theme("colors.n.3", "currentColor"),
        ...theme("colors"),
      };
    },
  },
  prefix: "",
} satisfies Config;
