import type { JSX } from "preact/jsx-runtime";
import type { Ref } from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
export type CheckboxProps =
  & Omit<JSX.IntrinsicElements["input"], "size" | "color">
  & {
    /**
     * Accept any children
     */
    children?: JSX.Element;

    /**
     * Dom ref
     */
    domRef?: Ref<HTMLInputElement> | null;

    /**
     * Label placement
     */

    isDisabled?: boolean;

    isDisabledStyle?: string;

    isIndeterminate?: boolean;

    color?: "primary" | "secondary" | "error" | "warning" | "success" | "none";

    size?: "small" | "medium" | "large";

    

    labelPosition?: "left" | "right" | "bottom" | "top";

    label?: string;
    className?: string | null;

    boxColor?:
      | "primary"
      | "secondary"
      | "error"
      | "warning"
      | "success"
      | "none";

    boxSize?: "small" | "medium" | "large";

    boxStyle?: string;

    boxRadius?: "full" | "large" | "small" | "none";
  };
