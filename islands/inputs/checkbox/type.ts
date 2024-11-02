import type { JSX } from "preact/jsx-runtime";
import type { Ref } from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
export type CheckboxProps =
  & Omit<JSX.IntrinsicElements["input"], "size" | "color">
  & {


    /**
     * Dom ref
     */
    domRef?: Ref<HTMLInputElement> | null;

    /**
     * If checkbox is disabled, props will assign to input
     * disabled
     */
    isDisabled?: boolean;

    /**
     * custom style access for disable
     */
    isDisabledStyle?: string;

    /**
     * Input checked or not
     */
    isIndeterminate?: boolean;

    /**
     * The color of the label 
     */
    color?: "primary" | "secondary" | "error" | "warning" | "success" | "none";

    /**
     * Size of text label
     */
    size?: "small" | "medium" | "large";

    /**
     * Position between label and checkbox
     */
    labelPosition?: "left" | "right" | "bottom" | "top";

    /**
     * Label name
     */
    label?: string;

    /**
     * Class assign to the input
     */
    className?: string | null;

    /**
     * checkbox color
     */
    boxColor?:
      | "primary"
      | "secondary"
      | "error"
      | "warning"
      | "success"
      | "none";

    /**
     * How big the checkbox rendered
     */

    boxSize?: "small" | "medium" | "large";

    /**
     * custom access to box style
     */
    boxStyle?: string;

    /**
     * Radius of button box
     */
    boxRadius?: "full" | "large" | "small" | "none";
  };
