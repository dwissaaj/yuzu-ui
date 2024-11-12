import { useMemo } from "https://esm.sh/v128/preact@10.22.0/compat/src/index.js";
import type { SelectItemProps } from "./type.ts";
import { SelectItemVariants } from "./select-item-variants.ts";

export function useSelectItem(props: SelectItemProps) {
  const {
    domRef,
    style,
    children,
    className = "",
    classNames,
    isDisabled,
    ...otherProps
  } = props;

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
    style,
    children,
    className,
    GetDisabled,
    GetSlot,
    isDisabled,
    ...otherProps,
  };
}
