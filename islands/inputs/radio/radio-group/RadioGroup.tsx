import { forwardRef } from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
import type { RadioGroupProps } from "./type.ts";
import { useRadioGroup } from "./use-radio-group.ts";
const RadioGroup = forwardRef<HTMLFieldSetElement, RadioGroupProps>((props) => {
    const {
        domRef,
        style,
        className,
        children,
        GetFieldsetProps,
        GetLabelProps,
        GetCustomLabel,
        ...otherProps
    } = useRadioGroup({ ...props });
  
    return (
      <fieldset
        {...otherProps}
        ref={domRef}
        style={style}
        className={`${className} ${GetFieldsetProps.className}`}
      >
        <legend className={`${GetCustomLabel} ${GetLabelProps.className}`}>
          {GetLabelProps.label}
        </legend>
        {children}
      </fieldset>
    );
  });
  
  export default RadioGroup;
  