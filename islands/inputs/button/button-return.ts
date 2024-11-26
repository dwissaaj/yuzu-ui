import type { Ref } from "preact"
import type { JSX } from "preact/jsx-runtime";
export type UseButtonReturn = {
    domRef?: Ref<HTMLButtonElement>;
    children?: JSX.Element | string;
    GetSpinnerProps?: { className: string } | undefined;
    className: string;
    GetVariantButton: string;
    isDisabled: boolean | undefined;
    isLoading?: boolean;
    GetDisabled: string;
    GetButtonProps: { className: string };
    endContent?: JSX.Element;
    startContent?: JSX.Element;
    GetSlot: {
      yuzuBase: string;
      yuzuDisabled: string;
      yuzuSpinner: string;
    };

  };