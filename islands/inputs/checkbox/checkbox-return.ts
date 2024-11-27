import type { Ref } from "preact"
import type { JSX } from "preact/jsx-runtime";
export type UseCheckboxReturn = {
    domRef?: Ref<HTMLInputElement>;
    children?: JSX.Element | string;
    GetLabelStyle: {
      className: string;
      labelPosition: string;
    };
    GetCheckboxProps: boolean | undefined
    GetBoxStyle: {
      className: string;
    };
    label?: string;
    CheckRender: Error | JSX.Element | string;
    GetSlot: {
      yuzuBase: string;
      yuzuInput: string;
      yuzuLabel: string;
      yuzuLabelDisabled: string;
      yuzuBaseDisabled: string;
      yuzuInputDisabled: string;
    };
    className: string;
    GetWrapperStyle: {
      className: string;
    };
  };