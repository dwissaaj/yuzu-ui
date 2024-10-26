import { transform } from "https://deno.land/x/esbuild@v0.20.2/mod.js";
import { type Config } from "tailwindcss";
import { todos } from "./islands/theme/use-theme.ts";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
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
        success: todos.value.error,
        warning: todos.value.warning,
      },
    },
  },
} satisfies Config;
