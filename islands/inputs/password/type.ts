import type { Ref } from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
import type { JSX } from "preact/jsx-runtime";
import type { PasswordsVariants } from "./password-variants.ts";

export type PasswordNewProps =
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
     * Vanilla css plain styling
     */
    style?: JSX.CSSProperties;

    /**
     * Size of the input will consume by div parents
     */
    size?: keyof typeof PasswordsVariants.sizes;

    color?: keyof typeof PasswordsVariants.colors;

    variant?: keyof typeof PasswordsVariants.variants;

    disabledStyle?: keyof typeof PasswordsVariants.disabledStyle;
    errorStyle?: keyof typeof PasswordsVariants.errorStyle;

    isFullWidth?: boolean;

    isError?: boolean;
    isDisabled?: boolean;
  };
