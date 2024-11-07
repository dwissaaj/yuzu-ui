

import { useMemo } from "https://esm.sh/v128/preact@10.22.0/compat/src/index.js";
import type { FieldsetProps } from "./type.ts";
import { FieldsetVariants } from "./fieldset-variants.ts";
import type { JSX } from "preact/jsx-runtime";

export function useFieldset(props: FieldsetProps) {
  const {
    domRef,
    style,
    children,
    className ="",
    fieldsetDirection ="row",
    labelVariant ="none",
    fieldsetColor ="primary",
    fieldsetVariant ="underline",
    isDisabled,
    label,
    yuzuDisableStyle="",
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
      console.log(color);
      return {
        className: `${color} ${variant} ${direction} ${disabled}`.trim(),
      };
    },
    [fieldsetDirection, fieldsetColor, fieldsetVariant],
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
    className,
    children,
    GetFieldsetClass,
    GetLabelVariant,
    GetFieldsetProps,
    yuzuDisableStyle,
    isDisabled,
    ...otherProps,
  };
}
