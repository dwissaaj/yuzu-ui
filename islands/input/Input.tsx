import {
  forwardRef,
  useMemo,
} from "https://esm.sh/v128/preact@10.22.0/compat/src/index.js";
import type { InputProps } from "./type.ts";
import { useInput } from "./use-input.ts";

const Input = forwardRef<HTMLInputElement, InputProps>((props) => {
  const {
    domRef,
    id,
    inputMode,
    type,
    className,
    value,
    name,
    style,
    placeholder,
    GetInputProps,
    GetLabelProps,
    GetParentsProps,
    GetInputStyle,
    GetLabelPlacement
  } = useInput({ ...props });

  const labelContent = GetLabelPlacement.label
    ? (
      <span className={`px-2 ${GetLabelProps.isRequiredStyle}`}>
        {GetLabelPlacement.label}
      </span>
    )
    : null;

  const baseContent = (
    <input
    ref={domRef}
      disabled={GetInputProps.disabled}
      readOnly={GetInputProps.readOnly}
      required={GetInputProps.required}
      className={`p-2 w-full ${GetInputStyle.inputClass} ${className} `}
      inputMode={inputMode}
      type={type}
      value={value}
      name={name}
      id={id}
      style={`${style}`}
      placeholder={placeholder}
    />
  );

  const mainWrapper = useMemo(() => {
    if (GetLabelPlacement.labelPlacement === "top") {
      return (
        <div
          className={`p-2 flex flex-col gap-2 ${GetParentsProps.parentClass} `}
        >
          {labelContent}
          <div
            className={`flex flex-row gap-2 items-center`}
          >
            {baseContent}
          </div>
        </div>
      );
    }
  }, [GetLabelPlacement]);

  const bottomWrapper = useMemo(() => {
    if (GetLabelPlacement.labelPlacement === "bottom") {
      return (
        <div
          className={`flex flex-col gap-2 ${GetParentsProps.parentClass}`}
        >
          <div
            className={` flex flex-row gap-2 items-center
        `}
          >
            {baseContent}
          </div>
          {labelContent}
        </div>
      );
    }
  }, [GetLabelPlacement]);
  const leftWrapper = useMemo(() => {
    if (GetLabelPlacement.labelPlacement === "left") {
      return (
        <div
          className={`flex flex-row gap-2 items-end ${GetParentsProps.parentClass}`}
        >
          <div className={"w-1/5"}>
            {labelContent}
          </div>

          <div
            className={`w-4/5 flex flex-row gap-2 items-center
        `}
          >
            {baseContent}
          </div>
        </div>
      );
    }
  }, [GetLabelPlacement]);
  const rightWrapper = useMemo(() => {
    if (GetLabelPlacement.labelPlacement === "right") {
      return (
        <div
          className={` flex flex-row gap-2 items-end ${GetParentsProps.parentClass}`}
        >
          <div
            className={`w-4/5 flex flex-row gap-2 items-center
        `}
          >
            {baseContent}
          </div>
          <div className={"w-1/5"}>
            {labelContent}
          </div>
        </div>
      );
    }
  }, [GetLabelPlacement]);

  return (
    <>
      {leftWrapper ? leftWrapper : null}
      {mainWrapper}
      {bottomWrapper ? bottomWrapper : null}
      {rightWrapper ? rightWrapper : null}
    </>
  );
});

export default Input;
