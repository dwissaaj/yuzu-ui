import {
  forwardRef,
  PropsWithoutRef,
  Ref,
  useState
} from "preact/compat";
import { FunctionalComponent } from "preact";
import type { PasswordProps } from "./type.ts";
import { usePassword } from "./use-password.ts";
import ClosePassword from "../../icon/ClosePassword.tsx";
import OpenPassword from "../../icon/OpenPassword.tsx";

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
 * @param {string} [color="primary"] - Color style for the input can be extended & customize in variant file, Possible values are:
 *   - `"primary"`
 *   - `"secondary"`
 *   - `"error"`
 *   - `"warning"`
 * @param {string} [variant="full"] - Style variant for the input. Possible values are:
 *   - `"full"` (default)
 *   - `"underline"`
 * @param {boolean} [isFullWidth] - If true, the input takes up the full width of its parents.
 * @param {boolean} [isDisabled] - If true, disables the input and applies `yuzuErrorStyle` if provided.
 * @param {boolean} [isReadonly=false] - If true, sets the input to read-only mode and applies `yuzuInputReadonlyStyle`.
 * @param {boolean} [isError=false] - If true, applies error styles and displays the error message.
 * @param {string} [errorMessage=""] - Error message to display when `isError` is true.
 * @param {boolean} [isIconHidden=false] - If true, hides the toggle visibility icon.
 * @param {string} [description=""] - Text description or hint for the input field.
 *  * @param {PasswordSlot} [classNames={{}}] - Custom styles for specific component slots. Possible slot keys are:
 * - `yuzuBase`: The base classes applied to the input container.
 * - `yuzuBaseDisabled`: The classes applied to the input container when disabled.
 * - `yuzuInput`: The base classes applied to the input element.
 * - `yuzuInputError`: The classes applied to the input element when an error occurs.
 * - `yuzuIcon`: The classes applied to the password visibility toggle button.
 * - `yuzuDescription`: The classes applied to the description text.
 * - `yuzuLabelRequired`: The classes applied to the label when the field is required.
 * - `yuzuLabel`: The base classes applied to the label.
 * - `yuzuErrorMessage`: The classes applied to the error message text.
 *
 * @returns {JSX.Element} The Input component.
 */

const Password: FunctionalComponent<PropsWithoutRef<PasswordProps> & { ref?: Ref<HTMLInputElement> }> = forwardRef<HTMLInputElement, PasswordProps>((props) => {
  const {
    domRef,
    className,
    GetWrapperBaseStyle,
    GetWrapperInputStyle,
    isDisabled,
    isRequired,
    GetInputStyle,
    GetErrorMessageProps,
    errorMessage,
    GetIconProps,
    isIconHidden,
    GetDescriptionProps,
    GetLabelProps,
    isReadonly,
    GetSlot,
    ...otherProps
  } = usePassword({ ...props });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
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
    <div
      className={`flex flex-col gap-2 ${GetWrapperBaseStyle.className} ${GetSlot.yuzuBase} ${GetSlot.yuzuBaseDisabled}`
        .trim()}
    >
      <div>
        <label
          className={`${GetLabelProps.className} ${GetSlot.yuzuLabelRequired} ${GetSlot.yuzuLabelRequired}`
            .trim()}
        >
          {GetLabelProps.label}
        </label>
        <p
          className={`${GetDescriptionProps.className} ${GetSlot.yuzuDescription}`
            .trim()}
        >
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
            required={isRequired}
            ref={domRef}
            className={`${GetInputStyle.className} ${GetSlot.yuzuInput} ${GetSlot.yuzuInputError}`
              .trim()}
            type={isPasswordVisible ? "text" : "password"}
          />
          <button
            className={`${GetIconProps.className} ${GetSlot.yuzuIcon} ${
              isIconHidden ? "hidden" : ""
            }`.trim()}
            type={"button"}
            onClick={togglePasswordVisibility}
            disabled={isDisabled || isReadonly}
          >
            {isPasswordVisible ? closeIcon : openIcon}
          </button>
        </div>
      </div>
      <div>
        <span
          className={`${GetErrorMessageProps.className} ${GetSlot.yuzuErrorMessage}`}
        >
          {errorMessage}
        </span>
      </div>
    </div>
  );
});

export default Password;
