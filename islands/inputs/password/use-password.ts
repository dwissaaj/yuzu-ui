import { useMemo } from "https://esm.sh/v128/preact@10.22.0/compat/src/index.js";
import { PasswordsVariants } from "./password-variants.ts";
import type { PasswordProps } from "./type.ts";

export function usePassword(props: PasswordProps) {
  const {
    domRef,
    className = "",
    size = "medium",
    color = "primary",
    variant = "full",
    label,
    classNames,
    description,
    isFullWidth = false,
    isDisabled = false,
    isReadonly = false,
    isRequired = false,
    isIconHidden,
    isError = false,
    errorMessage,
    ...otherProps
  } = props;

  const GetDisabled = useMemo(
    () => {
      if (isDisabled === true) {
        return isError;
      }
    },
    [isDisabled],
  );
  const GetReadonly = useMemo(
    () => {
      if (isDisabled === true) {
        return isError;
      }
    },
    [isDisabled],
  );
  const GetError = useMemo(
    () => {
      if (isError === true) {
        return isError;
      }
    },
    [isError],
  );
  const GetSize = useMemo(
    () => {
      if (isFullWidth === true) {
        return { size: PasswordsVariants.sizes.fullWidth };
      } else {
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
  const GetDisabledStyle = useMemo(
    () => {
      if (isDisabled === true) {
        const disabledStyle = PasswordsVariants.disabledStyle;
        return disabledStyle;
      } else isDisabled === false;
      {
        const disabledStyle = "";
        return disabledStyle;
      }
    },
    [isDisabled],
  );

  const GetReadonlyClass = useMemo(
    () => {
      if (isReadonly === true) {
        const readonlyStyles = PasswordsVariants.readonlyStyles;
        return { readonlyStyles };
      } else isReadonly === false;
      {
        const readonlyStyles = "";
        return { readonlyStyles };
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
      const disabled = GetDisabledStyle;
      const readonly = GetReadonlyClass.readonlyStyles;

      return {
        className: `${size} ${disabled} ${readonly}`,
      };
    },
    [
      GetVariant,
      GetDisabledStyle,
      GetSize,
    ],
  );

  const GetWrapperInputStyle = useMemo(
    () => {
      const size = GetSize.size;
      const disable = GetDisabledStyle;
      const variants = GetVariantAndColor.variants;
      const disabled = GetDisabledStyle;
      console.log(disabled);
      const error = GetError ? "!border-error" : "";
      return {
        className: `${size} ${variants} ${disable} ${disabled} ${error}`
          .trim(),
      };
    },
    [
      GetVariant,
      GetDisabledStyle,
      GetSize,
      GetVariantAndColor,
    ],
  );

  const GetInputStyle = useMemo(
    () => {
      const disable = GetDisabledStyle;
      const base = PasswordsVariants.inputStyle;
      const readonly = GetReadonlyClass.readonlyStyles;
      const variant = GetVariantAndColor.variants;
      const disabled = GetDisabledStyle;
      const error = GetError ? "text-error" : "";
      return {
        className:
          `${base} ${disable} ${readonly} ${variant} ${disabled} ${error}`
            .trim(),
      };
    },
    [GetDisabledStyle, GetVariantAndColor, GetReadonlyClass, GetError],
  );

  const GetIconProps = useMemo(
    () => {
      const style = PasswordsVariants.buttonStyle;
      const hidden = isIconHidden ? "hidden" : "";
      const disabled = isDisabled ? GetDisabledStyle : "";
      const error = GetError ? "text-error stroke-error" : "";
      const readonly = GetReadonlyClass.readonlyStyles;
      return {
        className: `${style} ${hidden} ${disabled} ${error} ${readonly}`,
      };
    },
    [GetDisabledStyle, isDisabled],
  );

  const GetLabelProps = useMemo(
    () => {
      const classLabel = PasswordsVariants.labelStyles;
      const disabled = GetDisabledStyle;
      const required = isRequired ? PasswordsVariants.requiredStyle : "";
      return {
        className: `${classLabel} ${disabled} ${required}`,
        label,
      };
    },
    [label],
  );
  const GetDescriptionProps = useMemo(
    () => {
      const classDesc = PasswordsVariants.descriptionStyles;
      const disabled = GetDisabledStyle;
      return {
        className: `${classDesc} ${disabled}`,
        description,
      };
    },
    [description],
  );
  const GetErrorMessageProps = useMemo(
    () => {
      const classDesc = GetError
        ? PasswordsVariants.errorMessageStyle
        : "hidden";
      return {
        className: `${classDesc}`,
      };
    },
    [GetError],
  );

  const CheckRender = useMemo(
    () => {
      if (isFullWidth && size) {
        throw new Error(
          'You cannot use isFullWidth=true and size="any" together. To make it full width, set size="fullwidth" instead',
        );
      }
    },
    [isFullWidth, size],
  );

  const GetSlot = useMemo(
    () => {
      const yuzuBase = classNames?.yuzuBase
        ? classNames?.yuzuBase
        : GetWrapperBaseStyle.className;
      const yuzuBaseDisabled = GetDisabled ? classNames?.yuzuBaseDisabled : "";
      const yuzuInput = classNames?.yuzuInput ? classNames?.yuzuInput : "";
      const yuzuInputError = GetError ? classNames?.yuzuInputError : "";
      const yuzuIcon = classNames?.yuzuIcon ? classNames?.yuzuIcon : "";
      const yuzuLabel = classNames?.yuzuLabel ? classNames?.yuzuLabel : "";
      const yuzuLabelRequired = isRequired ? classNames?.yuzuLabelRequired : "";
      const yuzuDescription = classNames?.yuzuDescription
        ? classNames?.yuzuDescription
        : "";
      const yuzuErrorMessage = GetError ? classNames?.yuzuErrorMessage : "";
      return {
        yuzuBase,
        yuzuBaseDisabled,
        yuzuInput,
        yuzuInputError,
        yuzuIcon,
        yuzuLabel,
        yuzuLabelRequired,
        yuzuDescription,
        yuzuErrorMessage,
      };
    },
    [classNames],
  );
  return {
    domRef,
    className,
    GetWrapperInputStyle,
    GetWrapperBaseStyle,
    isDisabled,
    GetInputStyle,
    isIconHidden,
    GetIconProps,
    GetLabelProps,
    GetDescriptionProps,
    isReadonly,
    isRequired,
    CheckRender,
    GetErrorMessageProps,
    errorMessage,
    GetSlot,
    ...otherProps,
  };
}
