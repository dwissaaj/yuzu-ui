import type { JSX } from "preact/jsx-runtime";
import type {
  Ref,
} from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
import type { RadioVariants } from "./radio-variants.ts";

export type RadioSlot = Partial<
  Record<
    | "yuzuBase"
    | "yuzuLabel"
    | "yuzuInput"
    | "yuzuInputDisabled",
    string
  >
>;

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
     * @type {string}
     */
    label?: string;
    /**
     * Boolean flag to specify if the Radio input is disabled.
     * When `true`, the Radio input will be non-interactive and styled accordingly.
     *
     * @default false
     * @type {boolean}
     */

    isDisabled?: boolean;

    /**
     * Custom style to apply when the Radio input is disabled.
     *
     * @type {string}
     */
    disabledStyle?: keyof typeof RadioVariants.disabledStyles;

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

    /**
     * Custom styles for specific component slots. Possible slot keys are:
     * - `yuzuBase`: The base classes applied to the radio button wrapper.
     * - `yuzuLabel`: The base classes applied to the label of the radio button.
     * - `yuzuInput`: The base classes applied to the radio input element.
     * - `yuzuInputDisabled`: The classes applied to the radio input element when it is disabled.
     * @type {RadioGroupSlot}
     * @default {}
     */
    classNames?: RadioSlot;

    /**
     * Children inside radio, if used then won't work with native children radio item
     */
    children?: JSX.Element;
  };
