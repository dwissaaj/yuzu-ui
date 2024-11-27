import type { JSX } from "preact/jsx-runtime";
import type { Ref } from "preact";

export type UseRadioReturn = {
    domRef?: Ref<HTMLInputElement>;
    className: string;
    GetRadioProps: {
      className: string;
    };
    label?: string;
    isDisabled: boolean | undefined;
    children?: JSX.Element;
    GetSlot: {
      yuzuBase: string;
      yuzuLabel: string;
      yuzuInput: string;
      yuzuInputDisabled: string;
    };
    CheckRender: JSX.Element | string | Error;
    GetLabelProps: {
      className: string;
    };
    GetParentProps: {
      className: string;
    };
  };