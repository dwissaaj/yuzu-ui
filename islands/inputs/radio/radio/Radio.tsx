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

 * @param {boolean} [isDisabled=false] - If true, applies disabled styles and prevents interaction.
 * @param {boolean} [isError=false] - If true, applies error styling to indicate an error state.
 * @param {string} [yuzuDisableStyle=""] - A string representing the custom CSS * to apply when the component is disabled.
 * Default is an empty string if not provided.
 * @param {string} [yuzuErrorStyle=""] - A string representing the custom CSS * to apply when the component is in an error state.
 * Default is an empty string if not provided.
 * @param {React.ReactNode} children - Content displayed alongside the radio
 * button, often a label or description.
 */
const Radio = forwardRef<HTMLInputElement, RadioProps>((props) => {
  const {
    domRef,
    style,
    className,
    children,
    GetRadioProps,
    label,
    isDisabled,
    GetLabelProps,
    GetParentProps,
    GetCustomDisabled,
    GetCustomError,
    ...otherProps
  } = useRadio({ ...props });

  return (
    <div
      className={`flex flex-row gap-2 items-center ${GetParentProps.className}`}
    >
      <input
        ref={domRef}
        {...otherProps}
        style={style}
        type="radio"
        disabled={isDisabled}
        className={`${className} ${GetRadioProps.className} ${GetCustomDisabled} ${GetCustomDisabled}`}
      >
        {children}
      </input>
      <label className={`${GetLabelProps.className}`}>{label}</label>
    </div>
  );
});

export default Radio;
