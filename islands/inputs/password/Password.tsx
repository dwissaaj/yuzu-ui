import {
  forwardRef,
  useState,
} from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
import type { PasswordProps } from "./type.ts";
import { usePassword } from "./use-password.ts";
import ClosePassword from "../../icon/component/ClosePassword.tsx";
import OpenPassword from "../../icon/component/OpenPassword.tsx";

/**
 * Input component for form data entry with customizable styles and behaviors.
 *
 * @component
 *
 * @example
 * <Password
 * id={'your name'}
 * form="asd"
 * domRef={fieldsetRef}
 * placeholder={"your ame"}
 * size={"small"}
 * color="primary"
 * variant="underline"
 * isError={true}
 * yuzuErrorStyle="bg-red-500"
 * />
 * @param {Ref<HTMLInputElement>} [domRef] - Reference for the password input element, enabling direct access.
 * @param {string} [className=""] - Additional CSS class names to apply to the input container, if there is no provided will return empty string
 * @param {JSX.CSSProperties} [style=""] - Inline styles to apply to the input container,  if there is no provided will return empty string
 * @param {string} [size="medium"] - Size of the input element, can be extended & customize in variant file. Possible values are
 *   - `"small"`
 *   - `"medium"` (default)
 *   - `"large"`
 * @param {string} [color="none"] - Color style for the input can be extended & customize in variant file, Possible values are:
 *   - `"primary"`
 *   - `"secondary"`
 *   - `"error"`
 *   - `"warning"`
 *   - `"none"` (default, inherits default color styling)
 * @param {string} [variant="full"] - Style variant for the input. Possible values are:
 *   - `"full"` (default)
 *   - `"underline"`
 * @param {boolean} [isFullWidth] - If true, the input takes up the full width of its parents.
 * @param {boolean} [isDisabled] - If true, disables the input and applies `yuzuErrorStyle` if provided.
 * @param {string} [yuzuErrorStyle=""] - CSS class to apply when `isError` is set to true, enabling error-specific styling either than that return empty string
 * @param {string} [yuzuInputReadonlyStyle=""] - SS class to apply when `isReadonly` is set to true, enabling error-specific styling either than that return empty string
 * @param {boolean} [isReadonly=false] - If true, sets the input to read-only mode and applies `yuzuInputReadonlyStyle`.
 * @param {boolean} [isError=false] - If true, sets the input to read-only mode and applies `yuzuErrorStyle`.
 *
 * @returns {JSX.Element} The Input component.
 */

const Password = forwardRef<HTMLInputElement, PasswordProps>((props) => {
  const {
    domRef,
    className,
    GetWrapperBaseStyle,
    GetWrapperInputStyle,
    isDisabled,
    GetInputStyle,
    GetErrorMessageProps,
    errorMessage,
    GetIconStyle,
    isIconHidden,
    GetDescriptionProps,
    GetLabelProps,
    isReadonly,
    ...otherProps
  } = usePassword({ ...props });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    console.log(isPasswordVisible);
    setIsPasswordVisible((prev) => !prev);
  };
  const closeIcon = (
    <span className={``}>
      <ClosePassword svgStyle={`w-6`} />
    </span>
  );
  const openIcon = (
    <span className={``}>
      <OpenPassword svgStyle={`w-6`} />
    </span>
  );
  return (
    <div className={`flex flex-col gap-2 ${GetWrapperBaseStyle.className}`.trim()}>
      <div>
        <label className={`${GetLabelProps.className}`}>
          {GetLabelProps.label}
        </label>
        <p className={`${GetDescriptionProps.className}`}>
          {GetDescriptionProps.description}
        </p>
      </div>
      <div
        className={`${className} ${GetWrapperInputStyle.className}
   `.trim()}
      >
        <div className={`w-full flex flex-row`}>
          <input
            {...otherProps}
            disabled={isDisabled}
            readOnly={isReadonly}
            ref={domRef}
            className={`${GetInputStyle.className}`.trim()}
            type={isPasswordVisible ? "text" : "password"}
          />
          <button
            className={`${GetIconStyle.className} ${
              isIconHidden ? "hidden" : ""
            }`.trim()}
            type={"button"}
            onClick={togglePasswordVisibility}
            disabled={isDisabled}
          >
            {isPasswordVisible ? closeIcon : openIcon}
          </button>
        </div>
      </div>
      <div>
        <span className={`${GetErrorMessageProps.className}`}>{errorMessage}</span>
      </div>
    </div>
  );
});

export default Password;
