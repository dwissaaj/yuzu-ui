import type { JSX } from "preact/jsx-runtime";
import type {
  CSSProperties,
  Ref,
} from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
export type LabelProps = JSX.IntrinsicElements['fieldset'] & {
  /**
   * Dom ref
   */
  domRef?: Ref<HTMLLabelElement>;

  /**
   * 
   */
  label?: string;

  /**
   * Access to classname label, don't add size color or any
   * native type it will throw error due to tailwind will rendered twice
   */
  yuzuLabelStyle?: string;

  /**
   * Add children to label
   */
  children?: JSX.Element | string;

  /**
   * Native style label
   */
  style?: CSSProperties;

  /**
   * Label size, configuration can be custom to label-variant
   */
  fontSize?: "small" | "medium" | "large";

  /**
   * Color label, configuration can be custom to label-variant
   */
  color?: "primary" | "secondary" | "error" | "warning" | "success" | "none";


};
