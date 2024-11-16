import { useMemo } from "https://esm.sh/v128/preact@10.22.0/compat/src/index.js";
import type { FieldsetProps } from "./type.ts";
import { FieldsetVariants } from "./fieldset-variants.ts";


export function useFieldset(props: FieldsetProps) {
  const {
    domRef,
    style,
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

  const GetLabelVariant = useMemo(
    () => {
      return {
        labelVariant: FieldsetVariants.labelVariants[labelVariant],
        label: label,
      };
    },
    [labelVariant],
  );

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

  const GetDisabledStyle = useMemo(
    () => (isDisabled ? FieldsetVariants.disableStyle : ""),
    [isDisabled],
  );

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

  const GetFieldsetProps = useMemo(
    () => {
      return {
        isDisabled,
      };
    },
    [isDisabled],
  );
  const GetSlot = useMemo(
    () => {
      const yuzuBase = classNames?.yuzuBase ? classNames?.yuzuBase : "";
      const yuzuLabel = classNames?.yuzuLabel ? classNames?.yuzuLabel : "";
      const yuzuBaseDisabled = isDisabled ? classNames?.yuzuBaseDisabled || "" : "";
      const yuzuLabelDisabled = isDisabled ? classNames?.yuzuLabelDisabled || "" : "";

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
    style,
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
