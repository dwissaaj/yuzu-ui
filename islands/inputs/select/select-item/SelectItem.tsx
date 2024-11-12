import { forwardRef } from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
import { useSelectItem } from "./use-select-item.ts";
import type { SelectItemProps } from "./type.ts";
const SelectItem = forwardRef<HTMLOptionElement, SelectItemProps>((props) => {
    const {
      domRef,
      children,
      className,
      GetSlot,
      isDisabled,
      GetDisabled,
      ...otherProps
    } = useSelectItem({ ...props })

    return (
        <option {...otherProps} className={`${className} ${GetDisabled.disabledStyles} ${GetSlot.yuzuOption}`}  disabled={isDisabled} ref={domRef}>
            {children}
        </option>
    )
});

export default SelectItem;
