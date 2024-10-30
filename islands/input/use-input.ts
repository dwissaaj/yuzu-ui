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
    isReadOnlyClass,
    readOnly,
    isError = false,
    isDisabledStyle,
    disabled,
    isRequiredStyle,
    required = false,
    variant = "full",
    size = "small",
    isFullWidth = false,
    passwordIcon,
    colors = "none",
    labelPlacement = "top",
    label,
  } = props;
  // const isPassword = useMemo(() => {
  //   const closePasswordIcon = ClosePassword;
  //   const openPasswordIcon = OpenPassword;
  //     if(type === "password") {
  //       return { closePasswordIcon, openPasswordIcon}
  //     }
  //     else {
  //       return null
  //     }
  // },[type])




  const isDisableClass = useMemo(() => {
    if(disabled === true) {
      const disabled = true
      const isDisabledStyle = "disabled:opacity-50 cursor-not-allowed"
      return {isDisabledStyle , disabled}
    }
    else if(disabled === false) {
      const disabled = false
      const isDisabledStyle = ""
      return {isDisabledStyle , disabled}
    }
  }, [isDisabledStyle, disabled]);

  const isReadonlyClass = useMemo(() => {
    if(readOnly === true) {
      const readOnly = true
      const isReadOnlyStyle = "read-only:opacity-20 read-only:border-20 read-only:outline-20 "
      return {readOnly , isReadOnlyStyle}
    }
    else if(readOnly === false) {
      const isReadOnly = false
      const isReadOnlyStyle = ""
      return {isReadOnly , isReadOnlyStyle}
    }
  }, [readOnly,isReadOnlyClass]);

  
  const isErrorClass = useMemo(() => {
    return isError ? "border-error text-error placeholder:text-red-400 focus:border-error focus:outline-error invalid:text-error" : '';
  }, [isError]);

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
  }, [isReadOnlyClass, required]);

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
        colors: InputVariants.colors[colors],
      };
    },
    [colors],
  );
  const GetInputProps = useMemo(() => {
    return {
      isDisabledStyle: isDisableClass?.isDisabledStyle,
      disabled: isDisableClass?.disabled,
      isReadonlyClass: isReadonlyClass?.isReadOnlyStyle, 
      readOnly: isReadonlyClass?.readOnly, 
      isError: isErrorClass,
      isFullWidth: isFullWidthClass,
      isRequiredStyle: isRequiredStyleClass?.isRequiredStyle,
      required: isRequiredStyleClass?.required, 
      variant: getVariants.variant,
      colors: getColors.colors,
      size: getSize.size,
      labelPlacement: getLabel.labelPlacement,

    };
  }, [disabled, isDisabledStyle, isError, isRequiredStyle, required,colors, , isReadonlyClass, readOnly ]);

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
