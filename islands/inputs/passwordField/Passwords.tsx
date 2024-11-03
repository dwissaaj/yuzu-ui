import { forwardRef } from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
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
    GetParentsProps,
    GetInputStyle,
    GetLabelPlacement,
    isDisabledStyle,
    isErrorStyle,
    isRequiredStyle,
    GetVariantStyle,
    GetPasswordProps
  } = usePasswords({ ...props });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);


  const handleFocus = () => {
    setIsFocused(true)
  };
  const handleBlur = () => {
    setIsFocused(false)
  };

  const togglePasswordVisibility = () => {
    console.log(isPasswordVisible);
    setIsPasswordVisible((prev) => !prev);
  };
  const labelContent = GetLabelPlacement.label
    ? (
      <span className={`px-2 ${isRequiredStyle}`}>
        {GetLabelPlacement.label}
      </span>
    )
    : null;

  const baseContent = (
    <input
      ref={domRef}
      disabled={GetPasswordProps.isDisable}
      readOnly={GetPasswordProps.isReadOnly}
      required={GetPasswordProps.isRequired}
      className={`p-2 w-full border-0 focus:outline-0 focus:ring-0 focus:border-0 ${isDisabledStyle} ${isErrorStyle}`}
      inputMode={inputMode}
      type={isPasswordVisible ? "text" : "password"}
      value={value}
      name={name}
      id={id}
      style={`${style}`}
      placeholder={placeholder}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
  const closeIcon = (
    <span className={`transition-opacity duration-300 ${isPasswordVisible ? 'opacity-100' : 'opacity-0'}`}>
      <ClosePassword />
    </span>
  );
  const openIcon = (
    <span className={`transition-opacity duration-300 ${isPasswordVisible ? 'opacity-0' : 'opacity-100'}`}>
      <OpenPassword />
    </span>
  );
  const mainWrapper = useMemo(() => {
    if (GetLabelPlacement.labelPlacement === "top") {
      return (
        <div
          className={`p-2 flex flex-col gap-2 ${GetParentsProps.className} 
          ${className} ${isDisabledStyle} ${isErrorStyle}`}
        >
          {labelContent}
          <div
            className={` flex flex-row gap-2 items-center pr-4
            ${isFocused ? `${GetVariantStyle.variantLabelStyle} ${GetVariantStyle.variantFocusStyle}` : 
              `${GetVariantStyle.variant} ${GetInputStyle.className} 
              ${isDisabledStyle} ${isErrorStyle}`}`}
          >
            {baseContent}
            <button
              className={`transition ease-in-out delay-150 duration-300 ${isDisabledStyle} ${isErrorStyle}`}
              type={"button"}
              onClick={togglePasswordVisibility}
            >
              {isPasswordVisible ? closeIcon : openIcon}
            </button>
          </div>
        </div>
      );
    }
  }, [GetLabelPlacement, type, isPasswordVisible,isFocused, GetVariantStyle]);

  return (
    <>
      {mainWrapper}
    </>
  );
});
export default Passwords;
