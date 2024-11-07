import type { ButtonProps } from "./type.ts";
import { useMemo } from "https://esm.sh/v128/preact@10.22.0/compat/src/index.js";
import { ButtonVariants } from "./button-variant.ts";
export function useButton(props: ButtonProps) {
  const {
    domRef,
    onClick,
    children,
    className = "",
    style,
    isDisabled,
    size = "small",
    variant = "primary",
    types = "button",
    radius = "md",
    yuzuDisableStyle = "",
    isFullWidth,
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
   * Hook for full width component
   * @default false
   */
  const fullWidthClass = useMemo(() => (isFullWidth ? "w-full" : ""), [
    isFullWidth,
  ]);

  /**
   * Hooks for checking the type of the button
   * @returns {string} type  e.g "button"
   */
  const GetButtonProps = useMemo(() => {
    return types;
  }, [types]);

  /**
   * @description
   * Hooks for all button className
   * @return {string}
   */
  const GetButtonClass = useMemo(
    () => {
      const disableStyle = disabledClass;
      const getisFullWidth = fullWidthClass;
      const getvariants = ButtonVariants.variantsStyle[variant];
      const getradius = ButtonVariants.radiusStyle[radius];
      const getsize = ButtonVariants.sizes[size];
      return {
        className:
          `hover:brightness-105 transition ease-in-out duration-500 ${getvariants} ${getisFullWidth} ${getradius} ${getsize} ${fullWidthClass} ${disableStyle}`
            .trim(),
      };
    },
    [variant, radius, size, types],
  );

  return {
    domRef,
    onClick,
    children,
    className,
    style,
    isDisabled,
    GetButtonClass,
    yuzuDisableStyle,
    GetButtonProps,
    ...otherProps,
  };
}
