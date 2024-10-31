import {
  forwardRef,
} from "https://esm.sh/v128/preact@10.22.0/compat/src/index.js";
import type { InputProps } from "./type.ts";
import { useInput } from "./use-input.ts";
const Input = forwardRef<HTMLInputElement, InputProps>((props) => {
  const {
    children,
    id,
    inputMode,
    type,
    className,
    value,
    name,
    style,
    placeholder,
    GetInputProps,
    label,
    labelPlacement,
  } = useInput({ ...props });

  if(labelPlacement === 'top') {
    return ( 
      <div
      className={`flex flex-col gap-2 p-2 ${GetInputProps.isFullWidth}  
        ${GetInputProps.colors} ${GetInputProps.size}`}
    >
      <span className={`${GetInputProps.isRequiredStyle}`}>
        {label}
      </span>
      {children}
      <div
        className={`w-full flex flex-row gap-2 items-center
        ${GetInputProps.variant}`}
      >
        <input
          disabled={GetInputProps.disabled}
          readOnly={GetInputProps.readOnly}
          required={GetInputProps.required}
          className={`focus:border-0 focus:outline-0 p-2 ${GetInputProps.isError}  ${GetInputProps.colors} ${GetInputProps.isDisabledStyle} ${GetInputProps.isReadonlyClass} ${className} `}
          inputMode={inputMode}
          type={type}
          value={value}
          name={name}
          id={id}
          style={`${style}`}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
  } 
  if(labelPlacement === 'right') {
    return ( 
      <div
      className={`flex flex-row gap-2 p-2 items-end ${GetInputProps.isFullWidth}  
        ${GetInputProps.colors} ${GetInputProps.size}`}
    >
     
      {children}
     
      <div
        className={`w-4/5 flex flex-row gap-2 items-center
        ${GetInputProps.variant}`}
      >
        
        <input
          disabled={GetInputProps.disabled}
          readOnly={GetInputProps.readOnly}
          required={GetInputProps.required}
          className={`focus:border-0 focus:outline-0 p-2 ${GetInputProps.isError}  ${GetInputProps.colors} ${GetInputProps.isDisabledStyle} ${GetInputProps.isReadonlyClass} ${className} `}
          inputMode={inputMode}
          type={type}
          value={value}
          name={name}
          id={id}
          style={`${style}`}
          placeholder={placeholder}
        />
      </div>
      <span className={`w-1/5 ${GetInputProps.isRequiredStyle}`}>
        {label}
      </span>
    </div>
  );
  } 
  if(labelPlacement === 'left') {
    return ( 
      <div
      className={`flex flex-row gap-2 p-2 items-end ${GetInputProps.isFullWidth}  
        ${GetInputProps.colors} ${GetInputProps.size}`}
    >
     
      {children}
      <span className={`w-1/5 ${GetInputProps.isRequiredStyle}`}>
        {label}
      </span>
      <div
        className={`w-4/5 flex flex-row gap-2 items-center
        ${GetInputProps.variant}`}
      >
        
        <input
          disabled={GetInputProps.disabled}
          readOnly={GetInputProps.readOnly}
          required={GetInputProps.required}
          className={`focus:border-0 focus:outline-0 p-2 ${GetInputProps.isError}  ${GetInputProps.colors} ${GetInputProps.isDisabledStyle} ${GetInputProps.isReadonlyClass} ${className} `}
          inputMode={inputMode}
          type={type}
          value={value}
          name={name}
          id={id}
          style={`${style}`}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
  } 
  else if(labelPlacement === 'bottom') {
    return ( 
      <div
      className={`flex flex-col gap-2 p-2 ${GetInputProps.isFullWidth}  
        ${GetInputProps.colors} ${GetInputProps.size}`}
    >
     
      {children}
      <div
        className={`w-full flex flex-row gap-2 items-center
        ${GetInputProps.variant}`}
      >
        <input
          disabled={GetInputProps.disabled}
          readOnly={GetInputProps.readOnly}
          required={GetInputProps.required}
          className={`focus:border-0 focus:outline-0 p-2 ${GetInputProps.isError}  ${GetInputProps.colors} ${GetInputProps.isDisabledStyle} ${GetInputProps.isReadonlyClass} ${className} `}
          inputMode={inputMode}
          type={type}
          value={value}
          name={name}
          id={id}
          style={`${style}`}
          placeholder={placeholder}
        />
      </div>
      <span className={`${GetInputProps.isRequiredStyle}`}>
        {label}
      </span>
    </div>
  );
  } 
});

export default Input;

// const [ typeState, setTypeState] = useState('')
// const [ passState, setPassState] = useState(false)
// const handlePass = (types) => {
//   if (types === "password") {
//     console.log('types', types)
//     return < OpenPassword />
//   }
//   else if (types === "text") {
//     console.log('types', types)
//     return <ClosePassword />
//   }
// }
