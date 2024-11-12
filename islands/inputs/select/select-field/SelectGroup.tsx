import { forwardRef } from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
import type { SelectGroupProps } from "./type.ts";
import { useSelectField } from "./use-select-field.ts";
/**
 * @example
 * classNames={{
              yuzuBase: "border-2 border-red-500",
              yuzuLabel: "text-blue-500",
              yuzuBaseError: "bg-yellow-100",
              yuzuBaseDisabled: "outline outline-2 outline-offset-2",
              yuzuDescription: "!text-7xl",
            }}
 */
const SelectGroup = forwardRef<HTMLSelectElement, SelectGroupProps>((props) => {
  const {
    domRef,
    children,
    className,
    GetLabel,
    GetSelectFieldProps,
    GetDescription,
    GetSlot,
    GetError,
    isDisabled,
    GetColor,
    ...otherProps
  } = useSelectField({ ...props });

  return (
    <div
      className={`${className} ${GetColor.color} ${GetSelectFieldProps.className} ${GetError.errorStyle} ${GetSlot?.yuzuBase} ${GetSlot?.yuzuBaseDisabled} ${GetSlot?.yuzuBaseError}`}
    >
      <div className={"w-full flex flex-col gap-1"}>
        <legend
          required={GetLabel?.isRequired}
          className={`${GetSlot?.yuzuLabel} ${GetLabel.requiredStyle}`}
        >
          {GetLabel?.label}
        </legend>
        <small
          className={`${GetDescription.descriptionStyles} ${GetSlot?.yuzuDescription}`}
        >
          {GetDescription.description}
        </small>
      </div>
      <div className={""}>
        <select
          {...otherProps}
          required={GetLabel.isRequired}
          disabled={isDisabled}
          ref={domRef}
          className={`w-full ${GetColor.color}`}
        >
          {children}
        </select>
      </div>
    </div>
  );
});

export default SelectGroup;
