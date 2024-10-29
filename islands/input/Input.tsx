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
    GetInputProps
  } = useInput({...props})
  return (
    <div>
      < input  />
    </div>
  )
});

export default Input;