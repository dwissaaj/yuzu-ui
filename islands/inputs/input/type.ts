import type { Ref } from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
import type { JSX } from "preact/jsx-runtime";
import type { InputVariants } from "./input-variants.ts";

export type InputSlot = Partial<
  Record<
    | "yuzuBase"
    | "yuzuBaseDisabled"
    | "yuzuBaseError"
    | "yuzuBaseReadonly"
    | "yuzuInput"
    | "yuzuInputDisabled"
    | "yuzuInputError"
    | "yuzuInputReadonly"
    | "yuzuLabel"
    | "yuzuLabelRequired",
    string
  >
>;
export type InputProps =
  & Omit<JSX.IntrinsicElements["input"], "size" | "color">
  & {
    /**
     * Reference to the input DOM element.
     *
     * @type {Ref<HTMLInputElement> | null}
     */
    domRef?: Ref<HTMLInputElement> | null;

    /**
     * Custom class name for the parent container.
     * **Note:** Not recommended for use.
     *
     * @type {string}
     */
    className?: string;

    /**
     * Custom styles for specific parts of the input component. Possible slot keys are:
     *
     * - `yuzuBase`: The base classes applied to the input container.
     * - `yuzuBaseDisabled`: The classes applied to the input when it is disabled.
     * - `yuzuBaseError`: The classes applied to the input when it has an error state.
     * - `yuzuBaseReadonly`: The classes applied to the input when it is in read-only mode.
     * - `yuzuInput`: The classes applied to the input element itself.
     * - `yuzuInputDisabled`: The classes applied to the input element when disabled.
     * - `yuzuInputError`: The classes applied to the input element when there's an error.
     * - `yuzuInputReadonly`: The classes applied to the input element when in read-only mode.
     * - `yuzuLabel`: The classes applied to the label of the input.
     * - `yuzuLabelRequired`: The classes applied to the label when the field is required.
     *
     * @type {InputSlot}
     * @default {}
     */
    classNames?: InputSlot;

    /**
     * The size of the input component.
     * Consumed by the parent container for styling purposes.
     *
     * @type {keyof typeof InputVariants.sizes}
     */
    size?: keyof typeof InputVariants.sizes;

    /**
     * The color variant for the input component.
     * Consumed by the parent container for styling purposes.
     *
     * @type {keyof typeof InputVariants.colors}
     */
    color?: keyof typeof InputVariants.colors;

    /**
     * The variant of the input component.
     * Variants cannot be extended unless configured through hooks.
     *
     * @type {keyof typeof InputVariants.variants}
     */
    variant?: keyof typeof InputVariants.variants;

    /**
     * Whether the input is read-only.
     *
     * @type {boolean}
     */
    isReadonly?: boolean;

    /**
     * Whether the input should span the full width of its container.
     *
     * @type {boolean}
     */
    isFullWidth?: boolean;

    /**
     * Whether the input is in an error state.
     *
     * @type {boolean}
     */
    isError?: boolean;

    /**
     * Whether the input is disabled.
     *
     * @type {boolean}
     */
    isDisabled?: boolean;

    /**
     * Whether the input is required.
     *
     * @type {boolean}
     * @default false
     */
    isRequired?: boolean;

    /**
     * The label for the input field.
     *
     * @type {string}
     */
    label?: string;

    /**
     * The position of the label relative to the input field.
     *
     * @type {"top" | "bottom" | "left" | "right"}
     */
    labelPlacement?: "top" | "bottom" | "left" | "right";
  };
