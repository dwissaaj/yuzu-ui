import type { Ref } from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
import type { JSX } from "preact/jsx-runtime";

export type InputProps =
  & Omit<JSX.IntrinsicElements["input"], "size" | "color">
  & {
    /**
     * Ref dom
     */
    domRef?: Ref<HTMLInputElement> | null;

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
     * Classname styling for input, but best practice change the styling
     * via variant file
     */
    className?: string | null;

    /**
     * State for input
     * @default false
     */
    isError?: boolean;

    /**
     * disabled styling, but for better result and to prevent error change
     * the style to variant file
     */
    isDisabledStyle?: string;

    /**
     * Is input disabled
     * @default false
     */
    isDisabled?: boolean;

    /**
     * Is input readonly
     * @default false
     */
    isReadonly?: boolean;

    /**
     * Is input required
     * @default false
     */
    isRequired?: boolean;

    /**
     * Read only styling but for better result and to prevent error change
     * the style to variant file
     */
    isReadOnlyStyle?: string;

    /**
     * Required style but for better result and to prevent error change
     * the style to variant file
     */
    isRequiredStyle?: string;

    /**
     * Custom access to error style but for better result and to prevent error change the style to variant file
     */
    isErrorStyle?: string;

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
    color?:
      | "primary"
      | "secondary"
      | "error"
      | "warning"
      | "success"
      | "default";

    /**
     * Label title element
     */
    label?: string;

    /**
     * Label placement
     */
    labelPlacement?: "left" | "right" | "bottom" | "top";
  };
