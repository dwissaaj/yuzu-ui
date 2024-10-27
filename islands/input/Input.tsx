import { forwardRef } from "https://esm.sh/v128/preact@10.22.0/compat/src/index.js";
import type { InputProps } from "./type.ts";

const Input =forwardRef<HTMLInputElement, InputProps>((props) => {
  
  return (
    < input />
  )
}) 

export default Input