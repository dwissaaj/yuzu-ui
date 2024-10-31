import {
  forwardRef,
  useMemo,
} from "https://esm.sh/v128/preact@10.22.0/compat/src/index.js";
import type { InputProps } from "./type.ts";
import { useInput } from "./use-input.ts";

const Input = forwardRef<HTMLInputElement, InputProps>((props) => {
  const {
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
    GetLabelProps,
  } = useInput({ ...props });

  const labelContent = label
    ? (
      <span className={`px-2 ${GetLabelProps.isRequiredStyle}`}>
        {label}
      </span>
    )
    : null;

  const baseContent = (
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
  );

  const mainWrapper = useMemo(() => {
    if (labelPlacement === "top") {
      return (
        <div
          className={`flex flex-col gap-2 ${GetInputProps.isFullWidth}  
        ${GetInputProps.colors} ${GetInputProps.size}`}
        >
          {labelContent}
          <div
            className={`w-full flex flex-row gap-2 items-center
        ${GetInputProps.variant}`}
          >
            {baseContent}
          </div>
        </div>
      );
    }
  }, [labelPlacement]);

  const bottomWrapper = useMemo(() => {
    if (labelPlacement === "bottom") {
      return (
        <div
          className={`flex flex-col gap-2 ${GetInputProps.isFullWidth}  
        ${GetInputProps.colors} ${GetInputProps.size}`}
        >
         
          <div
            className={` flex flex-row gap-2 items-center
        ${GetInputProps.variant}`}
          >
            {baseContent}

          </div>
          {labelContent}
        </div>
      );
    }
  }, [labelPlacement]);
  const leftWrapper = useMemo(() => {
    if (labelPlacement === "left") {
      return (
        <div
          className={`flex flex-row gap-2 items-end ${GetInputProps.isFullWidth}  
        ${GetInputProps.colors} ${GetInputProps.size}`}
        >
          <div className={'w-1/5'}>
          {labelContent}
          </div>
          
          <div
            className={`w-4/5 flex flex-row gap-2 items-center
        ${GetInputProps.variant}`}
          >
            {baseContent}
          </div>
        </div>
      );
    }
  }, [labelPlacement]);
  const rightWrapper = useMemo(() => {
    if (labelPlacement === "right") {
      return (
        <div
          className={` flex flex-row gap-2 items-end ${GetInputProps.isFullWidth}  
        ${GetInputProps.colors} ${GetInputProps.size}`}
        >
          
          <div
            className={`w-4/5 flex flex-row gap-2 items-center
        ${GetInputProps.variant}`}
          >
            {baseContent}
          </div>
          <div className={'w-1/5'}>
          {labelContent}
          </div>
        </div>
      );
    }
  }, [labelPlacement]);

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
