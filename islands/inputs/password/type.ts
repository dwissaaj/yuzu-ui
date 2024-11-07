import type { Ref } from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
import type { JSX } from "preact/jsx-runtime";
import type { PasswordsVariants } from "./password-variants.ts";

export type PasswordsProps =
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
    style?: JSX.CSSProperties

    /**
     * Size of the input will consume by div parents
     */
    parentSizes: keyof typeof PasswordsVariants.parentSizes

    parentColor: keyof typeof PasswordsVariants.parentColors
  
    parentVariant: keyof typeof PasswordsVariants.parentVariants

    parentDisableStyle: keyof typeof PasswordsVariants.parentDisableStyle

    


  }