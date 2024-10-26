import type { ButtonProps } from "./type.ts";
import { todos } from "../theme/use-theme.ts";
import { useMemo } from "https://esm.sh/v128/preact@10.22.0/compat/src/index.js";

export function useButton(props: ButtonProps) {
  const {
    domRef,
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
  } = props;
  const Component = as || "button";
  const getButtonProps = useMemo(
    () => {
      const radiusOptions = {
        sm: "border rounded-sm",
        md: "border-2 rounded-md",
        lg: "border-3 rounded-lg",
      };

      const sizeOptions = {
        small: "p-2 m-2",
        large: "p-6 m-4",
      };

      const variantColors = {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        error:'bg-error',
        success: 'bg-success',
        warning: 'bg-warning',
      };

      const typeButton = {
        button: "button",
        reset: "reset",
        submit: "submit",
      };
      console.log('here', variantColors.error)
      console.log('here', variantColors)
      return {
        variant: variantColors[variant], 
        radius: radiusOptions[radius], 
        size: sizeOptions[size],
        type: typeButton[type],
      }

    },
    [variant, radius, size, type],
  );

  return {
    domRef,
    onClick,
    children,
    className,
    style,
    isDisabled,
    Component,
    getButtonProps,
  };
}
