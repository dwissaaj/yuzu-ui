import ClosePassword from "../icon/component/ClosePassword.tsx";
import OpenPassword from "../icon/component/OpenPassword.tsx";
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
    isRequiredStyle = false,
    required = false,
    variant = "full",
    size = "small",
    isFullWidth = false,
    passwordIcon,
    colors = "none",
    labelPlacement = "top",
    label,
  } = props;
  const isPassword = useMemo(() => {
    const closePasswordIcon = ClosePassword;
    const openPasswordIcon = OpenPassword;
      if(type === "password") {
        return { closePasswordIcon, openPasswordIcon}
      }
  },[type,])
  const isDisabledMemo = useMemo(() => {
    return isDisabled ? "disabled:opacity-50 " : "";
  }, [isDisabled]);
  const isReadonlyClass = useMemo(() => {
    return isReadOnly ? "disabled:opacity-50 cursor-not-allowed " : "";
  }, [isReadOnly]);

  const isErrorClass = useMemo(() => {
    return isError ? "border-error text-error placeholder:text-error focus:border-error focus:outline-error" : variant;
  }, [isReadOnly]);

  const isFullWidthClass = useMemo(() => {
    return isFullWidth ? "w-full " : "";
  }, [isFullWidth]);


  const isRequiredStyleClass = useMemo(() => {
    if(required === true) {
      const required = true
      const isRequiredStyle = "after:content-['*'] after:ml-0.5 after:text-red-500 block"
      return {isRequiredStyle , required}
    }
    else if(required === false) {
      const required = false
      const isRequiredStyle = ""
      return {isRequiredStyle , required}
    }
  }, [isRequiredStyle, required]);
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
      isDisabled: isDisabledMemo, //notyet
      isReadOnly: isReadonlyClass, //notyet
      isError: isErrorClass,
      isFullWidth: isFullWidthClass,
      isRequiredStyle: isRequiredStyleClass?.isRequiredStyle, //notyet
      required: isRequiredStyleClass?.required, 
      variant: getVariants.variant,
      colors: getColors.colors,
      size: getSize.size,
      labelPlacement: getLabel.labelPlacement,
      passwordIcon: isPassword
    };
  }, [isDisabled, isDisabled, isError, isRequiredStyle, required]);

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
    passwordIcon,
    GetInputProps,
    label,
    labelPlacement,
    required
  };
}
