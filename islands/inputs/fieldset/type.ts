import type {
  CSSProperties,
  Ref,
} from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
import type { JSX } from "preact/jsx-runtime";

export type FieldsetProps = JSX.IntrinsicElements["fieldset"] & {
  domRef?: Ref<HTMLFieldSetElement>;

  style?: CSSProperties | string;

  title?: string;

  yuzuTitleStyle?: string;

  children?: JSX.Element | JSX.Element[];

  direction?: "row" | "column";

  isDisabled?: boolean;

  yuzuDisabledStyle?: string;

  variant?: "underline" | "full";

  color?: "primary" | "secondary" | "error" | "warning" | "success";

  className?: string;
};
