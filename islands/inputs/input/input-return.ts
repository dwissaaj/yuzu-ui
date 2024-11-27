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
    yuzuBase: string | undefined;
    yuzuBaseDisabled: string | undefined;
    yuzuBaseError: string | undefined;
    yuzuBaseReadonly: string | undefined;
    yuzuInput: string | undefined;
    yuzuInputDisabled: string | undefined;
    yuzuInputError: string | undefined;
    yuzuInputReadonly: string | undefined;
    yuzuLabel: string | undefined;
    yuzuLabelRequired: string | undefined;
  };
  GetLabelProps: {
    className: string;
    labelPlacement: string;
    label?: string;
  };
};