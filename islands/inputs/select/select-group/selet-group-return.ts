import type { JSX } from "preact/jsx-runtime";
import type { Ref } from "preact";

export type UseSelectGroupReturn = {
  domRef?: Ref<HTMLSelectElement>;
  children?: JSX.Element | JSX.Element[];
  className: string;
  GetBaseWrapperProps: {
    className: string;
  };
  GetDescription: {
    descriptionStyles: string;
    description?: string;
  };
  GetSlot: {
    yuzuBase: string;
    yuzuBaseDisabled: string;
    yuzuBaseError: string;
    yuzuLabel: string;
    yuzuDescription: string;
    yuzuSelect: string;
  };
  GetSelectProps: {
    className: string;
  };
  isDisabled?: boolean;
  GetColorClass: string;
  GetLabel: {
    requiredStyle: string;
    label?: string | JSX.Element;
    isRequired?: boolean;
    yuzuLabel: string | undefined;
  };
  GetError: {
    errorStyle: string;
    isError?: boolean;
  };
};