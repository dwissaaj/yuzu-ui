import type { Ref } from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
import type { JSX } from "preact/jsx-runtime";

export type InputProps =
  & Omit<JSX.IntrinsicElements["input"], "size" | "color">
  & {
    /**
     * Children for input, I think this is unecessery cause input cant take any html element
     */
    children?: JSX.Element | null;
    /**
     * Ref dom
     */
    ref: Ref<HTMLInputElement> | null;

    /**
     * Input value
     */
    value?: JSX.IntrinsicElements["input"]["value"];

    /**
     * Html input value for keyboard
     */
    inputMode?:
      | "none"
      | "text"
      | "decimal"
      | "numeric"
      | "tel"
      | "search"
      | "email"
      | "url";

    /**
     * Input field type
     */
    type?: JSX.IntrinsicElements["input"]["type"];
    /**
     * input ID
     */
    id?: string;

    /**
     * Classname styling
     */
    className?: string | null;

    /**
     * State for input
     * @default false
     */
    isError?: boolean;

    /**
     * disable state
     * @default false
     */
    isDisabledStyle?: string;

    /**
     * Read only styling
     */
    isReadOnlyClass?: string;

    /**
     * Required state
     * @default false
     */
    isRequiredStyle?: string;

    /**
     * Name for form control
     */
    name?: string;

    /**
     * Placeholder text
     */
    placeholder?: string;

    /**
     * Vanilla css plain styling
     */
    style?: JSX.CSSProperties;

    /**
     * Variant option
     */
    variant?: "underline" | "full";

    /**
     * How big title value, default to 128px to small,  large
     * 208px
     */
    size?: "small" | "medium" | "large";

    /**
     * Should input same width as parents
     * @default false
     */

    isFullWidth?: boolean;

    /**
     * JSX For password icon
     */
    passwordIcon?: JSX.Element;

    /**
     * color input
     */
    colors?: "primary" | "secondary" | "error" | "warning" | "success" | "none";

    /**
     * Label title element
     */
    label?: string;

    /**
     * Label placement
     */
    labelPlacement?: "left" | "right" | "bottom" | "top";


  };
