import type { Ref } from "https://esm.sh/v128/preact@10.22.0/hooks/src/index.js";
import type { JSX } from "preact/jsx-runtime";

export interface ButtonProps {
  ref?: Ref<HTMLButtonElement> | null;
  /**
   * Dom Ref fur button
   */
  onClick?: () => void;
  /**
   * Return function void for button
   */
  children?: JSX.Element | string;
  /**
   * Take any component for children
   */
  className?: string;
  /**
   * Class tailwind for customize
   */
  style?: JSX.CSSProperties | string;
  /**
   * Vanilla CSS type for component
   */
  isDisabled: boolean;
  /**
   * Either the button disable or not
   * @default false
   */
  as?: any;
  /**
   * Take any component as a base
   */

  size?: "small" | "medium" | "large";
  /**
   * Customize can be done in button-variants
   * @default "small"
   */

  variant?: "primary" | "secondary" | "error" | "warning" | "success";
  /**
   * Variant type similar to Tailwinds Variants,
   * Costumize the variant color at `use-theme.ts`
   */

  type?: "button" | "reset" | "submit";
  /**
   * Button action type
   * @default "button"
   */

  radius?: "sm" | "md" | "lg";
  /**
   * Button radius
   * @default "small"
   */

  disableClassName?: string | null;
  /**
   * styling for classname if button disabled
   */
  isFullWidth?: boolean;
  /**
   * Button take parent width
   */
  
}
