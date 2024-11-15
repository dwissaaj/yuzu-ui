import {
  forwardRef,
  useMemo,
} from "https://esm.sh/v128/preact@10.22.0/compat/src/index.js";
import type { CheckboxProps } from "./type.ts";
import { useCheckbox } from "./use-checkbox.ts";

/**
 * Checkbox component that can be used for form inputs.
 *
 * @component
 *
 * @example
 * <Checkbox
 *  label="Mikan"
 *  labelPosition = "top",
 *  boxSize = "medium",
 *  boxRadius = "none",
 *  boxVariant = "primary",
 *  labelColor = "none",
 *  labelSize = "small",
 * />
 *
 * @param {Ref<HTMLInputElement>} props.domRef - The ref for the button element.
 * @param {string} [props.className=""] - Additional classes to apply to the button, if no value provided will return empty string
 * @param {string} [boxSize="medium"] - Size of the checkbox box. Possible values are:
 *   - `"small"`
 *   - `"medium"`  (default)
 *   - `"large"`
 *   - `"custom size"`
 * @param {string} [boxRadius="none"] - Border radius for the checkbox box. Possible values are:
 *   - `"none"`
 *   - `"small"` (default)
 *   - `"large"`
 *   - `"full"`
 *   - `"your variant"`
 * @param {string} [boxVariant="primary"] - Variant for the checkbox box. Possible values are:
 *   - `"primary"` (default)
 *   - `"secondary"`
 *   - `"error"`
 *   - `"success"`
 *   - `"warning"`
 *   - `"your variant"`
 * @param {string} [labelColor="none"] - Color for the label text. Possible values are:
 *   - `"primary"`
 *   - `"secondary"`
 *   - `"error"`
 *   - `"success"`
 *   - `"warning"`
 *   - `"none"` (default)
 * @param {string} [labelSize="small"] - Font size for the label. Possible values are:
 *   - `"small"` (default)
 *   - `"medium"`
 *   - `"large"`
 * @param {boolean} [isDisabled=false] - Whether the checkbox is disabled or not.
 * @param {string} [classNames] - Custom styles for component
 * - `yuzuBase`: The base classes applied to the button wrapper.
 * - `yuzuBaseDisabled`: The base classes applied to the wrapper when disabled
 * - `yuzuInputDisabled`: The classes applied when the button is disabled.
 * - `yuzuInput`: The classes applied to the input element inside the wrapper
 * - `yuzuLabel`: The classes applied to the label
 * - `yuzuLabelDisabled`: The classes applied when the label is disabled.
 * @returns {JSX.Element} - Return JSX Element accept any props from input
 */

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props) => {
  const {
    domRef,
    children,
    GetLabelStyle,
    GetBoxStyle,
    className,
    GetCheckboxProps,
    GetWrapperStyle,
    label,
    GetSlot,
    ...otherProps
  } = useCheckbox({ ...props });
  const InputWrapper = (
    <input
      {...otherProps}
      className={`${className} ${GetBoxStyle.className} ${GetSlot.yuzuInput} ${GetSlot.yuzuInputDisabled}`}
      ref={domRef}
      disabled={GetCheckboxProps.isDisabled}
      type={"checkbox"}
    />
  );
  const LabelWrapper = (
    <label
      disabled={GetCheckboxProps.isDisabled}
      className={`${GetLabelStyle.className} ${GetSlot.yuzuLabel} ${GetSlot.yuzuLabelDisabled}`
        .trim()}
    >
      {label}
    </label>
  );

  const rightWrapper = useMemo(() => {
    if (GetLabelStyle.labelPosition === "right") {
      return (
        <div
          disabled={GetCheckboxProps.isDisabled}
          className={`${GetWrapperStyle.className} ${GetSlot.yuzuBase} ${GetSlot.yuzuBaseDisabled} flex flex-col gap-2 items-center
   `.trim()}
        >
          {children}
          {InputWrapper}
          {LabelWrapper}
        </div>
      );
    }
  }, [GetLabelStyle.labelPosition]);
  const leftWrapper = useMemo(() => {
    if (GetLabelStyle.labelPosition === "left") {
      return (
        <div
          disabled={GetCheckboxProps.isDisabled}
          className={`${GetWrapperStyle.className} ${GetSlot.yuzuBase} ${GetSlot.yuzuBaseDisabled} flex flex-col gap-2 items-center
   `.trim()}
        >
          {children}
          {LabelWrapper}
          {InputWrapper}
        </div>
      );
    }
  }, [GetLabelStyle.labelPosition]);
  const topWrapper = useMemo(() => {
    if (GetLabelStyle.labelPosition === "top") {
      return (
        <div
          disabled={GetCheckboxProps.isDisabled}
          className={`${GetWrapperStyle.className} ${GetSlot.yuzuBase} ${GetSlot.yuzuBaseDisabled} flex flex-col gap-2 items-center
   `.trim()}
        >
          {children}
          {LabelWrapper}
          {InputWrapper}
        </div>
      );
    }
  }, [GetLabelStyle.labelPosition]);
  const bottomWrapper = useMemo(() => {
    if (GetLabelStyle.labelPosition === "bottom") {
      return (
        <div
          disabled={GetCheckboxProps.isDisabled}
          className={`${GetWrapperStyle.className} ${GetSlot.yuzuBase} ${GetSlot.yuzuBaseDisabled} flex flex-col gap-2 items-center
   `.trim()}
        >
          {children}
          {InputWrapper}
          {LabelWrapper}
        </div>
      );
    }
  }, [GetLabelStyle.labelPosition]);
  return (
    <>
      {leftWrapper && leftWrapper}
      {topWrapper && topWrapper}
      {rightWrapper}
      {bottomWrapper && bottomWrapper}
    </>
  );
});

export default Checkbox;
