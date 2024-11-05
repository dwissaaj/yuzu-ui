import { forwardRef } from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
import type { LabelProps } from "./type.ts";
import { useLabel } from "./use-label.ts";
const Label = forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {
  const {
    domRef,
    label,
    className,
    yuzuLabelStyle,
    children,
    style,
    GetLabelProps,
    ...otherProps
  } = useLabel({ ...props });

  return (
    <label
      {...otherProps}
      // Ensure this does not contain incompatible props
      style={style}
      ref={domRef || ref}
      className={`${className} ${GetLabelProps.className} ${yuzuLabelStyle}`}
    >
      {label}
      {children}
    </label>
  );
});

export default Label;
