import { useMemo } from "https://esm.sh/v128/preact@10.22.0/compat/src/index.js";
import type { PasswordsProps } from "./type.ts";
import { PasswordsVariants } from "./passwords-variants.ts";
export function usePasswords(props: PasswordsProps) {
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
    variantFocus ="full",
    variantFocusStyle,
    size = "small",
    isFullWidth = false,
    colors = "none",
    labelPlacement = "top",
    label,
  } = props;

  const isDisableClass = useMemo(() => {
    if (isDisabled === true) {
      const disabled = true;
      const isDisabledStyle = PasswordsVariants.disabledVariant;
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
      const isReadOnlyStyle = PasswordsVariants.readonlyVariant;
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
      const isRequiredStyle = PasswordsVariants.requiredVariant;
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
        variant: PasswordsVariants.variant[variant],
      };
    },
    [variant],
  );

  const getSize = useMemo(
    () => {
      return {
        size: PasswordsVariants.size[size],
      };
    },
    [size],
  );

  const getColors = useMemo(
    () => {
      return {
        colors: PasswordsVariants.colors[colors],
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


  const GetLabelPlacement = useMemo(() => {
    return {
      label: label,
      labelPlacement: labelPlacement,
    };
  }, [labelPlacement, label]);
  const getVariantFocus = useMemo(
    () => {
      return {
        variantFocus: PasswordsVariants.variantFocus,
      };
    },
    [variantFocus],
  );


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

  /**
   * For input parent
   */
  const GetVariantStyle = useMemo(() => {
    if(variant === "full") {
      const variantLabel = "full"
      const variantLabelStyle = getVariantFocus.variantFocus["full"]
      const variant = getVariants.variant
      const getDisabled = isDisableClass?.isDisabledStyle;
      const isErrorStyle = PasswordsVariants.errorVariant;
      const getError = isError ? isErrorStyle : "";
      const getColor = getColors.colors;
      const getReadonly = isReadonlyClass?.isReadOnlyStyle;
      const allClass = getDisabled + getError + getColor + getReadonly
      return {variantLabel, variantLabelStyle, variant, variantFocusStyle, allClass }
    }
    else {
      const variantLabel = "underline"
      const variantLabelStyle = getVariantFocus.variantFocus["underline"]
      const variant = getVariants.variant
      const getDisabled = isDisableClass?.isDisabledStyle;
      const isErrorStyle = PasswordsVariants.errorVariant;
      const getError = isError ? isErrorStyle : "";
      const getColor = getColors.colors;
      const getReadonly = isReadonlyClass?.isReadOnlyStyle;
      const allClass = getDisabled + getError + getColor + getReadonly
      return {variantLabel, variantLabelStyle, variant, variantFocusStyle, allClass }
    }
  }, [variant, variantFocusStyle, ])

  const GetInputStyle = useMemo(() => {
    const isErrorStyle = PasswordsVariants.errorVariant;
    const getError = isError ? isErrorStyle : "";
    const getColor = getColors.colors;
    const getReadonly = isReadonlyClass?.isReadOnlyStyle;
    const getDisabled = isDisableClass?.isDisabledStyle;
    return {
      className:
        `${getColor} ${getError} ${getDisabled} ${getReadonly} `,
    };
  }, [
    isErrorStyle,
    colors,
    isReadonlyClass,
    isDisableClass,
    isError,
  ]);

  /**
   * State for component
   */
  const GetPasswordProps = useMemo(() => {
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
    GetVariantStyle,
    GetPasswordProps,
    isError
  };
}