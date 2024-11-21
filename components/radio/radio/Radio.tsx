import { forwardRef } from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
import type { RadioProps } from "./types.ts";
import { useRadio } from "./use-radio.ts";

/**
 * `Radio` Component - A radio button component.
 *
 * @example
 * <Radio
 * isDisabled
 *  textSize="small"
 *  id={"orange"}
 *  name={"fruits"}
 *  color="secondary"
 *  label={"orange"}
 * />
 *
 * @param {Ref<HTMLInputElement> } domRef - A reference to the component's DOM element, useful for direct manipulation or focusing.
 * @param {string} [className=""] - Custom class names for additional styling. Default is an empty string.
 * @param {JSX.CSSProperties} [style=""] - Inline CSS styling applied directly to the component.
 * @param {string | JSX.Element} label - Text label displayed alongside the radio button.
 * @param {"primary" | "secondary" | "error" | "success" | "warning" | "default"} [color="default"] - The color scheme for the radio button and can be extended
 * @param {"small" | "medium" | "large"} [textSize="medium"] - Size of the label text can be extended and Customize. Defaults to `"medium"`.
 * @param {"small" | "medium" | "large"} [radioSize="medium"] - Size of the radio button can be extended and Customize. Defaults to `"medium"`.
 * @param {RadioSlot} [classNames={{}}] - Custom styles for specific component slots. Possible slot keys are:
 * - `yuzuBase`: The base classes applied to the radio button wrapper.
 * - `yuzuLabel`: The base classes applied to the label of the radio button.
 * - `yuzuInput`: The base classes applied to the radio input element.
 * - `yuzuInputDisabled`: The classes applied to the radio input element when it is disabled.
 * @param {boolean} [isDisabled=false] - If true, applies disabled styles and prevents interaction.
 */
const Radio = forwardRef<HTMLInputElement, RadioProps>((props) => {
  const {
    domRef,
    className,
    GetRadioProps,
    label,
    children,
    isDisabled,
    GetLabelProps,
    GetSlot,
    CheckRender,
    GetParentProps,
    ...otherProps
  } = useRadio({ ...props });

  const labelWrapper = (
    <label className={`${GetLabelProps.className} ${GetSlot.yuzuLabel}`}>
      {label}
    </label>
  );
  if (CheckRender instanceof Error) {
    throw CheckRender;
  }
  return (
    <div
      className={`flex flex-row gap-2 items-center ${GetParentProps.className} ${GetSlot.yuzuBase}`}
    >
      <input
        ref={domRef}
        {...otherProps}
        type="radio"
        disabled={isDisabled}
        className={`${className} ${GetRadioProps.className} ${GetSlot.yuzuInput} ${GetSlot.yuzuInputDisabled}`}
      />
      {children || labelWrapper}
    </div>
  );
});

export default Radio;
