import { forwardRef } from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
import type { LabelProps } from "./type.ts";
import {useLabel} from './use-label.ts'
const Label = forwardRef<HTMLLabelElement, LabelProps>((props) => {
    const {
        domRef,
        label,
        yuzuLabelStyle,
        children,
        style,
        GetLabelProps,
        ...rest
    } = useLabel({...props})
    return (
        <label {...rest} style={style}  ref={domRef}  className={`${GetLabelProps.className} ${yuzuLabelStyle}`} >
            {label}
            {children}
        </label>
    )

})

export default Label