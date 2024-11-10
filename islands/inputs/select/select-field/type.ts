import type { JSX } from "preact/jsx-runtime";
import type {
  CSSProperties,
  Ref,
} from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
import type { SelectGroupVariants } from "./select-field-variants.ts";
export type SelectGroupSlot = <PartialRecord<
| "yuzuBase"
| "yuzuBaseDisabled"
| "yuzuBaseError"
| "yuzuLabel"
| "yuzuDescription",
string
>>

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
  className?:  string;
  classNames?: SelectGroupSlot 

  children?: JSX.Element | JSX.Element[];

  /**
   * main parent div
   */

  isDisabled?: boolean;

  disabledStyles?: string;

  isError?: boolean;

  errorStyles?: string;

  color?: keyof typeof SelectGroupVariants.colors;

  label?: string | JSX.Element;

  description?: string;
};
