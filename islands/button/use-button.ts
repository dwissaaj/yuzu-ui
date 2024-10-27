import type { ButtonProps } from "./type.ts";
import { useMemo } from "https://esm.sh/v128/preact@10.22.0/compat/src/index.js";
import {
  radiusOptions,
  sizeOptions,
  typeButton,
  variantColors,
} from "./button-variant.ts";
export function useButton(props: ButtonProps) {
  const {
    ref,
    onClick,
    children,
    className,
    style,
    isDisabled,
    as,
    size = "small",
    variant = "primary",
    type = "button",
    radius = "md",
    disableClassName,
    isFullWidth,
  } = props;
  const Component = as || "button";

  /**
   * check if button disabled
   */
  const disabledClass = useMemo(() => {
    return isDisabled ? "brightness-50 cursor-not-allowed" : "";
  }, [isDisabled]);

  /**
   * Calculate if full width
   */
  const fullWidthClass = useMemo(() => {
    return isFullWidth ? "w-full" : "";
  }, [isFullWidth]);

  const getButtonProps = useMemo(
    () => {
      return {
        disableClassName: disabledClass,
        isFullWidth: fullWidthClass,
        variant: variantColors[variant],
        radius: radiusOptions[radius],
        size: sizeOptions[size],
        type: typeButton[type],
      };
    },
    [variant, radius, size, type, disableClassName],
  );

  return {
    ref,
    onClick,
    children,
    className,
    style,
    isDisabled,
    Component,
    getButtonProps,
  };
}
