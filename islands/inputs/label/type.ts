import type { JSX } from "preact/jsx-runtime";
import type {
  Ref,
} from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
import type { LabelVariants } from "./label-variant.ts";
export type LabelProps = JSX.IntrinsicElements["label"] & {
  /**
   * Dom ref
   */
  domRef?: Ref<HTMLLabelElement>;

  /**
   * Your string label
   */
  label?: string;

  /**
   * access to classname parents
   */
  className?: string;

  /**
   * Add children to label
   */
  children?: JSX.Element | string;

  /**
   * Native style label
   */
  style?: JSX.CSSProperties;

  /**
   * Label size, configuration can be custom to label-variant
   */
  fontSize?: keyof typeof LabelVariants.fontSizes;

  /**
   * Color label, configuration can be custom to label-variant
   */
  fontColor?: keyof typeof LabelVariants.fontColors;

  /**
   * Font weight
   */
  fontWeight?: keyof typeof LabelVariants.fontWeights;
};
