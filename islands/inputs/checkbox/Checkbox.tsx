import {
  forwardRef,
  useMemo,
} from "https://esm.sh/v128/preact@10.22.0/compat/src/index.js";
import type { CheckboxProps } from "./type.ts";
import { useCheckbox } from "./use-checkbox.ts";

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props) => {
  const {
    domRef,
    children,
    className,
    GetLabelClass,
    GetBoxStyle,
    disableBoxStyle,
    GetDisabledClass,
    GetCheckboxProps,
    disabledTitleStyle,
    isIndeterminate,
    ...otherProps
  } = useCheckbox({ ...props });
  const InputWrapper = (
    <input
      {...otherProps}
      className={`${GetBoxStyle.className} ${disableBoxStyle} `}
      ref={domRef}
      indeterminate={isIndeterminate}
      disabled={GetCheckboxProps.isDisabled}
      type={"checkbox"}
    />
  );
  const LabelWrapper = (
    <label disabled={GetCheckboxProps?.isDisabled} className={`${GetLabelClass.className} ${disabledTitleStyle}`}>
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
