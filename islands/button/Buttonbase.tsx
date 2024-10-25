import { forwardRef } from "preact/compat";
import type { ButtonProps } from "./type.ts";
import { useButton } from "./use-button.ts";

const Button = forwardRef<"button", ButtonProps>((props, ref) => {

  const { 
    children,
    isDisabled,
    domRef,
    className,
    onClick,

   } = useButton({ ...props});

  return (
    <button onClick={onClick} class={`${className}`} disabled={isDisabled} ref={domRef} >
      {children}
    </button>
  );
});

export default Button;