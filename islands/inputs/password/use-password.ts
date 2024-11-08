import { useMemo } from "https://esm.sh/v128/preact@10.22.0/compat/src/index.js";
import { PasswordsVariants } from "./password-variants.ts";
import type { PasswordNewProps } from "./type.ts";

export function usePassword(props: PasswordNewProps) {
  const {
    domRef,
    className = "",
    style = "",
    size = "medium",
    color = "none",
    disabledStyle,
    variant = "full",
    inputReadonlyStyle,
    isFullWidth,
    isDisabled,
    yuzuErrorStyle="",
    yuzuInputReadonlyStyle="",
    isReadonly,
    isError=false,
    ...otherProps
  } = props;

  const fullWidthClass = useMemo(
    () => {
      if (isFullWidth === true) {
        return { size: PasswordsVariants.fullWidth };
      } else isFullWidth === false;
      {
        return { size: PasswordsVariants.sizes[size] };
      }
    },
    [isFullWidth, size],
  );
  const GetSizeClass = useMemo(
    () => {
      return {
        parentSize: PasswordsVariants.sizes[size],
      };
    },
    [size],
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
        const disabledStyle = PasswordsVariants.disabledStyle
        return { disabledStyle };
      } else isDisabled === false;
      {
        const disabledStyle = "";
        return { disabledStyle };
      }
    },
    [isDisabled, disabledStyle],
  );
 
  const GetErrorInput = useMemo(
    () => {
      if (isError === true) {
        const errorStyle = PasswordsVariants.errorStyle;
        return { errorStyle };
      } else isError === false;
      {
        const errorStyle = ""
        return { errorStyle };
      }
    },
    [isDisabled, disabledStyle],
  );
  const GetReadonly = useMemo(
    () => {
      if (isReadonly === true) {
        const inputReadonlyStyle = PasswordsVariants.inputReadonlyStyles;
        return { inputReadonlyStyle };
      } else isReadonly === false;
      {
        const inputReadonlyStyle = ""
        return { inputReadonlyStyle };
      }
    },
    [isDisabled, disabledStyle],
  );
  const GetColorClass = useMemo(
    () => {
      if(variant === "underline") {
        const colorSelected = PasswordsVariants.colors[color]
        return `border-${colorSelected}`
      }
      else(variant === "full"); {
        const colorSelected = PasswordsVariants.colors[color]
        return `bg-${colorSelected}`
      }
    },
    [color, variant],
  );
  const GetParentsStyle = useMemo(
    () => {
      const size = fullWidthClass.size;
      const color = GetColorClass;
      const disable = GetDisabled.disabledStyle;
      console.log(color);
      const variant = GetVariantClass.variant;
      const error = GetErrorInput.errorStyle
      const readonly = GetReadonly.inputReadonlyStyle
      return {
        className: `${size} ${color} ${variant} ${disable} ${error} ${readonly}`.trim(),
      };
    },
    [
      GetColorClass,
      GetDisabled,
      GetSizeClass,
      GetVariantClass,
    ],
  );

  const GetInputStyle = useMemo(
    () => {
        const color = GetColorClass
        const disable = GetDisabled.disabledStyle
        const error = GetErrorInput.errorStyle
        const base = PasswordsVariants.inputStyle
        const readonly = GetReadonly.inputReadonlyStyle
        return {
          className :`${base} ${color} ${disable} ${error} ${readonly}`
        }
    },[GetColorClass, GetDisabled])
  return {
    domRef,
    className,
    style,
    GetParentsStyle,
    isDisabled,
    GetInputStyle,
    GetDisabled,
    yuzuErrorStyle,
    yuzuInputReadonlyStyle,
    isReadonly,
    ...otherProps,
  };
}
