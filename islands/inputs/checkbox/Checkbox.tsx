import {
  forwardRef,
} from "https://esm.sh/v128/preact@10.22.0/compat/src/index.js";
import type { CheckboxProps } from "./type.ts";
import { useCheckbox } from "./use-checkbox.ts";

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props) => {
  const {
    children,
    domRef,
    className,
    GetLabelStyle,
    GetLabelClass,
    GetCheckboxProps,
    GetBoxStyle,
    indeterminate,
    boxStyle,
  } = useCheckbox({ ...props });
  return (
    <div
      className={`flex flex-row gap-2 items-center
   `}
    >
      <input
        className={`${GetBoxStyle.className} ${boxStyle} ${className}`}
        ref={domRef}
        indeterminate={indeterminate}
        disabled={GetCheckboxProps.isDisable}
        type={"checkbox"}
      />
      <label className={`${GetLabelStyle.className}`}>
        {GetLabelClass.label}
      </label>
      {children}
    </div>
  );
});

export default Checkbox;
