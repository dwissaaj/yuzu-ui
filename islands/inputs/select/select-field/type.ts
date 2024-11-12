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
   * Dom for ref
   */
  domRef?: Ref<HTMLSelectElement>;

  /**
   * Custom class names to apply additional styling to the `SelectGroup` container.
   *
   * @type {string}
   * @default ""
   */
  className?: string;

  /**
   * Custom class names for specific parts of the `SelectGroup` component, such as base, label, error, and more.
   *
   * @type {SelectGroupSlot}
   */
  classNames?: SelectGroupSlot;

  /**
   * Child elements, typically `<option>` elements, to be rendered inside the `SelectGroup`.
   *
   * @type {JSX.Element | JSX.Element[]}
   */
  children?: JSX.Element | JSX.Element[];

  /**
   * If true, the `SelectGroup` will be disabled, making it uninteractive.
   *
   * @type {boolean}
   * @default false
   */
  isDisabled?: boolean;

  /**
   * If true, error styles will be applied to the `SelectGroup`.
   *
   * @type {boolean}
   * @default false
   */
  isError?: boolean;

  /**
   * If true, the `SelectGroup` will be marked as required.
   *
   * @type {boolean}
   * @default false
   */
  isRequired?: boolean;

  /**
   * The color scheme for the `SelectGroup`. Options include `"primary"`, `"secondary"`, `"error"`, `"success"`, `"warning"`, and `"default"`.
   *
   * @type {keyof typeof SelectGroupVariants.colors}
   * @default "default"
   */
  color?: keyof typeof SelectGroupVariants.colors;

  /**
   * A label to display above the `SelectGroup`.
   *
   * @type {string | JSX.Element}
   */
  label?: string | JSX.Element;

  /**
   * The border radius of the `SelectGroup`. Options include `"small"`, `"medium"`, `"large"`, and `"none"`.
   *
   * @type {keyof typeof SelectGroupVariants.radiuses}
   * @default "none"
   */
  radius?: keyof typeof SelectGroupVariants.radiuses;

  /**
   * A description to display below the `SelectGroup`.
   *
   * @type {string}
   */
  description?: string;

  /**
   * The style variant of the `SelectGroup`. Options include `"full"` (bordered) and `"underline"` (bottom border only).
   *
   * @type {keyof typeof SelectGroupVariants.variants}
   * @default "full"
   */
  variant?: keyof typeof SelectGroupVariants.variants;
};
