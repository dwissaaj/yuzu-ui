import { useMemo } from "https://esm.sh/v128/preact@10.22.0/compat/src/index.js";
import type { InputProps } from "./type.ts";
import { InputVariants } from "./input-variants.ts";

export function useInput(props: InputProps) {
  const {
    domRef,
    className = "",
    style = "",
    size = "medium",
    color = "primary",
    variant = "full",
    yuzuErrorStyle = "",
    yuzuReadonlyStyle = "",
    yuzuDisabledStyle = "",
    yuzuRequiredStyle = "",
    isReadonly = false,
    isFullWidth = false,
    isDisabled = false,
    isError = false,
    isRequired = false,
    label,
    labelPlacement = "top",
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
        label: labelPlacement,
      };
    },
    [label],
  );
  const GetDisabled = useMemo(
    () => {
      if (isDisabled === true) {
        const disabledStyle = InputVariants.disabledStyle;
        return disabledStyle;
      } else isDisabled === false;
      {
        const disabledStyle = "";
        return disabledStyle;
      }
    },
    [isDisabled],
  );

  const GetCustomError = useMemo(
    () => {
      if (isError === true) {
        return yuzuErrorStyle;
      } else isError === false;
      {
        const yuzuErrorStyle = "";
        return yuzuErrorStyle;
      }
    },
    [isError],
  );
  const GetCustomReadonly = useMemo(
    () => {
      if (isReadonly === true) {
        return yuzuReadonlyStyle;
      } else isError === false;
      {
        const yuzuReadonlyStyle = "";
        return yuzuReadonlyStyle;
      }
    },
    [isReadonly],
  );
  
  const GetErrorInput = useMemo(
    () => {
      if (isError === true) {
        const yuzuErrorStyle = InputVariants.errorStyle;
        return { yuzuErrorStyle };
      } else isError === false;
      {
        const yuzuErrorStyle = "";
        return { yuzuErrorStyle };
      }
    },
    [isError],
  );

  const GetCustomRequired = useMemo(
    () => {
      if (isRequired === true) {
        return yuzuRequiredStyle;
      } else isRequired === false;
      {
        const yuzuRequiredStyle = "";
        return yuzuRequiredStyle;
      }
    },
    [isRequired],
  );
  const GetCustomDisabled = useMemo(
    () => {
      if (isDisabled === true) {
        console.log(yuzuDisabledStyle)
        return yuzuDisabledStyle;
      } else isDisabled === false;
      {
        const yuzuInputDisables = "";
        return yuzuInputDisables;
      }
    },
    [isDisabled],
  );

  const GetReadonly = useMemo(
    () => {
      if (isReadonly === true) {
        const readonlyStyles = InputVariants.readonlyStyles;
        return { readonlyStyles };
      } else isReadonly === false;
      {
        const readonlyStyles = "";
        return { readonlyStyles };
      }
    },
    [isReadonly],
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
      const disable = GetDisabled;
      const variant = GetVariantClass.variant;
      const error = GetErrorInput.yuzuErrorStyle;
      const readonly = GetReadonly.readonlyStyles;
      return {
        className: `${size} ${color} ${variant} ${disable} ${error} ${readonly}`
          .trim(),
      };
    },
    [
      GetColorClass,
      GetReadonly,
      GetDisabled,
      GetSizeClass,
      GetVariantClass,
    ],
  );

  const GetInputStyle = useMemo(
    () => {
      const color = GetColorClass;
      const disable = GetDisabled;
      const error = GetErrorInput.yuzuErrorStyle;
      const base = InputVariants.inputStyle;
      const readonly = GetReadonly.readonlyStyles;
      return {
        className: `${base} ${color} ${disable} ${error} ${readonly}`.trim(),
      };
    },
    [GetColorClass, GetDisabled],
  );

  const GetRequiredLabel = useMemo(
    () => {
      if (isRequired === true) {
        const requiredStyle = InputVariants.labelRequiredStyle;
        return requiredStyle;
      } else isDisabled === false;
      {
        const requiredStyle = "";
        return requiredStyle;
      }
    },
    [isDisabled],
  );
  const GetLabelProps = useMemo(
    () => {
      const labels = label;
      const disable = GetDisabled;
      const readonly = GetRequiredLabel;
      return {
        className: `${disable} ${readonly}`.trim(),
        labelPlacement: GetLabelPlacement.label,
        label: labels,
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
