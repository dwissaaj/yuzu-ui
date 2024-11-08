import {
  forwardRef,
  useState,
} from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
import type { PasswordNewProps } from "./type.ts";
import { usePassword } from "./use-password.ts";
import ClosePassword from "../../icon/component/ClosePassword.tsx";
import OpenPassword from "../../icon/component/OpenPassword.tsx";

const PasswordNew = forwardRef<HTMLInputElement, PasswordNewProps>((props) => {
  const {
    domRef,
    style,
    className,
    GetParentsStyle,
    isDisabled,
    GetInputStyle,
    yuzuErrorStyle,
    GetDisabled,
    yuzuInputReadonlyStyle,
    isReadonly,
    ...otherProps
  } = usePassword({ ...props });
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
  const closeIcon = (
    <span className={``}>
      <ClosePassword svgStyle={` w-6`} />
    </span>
  );
  const openIcon = (
    <span className={``}>
      <OpenPassword svgStyle={` w-6`} />
    </span>
  );
  return (
    <div style={style} className={`${className} ${GetParentsStyle.className}
    ${yuzuErrorStyle}`}>
      <div className={`w-full flex flex-row`}>
        <input
        {...otherProps}
          disabled={isDisabled}
          readOnly={isReadonly}
          ref={domRef}
          className={`${yuzuInputReadonlyStyle} ${GetInputStyle.className}`}
          type={isPasswordVisible ? "text" : "password"}
        />
        <button
          className={`transition ease-in-out delay-150 duration-300 ${GetDisabled.disabledStyle}`}
          type={"button"}
          onClick={togglePasswordVisibility}
          disabled={isDisabled}
        >
          {isPasswordVisible ? closeIcon : openIcon}
        </button>
      </div>
    </div>
  );
});

export default PasswordNew;
