import type { ButtonProps } from "./type.ts";
import { useMemo } from "preact/compat"
import { ButtonVariants } from "./button-variant.ts";

/**
 * Custom hook to handle button properties and dynamic styles.
 * @param {ButtonProps} props - Button configuration props.
 * @returns {object} Resolved properties and classNames for the button component.
 */

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
    endContent,
    startContent,
    ...otherProps
  } = props;

  /**
   * Resolve the color from ButtonVariants based on the given `color` prop.
   */
  const GetColor = useMemo(
    () => {
      const colors = ButtonVariants.colors[color];
      return colors;
    },
    [color],
  );
  /**
   * Resolve the variant styles based on the given `variant` prop.
   */
  const GetVariant = useMemo(
    () => {
      const variants = ButtonVariants.variants[variant](GetColor);
      return {
        variants,
      };
    },
    [variant],
  );

  /**
   * Generate the final variant styles as a string.
   */
  const GetVariantButton = useMemo(() => {
    const variantStyle = GetVariant.variants;
    return `${variantStyle}`;
  }, [variant, GetVariant]);

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
   * Get the spinner size style from `ButtonVariants` based on the `spinnerSize` prop.
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
  /**
   * Get the spinner styles if the button is loading.
   */
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
  /**
   * Get the size style from `ButtonVariants` based on the `size` and `isFullWidth` props.
   */
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
    [radius, GetSize, GetDisabled, color, GetColor, variant],
  );
  /**
   * Get any additional slot-based styles from the `classNames` prop.
   */

  const GetSlot = useMemo(
    () => {
      const yuzuBase = classNames?.yuzuBase ? classNames?.yuzuBase || "" : "";
      const yuzuDisabled = GetDisabled ? classNames?.yuzuDisabled || "" : "";
      const yuzuSpinner = classNames?.yuzuSpinner
        ? classNames?.yuzuSpinner || ""
        : "";
      return {
        yuzuBase,
        yuzuDisabled,
        yuzuSpinner,
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
    endContent,
    startContent,
    GetSlot,
    ...otherProps,
  };
}
