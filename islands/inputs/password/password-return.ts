import type { Ref } from "preact";

export type UsePasswordReturn = {
  domRef?: Ref<HTMLInputElement>;
  className: string;
  GetWrapperInputStyle: {
    className: string;
  };
  GetWrapperBaseStyle: {
    className: string;
  };
  isDisabled: boolean;
  GetInputStyle: {
    className: string;
  };
  isIconHidden: boolean | undefined;
  GetIconProps: {
    className: string;
  };
  GetLabelProps: {
    className: string;
    label?: string;
  };
  GetDescriptionProps: {
    className: string;
    description?: string;
  };
  isReadonly: boolean;
  isRequired: boolean;
  CheckRender: void | Error;
  GetErrorMessageProps: {
    className: string;
  };
  errorMessage?: string;
  GetSlot: {
    yuzuBase: string;
    yuzuBaseDisabled: string;
    yuzuInput: string;
    yuzuInputError: string;
    yuzuIcon: string;
    yuzuLabel: string;
    yuzuLabelRequired: string;
    yuzuDescription: string;
    yuzuErrorMessage: string;
  };
};