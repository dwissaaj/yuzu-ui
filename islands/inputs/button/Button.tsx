import { forwardRef } from "preact/compat";
import type { ButtonProps } from "./type.ts";
import { useButton } from "./use-button.ts";

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props) => {
  const {
    domRef,
    onClick,
    children,
    className,
    style,
    isDisabled,
    getButtonProps,
    ...otherProps
  } = useButton({ ...props });

  return (
    <button
      {...otherProps}
      onClick={onClick}
      className={`${className} ${getButtonProps.variant} ${getButtonProps.radius}
   ${getButtonProps.size} ${getButtonProps.disableClassName} ${getButtonProps.isFullWidth}`}
      style={style}
      disabled={isDisabled}
      ref={domRef}
      type={`${getButtonProps.type}`}
    >
      {children}
    </button>
  );
});

export default Button;
