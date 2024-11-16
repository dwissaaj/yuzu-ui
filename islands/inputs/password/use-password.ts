import { useMemo } from "https://esm.sh/v128/preact@10.22.0/compat/src/index.js";
import { PasswordsVariants } from "./password-variants.ts";
import type { PasswordProps } from "./type.ts";

export function usePassword(props: PasswordProps) {
  const {
    domRef,
    className = "",
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

  const GetVariant = useMemo(
    () => {
      return {
        variant: PasswordsVariants.variants[variant],
      };
    },
    [variant],
  );
  const GetColor = useMemo(
    () => {
      const colors = PasswordsVariants.colors[color];
      return colors;
    },
    [color],
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

  const GetVariantAndColor = useMemo(
    () => {
      const variants = PasswordsVariants.variants[variant](GetColor);
      return {
        variants,
      };
    },
    [variant, GetColor],
  );
  const GetWrapperBaseStyle = useMemo(
    () => {
      const size = GetSize.size;
      const disabled = GetDisabled.disabledStyle
      return {
        className: `${size} ${disabled}`
          .trim(),
      };
    },
    [
      GetVariant,
      GetDisabled,
      GetSize,
    ],
  );

  const GetWrapperInputStyle = useMemo(
    () => {
      const size = GetSize.size;
      const disable = GetDisabled.disabledStyle
      const variants = GetVariantAndColor.variants
      const disabled = GetDisabled.disabledStyle
      return {
        className: `${size} ${variants} ${disable} ${disabled}`
          .trim(),
      };
    },
    [
      GetVariant,
      GetDisabled,
      GetSize,
      GetVariantAndColor,
    ],
  );

  const GetInputStyle = useMemo(
    () => {
      const disable = GetDisabled.disabledStyle;
      const base = PasswordsVariants.inputStyle;
      const readonly = GetReadonly.inputReadonlyStyle;
       const variant = GetVariantAndColor.variants
       const disabled = GetDisabled.disabledStyle
      return {
        className: `${base} ${disable} ${readonly} ${variant} ${disabled}`.trim(),
      };
    },
    [GetDisabled, GetVariantAndColor, GetReadonly],
  );

  const GetIconStyle = useMemo(
    () => {
      const style = PasswordsVariants.buttonStyle
      const hidden = isIconHidden ? "hidden": ""
      const disabled = isDisabled ? GetDisabled.disabledStyle : ""
      return {
        className: `${style} ${hidden} ${disabled}`
      }
    },[GetDisabled, isDisabled])
  
    const GetLabelProps = useMemo(
      () => {
        const classLabel = PasswordsVariants.labelStyles
        const disabled = GetDisabled.disabledStyle
        return {
          className: `${classLabel} ${disabled}`,
          label
        }
      },[label])
      const GetDescriptionProps = useMemo(
        () => {
          const classDesc = PasswordsVariants.descriptionStyles
          const disabled = GetDisabled.disabledStyle
          return {
            className: `${classDesc} ${disabled}`,
            description
          }
        },[description])
  return {
    domRef,
    className,
    GetWrapperInputStyle,
    GetWrapperBaseStyle,
    isDisabled,
    GetInputStyle,
    isIconHidden,
    GetIconStyle,
    GetDisabled,
    GetLabelProps,
    GetDescriptionProps,
    isReadonly,
    ...otherProps,
  };
}
