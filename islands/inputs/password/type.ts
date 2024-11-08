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

    /**
     * Variant can't be extended unless config the hooks
     */
    variant?: keyof typeof PasswordsVariants.variants;

    disabledStyle?: string;
    inputReadonlyStyle?: string;

    yuzuErrorStyle?: string;
    yuzuInputReadonlyStyle?: string;

    isReadonly?: boolean
    isFullWidth?: boolean;
    isError?: boolean;
    isDisabled?: boolean;
  };
