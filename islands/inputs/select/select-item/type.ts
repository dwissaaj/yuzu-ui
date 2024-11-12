import type { JSX } from "preact/jsx-runtime";
import type {
  Ref,
} from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
export type SelectItemSlot = Partial<
  Record<
    | "yuzuOption",
    string
  >
>;

export type SelectItemProps = JSX.IntrinsicElements["option"] & {
    /**
     * Ref dom
     */
    domRef?: Ref<HTMLOptionElement>;
  
    /**
     * Custom class names to apply additional styling to the `RadioGroup` container.
     *
     * @type {string}
     * @default ""
     */
    className?: string;
    classNames?: SelectItemSlot;
  
    children?: JSX.Element | JSX.Element[] | string;
  
    /**
     * main parent div
     */
  
    isDisabled?: boolean;
 
  };
  