import { transform } from "https://deno.land/x/esbuild@v0.20.2/mod.js";
import { type Config } from "tailwindcss";

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
        },
      },
    },
  },
} satisfies Config;
