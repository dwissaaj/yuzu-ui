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
    classNames,
    isReadonly = false,
    isFullWidth = false,
    isDisabled = false,
    isError = false,
    isRequired = false,
    label,
    labelPlacement = "top",
    ...otherProps
  } = props;

  /**
   * Computes the size-related styles for the input or parent container.
   */
  const GetSizeClass = useMemo(
    () => {
      if (isFullWidth === true) {
        return {
          parentSize: InputVariants.sizes.fullWidth,
        };
      } else;
      {
        return {
          parentSize: InputVariants.sizes[size],
        };
      }
    },
    [size],
  );
  /**
   * Computes the variant-specific styles for the input.
   */
  const GetVariantClass = useMemo(
    () => {
      return {
        variant: InputVariants.variants[variant],
      };
    },
    [variant],
  );

  /**
   * Determines the label placement style.
   */
  const GetLabelPlacement = useMemo(
    () => {
      return {
        label: labelPlacement,
      };
    },
    [label],
  );

  /**
   * Computes the styles for a disabled input.
   */
  const GetDisabled = useMemo(
    () => {
      if (isDisabled === true) {
        const disabledStyle = InputVariants.disabledStyle;
        return { disabledStyle, isDisabled };
      } else isDisabled === false;
      {
        const disabledStyle = "";
        return { disabledStyle, isDisabled };
      }
    },
    [isDisabled],
  );

  /**
   * Computes the styles for an input in an error state.
   */
  const GetErrorInput = useMemo(
    () => {
      if (isError === true) {
        const yuzuErrorStyle = InputVariants.errorStyle;
        return { yuzuErrorStyle, isError };
      } else isError === false;
      {
        const yuzuErrorStyle = "";
        return { yuzuErrorStyle, isError };
      }
    },
    [isError],
  );

  /**
   * Computes the styles for a readonly input.
   */
  const GetReadonly = useMemo(
    () => {
      if (isReadonly === true) {
        const readonlyStyles = InputVariants.readonlyStyles;
        return { readonlyStyles, isReadonly };
      } else isReadonly === false;
      {
        const readonlyStyles = "";
        return { readonlyStyles, isReadonly };
      }
    },
    [isReadonly],
  );

  /**
   * Computes the color-related or variants styles for the input based on its variant.
   */
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

  /**
   * Combines all computed styles for the parent container of the input.
   */
  const GetParentsStyle = useMemo(
    () => {
      const size = GetSizeClass.parentSize;
      const color = GetColorClass;
      const disable = GetDisabled.disabledStyle;
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

  /**
   * Combines all computed styles for the input element itself.
   */

  const GetInputStyle = useMemo(
    () => {
      const color = GetColorClass;
      const disable = GetDisabled.disabledStyle;
      const error = GetErrorInput.yuzuErrorStyle;
      const base = InputVariants.inputStyle;
      const readonly = GetReadonly.readonlyStyles;
      return {
        className: `${base} ${color} ${disable} ${error} ${readonly}`.trim(),
      };
    },
    [GetColorClass, GetDisabled],
  );

  /**
   * Computes the styles for the "required" state of the label.
   */
  const GetRequiredLabel = useMemo(
    () => {
      if (isRequired === true) {
        const requiredStyle = InputVariants.labelRequiredStyle;
        return { requiredStyle, isRequired };
      } else isDisabled === false;
      {
        const requiredStyle = "";
        return { isRequired, requiredStyle };
      }
    },
    [isDisabled],
  );

  /**
   * Combines all computed properties for the label.
   */
  const GetLabelProps = useMemo(
    () => {
      const labels = label;
      const disable = GetDisabled.disabledStyle;
      const readonly = GetRequiredLabel.requiredStyle;
      return {
        className: `${disable} ${readonly}`.trim(),
        labelPlacement: GetLabelPlacement.label,
        label: labels,
      };
    },
    [GetColorClass, GetDisabled],
  );

  /**
   * Computes slot-based styles for the input and its container.
   */
  const GetSlot = useMemo(
    () => {
      const yuzuBase = classNames?.yuzuBase ? classNames?.yuzuBase : "";
      const yuzuBaseDisabled = GetDisabled.isDisabled
        ? classNames?.yuzuBaseDisabled
        : "";
      const yuzuBaseReadonly = GetReadonly.isReadonly
        ? classNames?.yuzuBaseReadonly
        : "";
      const yuzuBaseError = GetErrorInput.isError
        ? classNames?.yuzuBaseError
        : "";
      const yuzuInput = classNames?.yuzuInput ? classNames?.yuzuInput : "";
      const yuzuInputDisabled = GetDisabled.isDisabled
        ? classNames?.yuzuInputDisabled
        : "";
      const yuzuInputReadonly = GetReadonly.isReadonly
        ? classNames?.yuzuInputReadonly
        : "";
      const yuzuInputError = GetErrorInput.isError
        ? classNames?.yuzuInputError
        : "";
      const yuzuLabelRequired = GetRequiredLabel.isRequired
        ? classNames?.yuzuLabelRequired
        : "";
      const yuzuLabel = classNames?.yuzuLabel ? classNames?.yuzuLabel : "";
      return {
        yuzuBase,
        yuzuBaseDisabled,
        yuzuBaseError,
        yuzuBaseReadonly,
        yuzuInput,
        yuzuInputDisabled,
        yuzuInputError,
        yuzuInputReadonly,
        yuzuLabel,
        yuzuLabelRequired,
      };
    },
    [classNames, GetErrorInput, GetDisabled],
  );

  return {
    domRef,
    className,
    style,
    GetParentsStyle,
    isDisabled,
    GetInputStyle,
    isReadonly,
    isRequired,
    GetSlot,
    GetLabelProps,
    ...otherProps,
  };
}
