import type { JSX } from "preact/jsx-runtime";
import type {
  Ref,
} from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
import type { LabelVariants } from "./label-variant.ts";
export type LabelSlot = Partial<
  Record<
    | "yuzuBase"
    | "yuzuLabelRequired"
    | "yuzuLabelReadonly"
    | "yuzuLabelDisabled",
    string
  >
>;
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

  classNames?: LabelSlot;

  /**
   * Add children to label
   */
  children?: JSX.Element | string;

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

  /**
   * the label state readonly
   * @default false
   */
  isReadonly?: boolean;

  /**
   * Label state for required
   * @default false
   */
  isRequired?: boolean;

  /**
   * Label state for disabled
   * @default false
   */
  isDisabled?: boolean;
};
