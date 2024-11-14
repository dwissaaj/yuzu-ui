import type { ButtonProps } from "./type.ts";
import { useMemo } from "https://esm.sh/v128/preact@10.22.0/compat/src/index.js";
import { ButtonVariants } from "./button-variant.ts";
export function useButton(props: ButtonProps) {
  const {
    domRef,
    children,
    className = "",
    classNames,
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
    const variantStyle = variants[variant]
    const colorStyles = GetStyle(color, variant);
    return `${variantStyle} ${colorStyles}`.trim();
  }, [GetColor, variant]);

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
    [size, isFullWidth],
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
        console.log(sizes)
        return {
          className: `${sizes} animate-spin`,
        };
      }
    },
    [isLoading, GetSpinnerSize],
  );
  const GetSlot = useMemo(
    () => {
      const yuzuBase = classNames?.yuzuBase ? classNames?.yuzuBase : "";
      const yuzuDisabled = GetDisabled ? GetDisabled + classNames?.yuzuDisabled : ""
      const yuzuSpinner = classNames?.yuzuSpinner ? classNames?.yuzuSpinner : "";
      console.log(yuzuDisabled)
      return {
        yuzuBase,
        yuzuDisabled,
        yuzuSpinner
      };
    },
    [classNames],
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
    GetButtonProps,
    GetSlot,
    ...otherProps,
  };
}
