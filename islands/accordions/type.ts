import type { JSX } from "preact/jsx-runtime";

export interface AccordionsFragment {
  title?: JSX.Element | string;

  subtitle?: JSX.Element | string;

  onClick?: JSX.MouseEventHandler<HTMLButtonElement> | null;

  children?: JSX.Element | null;

  classNames?: JSX.CSSProperties | string;

  isOpen: boolean;

  isDisable: boolean;
}

export interface AccordionsChildren {
  as?: JSX.Element;

  className?: JSX.CSSProperties | string;
}
