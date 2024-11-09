import { useMemo } from "https://esm.sh/v128/preact@10.22.0/compat/src/index.js";
import type { InputProps } from "./type.ts";
import { InputiVariants } from "./input-variants.ts";

export function useInputi(props: InputProps) {
  const {
    domRef,
    className= "",
    style = "",
    size = "medium",
    color = "primary",
    variant = "full",
    yuzuErrorStyle = "",
    yuzuReadonlyStyle = "",
    yuzuDisabledStyle="",
    yuzuRequiredStyle="",
    isReadonly = false,
    isFullWidth = false,
    isDisabled = false,
    isError = false,
    isRequired = false,
    label,
    labelPlacement="top",
    ...otherProps
  } = props;

  const fullWidthClass = useMemo(
    () => {
      if (isFullWidth === true) {
        return { size: InputiVariants.fullWidth };
      } else isFullWidth === false;
      {
        return { size: InputiVariants.sizes[size] };
      }
    },
    [isFullWidth, size],
  );
  const GetSizeClass = useMemo(
    () => {
      return {
        parentSize: InputiVariants.sizes[size],
      };
    },
    [size],
  );
  const GetVariantClass = useMemo(
    () => {
      return {
        variant: InputiVariants.variants[variant],
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
        const disabledStyle = InputiVariants.disabledStyle;
        return disabledStyle 
      } else isDisabled === false;
      {
        const disabledStyle = "";
        return disabledStyle 
      }
    },
    [isDisabled],
  );

  const GetCustomError = useMemo(
    () => {
      if (isError === true) {
        console.log(isError)
        console.log(yuzuErrorStyle)
        return  yuzuErrorStyle 
      } else isError === false;
      {
        const yuzuErrorStyle  = "";
        return yuzuErrorStyle 
      }
    },
    [isError],
  );
  const GetCustomReadonly = useMemo(
    () => {
      if (isReadonly === true) {
        return  yuzuReadonlyStyle 
      } else isError === false;
      {
        const yuzuReadonlyStyle = "";
        return yuzuReadonlyStyle
      }
    },
    [isReadonly],
  );
  const GetErrorInput = useMemo(
    () => {
      if (isError === true) {
        const yuzuErrorStyle = InputiVariants.errorStyle;
        return { yuzuErrorStyle };
      } else isError === false;
      {
        const yuzuErrorStyle = ""
        return { yuzuErrorStyle };
      }
    },
    [isError],
  );
  const GetCustomDisabled = useMemo(
    () => {
      if (isDisabled === true) {
        return yuzuDisabledStyle ;
      } else isDisabled === false;
      {
        const yuzuDisabledStyle = "";
        return { yuzuDisabledStyle };
      }
    },
    [GetDisabled],
  );
  const GetCustomRequired = useMemo(
    () => {
      if (isRequired === true) {
        return yuzuRequiredStyle
      } else isRequired === false;
      {
        const yuzuRequiredStyle = "";
        return yuzuRequiredStyle
      }
    },
    [isRequired],
  );
  const GetReadonly = useMemo(
    () => {
      if (isReadonly === true) {
        const readonlyStyles = InputiVariants.readonlyStyles;
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
        const colorSelected = InputiVariants.colors[color];
        return `border-${colorSelected}`;
      } else variant === "full";
      {
        const colorSelected = InputiVariants.colors[color];
        return `bg-${colorSelected}`;
      }
    },
    [color, variant],
  );

  const GetParentsStyle = useMemo(
    () => {
      const size = fullWidthClass.size;
      const color = GetColorClass;
      const disable = GetDisabled
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
      const base = InputiVariants.inputStyle;
      const readonly = GetReadonly.readonlyStyles;
      return {
        className: `${base} ${color} ${disable} ${error} ${readonly}`.trim(),
      };
    },
    [GetColorClass, GetDisabled],
  );

  const GetRequiredLabel = useMemo(
    () => {
      return {
        readOnly: InputiVariants.labelRequiredStyle
      }
    },[isRequired])
  const GetLabelProps = useMemo(
    () => {
      const labels = label;
      const disable = GetDisabled;
      const readonly = GetRequiredLabel.readOnly;
      return {
        className: `${disable} ${readonly}`.trim(),
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
