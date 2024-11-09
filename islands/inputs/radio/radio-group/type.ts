import type { Ref, CSSProperties } from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
import type { JSX } from "preact/jsx-runtime";

import { RadioGroupVariants } from "./radio-group-variants.ts";

export type RadioGroupSlot = Record<"yuzuBase" | "yuzuLabel", string>
const radioSlots: RadioGroupSlot = {
  yuzuBase: "some-class-for-base",
  yuzuLabel: "some-class-for-label"
};

export type RadioGroupProps = JSX.IntrinsicElements["fieldset"] & {
  /**
   * Ref dom
   */
  domRef?: Ref<HTMLFieldSetElement>;

  /**
   * Classname styling for slot
  */
  className?: RadioGroupSlot;

  /**
   * Vanilla css plain styling
   */
  style?: CSSProperties;

  /**
   * label title
   */
  label?: string;

  direction?: "row" | "column";

  variant?: keyof typeof RadioGroupVariants.variants;

  borderColor?: keyof typeof RadioGroupVariants.borderColors;

  labelColor?: keyof typeof RadioGroupVariants.labelColors;
  labelSize?: keyof typeof RadioGroupVariants.labelSizes;


  children?: JSX.Element | JSX.Element[]

  yuzuLabelStyle?: string


};
