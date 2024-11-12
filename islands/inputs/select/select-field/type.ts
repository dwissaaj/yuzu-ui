import type { JSX } from "preact/jsx-runtime";
import type {
  Ref,
} from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
import type { SelectGroupVariants } from "./select-field-variants.ts";
export type SelectGroupSlot = Partial<
  Record<
    | "yuzuBase"
    | "yuzuBaseDisabled"
    | "yuzuBaseError"
    | "yuzuLabel"
    | "yuzuDescription"
    | "yuzuOption",
    string
  >
>;

export type SelectGroupProps = JSX.IntrinsicElements["select"] & {
  /**
   * Ref dom
   */
  domRef?: Ref<HTMLSelectElement>;

  /**
   * Custom class names to apply additional styling to the `RadioGroup` container.
   *
   * @type {string}
   * @default ""
   */
  className?: string;
  classNames?: SelectGroupSlot;

  children?: JSX.Element | JSX.Element[];

  /**
   * main parent div
   */

  isDisabled?: boolean;

  isError?: boolean;
  isRequired?: boolean;

  color?: keyof typeof SelectGroupVariants.colors;
  label?: string | JSX.Element;
  radius?: keyof typeof SelectGroupVariants.radiuses
  description?: string;
  variant?: keyof typeof SelectGroupVariants.variants
  disabledKeys?: string[];
};
