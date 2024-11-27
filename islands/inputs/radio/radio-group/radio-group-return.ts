import type { JSX } from "preact/jsx-runtime";
import type { Ref } from "preact";

export type UseRadioGroupReturn = {
  domRef?: Ref<HTMLFieldSetElement>;
  className: string;
  children?: JSX.Element | JSX.Element[];
  GetFieldsetProps: {
    className: string;
  };
  GetLabelProps: {
    className: string;
    label?: string;
  };
  GetSlot: {
    yuzuBase: string;
    yuzuLabel: string;
  };
};
