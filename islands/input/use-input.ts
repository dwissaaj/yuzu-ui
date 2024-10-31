import { InputVariants } from "./input-variant.ts";
import type { InputProps } from "./type.ts";
import { useMemo } from "https://esm.sh/v128/preact@10.22.0/compat/src/index.js";

export function useInput(props: InputProps) {
  const {
    domRef,
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
      const isDisabledStyle = InputVariants.disabledVariant
      return { isDisabledStyle, disabled };
    } else if (disabled === false) {
      const disabled = false;
      const isDisabledStyle = " ";
      return { isDisabledStyle, disabled };
    }
  }, [isDisabledStyle, disabled]);

  const isReadonlyClass = useMemo(() => {
    if (readOnly === true) {
      const readOnly = true;
      const isReadOnlyStyle = InputVariants.readonlyVariant
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
      const isRequiredStyle = InputVariants.requiredVariant;
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
    return {
      className: `${getColor} ${getFullClass} ${getSizes} ${getDisabled}`,
    }
  },[isFullWidthClass,colors,size,size,isDisableClass])

  const errorClass = useMemo(
    () => (isError ? isErrorStyle : "")
  , [isError, isErrorStyle]);

  const GetInputStyle = useMemo(() => {
    const isErrorStyle = InputVariants.errorVariant
    const getError = isError ? isErrorStyle : ""
    const getColor = getColors.colors
    const getReadonly = isReadOnlyStyle
    const getDisabled =  isDisabledStyle
    const getVariant = getVariants.variant

    return {
      className: `${getColor} ${getError} ${getError} ${getDisabled} ${getReadonly} ${getVariant}` 
    }
  },[isErrorStyle,colors,isDisabledStyle,isReadOnlyStyle,isError])
  return {
    domRef,
    id,
    inputMode,
    type,
    className,
    value,
    name,
    style,
    placeholder,
    GetInputProps,
    GetLabelProps,
    GetParentsProps,
    GetInputStyle,
    GetLabelPlacement
  };
}
