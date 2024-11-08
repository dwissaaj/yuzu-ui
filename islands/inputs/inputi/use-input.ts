import { useMemo } from "https://esm.sh/v128/preact@10.22.0/compat/src/index.js";
import type { InputProps } from "./type.ts";
import { InputVariants } from "./input-variants.ts";

export function useInput(props: InputProps) {
  const {
    domRef,
    className = "",
    style = "",
    size = "medium",
    color = "none",
    variant = "full",
    yuzuErrorStyle = "",
    yuzuInputReadonlyStyle = "",
    yuzuDisabledStyle="",
    yuzuRequiredStyle="",
    isReadonly = false,
    isFullWidth = false,
    isDisabled = false,
    isError = false,
    isRequired = false,
    label,
    labelPlacement,
    ...otherProps
  } = props;

  const fullWidthClass = useMemo(
    () => {
      if (isFullWidth === true) {
        return { size: InputVariants.fullWidth };
      } else isFullWidth === false;
      {
        return { size: InputVariants.sizes[size] };
      }
    },
    [isFullWidth, size],
  );
  const GetSizeClass = useMemo(
    () => {
      return {
        parentSize: InputVariants.sizes[size],
      };
    },
    [size],
  );
  const GetVariantClass = useMemo(
    () => {
      return {
        variant: InputVariants.variants[variant],
      };
    },
    [variant],
  );
  const GetLabelPlacement = useMemo(
    () => {
      return {
        label: labelPlacement
      };
    },
    [label],
  );
  const GetDisabled = useMemo(
    () => {
      if (isDisabled === true) {
        const disabledStyle = InputVariants.disabledStyle;
        return { disabledStyle };
      } else isDisabled === false;
      {
        const disabledStyle = "";
        return { disabledStyle };
      }
    },
    [isDisabled],
  );

  const GetCustomError = useMemo(
    () => {
      if (isError === true) {
        return { yuzuErrorStyle };
      } else isError === false;
      {
        const errorStyle = "";
        return { errorStyle };
      }
    },
    [isDisabled],
  );
  const GetCustomReadonly = useMemo(
    () => {
      if (isReadonly === true) {
        return { yuzuInputReadonlyStyle };
      } else isError === false;
      {
        const yuzuInputReadonlyStyle = "";
        return { yuzuInputReadonlyStyle };
      }
    },
    [isDisabled],
  );
  const GetErrorInput = useMemo(
    () => {
      if (isError === true) {
        const errorStyle = InputVariants.errorStyle;
        return { errorStyle };
      } else isError === false;
      {
        const errorStyle = "";
        return { errorStyle };
      }
    },
    [isDisabled],
  );
  const GetCustomDisabled = useMemo(
    () => {
      if (isDisabled === true) {
        return { yuzuDisabledStyle };
      } else isDisabled === false;
      {
        const yuzuDisabledStyle = "";
        return { yuzuDisabledStyle };
      }
    },
    [isDisabled],
  );
  const GetCustomRequired = useMemo(
    () => {
      if (isRequired === true) {
        return { yuzuRequiredStyle };
      } else isRequired === false;
      {
        const yuzuRequiredStyle = "";
        return { yuzuRequiredStyle };
      }
    },
    [isRequired],
  );
  const GetReadonly = useMemo(
    () => {
      if (isReadonly === true) {
        const inputReadonlyStyle = InputVariants.inputReadonlyStyles;
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
        const colorSelected = InputVariants.colors[color];
        return `border-${colorSelected}`;
      } else variant === "full";
      {
        const colorSelected = InputVariants.colors[color];
        return `bg-${colorSelected}`;
      }
    },
    [color, variant],
  );
  const GetParentsStyle = useMemo(
    () => {
      const size = fullWidthClass.size;
      const color = GetColorClass;
      const disable = GetDisabled.disabledStyle;
      const variant = GetVariantClass.variant;
      const error = GetErrorInput.errorStyle;
      const readonly = GetReadonly.inputReadonlyStyle;
      return {
        className: `${size} ${color} ${variant} ${disable} ${error} ${readonly}`
          .trim(),
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
      const color = GetColorClass;
      const disable = GetDisabled.disabledStyle;
      const error = GetErrorInput.errorStyle;
      const readonly = GetReadonly.inputReadonlyStyle;
      return {
        className: ` ${color} ${disable} ${error} ${readonly}`,
      };
    },
    [GetColorClass, GetDisabled],
  );
  const GetLabelProps = useMemo(
    () => {
      const labels = label;
      const disable = GetDisabled.disabledStyle;
      const readonly = GetReadonly.inputReadonlyStyle;
      
      return {
        className: `${disable} ${readonly}`,
        labelPlacement: GetLabelPlacement.label,
        label: labels
      };
    },
    [GetColorClass, GetDisabled],
  );
  return {
    domRef,
    className,
    style,
    GetParentsStyle,
    isDisabled,
    GetInputStyle,
    GetDisabled,
    GetCustomError,
    GetCustomReadonly,
    GetCustomRequired,
    isReadonly,
    isRequired,
    GetCustomDisabled,
    GetLabelProps,
    ...otherProps,
  };
}
