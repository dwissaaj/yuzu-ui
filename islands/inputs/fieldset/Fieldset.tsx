import { forwardRef } from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
import type { FieldsetProps } from "./type.ts";
import { useFieldset } from "./use-fieldset.ts";

const Fieldset = forwardRef<HTMLFieldSetElement, FieldsetProps>((props) => {
  const {
    domRef,
    style,
    children,
    GetFieldsetProps,
    yuzuDisabledStyle,
    yuzuTitleStyle,
    GetFieldsetClass,
    title,
    className,
    ...otherProps
  } = useFieldset({ ...props });

  return (
    <fieldset
      {...otherProps}
      ref={domRef}
      title={title}
      style={style}
      disabled={GetFieldsetProps.isDisabled}
      className={`${className} ${yuzuTitleStyle} ${yuzuDisabledStyle} ${GetFieldsetClass.className} 
        ${yuzuDisabledStyle}`}
    >
      {children}
    </fieldset>
  );
});

export default Fieldset;
