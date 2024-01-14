import type { Config } from "tailwindcss";

export default {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./app/**/*.tsx", "./src/components/*.ts", "./app/**/*.ts", "./src/components/*.tsx"],
  theme: {
    borderColor: ({ theme }) => {
      return {
        DEFAULT: theme("colors.gray.700", "currentColor"),
        ...theme("colors"),
      };
    },
    divideColor: ({ theme }) => {
      return {
        DEFAULT: theme("colors.gray.700", "currentColor"),
        ...theme("colors"),
      };
    },
  },
  prefix: "",
} satisfies Config;
