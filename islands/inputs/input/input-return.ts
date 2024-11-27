import type { Ref } from "preact";

export type UseInputReturn = {
  domRef?: Ref<HTMLInputElement>;
  className: string;
  GetParentsStyle: {
    className: string;
  };
  isDisabled: boolean;
  GetInputStyle: {
    className: string;
  };
  isReadonly: boolean;
  isRequired: boolean;
  GetSlot: {
    yuzuBase: string;
    yuzuBaseDisabled: string;
    yuzuBaseError: string;
    yuzuBaseReadonly: string;
    yuzuInput: string;
    yuzuInputDisabled: string;
    yuzuInputError: string;
    yuzuInputReadonly: string;
    yuzuLabel: string;
    yuzuLabelRequired: string;
  };
  GetLabelProps: {
    className: string;
    labelPlacement: string;
    label?: string;
  };
};