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
     * Ref dom
     */
    domRef?: Ref<HTMLInputElement> | null;

    /**
     * Classname styling for div parent, not recomended to use
     */
    className?: string;

    classNames?: InputSlot;
    
    /**
     * Size of the input will consume by div parents
     */
    size?: keyof typeof InputVariants.sizes;

    /**
     * Color based on variant, only consume by div parent
     */
    color?: keyof typeof InputVariants.colors;

    /**
     * Variant can't be extended unless config the hooks
     */
    variant?: keyof typeof InputVariants.variants;


    /**
     *  State for read only
     */
    isReadonly?: boolean;

    /**
     *  State for read only
     */
    isFullWidth?: boolean;

    /**
     *  State for error
     */
    isError?: boolean;
    /**
     *  State for disabled
     */
    isDisabled?: boolean;

    /**
     * Is required ?
     * @default false
     */
    isRequired?: boolean;

    /**
     * label title
     */
    label?: string;

    /**
     * where label should rendered
     */
    labelPlacement?: "top" | "bottom" | "left" | "right";
  };
