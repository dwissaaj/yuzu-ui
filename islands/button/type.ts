import type { ChangeEvent } from "https://esm.sh/v128/preact@10.22.0/compat/src/index.js";
import type { Ref } from "https://esm.sh/v128/preact@10.22.0/hooks/src/index.js";
import type { JSX } from "preact/jsx-runtime";

export type ButtonProps =
  & Omit<JSX.IntrinsicElements["button"], "size" | "type">
  & {
    /**
     * Dom Ref fur button
     */
    domRef?: Ref<HTMLButtonElement> | null;
    /**
     * Return function void for button
     */
    onClick?: () => void;
    /**
     * Take any component for children
     */
    children?: JSX.Element | string;
    /**
     * Class tailwind for customize
     */
    className?: string;
    /**
     * Vanilla CSS type for component
     */
    style?: JSX.CSSProperties | string;
    /**
     * Either the button disable or not
     * @default false
     */
    isDisabled: boolean;
    /**
     * Customize can be done in button-variants
     * @default small
     */

    size?: "small" | "medium" | "large";

    /**
     * Variant type similar to Tailwinds Variants,
     * Costumize the variant color at `use-theme.ts`
     */
    variant?: "primary" | "secondary" | "error" | "warning" | "success";

    /**
     * Button action type
     * @default "button"
     */
    type?: "button" | "reset" | "submit";

    /**
     * Button radius
     * @default "small"
     */
    radius?: "sm" | "md" | "lg";

    /**
     * styling for classname if button disabled
     */
    disableClassName?: string | null;
    /**
     * Button take parent width
     */
    isFullWidth?: boolean;
  };
// export type ButtonProp = Exclude<JSX.IntrinsicElements['button'], 'size'>

// export type ButtonProps = CustomButtonProps & ButtonProp
