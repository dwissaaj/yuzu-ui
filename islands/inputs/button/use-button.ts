import type { ButtonProps } from "./type.ts";
import { useMemo } from "https://esm.sh/v128/preact@10.22.0/compat/src/index.js";
import { ButtonVariants } from "./button-variant.ts";
export function useButton(props: ButtonProps) {
  const {
    domRef,
    onClick,
    children,
    className = "",
    style = "",
    isDisabled,
    size = "small",
    spinnerSize = "small",
    variant = "primary",
    radius = "md",
    isLoading,
    isFullWidth = false,
    ...otherProps
  } = props;

  /**
   * check if button disabled and return the disabled style from variant
   * @default false
   * @return {string} for variant
   */
  const disabledClass = useMemo(
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
      const disableStyle = disabledClass;

      const getvariants = ButtonVariants.variantsStyle[variant];
      const getradius = ButtonVariants.radiusStyle[radius];
      const size = GetSize;
      return {
        className: ` ${getvariants} ${size} ${getradius} ${disableStyle} $`
          .trim(),
      };
    },
    [variant, radius, GetSize],
  );
  const GetSpinnerProps = useMemo(
    () => {
      if (isLoading === true) {
        const size = GetSpinnerSize.sizespin;

        return {
          className: `${size} animate-spin`,
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
    style,
    isDisabled,
    GetSpinnerSize,
    isLoading,

    GetButtonProps,
    ...otherProps,
  };
}
