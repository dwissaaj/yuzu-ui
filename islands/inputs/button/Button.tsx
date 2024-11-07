import { forwardRef } from "preact/compat";
import type { ButtonProps } from "./type.ts";
import { useButton } from "./use-button.ts";
/**
 * Button component with custom configuration variant
 * @component
 * 
 * 
 * @example
 * <Button
 *  size = "small",
 *  variant = "primary",
 *  types = "button",
 *  radius = "md" >
 *    Click Me!!!
 * </Button>
 *
 * Additional Params
 * 
 * @param {string} [yuzuDisableStyle=""] - Override default class when disabled, if no props will return empty string, use carefully recomended to change via variant file
 * 
 * @return {JSX.Element}
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>((props) => {
  const {
    domRef,
    onClick,
    children,
    className,
    style,
    isDisabled,
    GetButtonClass,
    yuzuDisableStyle,
    GetButtonProps,
    ...otherProps
  } = useButton({ ...props });

  return (
    <button
      {...otherProps}
      onClick={onClick}
      className={`${GetButtonClass.className} ${className} ${yuzuDisableStyle}`}
      style={style}
      disabled={isDisabled}
      ref={domRef}
      type={`${GetButtonProps}`}
    >
      {children}
    </button>
  );
});

export default Button;
