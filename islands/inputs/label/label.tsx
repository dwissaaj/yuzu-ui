

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
 *  @param {React.Ref} domRef - The reference to the label element. Can be used to directly manipulate the label element in the DOM.
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
 * 
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
    ...otherProps
  } = useLabel({ ...props });

  return (
    <label
      {...otherProps}
      style={style}
      ref={domRef}
      className={`${className} ${GetLabelProps.className}`}
    >
      {label}
      {children}
    </label>
  );
});

export default Label;
