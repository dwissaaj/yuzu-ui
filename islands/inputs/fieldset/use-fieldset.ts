import { useMemo } from "preact/compat"
import type { FieldsetProps } from "./type.ts";
import { FieldsetVariants } from "./fieldset-variants.ts";
import { UseFieldsetReturn } from "./fieldset-return.ts";

export function useFieldset(props: FieldsetProps): UseFieldsetReturn {
  const {
    domRef,
    children,
    className = "",
    fieldsetDirection = "row",
    labelVariant = "none",
    fieldsetColor = "primary",
    fieldsetVariant = "underline",
    isDisabled,
    classNames,
    label,
    ...otherProps
  } = props;

  /**
   * Compute label variant styles
   */
  const GetLabelVariant = useMemo(
    () => {
      return {
        labelVariant: FieldsetVariants.labelVariants[labelVariant],
        label: label,
      };
    },
    [labelVariant],
  );

  /**
   * Compute Fieldset variant
   */
  const GetFieldsetVariant = useMemo(
    () => {
      return {
        fieldsetVariant: FieldsetVariants.fieldsetVariants[fieldsetVariant],
      };
    },
    [fieldsetVariant],
  );

  const GetFieldsetDirection = useMemo(
    () => {
      return {
        fieldsetDirection:
          FieldsetVariants.fieldsetDirections[fieldsetDirection],
      };
    },
    [fieldsetDirection],
  );
  const GetFieldsetColor = useMemo(
    () => {
      return {
        fieldsetColor: FieldsetVariants.fieldsetColors[fieldsetColor],
      };
    },
    [fieldsetColor],
  );

  /**
   * is component disabled style from variant
   * @returns {string}
   */
  const GetDisabledStyle = useMemo(
    () => (isDisabled ? FieldsetVariants.disableStyle : ""),
    [isDisabled],
  );

  /**
   * Classnames for fieldset
   * @returns {className=""}
   */
  const GetFieldsetClass = useMemo(
    () => {
      const color = GetFieldsetColor.fieldsetColor;
      const variant = GetFieldsetVariant.fieldsetVariant;
      const direction = GetFieldsetDirection.fieldsetDirection;
      const disabled = GetDisabledStyle;
      return {
        className: `${color} ${variant} ${direction} ${disabled}`.trim(),
      };
    },
    [
      GetFieldsetColor,
      GetFieldsetVariant,
      GetFieldsetDirection,
      GetDisabledStyle,
    ],
  );

  /**
   * Props for checking disabled
   */
  const GetFieldsetProps = useMemo(
    () => {
      return {
        isDisabled,
      };
    },
    [isDisabled],
  );

  /**
   * Hooks for yuzu system
   */
  const GetSlot = useMemo(
    () => {
      const yuzuBase = classNames?.yuzuBase ? classNames?.yuzuBase : "";
      const yuzuLabel = classNames?.yuzuLabel ? classNames?.yuzuLabel : "";
      const yuzuBaseDisabled = isDisabled
        ? classNames?.yuzuBaseDisabled || ""
        : "";
      const yuzuLabelDisabled = isDisabled
        ? classNames?.yuzuLabelDisabled || ""
        : "";

      return {
        yuzuBase,
        yuzuLabel,
        yuzuLabelDisabled,
        yuzuBaseDisabled,
      };
    },
    [classNames, isDisabled],
  );
  return {
    domRef,
    className,
    children,
    GetFieldsetClass,
    GetLabelVariant,
    GetFieldsetProps,
    isDisabled,
    GetSlot,
    ...otherProps,
  };
}
