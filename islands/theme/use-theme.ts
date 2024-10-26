import { signal } from "https://esm.sh/v135/@preact/signals-core@1.5.1/X-ZS8q/dist/signals-core.js";

export const todos = signal({
  primary: "#12fff3",
  secondary: "secondary",
  success: "#27e650",
  error: "#ff1c2b",
  warning: "#f0990e",
});
console.log(todos.value.error);
