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
    Component,

    getButtonProps,
  } = useButton({ ...props });

  return (
    <button
      onClick={onClick}
      class={`${className} ${getButtonProps.radius} ${getButtonProps.radius}
      ${getButtonProps.type} ${getButtonProps.size}`}
      style={`${style}`}
      disabled={isDisabled}
      ref={domRef}
    >
      {children}
    </button>
  );
});

export default Button;
