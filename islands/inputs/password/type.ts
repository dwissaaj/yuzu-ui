import type { Ref } from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
import type { JSX } from "preact/jsx-runtime";
import type { PasswordsVariants } from "./password-variants.ts";
import type Label from "../label/Labels.tsx";
export type PasswordSlot = Partial<
  Record<
    | "yuzuBase"
    | "yuzuBaseDisabled"
    | "yuzuInput"
    | "yuzuInputError"
    | "yuzuIcon"
    | "yuzuDescription"
    | "yuzuLabelRequired"
    | "yuzuLabel"
    | "yuzuErrorMessage",
    string
  >
>;
export type PasswordProps =
  & Omit<JSX.IntrinsicElements["input"], "size" | "color">
  & {
    /**
     * Reference to the DOM element of the input.
     */
    domRef?: Ref<HTMLInputElement> | null;

    /**
     * Additional class names for the parent wrapper. Not recommended for general use.
     */
    className?: string;

    /**
     * Custom class names for various internal parts of the component.
     */
    classNames?: PasswordSlot;

    /**
     * Marks the input field as required.
     */
    isRequired?: boolean;

    /**
     * Determines the size of the input field.
     * Controlled by the `PasswordsVariants.sizes`.
     */
    size?: keyof typeof PasswordsVariants.sizes;

    /**
     * Color theme for the input field.
     * Controlled by the `PasswordsVariants.colors`.
     */
    color?: keyof typeof PasswordsVariants.colors;

    /**
     * Variant of the input field.
     * Controlled by the `PasswordsVariants.variants`. Cannot be extended without modifying the hooks.
     */
    variant?: keyof typeof PasswordsVariants.variants;

    /**
     * Marks the input field as read-only.
     */
    isReadonly?: boolean;

    /**
     * Expands the input to take the full width of its container.
     */
    isFullWidth?: boolean;

    /**
     * Marks the input as being in an error state.
     */
    isError?: boolean;

    /**
     * Message to display when the input is in an error state.
     */
    errorMessage?: string;

    /**
     * Disables the input field.
     */
    isDisabled?: boolean;

    /**
     * Hides any icons within the input field.
     */
    isIconHidden?: boolean;

    /**
     * Label for the input field.
     */
    label?: string;

    /**
     * Description for the input field.
     */
    description?: string;
  };
