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
    GetLabelPlacement,
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
      className={`p-2 w-full ${GetInputStyle.className} ${className} `}
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
          {...GetParentsProps}
          className={`p-2 flex flex-col gap-2 ${GetParentsProps.className} `}
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
          {...GetParentsProps}
          className={`flex flex-col gap-2 ${GetParentsProps.className}`}
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
          {...GetParentsProps}
          className={`flex flex-row gap-2 items-end ${GetParentsProps.className}`}
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
          {...GetParentsProps}
          className={` flex flex-row gap-2 items-end ${GetParentsProps.className}`}
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
