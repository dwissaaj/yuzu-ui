import { type Config } from "tailwindcss";
import { todos } from "./islands/theme/use-theme.ts";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  safelist: [
    {
      pattern: /from-(primary|secondary|success|error|warning)/,
      variants: ["hover", "active", "disabled", "focus"],
    },
    {
      pattern: /to-(primary|secondary|success|error|warning)/,
      variants: ["hover", "active", "disabled", "focus"],
    },
    {
      pattern: /bg-(primary|secondary|success|error|warning)/,
      variants: ["hover", "active", "disabled", "focus"],
    },
    {
      pattern: /ring-(primary|secondary|success|error|warning)/,
      variants: ["hover", "active", "focus"],
    },
  ],

  theme: {
    extend: {
      animation: {
        upAccord: "animation:slide-top .5s ease-in-out reverse both",
      },
      keyframes: {
        upAccord: {
          "0%, 100%": { transform: "translateY(-5px)" },
          "50%": { transform: "translateY(2px)" },
        },
      },
      colors: {
        primary: todos.value.primary,
        secondary: todos.value.secondary,
        error: todos.value.error,
        success: todos.value.success,
        warning: todos.value.warning,
      },
    },
  },
} satisfies Config;
