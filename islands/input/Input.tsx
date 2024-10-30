import { forwardRef, useState } from "https://esm.sh/v128/preact@10.22.0/compat/src/index.js";
import type { InputProps } from "./type.ts";
import { useInput } from "./use-input.ts";
import ClosePassword from "../icon/component/ClosePassword.tsx";
import OpenPassword from "../icon/component/OpenPassword.tsx";


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
    // passwordIcon,
    GetInputProps,
    label,
    // labelPlacement,

  } = useInput({ ...props });
  const [ typeState, setTypeState] = useState(name)
  const [ passState, setPassState] = useState(false)

  const handlePass = () => {
    if (name === "password") {
      setPassState(false)
      setTypeState('text')
    }
    else if (name === "text") {
      setPassState(true)
      setTypeState("password")
    }
  }
  
    return (
      <div
        ref={ref}
        className={`flex flex-col gap-2 p-2 ${GetInputProps.isFullWidth}  
        ${GetInputProps.colors} ${GetInputProps.size}`}
      >
        <span className={`${GetInputProps.isRequiredStyle}`}>
          {label}
        </span>
        {children}
       <div className={`w-full flex flex-row gap-2 items-center
        ${GetInputProps.variant}`}>
       <input
        disabled={GetInputProps.disabled}
          readOnly={GetInputProps.readOnly}
          required={GetInputProps.required}
          className={`focus:border-0 focus:outline-0 p-2 ${GetInputProps.isError}  ${GetInputProps.colors} ${GetInputProps.isDisabledStyle} ${GetInputProps.isReadonlyClass} ${className} `}
          inputMode={inputMode}
          type={typeState}
          value={value}
          name={name}
          id={id}
          style={`${style}`}
          placeholder={placeholder}

        />
        <span className={'bg-red-500'}>
          <button onClick={handlePass}> 
{passState ? < OpenPassword /> : <ClosePassword /> }
          </button>
        </span>
        </div>
      </div>
    );
  }
);

export default Input;


// if (labelPlacement === "bottom") {
//   return (
//     <div
//       ref={ref}
//       className={` flex flex-col gap-4 ${GetInputProps.isFullWidth}  ${GetInputProps.colors} ${GetInputProps.size}`}
//     >
//       <input
//         className={`p-2 ${GetInputProps.colors} ${GetInputProps.variant} `}
//         inputMode={inputMode}
//         type={type}
//         value={value}
//         name={name}
//         id={id}
//         placeholder={placeholder}
//       />
//       <span className={` ${GetInputProps.labelPlacement}`}>{label}</span>
//     </div>
//   );
// } else if (labelPlacement === "left") {
//   return (
//     <div
//       ref={ref}
//       className={`flex flex-row items-end gap-4 ${GetInputProps.isFullWidth} ${GetInputProps.colors} ${GetInputProps.size}`}
//     >
//       <span className={`w-1/4 px-2 ${GetInputProps.labelPlacement}`}>
//         {label}
//       </span>
//       <input
//         className={`p-2  ${GetInputProps.isFullWidth} ${GetInputProps.colors} ${GetInputProps.variant} `}
//         inputMode={inputMode}
//         type={type}
//         value={value}
//         name={name}
//         id={id}
//         placeholder={placeholder}
//       />
//     </div>
//   );
// } else if (labelPlacement === "right") {
//   return (
//     <div
//       ref={ref}
//       className={`flex flex-row items-end gap-4 ${GetInputProps.isFullWidth} ${GetInputProps.colors} ${GetInputProps.size}`}
//     >
//       <input
//         className={`p-2  ${GetInputProps.isFullWidth} ${GetInputProps.colors} ${GetInputProps.variant} `}
//         inputMode={inputMode}
//         type={type}
//         value={value}
//         name={name}
//         id={id}
//         placeholder={placeholder}
//       />
//       <span className={`w-1/4 px-2 ${GetInputProps.labelPlacement}`}>
//         {label}
//       </span>
//     </div>
//   );
// }