import type { Ref } from "preact";

import type { JSX } from "preact/jsx-runtime";
import type { PasswordsVariants } from "./password-variants.ts";
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
     * Custom styles for specific component slots. Possible slot keys are:
     *
     * - `yuzuBase`: The base classes applied to the password field container.
     * - `yuzuBaseDisabled`: The classes applied when the password field is disabled.
     * - `yuzuInput`: The classes applied to the password input itself.
     * - `yuzuInputError`: The classes applied to the password input when there is an error.
     * - `yuzuIcon`: The classes applied to the password visibility toggle icon.
     * - `yuzuDescription`: The classes applied to the password description.
     * - `yuzuLabelRequired`: The classes applied to the label when the password field is required.
     * - `yuzuLabel`: The classes applied to the label of the password field.
     * - `yuzuErrorMessage`: The classes applied to the error message displayed for the password field.
     *
     * @type {PasswordSlot}
     * @default {}
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
