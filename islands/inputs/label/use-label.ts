import { useMemo } from "https://esm.sh/v128/preact@10.22.0/compat/src/index.js";
import type { LabelProps } from "./type.ts";
import { LabelVariants } from "./label-variant.ts";

export function useLabel(props: LabelProps) {
  const {
    domRef,
    label,
    yuzuLabelStyle = "",
    children,
    fontSize = "small",
    color = "none",
    style = "",
    className = "",
    ...otherProps
  } = props;
  const getColors = useMemo(
    () => {
      return {
        color: LabelVariants.colors[color],
      };
    },
    [color],
  );
  const getSize = useMemo(
    () => {
      return LabelVariants.fontSize[fontSize];
    },
    [fontSize],
  );

  const GetLabelProps = useMemo(
    () => {
      const size = getSize;
      const color = getColors.color;
      return {
        className: `${size} ${color}`,
      };
    },
    [color, fontSize],
  );

  return {
    domRef,
    label,
    yuzuLabelStyle,
    children,
    fontSize,
    color,
    style,
    GetLabelProps,
    className,
    ...otherProps,
  };
}
