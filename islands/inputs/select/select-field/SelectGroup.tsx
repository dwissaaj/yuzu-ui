import { forwardRef } from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
import type { SelectGroupProps } from "./type.ts";
import { useSelectField } from "./use-select-field.ts";
const SelectGroup = forwardRef<HTMLSelectElement, SelectGroupProps>((props) => {
  const {
    domRef,
    style,
    className,
    children,
    label,
    description,
    GetCustomLabel,
    ...otherProps
  } = useSelectField({ ...props });

  return (
    <div className={`${GetCustomLabel?.yuzuBase}`}>
      <div className={""}>
        <legend>{label}</legend>
        <small>{description}</small>
      </div>
      <div className={""}>
        <select ref={domRef}  className={""}>
          {children}
        </select>
      </div>
    </div>
  );
});

export default SelectGroup;
