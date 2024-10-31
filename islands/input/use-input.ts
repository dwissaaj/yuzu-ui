import { InputVariants } from "./input-variant.ts";
import type { InputProps } from "./type.ts";
import { useMemo } from "https://esm.sh/v128/preact@10.22.0/compat/src/index.js";

export function useInput(props: InputProps) {
  const {
    domRef,
    children,
    id,
    type,
    inputMode,
    className,
    value,
    name,
    style,
    placeholder,
    isReadOnlyStyle,
    readOnly,
    isError = false,
    isDisabledStyle,
    isErrorStyle,
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

  /**
   * Disabled class, can be modified using tailwind class
   */
  const isDisableClass = useMemo(() => {
    if (disabled === true) {
      const disabled = true;
      const isDisabledStyle = " disabled:opacity-20 cursor-not-allowed";
      return { isDisabledStyle, disabled };
    } else if (disabled === false) {
      const disabled = false;
      const isDisabledStyle = " ";
      return { isDisabledStyle, disabled };
    }
  }, [isDisabledStyle, disabled]);

  /**
   * If only readonly
   */
  const isReadonlyClass = useMemo(() => {
    if (readOnly === true) {
      const readOnly = true;
      const isReadOnlyStyle =
        "read-only:opacity-20 read-only:border-20 read-only:outline-20 ";
      return { readOnly, isReadOnlyStyle };
    } else if (readOnly === false) {
      const isReadOnly = false;
      const isReadOnlyStyle = " ";
      return { isReadOnly, isReadOnlyStyle };
    }
  }, [readOnly, isReadOnlyStyle]);


  const isFullWidthClass = useMemo(() => {
    return isFullWidth ? "w-full " : " ";
  }, [isFullWidth]);

  const isRequiredStyleClass = useMemo(() => {
    if (required === true) {
      const required = true;
      const isRequiredStyle =
        "after:content-['*'] after:ml-0.5 after:text-red-500 block";
      return { isRequiredStyle, required };
    } else if (required === false) {
      const required = false;
      const isRequiredStyle = " ";
      return { isRequiredStyle, required };
    }
  }, [isReadOnlyStyle, required]);

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


  const getColors = useMemo(
    () => {
      return {
        colors: InputVariants.colors[colors],
      };
    },
    [colors],
  );
  const GetLabelProps = useMemo(() => {
    return {
      label: label,
      isRequiredStyle: isRequiredStyleClass?.isRequiredStyle,
    };
  }, [label, isRequiredStyle]);


  const GetInputProps = useMemo(() => {
    return {
      disabled: isDisableClass?.disabled,
      readOnly: isReadonlyClass?.readOnly,
      required: isRequiredStyleClass?.required,
    };
  }, [
    disabled,
    isDisabledStyle,
    isError,
    isRequiredStyle,
    required,
    colors,
    isReadonlyClass,
    readOnly,
  ]);
  const GetLabelPlacement = useMemo(() => {
    return {
      label: label,
      labelPlacement: labelPlacement,
    }
  },[labelPlacement, label])
  const GetParentsProps = useMemo(() => {
    const getFullClass = isFullWidthClass
    const getColor = getColors.colors
    const getSizes = getSize.size
    const getDisabled =  isDisableClass?.isDisabledStyle
    const parentClass = getColor + getFullClass +  getSizes + getDisabled  
    
    return {
        parentClass
    }
  },[isErrorStyle,isError,colors,size,isDisableClass])


  const GetInputStyle = useMemo(() => {
    const isErrorStyle = "outline-error border-error text-error placeholder:text-red-400 focus:outline-error invalid:text-error"
    const getError = isError ? isErrorStyle : ""
    const getColor = getColors.colors
    const getReadonly = isReadOnlyStyle
    const getDisabled =  isDisabledStyle
    const getVariant = getVariants.variant
       const inputClass = getColor +  " " +  getDisabled + " " + getReadonly + " " + getError + " " + getVariant
    return {
      inputClass 
    }
  },[isErrorStyle,colors,isDisabledStyle,isReadOnlyStyle,isError])
  return {
    domRef,
    children,
    id,
    inputMode,
    type,
    className,
    value,
    name,
    style,
    isError,
    isErrorStyle,
    placeholder,
    passwordIcon,
    GetInputProps,
    required,
    GetLabelProps,
    GetParentsProps,
    GetInputStyle,
    GetLabelPlacement
  };
}
