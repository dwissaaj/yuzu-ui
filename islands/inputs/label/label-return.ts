import type { JSX } from "preact/jsx-runtime";
import type { Ref } from "preact";

export type UseLabelReturn = {
  domRef?: Ref<HTMLLabelElement>;
  label?: string;
  children?: JSX.Element | string;
  GetLabelProps: {
    className: string;
  };
  CheckRender: JSX.Element | string | Error;
  GetSlot: {
    yuzuBase: string;
    yuzuLabelDisabled: string;
    yuzuLabelReadonly: string;
    yuzuLabelRequired: string;
  };
  className: string;
  isReadonly: boolean;
  isRequired: boolean;
  isDisabled: boolean;
};