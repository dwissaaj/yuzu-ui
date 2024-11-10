import { useMemo } from "https://esm.sh/v128/preact@10.22.0/compat/src/index.js";
import type { RadioGroupProps } from "./type.ts";
import { RadioGroupVariants } from "./radio-group-variants.ts";

export function useRadioGroup(props: RadioGroupProps) {
  const {
    domRef,
    style,
    children,
    className = "",
    label,
    direction = "row",
    variant = "full",
    borderColor = "primary",
    labelColor = "default",
    labelSize = "small",
    yuzuLabelStyle,
    ...otherProps
  } = props;
  const GetVariant = useMemo(
    () => {
      return {
        variant: RadioGroupVariants.variants[variant],
      };
    },
    [variant],
  );
  const GetBorderColor = useMemo(
    () => {
      return {
        borderColor: RadioGroupVariants.borderColors[borderColor],
      };
    },
    [borderColor],
  );
  const GetDirection = useMemo(
    () => {
      return {
        direction: RadioGroupVariants.directions[direction],
      };
    },
    [direction],
  );
  const GetLabelColor = useMemo(
    () => {
      return {
        labelColor: RadioGroupVariants.labelColors[labelColor],
      };
    },
    [labelColor],
  );
  const GetLabelSize = useMemo(
    () => {
      return {
        labelSizes: RadioGroupVariants.labelSizes[labelSize],
      };
    },
    [labelSize],
  );
  const GetFieldsetProps = useMemo(
    () => {
      const variant = GetVariant.variant;
      const borderColor = GetBorderColor.borderColor;
      const direction = GetDirection.direction;
      return {
        className: `${variant} ${borderColor} ${direction}`.trim(),
      };
    },
    [GetDirection, GetBorderColor, GetVariant],
  );

  const GetLabelProps = useMemo(
    () => {
      const color = GetLabelColor.labelColor;
      const size = GetLabelSize.labelSizes;
      return {
        className: `${size} ${color}`.trim(),
        label: label,
      };
    },
    [GetLabelColor, GetLabelSize, label],
  );
  const GetCustomLabel = useMemo(
    () => (yuzuLabelStyle ? yuzuLabelStyle : ""),
    [yuzuLabelStyle],
  );

  return {
    domRef,
    style,
    className,
    children,
    GetFieldsetProps,
    GetLabelProps,
    GetCustomLabel,
    ...otherProps,
  };
}
