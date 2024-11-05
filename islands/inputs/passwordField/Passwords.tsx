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
    GetLabelProps,
    GetVariantStyle,
    GetPasswordProps,
    inputStyle,
    labelStyle,
    ...otherProps
  } = usePasswords({ ...props });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };

  const togglePasswordVisibility = () => {
    console.log(isPasswordVisible);
    setIsPasswordVisible((prev) => !prev);
  };
  const labelContent = GetLabelPlacement.label
    ? (
      <span
        className={`px-2 ${labelStyle} ${isRequiredStyle} ${GetLabelProps.isRequiredStyle}`}
      >
        {GetLabelPlacement.label}
      </span>
    )
    : null;

  const labelContentHorizontal = GetLabelPlacement.label
    ? (
      <span
        className={`px-2 w-1/4 ${labelStyle} ${isRequiredStyle} ${GetLabelProps.isRequiredStyle}`}
      >
        {GetLabelPlacement.label}
      </span>
    )
    : null;
  const baseContent = (
    <input
      {...otherProps}
      ref={domRef}
      disabled={GetPasswordProps.isDisable}
      readOnly={GetPasswordProps.isReadOnly}
      required={GetPasswordProps.isRequired}
      className={`p-2 w-full border-0 focus:outline-0 focus:ring-0 focus:border-0 ${inputStyle} ${isDisabledStyle} ${isErrorStyle} ${GetInputStyle.className}`}
      inputMode={inputMode}
      type={isPasswordVisible ? "text" : "password"}
      value={value}
      name={name}
      id={id}
      style={style}
      placeholder={placeholder}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
  const closeIcon = (
    <span className={`${GetInputStyle.className}`}>
      <ClosePassword svgStyle={`${isErrorStyle} w-6`} />
    </span>
  );
  const openIcon = (
    <span className={`${GetInputStyle.className}`}>
      <OpenPassword svgStyle={`${isErrorStyle} w-6`} />
    </span>
  );

  const mainWrapper = useMemo(() => {
    if (GetLabelPlacement.labelPlacement === "top") {
      return (
        <div
          className={`p-2 flex flex-col gap-2 ${GetParentsProps.className} 
          ${className} ${isDisabledStyle}`}
        >
          {labelContent}
          <div
            className={` flex flex-row gap-2 items-center pr-4
            ${
              isFocused
                ? `${GetVariantStyle.variantLabelStyle} ${GetVariantStyle.variantFocusStyle} ${GetInputStyle.className} ${isErrorStyle}`
                : `${GetVariantStyle.variant} ${GetInputStyle.className} 
              ${isDisabledStyle} ${isErrorStyle}`
            } `}
          >
            {baseContent}
            <button
              className={`transition ease-in-out delay-150 duration-300 ${isDisabledStyle} ${GetInputStyle.className}`}
              type={"button"}
              onClick={togglePasswordVisibility}
              disabled={GetPasswordProps.isDisable}
            >
              {isPasswordVisible ? closeIcon : openIcon}
            </button>
          </div>
        </div>
      );
    }
  }, [GetLabelPlacement, type, isPasswordVisible, isFocused, GetVariantStyle]);
  const bottomWrapper = useMemo(() => {
    if (GetLabelPlacement.labelPlacement === "bottom") {
      return (
        <div
          className={`p-2 flex flex-col gap-2 ${GetParentsProps.className} 
          ${className} ${isDisabledStyle}`}
        >
          <div
            className={` flex flex-row gap-2 items-center pr-4
            ${
              isFocused
                ? `${GetVariantStyle.variantLabelStyle} ${GetVariantStyle.variantFocusStyle} ${GetInputStyle.className} ${isErrorStyle}`
                : `${GetVariantStyle.variant} ${GetInputStyle.className} 
              ${isDisabledStyle} ${isErrorStyle}`
            } `}
          >
            {baseContent}
            <button
              className={`transition ease-in-out delay-150 duration-300 ${isDisabledStyle} ${GetInputStyle.className}`}
              type={"button"}
              onClick={togglePasswordVisibility}
              disabled={GetPasswordProps.isDisable}
            >
              {isPasswordVisible ? closeIcon : openIcon}
            </button>
          </div>
          {labelContent}
        </div>
      );
    }
  }, [GetLabelPlacement, type, isPasswordVisible, isFocused, GetVariantStyle]);
  const leftWrapper = useMemo(() => {
    if (GetLabelPlacement.labelPlacement === "left") {
      return (
        <div
          className={`p-2 flex flex-row gap-2 ${GetParentsProps.className} 
          ${className} ${isDisabledStyle} items-end`}
        >
          {labelContentHorizontal}
          <div
            className={`w-3/4 flex flex-row gap-2 items-center pr-4
            ${
              isFocused
                ? `${GetVariantStyle.variantLabelStyle} ${GetVariantStyle.variantFocusStyle} ${GetInputStyle.className} ${isErrorStyle}`
                : `${GetVariantStyle.variant} ${GetInputStyle.className} 
              ${isDisabledStyle} ${isErrorStyle}`
            } `}
          >
            {baseContent}
            <button
              className={`transition ease-in-out delay-150 duration-300 ${isDisabledStyle} ${GetInputStyle.className}`}
              type={"button"}
              onClick={togglePasswordVisibility}
              disabled={GetPasswordProps.isDisable}
            >
              {isPasswordVisible ? closeIcon : openIcon}
            </button>
          </div>
        </div>
      );
    }
  }, [GetLabelPlacement, type, isPasswordVisible, isFocused, GetVariantStyle]);

  const rightWrapper = useMemo(() => {
    if (GetLabelPlacement.labelPlacement === "right") {
      return (
        <div
          className={`p-2 flex flex-row gap-2  ${GetParentsProps.className} 
          ${className} ${isDisabledStyle} items-end`}
        >
          <div
            className={`w-3/4 flex flex-row gap-2 items-center pr-4
            ${
              isFocused
                ? `${GetVariantStyle.variantLabelStyle} ${GetVariantStyle.variantFocusStyle} ${GetInputStyle.className} ${isErrorStyle}`
                : `${GetVariantStyle.variant} ${GetInputStyle.className} 
              ${isDisabledStyle} ${isErrorStyle}`
            } `}
          >
            {baseContent}
            <button
              className={`transition ease-in-out delay-150 duration-300 ${isDisabledStyle} ${GetInputStyle.className}`}
              type={"button"}
              onClick={togglePasswordVisibility}
              disabled={GetPasswordProps.isDisable}
            >
              {isPasswordVisible ? closeIcon : openIcon}
            </button>
          </div>
          {labelContentHorizontal}
        </div>
      );
    }
  }, [GetLabelPlacement, type, isPasswordVisible, isFocused, GetVariantStyle]);

  return (
    <>
      {mainWrapper}
      {bottomWrapper ? bottomWrapper : null}
      {leftWrapper ? leftWrapper : null}
      {rightWrapper ? rightWrapper : null}
    </>
  );
});
export default Passwords;
