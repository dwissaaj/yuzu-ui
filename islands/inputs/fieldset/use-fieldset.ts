import { useMemo } from "https://esm.sh/v128/preact@10.22.0/compat/src/index.js";
import type { FieldsetProps } from "./type.ts";
import { FieldsetVariants } from "./fieldset-variants.ts";

export function useFieldset(props: FieldsetProps) {
  const {
    domRef,
    style,
    color = "primary",
    title,
    className = "",
    yuzuTitleStyle = "",
    children,
    direction = "row",
    isDisabled,
    yuzuDisabledStyle = "",
    variant = "underline",
    ...otherProps
  } = props;

  const GetColors = useMemo(
    () => {
      return {
        color: FieldsetVariants.colors[color],
      };
    },
    [color],
  );

  const GetVariant = useMemo(
    () => {
      return {
        variant: FieldsetVariants.variants[variant],
      };
    },
    [variant],
  );

  const GetDirection = useMemo(
    () => {
      return {
        direction: FieldsetVariants.directions[direction],
      };
    },
    [direction],
  );

  /**
   * Anything with **Props need to be treated as a boolean state, like disabled, requiredonly etc
   */

  const GetFieldsetClass = useMemo(
    () => {
      const color = GetColors.color;
      const variant = GetVariant.variant;
      const direction = GetDirection.direction;
      console.log(color);
      return {
        className: `${color} ${variant} ${direction}`,
      };
    },
    [color],
  );

  const GetFieldsetProps = useMemo(
    () => {
      return {
        isDisabled,
      };
    },
    [isDisabled],
  );
  return {
    domRef,
    style,
    children,
    GetFieldsetProps,
    yuzuDisabledStyle,
    yuzuTitleStyle,
    GetFieldsetClass,
    title,
    className,
    ...otherProps,
  };
}
