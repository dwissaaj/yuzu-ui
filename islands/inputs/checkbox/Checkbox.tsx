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
 * @param {JSX.CSSProperties} [props.style=""] - Inline styles to apply to the button, if no value provided will return empty string
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
 * @param {boolean} [isIndeterminate=false] - is checbox checked or not
 * @param {string} [className=""] - A classnames override to div parent, if no called will return empty string
 * @param {string} [yuzudisabledTitleStyle=""] - Override disabled for title/label
 *
 * @param {string} [yuzudisableBoxStyle=""] - Override disabled for box
 *
 * @returns {JSX.Element} - Return JSX Element accept any props from input
 */

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props) => {
  const {
    domRef,
    children,
    className,
    GetLabelClass,
    GetBoxStyle,
    yuzudisabledTitleStyle,
    yuzudisableBoxStyle,
    GetDisabledClass,
    GetCheckboxProps,
    isIndeterminate,
    ...otherProps
  } = useCheckbox({ ...props });
  const InputWrapper = (
    <input
      {...otherProps}
      className={`${GetBoxStyle.className} ${yuzudisableBoxStyle} `}
      ref={domRef}
      indeterminate={isIndeterminate}
      disabled={GetCheckboxProps.isDisabled}
      type={"checkbox"}
    />
  );
  const LabelWrapper = (
    <label
      disabled={GetCheckboxProps?.isDisabled}
      className={`${GetLabelClass.className} ${yuzudisabledTitleStyle}`}
    >
      {GetLabelClass.label}
    </label>
  );

  const rightWrapper = useMemo(() => {
    if (GetLabelClass.labelPosition === "right") {
      return (
        <div
          className={`${className} ${GetDisabledClass?.getParentStyle} flex flex-col gap-2 items-center
   `}
        >
          {children}
          {InputWrapper}
          {LabelWrapper}
        </div>
      );
    }
  }, [GetLabelClass.labelPosition]);
  const leftWrapper = useMemo(() => {
    if (GetLabelClass.labelPosition === "left") {
      return (
        <div
          className={`${className} ${GetDisabledClass?.getParentStyle} flex flex-col gap-2 items-center
   `}
        >
          {children}
          {LabelWrapper}
          {InputWrapper}
        </div>
      );
    }
  }, [GetLabelClass.labelPosition]);
  const topWrapper = useMemo(() => {
    if (GetLabelClass.labelPosition === "top") {
      return (
        <div
          className={`${className} ${GetDisabledClass?.getParentStyle} flex flex-col gap-2 items-center
   `}
        >
          {children}
          {LabelWrapper}
          {InputWrapper}
        </div>
      );
    }
  }, [GetLabelClass.labelPosition]);
  const bottomWrapper = useMemo(() => {
    if (GetLabelClass.labelPosition === "bottom") {
      return (
        <div
          className={`${className} ${GetDisabledClass?.getParentStyle} flex flex-col gap-2 items-center
   `}
        >
          {children}
          {InputWrapper}
          {LabelWrapper}
        </div>
      );
    }
  }, [GetLabelClass.labelPosition]);
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
