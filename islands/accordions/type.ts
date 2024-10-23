import type { JSX } from "preact/jsx-runtime";

export interface Props<T extends object = {}> {
  children?: JSX.Element | null;

  title?: JSX.Element | string;

  subtitle?: JSX.Element | string;

  content?: JSX.Element | string | null;

  onClick?: JSX.MouseEventHandler<HTMLButtonElement> | null;

  context?: AccordionsItems | null;

  classNames?: JSX.CSSProperties | string;
}

export interface AccordionsItems {
  isOpen?: boolean;

  isDisabled?: boolean;

  children?: JSX.Element | null;
}
