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
    endContent,
    startContent,
    ...otherProps
  } = props;

  const GetColor = useMemo(
    () => {
      const colors = ButtonVariants.colors[color];
      return colors;
    },
    [color],
  );
  const GetVariant = useMemo(
    () => {
      return {
        variant: ButtonVariants.variants,
      };
    },
    [variant],
  );


  const GetVariantNew = useMemo(
    () => {
      const variants = ButtonVariants.variants[variant](color)
      console.log(variants)
      return {
        variants 
      }
    },[variant])
  const GetVariantButton = useMemo(() => {
    const variantStyle = GetVariantNew.variants
    console.log(variantStyle)

    return `${variantStyle}`.trim();
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
      const yuzuDisabled = GetDisabled
        ? GetDisabled + classNames?.yuzuDisabled
        : "";
      const yuzuSpinner = classNames?.yuzuSpinner
        ? classNames?.yuzuSpinner
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
