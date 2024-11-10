import type {
  CSSProperties,
  Ref,
} from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
import type { JSX } from "preact/jsx-runtime";

import { RadioGroupVariants } from "./radio-group-variants.ts";

export type RadioGroupSlot = Record<"yuzuBase" | "yuzuLabel", string>;

export type RadioGroupProps = JSX.IntrinsicElements["fieldset"] & {
  /**
   * Ref dom
   */
  domRef?: Ref<HTMLFieldSetElement>;

  /**
   * Custom class names to apply additional styling to the `RadioGroup` container.
   *
   * @type {string}
   * @default ""
   */
  className?: string;

  /**
   * Custom inline styles to apply to the `RadioGroup` container using vanilla CSS.
   *
   * @type {CSSProperties}
   * @default {}
   */
  style?: CSSProperties;

  /**
   * The label text to be displayed for the `RadioGroup`.
   * This can be a string or JSX element.
   *
   * @type {string}
   */
  label?: string;

  /**
   * Defines the direction of the radio buttons within the group.
   * Options are "row" (horizontal layout) and "column" (vertical layout).
   *
   * @type {"row" | "column"}
   * @default "row"
   */
  direction?: "row" | "column";

  /**
   * The variant style of the `RadioGroup`, which determines its overall appearance.
   * The value is derived from the available variants in `RadioGroupVariants.variants`.
   *
   * @type {keyof typeof RadioGroupVariants.variants}
   */
  variant?: keyof typeof RadioGroupVariants.variants;

  /**
   * The border color for the `RadioGroup`. The value is derived from the available colors in `RadioGroupVariants.borderColors`.
   *
   * @type {keyof typeof RadioGroupVariants.borderColors}
   */
  borderColor?: keyof typeof RadioGroupVariants.borderColors;

  /**
   * The color of the label text for the `RadioGroup`. The value is derived from the available colors in `RadioGroupVariants.labelColors`.
   *
   * @type {keyof typeof RadioGroupVariants.labelColors}
   */
  labelColor?: keyof typeof RadioGroupVariants.labelColors;

  /**
   * The size of the label text for the `RadioGroup`. The value is derived from the available sizes in `RadioGroupVariants.labelSizes`.
   *
   * @type {keyof typeof RadioGroupVariants.labelSizes}
   */
  labelSize?: keyof typeof RadioGroupVariants.labelSizes;

  /**
   * The children to be rendered inside the `RadioGroup`. This can be one or more `Radio` components.
   *
   * @type {JSX.Element | JSX.Element[]}
   */
  children?: JSX.Element | JSX.Element[];

  /**
   * Custom style to apply to the label of the `RadioGroup`.
   *
   * @type {string}
   */
  yuzuLabelStyle?: string;
};
