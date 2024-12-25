import { useMemo } from "preact/compat"
import type { RadioGroupProps } from "./type.ts";
import { RadioGroupVariants } from "./radio-group-variants.ts";
import { UseRadioGroupReturn } from "./radio-group-return.ts";
/**
 * Custom hook for managing a group of radio buttons with shared styles and configurations.
 * @param {RadioGroupProps} props - Configuration properties for the radio group.
 * @returns {object} Processed properties, styles, and class names for the radio group.
 */
export function useRadioGroup(props: RadioGroupProps): UseRadioGroupReturn {
  const {
    domRef,
    children,
    className = "",
    label,
    direction = "row",
    variant = "full",
    borderColor = "primary",
    labelColor = "default",
    labelSize = "small",
    classNames,
    ...otherProps
  } = props;

  /**
   * Retrieves the variant style for the radio group.
   */
  const GetVariant = useMemo(
    () => {
      return {
        variant: RadioGroupVariants.variants[variant],
      };
    },
    [variant],
  );

  /**
   * Retrieves the border color style for the radio group.
   */
  const GetBorderColor = useMemo(
    () => {
      return {
        borderColor: RadioGroupVariants.borderColors[borderColor],
      };
    },
    [borderColor],
  );

  /**
   * Retrieves the direction (layout) style for the radio group.
   */
  const GetDirection = useMemo(
    () => {
      return {
        direction: RadioGroupVariants.directions[direction],
      };
    },
    [direction],
  );

  /**
   * Retrieves the label color style for the radio group.
   */
  const GetLabelColor = useMemo(
    () => {
      return {
        labelColor: RadioGroupVariants.labelColors[labelColor],
      };
    },
    [labelColor],
  );

  /**
   * Retrieves the label size style for the radio group.
   */
  const GetLabelSize = useMemo(
    () => {
      return {
        labelSizes: RadioGroupVariants.labelSizes[labelSize],
      };
    },
    [labelSize],
  );

  /**
   * Retrieves the properties and styles for the fieldset element.
   */
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

  /**
   * Retrieves the properties and styles for the label element.
   */

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

  /**
   * Handles slot-based class names and customizations.
   */
  const GetSlot = useMemo(
    () => {
      const yuzuBase = classNames?.yuzuBase ? classNames?.yuzuBase : "";
      const yuzuLabel = classNames?.yuzuLabel ? classNames?.yuzuLabel : "";
      return {
        yuzuBase,
        yuzuLabel,
      };
    },
    [classNames],
  );
  return {
    domRef,
    className,
    children,
    GetFieldsetProps,
    GetLabelProps,
    GetSlot,
    ...otherProps,
  };
}
