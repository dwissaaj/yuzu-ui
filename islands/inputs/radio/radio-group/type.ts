import type { Ref } from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
import type { JSX } from "preact/jsx-runtime";

import { RadioGroupVariants } from "./radio-group-variants.ts";

export type RadioGroupProps = JSX.IntrinsicElements["fieldset"] & {
  /**
   * Ref dom
   */
  domRef?: Ref<HTMLFieldSetElement> | null;

  /**
   * Classname styling for div parent, not recomended to use
   */
  className?: string;

  /**
   * Vanilla css plain styling
   */
  style?: JSX.CSSProperties;

  /**
   * label title
   */
  label?: string;

  direction?: "row" | "column";

  variant?: keyof typeof RadioGroupVariants.variants;

  borderColor?: keyof typeof RadioGroupVariants.borderColors;

  labelColor?: keyof typeof RadioGroupVariants.labelColors;
  labelSize?: keyof typeof RadioGroupVariants.labelSizes;


  children?: JSX.Element

  yuzuLabelStyle?: string
};
