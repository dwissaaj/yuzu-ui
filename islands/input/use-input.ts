import { InputVariants } from "./input-variant.ts";
import type { InputProps } from "./type.ts";
import { useMemo } from "https://esm.sh/v128/preact@10.22.0/compat/src/index.js";
export function useInput(props: InputProps) {
  const {
    ref,
    children,
    id,
    type,
    inputMode,
    className,
    value,
    name,
    style,
    placeholder,
    isReadOnly,
    isError = false,
    isDisabled = false,
    isRequired = false,
    variant = "full",
    size = "small",
    isFullWidth = false,
    password = false,
    passwordIcon,
    colors = "none",
    labelPlacement = "top",
    label,
  } = props;

  const isDisabledMemo = useMemo(() => {
    return isDisabled ? "disabled:opacity-50 " : "";
  }, [isDisabled]);
  const isReadonlyClass = useMemo(() => {
    return isReadOnly ? "disabled:opacity-50 cursor-not-allowed " : "";
  }, [isReadOnly]);
  const isErrorClass = useMemo(() => {
    return isError ? "border-error text-error" : "";
  }, [isReadOnly]);

  const isFullWidthClass = useMemo(() => {
    return isFullWidth ? "w-full " : "";
  }, [isFullWidth]);

  const isRequiredClass = useMemo(() => {
    return isRequired
      ? "after:content-['*'] after:ml-0.5 after:text-red-500 block  "
      : "";
  }, [isRequired]);

  const getVariants = useMemo(
    () => {
      return {
        variant: InputVariants.variant[variant],
      };
    },
    [variant],
  );
  const getSize = useMemo(
    () => {
      return {
        size: InputVariants.size[size],
      };
    },
    [size],
  );
  const getLabel = useMemo(
    () => {
      return {
        labelPlacement: InputVariants.labelPlacement[labelPlacement],
      };
    },
    [labelPlacement],
  );

  const getColors = useMemo(
    () => {
      return {
        colors: InputVariants.colors,
      };
    },
    [colors],
  );
  const GetInputProps = useMemo(() => {
    return {
      isDisabled: isDisabledMemo,
      isReadOnly: isReadonlyClass,
      isError: isErrorClass,
      isFullWidth: isFullWidthClass,
      isRequired: isRequiredClass,
      variant: getVariants.variant,
      colors: getColors.colors,
      size: getSize.size,
      labelPlacement: getLabel.labelPlacement,
    };
  }, [isDisabled, isDisabled, isError, isRequiredClass]);

  return {
    ref,
    children,
    id,
    inputMode,
    type,
    className,
    value,
    name,
    style,
    placeholder,
    password,
    passwordIcon,
    GetInputProps,
    label,
    labelPlacement,
  };
}
