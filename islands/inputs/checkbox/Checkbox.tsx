import {
  forwardRef,
} from "https://esm.sh/v128/preact@10.22.0/compat/src/index.js";
import type { CheckboxProps } from "./type.ts";
import { useCheckbox } from "./use-checkbox.ts";

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props) => {
  const {
    children,
    domRef,
    GetLabelClass,
    GetLabelStyle,
    indeterminate,
    GetCheckboxProps,
    className,
  } = useCheckbox({ ...props });
  return (
    <div
      className={`flex flex-row gap-2 items-center
    ${GetLabelStyle}`}
    >
      <input
        className={`appearance-none border-2 h-5 w-5 checked:border-red-400 checked:bg-primary ${className}`}
        ref={domRef}
        indeterminate={indeterminate}
        disabled={GetCheckboxProps.isDisable}
        type={"checkbox"}
      />
      <label className={`${GetLabelStyle}`}>
        {GetLabelClass.label}
      </label>
      {children}
    </div>
  );
});

export default Checkbox;
