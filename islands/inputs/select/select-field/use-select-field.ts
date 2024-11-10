import { useMemo } from "https://esm.sh/v128/preact@10.22.0/compat/src/index.js";
import type { SelectGroupProps } from "./type.ts";
import { SelectGroupVariants } from "./select-field-variants.ts";

export function useSelectField(props: SelectGroupProps) {
  const {
    domRef,
    style,
    children,
    className,
    classNames,
    isDisabled,
    disabledStyles,
    description,
    isError,
    errorStyles,
    color = "default",
    label,
    ...otherProps
  } = props;
  const GetColor = useMemo(
    () => {
      return {
        color: SelectGroupVariants.colors[color],
      };
    },
    [color],
  );
  const GetSelectFieldProps = useMemo(
    () => {
      const color = GetColor.color;
      return {
        className: `${color}`.trim(),
      };
    },
    [GetColor],
  );
  const GetCustomLabel = useMemo(
    () => {
      const custom = classNames
      return custom;
    },
    [className],
  );
  return {
    domRef,
    style,
    children,
    className,
    GetSelectFieldProps,
    GetCustomLabel,
    label,
    description,
    ...otherProps,
  };
}
