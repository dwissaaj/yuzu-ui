import type { JSX } from "preact/jsx-runtime";
import type { Ref } from "preact";

export type UseSelectItemReturn = {
  domRef?: Ref<HTMLOptionElement>;
  children?: JSX.Element | string;
  className: string;
  GetDisabled: {
    disabledStyles: string;
  };
  GetSlot: {
    yuzuOption: string;
  };
  isDisabled?: boolean;
};