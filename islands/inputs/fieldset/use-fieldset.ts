/**
* @param {React.Ref} domRef - The reference to the Fieldset DOM element.
* @param {React.CSSProperties} style - Inline styles to apply to the Fieldset.
* @param {React.ReactNode} children - Child elements to render inside the Fieldset.
* @param {string} [className=""] - Additional CSS class name(s) to apply to the Fieldset.
* @param {string} [fieldsetDirection="row"] - The direction of the fieldset content. Possible values are:
*   - `"row"` (default)
*   - `"column"`
* @param {string} [labelVariant="none"] - The variant style for the label. Possible values are:
*   - `"none"`
*   - `"default"`
*   - `"bold"`
*   - and other custom label styles.
* @param {string} [fieldsetColor="primary"] - The color variant for the fieldset. Possible values are:
*   - `"primary"`
*   - `"secondary"`
*   - and custom color styles.
* @param {string} [fieldsetVariant="underline"] - The variant style for the fieldset. Possible values include:
*   - `"underline"`
*   - `"solid"`
*   - `"dashed"`
* @param {boolean} [isDisabled] - If `true`, the fieldset and its contents will be disabled.
* @param {string} label - The text content for the Fieldset's label. 
* @param {string} [yuzuDisableStyle] - Custom class name to override the default disabled styles. Use with caution and prefer changing styles via variants.
*/

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
    label,
    yuzuDisableStyle,
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
        className: `${color} ${variant} ${direction} ${disabled}`,
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
