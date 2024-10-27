import { forwardRef } from "preact/compat";
import type { ButtonProps } from "./type.ts";
import { useButton } from "./use-button.ts";

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props) => {
  const {
    ref,
    onClick,
    children,
    className,
    style,
    isDisabled,
    Component,

    getButtonProps,
  } = useButton({ ...props });

  return (
    <Component
      onClick={onClick}
      className={`${className} ${getButtonProps.variant} ${getButtonProps.radius}
   ${getButtonProps.size} ${getButtonProps.disableClassName} ${getButtonProps.isFullWidth}`}
      style={`${style}`}
      disabled={isDisabled}
      ref={ref}
      type={getButtonProps.type}
     >
      {children}
    </Component>
  );
});

export default Button;
