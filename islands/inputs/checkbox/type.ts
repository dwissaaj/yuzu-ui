import type { JSX } from "preact/jsx-runtime";
import type { CSSProperties, Ref } from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
import type { CheckboxVariants } from "./checkbox-variants.ts";
export type CheckboxProps =
  & Omit<JSX.IntrinsicElements["input"], "size" | "color">
  & {
    /**
     * Dom ref
     */
    domRef?: Ref<HTMLInputElement> | null;

    /**
     * If checkbox is disabled, props style will assign to input

     * @default false
     */
    isDisabled?: boolean;

    /**
     * custom style access for disable but for better result and to prevent error change the style to variant file
     *
     */
    disableBoxStyle?: string;

        /**
     * custom style access for disable but for better result and to prevent error change the style to variant file
     *
     */
    disabledTitleStyle?: string;

    /**
     * Input checked or not
     * @default false
     */
    isIndeterminate?: boolean;


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


    /**
     * Position between label and box
     * 
     * @default top
     */
    labelPosition: "left" | "right" | "bottom" | "top";

    /**
     * Label name with string
     * @example label="Peach"
     */
    label?: string;

    /**
     * How big the checkbox will rendered can be extended
     * @enum {"small" | "medium" | "large" | "your size"}
     * @default medium
     */
    boxSize?: keyof typeof CheckboxVariants.boxSizes
    /**
     * Variant of box can be add new custom, can be extended
     * @enum {"primary" | "secondary" | "error" | "warning" | "success" | "Your Variant"}
     * @default primary
     */
    boxVariant?: keyof typeof CheckboxVariants.boxVariants

    /**
     * Radius of button box can be add new variant. 
     * @enum { "full" |"small" | "none" | "large" | "your size"}
     * @default none
     */
    boxRadius?: keyof typeof CheckboxVariants.boxRadius


    /**
     * Size for text, for custom change in variant file. The Standard Options
     * @enum { "small" | "medium" | "large" | "your size"}
     * @default small
     */
    labelSize?: keyof typeof CheckboxVariants.labelSizes



    /**
     * The color of the label can be add new in variant.
     * @enum {"primary" | "secondary" | "error" | "warning" | "success" | "none" |"Your Variant"}
     * @default none
     */
    labelColor?: keyof typeof CheckboxVariants.labelColors;


  };
