import { useMemo } from "https://esm.sh/v128/preact@10.22.0/compat/src/index.js";
import { PasswordsVariants } from "./password-variants.ts";
import type { PasswordProps } from "./type.ts";

export function usePassword(props: PasswordProps) {
  const {
    domRef,
    className = "",
    style = "",
    size = "medium",
    color = "none",
    variant = "full",
    label,
    description,
    isFullWidth = false,
    isDisabled = false,
    isReadonly = false,
    isIconHidden,
    isError = false,
    ...otherProps
  } = props;

  const GetSize = useMemo(
    () => {
      if (isFullWidth === true) {
        return { size: PasswordsVariants.sizes.fullWidth };
      } else isFullWidth === false;
      {
        return { size: PasswordsVariants.sizes[size] };
      }
    },
    [isFullWidth, size],
  );

  const GetVariantClass = useMemo(
    () => {
      return {
        variant: PasswordsVariants.variants[variant],
      };
    },
    [variant],
  );

  const GetDisabled = useMemo(
    () => {
      if (isDisabled === true) {
        const disabledStyle = PasswordsVariants.disabledStyle;
        return { disabledStyle };
      } else isDisabled === false;
      {
        const disabledStyle = "";
        return { disabledStyle };
      }
    },
    [isDisabled],
  );

  const GetErrorInput = useMemo(
    () => {
      if (isError === true) {
        const errorStyle = PasswordsVariants.errorStyle;
        return { errorStyle };
      } else isError === false;
      {
        const errorStyle = "";
        return { errorStyle };
      }
    },
    [isDisabled],
  );
  const GetReadonly = useMemo(
    () => {
      if (isReadonly === true) {
        const inputReadonlyStyle = PasswordsVariants.inputReadonlyStyles;
        return { inputReadonlyStyle };
      } else isReadonly === false;
      {
        const inputReadonlyStyle = "";
        return { inputReadonlyStyle };
      }
    },
    [isDisabled],
  );
  const GetColorClass = useMemo(
    () => {
      if (variant === "underline") {
        const colorSelected = PasswordsVariants.colors[color];
        return `border-${colorSelected}`;
      } else variant === "full";
      {
        const colorSelected = PasswordsVariants.colors[color];
        return `bg-${colorSelected}`;
      }
    },
    [color, variant],
  );
  const GetParentsStyle = useMemo(
    () => {
      const size = GetSize.size;
      const color = GetColorClass;
      const disable = GetDisabled.disabledStyle;
      const variant = GetVariantClass.variant;
      const error = GetErrorInput.errorStyle;
      return {
        className: `${size} ${color} ${variant} ${disable} ${error}`
          .trim(),
      };
    },
    [
      GetColorClass,
      GetDisabled,
      GetSize,
      GetVariantClass,
    ],
  );

  const GetInputStyle = useMemo(
    () => {
      const color = GetColorClass;
      const disable = GetDisabled.disabledStyle;
      const error = GetErrorInput.errorStyle;
      const base = PasswordsVariants.inputStyle;
      const readonly = GetReadonly.inputReadonlyStyle;
      return {
        className: `${base} ${color} ${disable} ${error} ${readonly}`.trim(),
      };
    },
    [GetColorClass, GetDisabled],
  );

  const GetIconStyle = useMemo(

    () => {
      const style = PasswordsVariants.buttonStyle
      const hidden = isIconHidden ? "hidden": ""
      const disabled = isDisabled ? GetDisabled.disabledStyle : ""
      return {
        className: `${style} ${hidden} ${disabled}`
      }
    },[])
  return {
    domRef,
    className,
    GetParentsStyle,
    isDisabled,
    GetInputStyle,
    isIconHidden,
    GetIconStyle,
    GetDisabled,
    isReadonly,
    label,
    description,
    ...otherProps,
  };
}
