import type { Ref } from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
import type { JSX } from "preact/jsx-runtime";

export interface InputProps {
  children?: JSX.Element | null;
  /**
   * Children for input, I think this is unecessery cause input cant take any html element
   */
  ref: Ref<HTMLInputElement> | null;
  /**
   * Ref dom
   */
  title?: string;
  /**
   * Title for
   */

  size?: "small" | "large";
  /**
   * How big title value, default to 128px to small and large
   * 208px
   */
  fullWidth?: boolean;
  /**
   * Should input same width as parents
   */

  id?: string;
  /**
   * input ID
   */
  className?: string | null;
  /**
   * Classname styling
   */

  isError?: boolean;
  /**
   * State for input
   * @default false
   */

  inputMode?:
    | "none"
    | "text"
    | "decimal"
    | "numeric"
    | "tel"
    | "search"
    | "email"
    | "url";
  /**
   * Html input value
   */

  isDisabled?: boolean;
  /**
   * disable state
   */

  isReadOnly?: boolean;
  /**
   * Should be read only or not
   */

  isRequired?: boolean;
  /**
   * Required state
   * @default false
   */

  name?: string;
  /**
   * Name for form control
   */

  placeholder?: string;
  /**
   * Placeholder text
   */

  style?: JSX.CSSProperties;
  /**
   * Vanilla css plain styling
   */

  variant?: "underline" | "full";
  /**
   * Variant option
   */

  value?: string | number;
  /**
   * Input value
   */
  password?: boolean;
  /**
   * Either for password or not
   * @default false
   */
  passwordIcon?: JSX.Element;
  /**
   * JSX For password icon
   */

  colors?: "primary" | "secondary" | "error" | "warning" | "success";
  /**
   * color input
   */
  labelPlacement?: "none" | "left" | "right" | "bottom" | "up";
  /**
   * Label placement
   */
}
