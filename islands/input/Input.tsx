import { forwardRef } from "https://esm.sh/v128/preact@10.22.0/compat/src/index.js";
import type { InputProps } from "./type.ts";
import { useInput } from "./use-input.ts";

const Input = forwardRef<HTMLInputElement, InputProps>((props) => {
  const {
    ref,
    children,
    id,
    inputMode,
    type,
    className,
    value,
    name,
    style,
    placeholder,
    password,
    passwordIcon,
    GetInputProps,
    label,
    labelPlacement,
  } = useInput({ ...props });
  if (labelPlacement === "bottom") {
    return (
      <div
        ref={ref}
        className={` flex flex-col gap-4 ${GetInputProps.isFullWidth}  ${GetInputProps.colors} ${GetInputProps.size}`}
      >
        <input
          className={`p-2 ${GetInputProps.colors} ${GetInputProps.variant} `}
          inputMode={inputMode}
          type={type}
          value={value}
          name={name}
          id={id}
          placeholder={placeholder}
        />
        <span className={` ${GetInputProps.labelPlacement}`}>{label}</span>
      </div>
    );
  } else if (labelPlacement === "left") {
    return (
      <div
        ref={ref}
        className={`flex flex-row items-end gap-4 ${GetInputProps.isFullWidth} ${GetInputProps.colors} ${GetInputProps.size}`}
      >
        <span className={`w-1/4 px-2 ${GetInputProps.labelPlacement}`}>
          {label}
        </span>
        <input
          className={`p-2  ${GetInputProps.isFullWidth} ${GetInputProps.colors} ${GetInputProps.variant} `}
          inputMode={inputMode}
          type={type}
          value={value}
          name={name}
          id={id}
          placeholder={placeholder}
        />
      </div>
    );
  } else if (labelPlacement === "right") {
    return (
      <div
        ref={ref}
        className={`flex flex-row items-end gap-4 ${GetInputProps.isFullWidth} ${GetInputProps.colors} ${GetInputProps.size}`}
      >
        <input
          className={`p-2  ${GetInputProps.isFullWidth} ${GetInputProps.colors} ${GetInputProps.variant} `}
          inputMode={inputMode}
          type={type}
          value={value}
          name={name}
          id={id}
          placeholder={placeholder}
        />
        <span className={`w-1/4 px-2 ${GetInputProps.labelPlacement}`}>
          {label}
        </span>
      </div>
    );
  } else if (labelPlacement === "top") {
    return (
      <div
        ref={ref}
        className={`flex flex-col gap-2 ${GetInputProps.isFullWidth}  ${GetInputProps.colors} ${GetInputProps.size}`}
      >
        <span>
          {label}
        </span>
        {children}
        <input
          className={`p-2 ${GetInputProps.colors} ${GetInputProps.variant} `}
          inputMode={inputMode}
          type={type}
          value={value}
          name={name}
          id={id}
          placeholder={placeholder}
        />
      </div>
    );
  }
});

export default Input;
