import type { Ref } from "https://esm.sh/v128/preact@10.22.0/hooks/src/index.js";
import type { JSX } from "preact/jsx-runtime";

export interface ButtonProps {
  domRef?: Ref<HTMLButtonElement> | null;

  onClick?: () => void;

  children?: JSX.Element | string;

  className?: string;

  style?: JSX.CSSProperties | string;

  isDisabled: boolean;

  as?: any;

  size?: "small" | "large";

  variant?: "primary" | "secondary" | "error" | "warning" | "success";

  type?: "button" | "reset" | "submit";

  radius?: "sm" | "md" | "lg";
}

