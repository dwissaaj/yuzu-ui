import { forwardRef } from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
import type { FieldsetProps } from "./type.ts";
import { useFieldset } from "./use-fieldset.ts";
/**
 * Fieldset component that can be used to group related inputs with a label.
 * Provides a range of styles for orientation, label appearance, color themes, and variants.
 * @component
 * @example
 * <Fieldset
 * fieldsetDirection="row"
 * labelVariant="none"
 * fieldsetColor="primary"
 * fieldsetVariant="underline">
 *
 * </Fieldset >
 *
 * @param {} domRef - The reference to the Fieldset DOM element.
 * @param {JSX.CSSProperties} style - Inline styles to apply to the Fieldset.
 * @param {JSX.Element} children - Child elements to render inside the Fieldset.
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
