import type { Ref } from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
import type { JSX } from "preact/jsx-runtime";
import type { PasswordsVariants } from "./password-variants.ts";
import type  Label  from "../label/Labels.tsx";
export type LabelSlot = Partial<
  Record<
    |"yuzuBase"
    | "yuzuBaseDisabled"
    | "yuzuInput"
    | "yuzuInputError"
    | "yuzuInputReadonly"
    | "yuzuInputDisabled"
    | "yuzuDescription"
    | "yuzuDescriptionError"
    | "yuzuDescriptionDisabled"
    | "yuzuLabelRequired"
    | "yuzuLabelError",
    string
  >
>;
export type PasswordProps =
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

    /**
     * Size of the input will consume by div parents
     */
    size?: keyof typeof PasswordsVariants.sizes;

    /**
     * Color based on variant, only consume by div parent
     */
    color?: keyof typeof PasswordsVariants.colors;

    /**
     * Variant can't be extended unless config the hooks
     */
    variant?: keyof typeof PasswordsVariants.variants;


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

    isIconHidden?: boolean

    label?: string

    description?: string 

  };
