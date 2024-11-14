import type { ButtonProps } from "./type.ts";
import { useMemo } from "https://esm.sh/v128/preact@10.22.0/compat/src/index.js";
import { ButtonVariants } from "./button-variant.ts";
export function useButton(props: ButtonProps) {
  const {
    domRef,
    children,
    className = "",
    isDisabled,
    size = "small",
    spinnerSize = "small",
    color = "primary",
    variant = "border",
    radius = "md",
    isLoading,
    isFullWidth = false,
    ...otherProps
  } = props;

  const GetColor = useMemo(
    () => {
      const colors = ButtonVariants.colors[color]
      return colors
    },
    [color],
  );
  const GetVariant = useMemo(
    () => {
      return {
        variant: ButtonVariants.variants
      };
    },
    [variant],
  );
  function GetStyle(color: string, variant: string) {
    switch (variant) {
      case "solid":
        return `hover:bg-${color}/60 bg-${color} active:bg-${color} disabled:bg-${color}/60 disabled:hover:bg-${color}/60`;
      case "border":
        return `border-${color} active:bg-${color}/20`;
      case "light":
        return `hover:bg-${color}/60 text-${color}-200`;
      case "ghost":
        return `border-${color} text-${color} hover:text-white disabled:text-white disabled:hover:text-${color} hover:bg-${color} disabled:bg-${color}/50`;
      default:
        return ""; 
    }
  }
  const baseStyle = ButtonVariants.baseStyle
  const variants = {
    solid: `${baseStyle} focus:outline-none `,
    border: `${baseStyle} border-2`,
    light: `${baseStyle} delay-150`,
    ghost: `${baseStyle} border-2`,
  };
  const GetVariantButton = useMemo(() => {
    const color = GetColor;
    const variantStyle = variants[variant] || "";
    const colorStyles = GetStyle(color, variant);
  
    return `${variantStyle} ${colorStyles}`.trim();
  }, [GetColor, variant]);
  const GetVariantColor = useMemo(
    () => {
      if (variant === "solid") {
        const color = GetColor
        const variants = ButtonVariants.variants.solid
        console.log(color)
        return `${variants} hover:bg-${color}/60 bg-${color} active:bg-${color} ` ;
      } else if (variant === "border") {
        const color = GetColor;
        const variants = ButtonVariants.variants.border;
        return `${variants} border-${color} active:bg-${color}/20`;
      } else if (variant === "ghost") {
        const color = GetColor
        const variants = ButtonVariants.variants.ghost
        return `${variants} border-${color} text-${color} hover:bg-${color} active:bg-white`
      } else if(variant === "light") {
        const color = GetColor
        const variants = ButtonVariants.variants.light
        return `${variants} hover:bg-${color}/60 ${variant} text-${color}`
      }
    },
    [GetColor, GetVariant, variant, color],
  );
  /**
   * check if button disabled and return the disabled style from variant
   * @default false
   * @return {string} for variant
   */
  const GetDisabled = useMemo(
    () => (isDisabled ? ButtonVariants.disableStyle : ""),
    [isDisabled],
  );

  /**
   * Hooks for checking the size of the spinner, can be customized 
   * and extended via variant file
   * @param {string} [spinnerSize="small"] 
   * @enum
   * "primary"   | @default
   * "secondary" | 
   * "error"     | 
   * "warning"   | 
   * "success"   | 
   * "Your Variant"
   */

  const GetSpinnerSize = useMemo(
    () => {
      const sizespin = ButtonVariants.spinnersSizes[spinnerSize];
      return {
        sizespin,
      };
    },
    [spinnerSize],
  );

  const GetSize = useMemo(
    () => {
      if (isFullWidth === true) {
        const full = ButtonVariants.sizes.buttons.full;
        return full;
      } else {
        const sizes = ButtonVariants.sizes.buttons[size];
        return sizes;
      }
    },
    [size, spinnerSize, isFullWidth],
  );
  /**
   * @description
   * Hooks for all button className
   * @return {string}
   */
  const GetButtonProps = useMemo(
    () => {
      const disabled = GetDisabled;
      const getradius = ButtonVariants.radiusStyle[radius];
      const size = GetSize;
      return {
        className: `${size} ${getradius} ${disabled}`
          .trim(),
      };
    },
    [radius, GetSize, GetDisabled, color, GetColor, GetVariant, variant],
  );

  const GetSpinnerProps = useMemo(
    () => {
      if (isLoading === true) {
        const sizes = GetSpinnerSize.sizespin;
        return {
          className: `${sizes} animate-spin`,
        };
      }
    },
    [isLoading, GetSpinnerSize],
  );

  return {
    domRef,
    children,
    GetSpinnerProps,
    className,
    GetVariantButton,
    isDisabled,
    isLoading,
    GetDisabled,
    GetVariantColor,
    GetButtonProps,
    ...otherProps,
  };
}
