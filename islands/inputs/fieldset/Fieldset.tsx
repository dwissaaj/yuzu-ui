import { forwardRef } from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
import type { FieldsetProps } from "./type.ts";
import { useFieldset } from "./use-fieldset.ts";
/**
 * A fieldset component with optional configurations for behavior and appearance.
 * @component
 * 
 * @example
 * <Fieldset
 *  fieldsetDirection = "row",
    labelVariant = "none",
    fieldsetColor = "primary",
    fieldsetVariant = "underline",
 * />

 * @param {Ref} domRef - The reference to the Fieldset DOM element.
 * @param {CSSProperties} style - Inline styles to apply to the Fieldset.
 * @param {JSX.Element} children - Child elements to render inside the Fieldset.
 * @param {string} [className=""] - Additional CSS class name(s) to apply to the Fieldset, if no provided will return empty string
 * @param {string} [fieldsetDirection="row"] - The direction of the fieldset content. Possible values are:
 *   - `"row"` (default)
 *   - `"column"`
 *   - `"custom variant"`
 * @param {string} [labelVariant="none"] - The variant style for the label, can be extended Options are:
 *   - `"primary"` (default)
 *   - `"secondary"`
 *   - `"success"`
 *   - `"warning"`
 *   - `"error"`
 *   - and other custom label styles.
 * @param {string} [fieldsetColor="primary"] - The color variant for the fieldset anc can be extended. Possible values are:
 *   - `"primary"` (default)
 *   - `"secondary"`
 *   - `"success"`
 *   - `"warning"`
 *   - `"error"`
 *   - and other custom label styles.
 * @param {string} [fieldsetVariant="underline"] - The variant style for the fieldset. Possible values include:
 *   - `"underline"` (default)
 *   - `"full"`
 * @param {boolean} [isDisabled] - If `true`, the fieldset and its contents will be disabled.
 * @param {string} [yuzuDisableStyle] - The properties to override fieldset state when disabled
 */
const Fieldset = forwardRef<HTMLFieldSetElement, FieldsetProps>((props) => {
  const {
    domRef,
    style,
    className,
    children,
    yuzuDisableStyle,
    GetFieldsetClass,
    GetLabelVariant,
    GetFieldsetProps,
    ...otherProps
  } = useFieldset({ ...props });

  return (
    <fieldset
      {...otherProps}
      ref={domRef}
      style={style}
      disabled={GetFieldsetProps.isDisabled}
      className={`${className} ${GetFieldsetClass.className} ${yuzuDisableStyle}`}
    >
      <legend className={`p-2 m-2 ${GetLabelVariant.labelVariant}`}>
        {GetLabelVariant.label}
      </legend>
      {children}
    </fieldset>
  );
});

export default Fieldset;
