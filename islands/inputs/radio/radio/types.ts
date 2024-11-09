import type { JSX } from "preact/jsx-runtime";
import type {
  Ref,
} from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
import type { RadioVariants } from "./radio-variants.ts";
export type Radio =
  & Omit<JSX.IntrinsicElements["input"], "size" | "color">
  & {
    /**
     * Dom ref
     */
    domRef?: Ref<HTMLInputElement>;

    label?: JSX.Element


    /**
     * If checkbox is disabled, props style will assign to input
     * @default false
     */
    isDisabled?: boolean;

    /**
     * custom style access for disable but for better result and to prevent error change the style to variant file
     */
    yuzudisableStyle?: string;


    /**
     * Take any component for children, can't be used with label
     *
     * @example
     * <span>An Example!! </span>
     */
    children?: JSX.Element | string;

    /**
     * Class tailwind for customize, if no argument provided will return empty string to css
     * @type {string} empty string if not provided
     */
    className?: string;

    color?: keyof typeof  RadioVariants.colors

   
  };
