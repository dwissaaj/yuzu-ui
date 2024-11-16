import type { Ref } from "https://esm.sh/v128/preact@10.22.0/hooks/src/index.js";
import type { JSX } from "preact/jsx-runtime";
import type { ButtonVariants } from "./button-variant.ts";
export type ButtonSlot = Partial<
  Record<
    | "yuzuBase"
    | "yuzuDisabled"
    | "yuzuSpinner",
    string
  >
>;
export type ButtonProps =
  & Omit<JSX.IntrinsicElements["button"], "size" | "loading">
  & {
    /**
     * Dom Ref for button
     */
    domRef?: Ref<HTMLButtonElement>;

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
     * Custom class names for specific parts of the button.
     * Use this to style the button's base, disabled state, or spinner individually.
     * @type {ButtonSlot}
     */
    classNames?: ButtonSlot;

    /**
     * Either the button disable or not
     * @default false
     */
    isDisabled?: boolean;

    /**
     * Customize can be done in button-variants and can be extended with additional size
     * @default small
     * Add Custom size
     * @example
     * size: {extra-large: "w-72 h-42"}
     */
    size?: keyof typeof ButtonVariants.sizes.buttons;

    /** @enum
    * "solid" | "border" | "ghost" | "flat" | "Your Variant"
    *
     * @default "solid"
     * @example {variants: {custom: "bg-yellow-500"}}
     */
    variant?: keyof typeof ButtonVariants.variants;

    /**
    *color type similar to Tailwinds Variants, can be extended in the
     * variant file at `use-theme.ts`. The default enum can choose, if not provided will defaulted to "solid"
     * @enum
     * "primary" | "secondary" | "error" | "warning" | "success" | "Your Variant"
     *
     */
    color?: keyof typeof ButtonVariants.colors;

    /**
     * Button radius can be extended in variant file
     * @default "small"
     *
     * @enum {"sm" | "md" | "lg |"fullWidth"}
     */
    radius?: keyof typeof ButtonVariants.radiusStyle;

    /**
     * @default false
     * Should a Button take parent width
     */
    isFullWidth?: boolean;

    /**
     * Indicates whether the button is in a loading state.
     * When true, a loading spinner will be displayed inside the button.
     * @default false
     * @type {boolean}
     */
    isLoading?: boolean;

    /**
     * The size of the spinner when the button is loading.
     * You can select from predefined spinner sizes in the ButtonVariants file.
     * @type {keyof typeof ButtonVariants.spinnersSizes}
     */
    spinnerSize?: keyof typeof ButtonVariants.spinnersSizes;

    /**
     * The content that will be placed after the button text. Can be an icon or other content.
     * @type {JSX.Element}
     */
    endContent?: JSX.Element;

    /**
     * The content that will be placed before the button text. Can be an icon or other content.
     * @type {JSX.Element}
     */
    startContent?: JSX.Element;
  };
