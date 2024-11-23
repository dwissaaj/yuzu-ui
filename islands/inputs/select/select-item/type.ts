import type { JSX } from "preact/jsx-runtime";
import type {
  Ref,
} from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
export type SelectItemSlot = Partial<
  Record<
    "yuzuOption",
    string
  >
>;

export type SelectItemProps = JSX.IntrinsicElements["option"] & {
  /**
   * A reference to the DOM element of the `option` element.
   *
   * @type {Ref<HTMLOptionElement>}
   */
  domRef?: Ref<HTMLOptionElement>;

  /**
   * Custom class names to apply additional styling to the `SelectItem` container.
   *
   * @type {string}
   * @default ""
   */
  className?: string;

  /**
   * Custom styles for specific component slots. Possible slot keys are:
   *
   * - `yuzuOption`: The classes applied to each select item option within the select group.
   *
   * @type {SelectItemSlot}
   * @default {}
   */
  classNames?: SelectItemSlot;

  /**
   * The content to be displayed inside the `option` element.
   * This can be a string or JSX elements.
   *
   * @type {JSX.Element | JSX.Element[] | string}
   */
  children?: JSX.Element | string;

  /**
   * If true, the option will be disabled and cannot be selected.
   *
   * @type {boolean}
   * @default false
   */
  isDisabled?: boolean;
};
