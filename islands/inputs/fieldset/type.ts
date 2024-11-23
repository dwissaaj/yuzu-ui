import type {
  Ref,
} from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
import type { JSX } from "preact/jsx-runtime";
import type { FieldsetVariants } from "./fieldset-variants.ts";
export type FieldsetSlot = Partial<
  Record<
    | "yuzuBase"
    | "yuzuLabel"
    | "yuzuBaseDisabled"
    | "yuzuLabelDisabled",
    string
  >
>;
export type FieldsetProps = JSX.IntrinsicElements["fieldset"] & {
  domRef?: Ref<HTMLFieldSetElement>;

  /**
   * Label for the fieldset
   * @example
   * label="List of Fruits"
   */
  label?: string;

  /**
   * Variant of label can be add new custom, can be extended
   * @enum {"primary" | "secondary" | "error" | "warning" | "success" | "Your Variant"}
   * @default primary
   */
  labelVariant?: keyof typeof FieldsetVariants.labelVariants;

  /**
   * Children accepeted either single or multi element
   */
  children?: JSX.Element | JSX.Element[];

  /**
   * Direction of the children
   * @default row
   */
  fieldsetDirection?: "row" | "column";

  /**
   * Either disabled or not
   * @default false
   */
  isDisabled?: boolean;

  /**
   * fieldset variant can be extended in variant-file
   * @default underline
   */
  fieldsetVariant?: "underline" | "full";

  /**
   * Can be extended in fieldset-variant.ts
   * @enum {"primary" | "secondary" | "error" | "warning" | "success" | "Your Variant"}
   * @default primary
   */
  fieldsetColor?: keyof typeof FieldsetVariants.fieldsetColors;

  /**
   * Parent classnames/ fieldset direct access to classNames
   */
  className?: string;

  /**
   * Custom styles for specific parts of the fieldset component. Possible slot keys are:
   *
   * - `yuzuBase`: The base classes applied to the fieldset container.
   * - `yuzuLabel`: The classes applied to the label inside the fieldset.
   * - `yuzuBaseDisabled`: The classes applied to the fieldset when it is disabled.
   * - `yuzuLabelDisabled`: The classes applied to the label when the fieldset is disabled.
   *
   * @type {FieldsetSlot}
   * @default {}
   */
  classNames?: FieldsetSlot;
};
