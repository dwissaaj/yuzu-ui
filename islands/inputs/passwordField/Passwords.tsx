import { forwardRef, useRef } from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
import type { PasswordsProps } from "./type.ts";
import { usePasswords } from "./use-passwords.ts";
import {
  useMemo,
  useState,
} from "https://esm.sh/v128/preact@10.22.0/compat/src/index.js";
import ClosePassword from "../../icon/component/ClosePassword.tsx";
import OpenPassword from "../../icon/component/OpenPassword.tsx";
const Passwords = forwardRef<HTMLInputElement, PasswordsProps>((props) => {
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
    isDisabledStyle,
    isErrorStyle,
    isRequiredStyle,
    GetVariantIcon,
  } = usePasswords({ ...props });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const inputRef = useRef(null)
  const [isFocused, setIsFocused] = useState(false);
  console.log(inputRef)
  const togglePasswordVisibility = () => {
    console.log(isPasswordVisible);
    setIsPasswordVisible((prev) => !prev);
  };
  const labelContent = GetLabelPlacement.label
    ? (
      <span className={`px-2 ${GetLabelProps.isRequiredStyle}`}>
        {GetLabelPlacement.label}
      </span>
    )
    : null;

  const baseContent = (
    <input
      ref={domRef || inputRef}
      disabled={GetInputProps.isDisable}
      readOnly={GetInputProps.isReadOnly}
      required={GetInputProps.isRequired}
      className={`p-2 w-full ${isDisabledStyle} ${isErrorStyle} ${isRequiredStyle}  ${GetInputStyle.className} ${className} `}
      inputMode={inputMode}
      type={isPasswordVisible ? "text" : "password"}
      value={value}
      name={name}
      id={id}
      style={`${style}`}
      placeholder={placeholder}
    />
  );

  const closeIcon = <ClosePassword />;
  const openIcon = <OpenPassword />;
  const mainWrapper = useMemo(() => {
    if (GetLabelPlacement.labelPlacement === "top") {
      return (
        <div
          {...GetParentsProps}
          className={`p-2 flex flex-col gap-2 ${GetParentsProps.className} `}
        >
          {labelContent}
          <div
            className={`flex flex-row gap-2 items-center pr-4 ${GetVariantIcon.className}
            ${inputRef.current ? "" : ""}
            `}
          >
            {baseContent}
            <button
              className={"transition ease-in-out delay-300 duration-700"}
              type={"button"}
              onClick={togglePasswordVisibility}
            >
              {isPasswordVisible ? closeIcon : openIcon}
            </button>
          </div>
        </div>
      );
    }
  }, [GetLabelPlacement, type, isPasswordVisible,inputRef]);

  return (
    <>
      {mainWrapper}
    </>
  );
});
export default Passwords;
