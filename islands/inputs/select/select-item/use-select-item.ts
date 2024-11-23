import { useMemo } from "https://esm.sh/v128/preact@10.22.0/compat/src/index.js";
import type { SelectItemProps } from "./type.ts";
import { SelectItemVariants } from "./select-item-variants.ts";
/**
 * Custom hook for managing individual select items with consistent styles and behaviors.
 * @param {SelectItemProps} props - The properties for the select item.
 * @returns {object} Processed properties, styles, and class names for the select item.
 */
export function useSelectItem(props: SelectItemProps) {
  const {
    domRef,
    children,
    className = "",
    classNames,
    isDisabled,
    ...otherProps
  } = props;

  /**
   * Computes the disabled styles if the select item is disabled.
   * Returns styles to visually disable the select item.
   */
  const GetDisabled = useMemo(
    () => {
      if (isDisabled === true) {
        const disabledStyles = SelectItemVariants.disabledStyles;
        return { disabledStyles };
      } else isDisabled === false;
      {
        const disabledStyles = "";
        return { disabledStyles };
      }
    },
    [isDisabled],
  );

  /**
   * Provides custom class names for specific slots in the select item.
   * This includes `yuzuOption` for styling the option element.
   */
  const GetSlot = useMemo(
    () => {
      const yuzuOption = classNames?.yuzuOption ? classNames?.yuzuOption : "";

      return {
        yuzuOption,
      };
    },
    [classNames],
  );

  return {
    domRef,
    children,
    className,
    GetDisabled,
    GetSlot,
    isDisabled,
    ...otherProps,
  };
}
