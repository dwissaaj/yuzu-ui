import type { ButtonProps } from "./type.ts";
import { useMemo } from "https://esm.sh/v128/preact@10.22.0/compat/src/index.js";
import { ButtonVariants } from "./button-variant.ts";
export function useButton(props: ButtonProps) {
  const {
    domRef,
    onClick,
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
      return {
        color: ButtonVariants.colors[color],
      };
    },
    [color],
  );
  const GetVariant = useMemo(
    () => {
      return {
        variant: ButtonVariants.variants[variant],
      };
    },
    [variant],
  );

  const GetVariantColor = useMemo(
    () => {
      
      if (variant === "solid") {
        const color = GetColor.color;
        const variants = GetVariant.variant
        console.log(variants);
        return `${variants}${color}`;
      } else if (variant === "border") {
        const color = GetColor.color;
        const variants = ButtonVariants.variants.border;
        return `${variants}${color}`;
      } else if (variant === "ghost") {
        const color = GetColor.color;
        console.log("coor", color);
        // const borders = ButtonVariants.variants.border;
        // const colorbor = borders + color;
        const variants = ButtonVariants.variants.ghost;
        
        const combine = variants + color
        console.log('type',typeof combine)
        console.log(combine);
        return combine.toString()
      } else {
        return "";
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
   * Hooks for checking the type of the button
   * @returns {string} type  e.g "button"
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
    [radius, GetSize],
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
    onClick,
    children,
    GetSpinnerProps,
    className,
    isDisabled,
    isLoading,
    GetDisabled,
    GetVariantColor,
    GetButtonProps,
    ...otherProps,
  };
}
