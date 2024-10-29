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

  value?: JSX.IntrinsicElements['input']['value'] ;
  /**
   * Input value
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
   * Html input value for keyboard
   */
  type?: JSX.IntrinsicElements['input']['type']
  /**
   * Input field type
   */
  id?: string;
  /**
   * input ID
   */
  onClear?: () => void;
  /**
   *  onChange event.
   */
  onValueChange?: (value: string) => void;
  /**
   * On valu change
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

  isDisabled?: boolean;
  /**
   * disable state
   * @default false
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

  size?: "small" | "medium" | "large";
  /**
   * How big title value, default to 128px to small and large
   * 208px
   */
  fullWidth?: boolean;
  /**
   * Should input same width as parents
   * @default false
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
  label?: string;
  /**
   * Label title element
   */
  labelPlacement?: "left" | "right" | "bottom" | "top";
  /**
   * Label placement
   */
}
