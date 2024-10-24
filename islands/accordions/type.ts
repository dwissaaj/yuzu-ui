import type { JSX } from "preact/jsx-runtime";
import type { GlobalClassname } from "../global/type.ts";

export interface Props {
  children?: JSX.Element | null;

  title?: JSX.Element | string;

  subtitle?: JSX.Element | string;

  content?: JSX.Element | string | null;

  onClick?: JSX.MouseEventHandler<HTMLButtonElement> | null;

  context?: AccordionsItems | null;

  classNames?: JSX.CSSProperties | string;

  titleClass?: GlobalClassname;

  subtitleClass?: GlobalClassname;
}

export interface AccordionsItems {
  isOpen?: boolean;

  isDisabled?: boolean;

  children?: JSX.Element | null;
}
