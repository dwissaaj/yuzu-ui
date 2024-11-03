import type { Ref } from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
import type { JSX } from "preact/jsx-runtime";

export type PasswordsProps =
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
     * disabled styling
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
     * Read only styling
     */
    isReadOnlyStyle?: string;

    /**
     * Required state
     * @default false
     */
    isRequiredStyle?: string;

    /**
     * Custom access to error style
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
     * Variant input, this for disable native html styling to 
     * prevent crash with parents ( div element )
     */
    variantFocus?: "underline" | "full";


    /**
     * Variant focus styling custom
     */
    variantFocusStyle?: string;
    
    /**
     * Check the value of variant
     */
    variantLabel?: "underline" | "full" | string
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
    closeIcon?: JSX.Element;

    /**
     * JSX For password icon
     */
    showIcon?: JSX.Element;

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

    /**
     * styling for icon 
     */
    variant?: "underline" | "full";
  };
