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
 * @param {string} [classNames={{}}] - Custom styles for component
 * - `yuzuBase`: The base classes applied to the button wrapper.
 * - `yuzuLabelDisabled`: The base classes applied to the label when disabled
 * - `yuzuLabelRequired`: The classes applied to the label when required state
 * - `yuzuLabelReadonly`: The classes applied when the label is readonly.
 *
 * @return {JSX.Element}
 */

const Label = forwardRef<HTMLLabelElement, LabelProps>((props) => {
  const {
    domRef,
    className,
    GetSlot,
    GetLabelProps,
    CheckRender,
    ...otherProps
  } = useLabel({ ...props });

  if (CheckRender instanceof Error) {
    throw CheckRender; 
  }
  
  return (
    <label
      {...otherProps}
      ref={domRef}
      className={`${className} ${GetLabelProps.className}
     ${GetSlot.yuzuBase} ${GetSlot.yuzuLabelDisabled} ${GetSlot.yuzuLabelReadonly} ${GetSlot.yuzuLabelRequired}`.trim()}
    >
      {CheckRender}
    </label>
  );
});

export default Label;
