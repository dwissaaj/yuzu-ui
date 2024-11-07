import type { Ref } from "https://esm.sh/v128/preact@10.22.0/hooks/src/index.js";
import type { JSX } from "preact/jsx-runtime";
import type { ButtonVariants } from "./button-variant.ts";

export type ButtonProps =
  & Omit<JSX.IntrinsicElements["button"], "size" | "type">
  & {
    /**
     * Dom Ref for button
     */
    domRef?: Ref<HTMLButtonElement>;

    /**
     * Return function void for button
     */
    onClick?: () => void;

    /**
     * Take any component for children, can't be used with label
     *
     * @example
     * <Button> <span>An Example!! </span> </Button>
     */
    children?: JSX.Element | string;

    /**
     * Class tailwind for customize, if no argument provided will return empty string to css
     * @type {string} empty string if not provided
     */
    className?: string;

    /**
     * Vanilla CSS type for component
     */
    style?: JSX.CSSProperties | string;

    /**
     * Either the button disable or not
     * @default false
     */
    isDisabled?: boolean;

    /**
     * Customize can be done in button-variants and can be extended with additional size
     * @default small
     *
     * Add Custom size
     * @example
     * size: {extra-large: "w-72 h-42"}
     */
    size?: keyof typeof ButtonVariants.sizes;

    /**
     * Variant type similar to Tailwinds Variants, can be extended in the
     * variant file at `use-theme.ts`. The default enum can choose, if not provided will defaulted to "primary"
     * @enum
     * "primary" | "secondary" | "error" | "warning" | "success" | "Your Variant"
     *
     * @default "primary"
     * @example {variants: {custom: "bg-yellow-500"}}
     */
    variant?: keyof typeof ButtonVariants.variantsStyle;

    /**
     * Button action type
     * @default "button"
     */
    types?: "button" | "reset" | "submit";

    /**
     * Button radius can be extended in variant file
     * @default "small"
     *
     * @enum {"sm" | "md" | "lg"}
     */
    radius?: keyof typeof ButtonVariants.radiusStyle;

    /**
     * @see Only use this for hooks or variant
     * This for styling variant disabled, only use if you know what you are doing better Change styling for disabled is via variant file
     */

    yuzuDisableStyle?: string;

    /**
     * @default false
     * Should a Button take parent width don't use with size
     */
    isFullWidth?: boolean;
  };
