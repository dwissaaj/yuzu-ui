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
    isError = false,
    isDisabledStyle,
    isErrorStyle,
    isDisabled = false,
    isReadonly = false,
    isRequiredStyle,
    isRequired = false,
    variant = "full",
    size = "small",
    isFullWidth = false,
    colors = "none",
    labelPlacement = "top",
    label,
    ...otherProps
  } = props;

  const isDisableClass = useMemo(() => {
    if (isDisabled === true) {
      const disabled = true;
      const isDisabledStyle = InputVariants.disabledVariant;
      return { isDisabledStyle, disabled };
    } else if (isDisabled === false) {
      const disabled = false;
      const isDisabledStyle = " ";
      return { isDisabledStyle, disabled };
    }
  }, [isDisabledStyle, isDisabled]);

  const isReadonlyClass = useMemo(() => {
    if (isReadonly === true) {
      const readOnly = true;
      const isReadOnlyStyle = InputVariants.readonlyVariant;
      return { readOnly, isReadOnlyStyle };
    } else if (isReadonly === false) {
      const readOnly = false;
      const isReadOnlyStyle = " ";
      return { readOnly, isReadOnlyStyle };
    }
  }, [isReadonly, isReadOnlyStyle]);

  const isFullWidthClass = useMemo(() => {
    return isFullWidth ? "w-full " : " ";
  }, [isFullWidth]);

  const isRequiredStyleClass = useMemo(() => {
    if (isRequired === true) {
      const isRequired = true;
      const isRequiredStyle = InputVariants.requiredVariant;
      return { isRequiredStyle, isRequired };
    } else if (isRequired === false) {
      const isRequired = false;
      const isRequiredStyle = " ";
      return { isRequiredStyle, isRequired };
    }
  }, [isReadOnlyStyle, isRequired]);

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

  /**
   * State for all input boolean
   */
  const GetInputProps = useMemo(() => {
    return {
      isDisable: isDisableClass?.disabled,
      isReadOnly: isReadonlyClass?.readOnly,
      isRequired: isRequiredStyleClass?.isRequired,
    };
  }, [
    isDisabled,
    isRequired,
    isReadonly,
  ]);
  const GetLabelPlacement = useMemo(() => {
    return {
      label: label,
      labelPlacement: labelPlacement,
    };
  }, [labelPlacement, label]);

  /**
   * for styling parents div
   */
  const GetParentsProps = useMemo(() => {
    const getFullClass = isFullWidthClass;
    const getColor = getColors.colors;
    const getSizes = getSize.size;
    const getDisabled = isDisableClass?.isDisabledStyle;
    return {
      className: `${getColor} ${getFullClass} ${getSizes} ${getDisabled}`,
    };
  }, [isFullWidthClass, colors, size, size, isDisableClass]);

  const GetInputStyle = useMemo(() => {
    const isErrorStyle = InputVariants.errorVariant;
    const getError = isError ? isErrorStyle : "";
    const getColor = getColors.colors;
    const getReadonly = isReadonlyClass?.isReadOnlyStyle;
    const getDisabled = isDisableClass?.isDisabledStyle;
    const getVariant = getVariants.variant;

    return {
      className:
        `${getColor} ${getError} ${getDisabled} ${getReadonly} ${getVariant}`,
    };
  }, [
    isErrorStyle,
    colors,
    isDisabledStyle,
    isReadOnlyStyle,
    isError,
    isReadonlyClass,
    isReadonlyClass,
  ]);
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
    GetLabelPlacement,
    isReadonly,
    isRequired,
    isDisabled,
    isDisabledStyle,
    isErrorStyle,
    isRequiredStyle,
    ...otherProps
  };
}
