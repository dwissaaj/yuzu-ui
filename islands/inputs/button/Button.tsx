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
    GetButtonClass,
    label,
    disableStyle,
    GetButtonProps,
    ...otherProps
  } = useButton({ ...props });

  return (
    <button
      {...otherProps}
      onClick={onClick}
      className={`${GetButtonClass.className} ${className} ${disableStyle}`}
      style={style}
      disabled={isDisabled}
      ref={domRef}
      type={`${GetButtonProps}`}
    >
      {children}
      {label}
    </button>
  );
});

export default Button;
