import { forwardRef } from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
import type { LabelProps } from "./type.ts";
import { useLabel } from "./use-label.ts";

/**
 * @component
 * LabelVariants defines the available font styles, colors, and sizes for labels and can be extended
 *
 * @example
 * <Label fontSize="medium" fontColor="primary" fontWeight="bold">
 *   Example Label
 * </Label>
 *
 *  @param {Ref<HTMLLabelElement>} domRef - The reference to the label element. Can be used to directly manipulate the label element in the DOM.
 * @param {string} label - The content to display inside the label. This can be text or other React elements.
 * @param {JSX.Element} children - The child elements inside the label
 *
 * @param {string} [fontSize="small"] - The font size of the label and can be modified and extended
 *      - `"small"` (default)
 *      - `"medium"`
 *      - `"large"`
 * @param {string} [fontColor="none"] - The font color of the label and can be modified and extended
 *      - `"primary"`
 *      - `"secondary"`
 *      - `"error"`
 *      - `"success"`
 *      - `"warning"`
 *      - `"none"` (default).
 * @param {boolean} [isRequired=false] - Should a label contain asterik for required
 * @param {boolean} [isReadonly=false] - Should a label only read state
 * @param {boolean} [isDisabled=false] - Should a label disabled state
 * @param {string} [yuzuFontReadonly=""] - override styling disabled, better to change in variant file, if no provded will return empty string
 *  * @param {string} [yuzuFontDisabled=""] - override styling disabled, better to change in variant file
 *  * @param {string} [yuzuFontRequired=""] - override styling disabled, better to change in variant file
 * @return {JSX.Element}
 */

const Label = forwardRef<HTMLLabelElement, LabelProps>((props) => {
  const {
    domRef,
    label,
    className,
    children,
    style,
    GetLabelProps,
    yuzuFontReadonly,
    yuzuFontDisabled,
    yuzuFontRequired,
    ...otherProps
  } = useLabel({ ...props });

  return (
    <label
      {...otherProps}
      style={style}
      ref={domRef}
      className={`${className} ${GetLabelProps.className}
      ${yuzuFontDisabled} ${yuzuFontReadonly} ${yuzuFontRequired}`}
    >
      {label}
      {children}
    </label>
  );
});

export default Label;
