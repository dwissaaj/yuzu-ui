import { forwardRef } from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
import { useSelectItem } from "./use-select-item.ts";
import type { SelectItemProps } from "./type.ts";
/**
 * The `SelectItem` component represents an individual option within a `SelectGroup`.
 * You can customize its appearance, behavior, and various properties using the available props.
 *
 * @component
 * @example
 * <SelectItem
 *   value="apple"
 *   className="custom-option"
 *   isDisabled
 *   classNames={{ yuzuOption: "custom-option-class" }}
 * >
 *   Apple
 * </SelectItem>
 *
 * @param {Ref<HTMLOptionElement>} [domRef] - A reference to the DOM element of the `option` element, useful for direct DOM manipulation or focusing the option.
 * @param {JSX.CSSProperties} [style] - Custom inline styles to apply to the `SelectItem` container.
 * @param {JSX.Element | string} [children] - The content to be displayed inside the `option` element, typically text or other JSX elements.
 * @param {string} [className=""] - Custom class names to apply additional styling to the `SelectItem` container. Defaults to an empty string if not provided.
 * @param {SelectItemSlot} [classNames={{yuzuOptions :""}}] - Custom class names for specific parts of the `SelectItem` component, such as the option element.
 * @param {boolean} [isDisabled=false] - If true, the option will be disabled and cannot be selected.
 */
const SelectItem = forwardRef<HTMLOptionElement, SelectItemProps>(
  (props) => {
    const {
      domRef,
      children,
      className,
      GetSlot,
      isDisabled,
      GetDisabled,
      ...otherProps
    } = useSelectItem({ ...props });

    return (
      <option
        {...otherProps}
        className={`${className} ${GetDisabled.disabledStyles} ${GetSlot.yuzuOption}`}
        disabled={isDisabled}
        ref={domRef}
      >
        {children}
      </option>
    );
  },
);

export default SelectItem;
