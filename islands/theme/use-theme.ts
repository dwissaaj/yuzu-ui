import { signal, Signal } from "@preact/signals";

/*
Global Configuration for theme
*/
interface Theme {
  primary: string;
  secondary: string;
  success: string;
  error: string;
  warning: string;
}

export const todos: Signal<Theme> = signal({
  primary: "#12fff3",
  secondary: "#F312FF",
  success: "#27e650",
  error: "#ff1c2b",
  warning: "#f0990e",
});
