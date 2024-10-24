import { forwardRef } from "preact/compat";
import type { ButtonProps } from "./type.ts";

const Buttonbase = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ onClick, children, className, isDisabled = false, ..._props }, ref) => {
    return (
      <button
        disabled={isDisabled}
        class={`${className} + `}
        ref={ref}
        onClick={onClick}
      >
        {children}
      </button>
    );
  },
);
export default Buttonbase;
