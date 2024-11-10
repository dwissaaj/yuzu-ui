import type { JSX } from "preact/jsx-runtime";
import type {
  Ref,
} from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
import type { RadioVariants } from "./radio-variants.ts";
export type RadioProps =
  & Omit<JSX.IntrinsicElements["input"], "size" | "color">
  & {
    /**
     * Dom ref
     */
    domRef?: Ref<HTMLInputElement>;
    /**
     * The label for the Radio input, either as a string or JSX element.
     * It is displayed beside the radio button.
     *
     * @type {JSX.Element | string}
     */
    label?: JSX.Element | string;
    /**
     * Boolean flag to specify if the Radio input is disabled.
     * When `true`, the Radio input will be non-interactive and styled accordingly.
     *
     * @default false
     * @type {boolean}
     */

    isDisabled?: boolean;

    /**
     * Boolean flag to specify if the Radio input is in an error state.
     * When `true`, the Radio input will be styled with error styles.
     *
     * @type {boolean}
     */
    isError?: boolean;

    /**
     * Custom CSS style to apply when the Radio input is in an error state.
     *
     * @type {string}
     */
    errorStyle?: string;

    /**
     * Custom style to apply when the Radio input is disabled.
     * For better results and to avoid errors, it's recommended to modify the style in the variant file.
     *
     * @type {string}
     */
    yuzudisableStyle?: string;

    /**
     * Custom style to apply when the Radio input is in an error state.
     *
     * @type {string}
     */
    yuzuErrorStyle?: string;

    /**
     * Custom style to apply when the Radio input is disabled.
     *
     * @type {string}
     */
    disabledStyle?: string;

    /**
     * The content to be rendered as children inside the Radio component.
     * If `label` is used, `children` cannot be used.
     *
     * @example
     * <span>An Example!</span>
     *
     * @type {JSX.Element | string}
     */
    children?: JSX.Element | string;

    /**
     * Custom CSS class names for additional styling of the Radio component.
     * If no value is provided, it will default to an empty string.
     *
     * @default ""
     * @type {string}
     */
    className?: string;

    /**
     * The color variant for the Radio input.
     * The value is derived from the available colors in `RadioVariants.colors`.
     *
     * @type {keyof typeof RadioVariants.colors}
     */
    color?: keyof typeof RadioVariants.colors;

    /**
     * The text size variant for the Radio label.
     * The value is derived from the available sizes in `RadioVariants.sizes.text`.
     *
     * @type {keyof typeof RadioVariants.sizes.text}
     */
    textSize?: keyof typeof RadioVariants.sizes.text;

    /**
     * The size of the Radio button itself.
     * The value is derived from the available sizes in `RadioVariants.sizes.radio`.
     *
     * @type {keyof typeof RadioVariants.sizes.radio}
     */
    radioSize?: keyof typeof RadioVariants.sizes.radio;
  };
