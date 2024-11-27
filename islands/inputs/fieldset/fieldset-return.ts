import type { Ref } from "preact";
import type { JSX } from "preact/jsx-runtime";

export type UseFieldsetReturn = {
  domRef?: Ref<HTMLFieldSetElement>;
  children?: JSX.Element | JSX.Element[];
  className: string;
  GetFieldsetClass: {
    className: string;
  };
  GetLabelVariant: {
    labelVariant: string;
    label?: string;
  };
  GetFieldsetProps: {
    isDisabled?: boolean;
  };
  isDisabled?: boolean| undefined;
  GetSlot: {
    yuzuBase: string;
    yuzuLabel: string;
    yuzuLabelDisabled: string;
    yuzuBaseDisabled: string;
  };
};