import { useMemo } from "https://esm.sh/v128/preact@10.22.0/compat/src/index.js";
import type { LabelProps } from "./type.ts";
import { LabelVariants } from "./label-variant.ts";

export function useLabel(props: LabelProps) {
  const {
    domRef,
    label,
    children,
    fontSize = "small",
    fontColor = "none",
    style = "",
    className = "",
    fontWeight="medium",
    ...otherProps
  } = props;
  const getColors = useMemo(
    () => {
      return LabelVariants.fontColors[fontColor]
    },
    [fontColor],
  );
  const getSize = useMemo(
    () => {
      return LabelVariants.fontSizes[fontSize];
    },
    [fontSize],
  );
  const getWeight = useMemo(
    () => {
      return LabelVariants.fontWeights[fontWeight];
    },
    [fontWeight],
  );

  const GetLabelProps = useMemo(
    () => {
      const size = getSize
      const color = getColors;
      const weight = getWeight;
      return {
        className: `${size} ${color} ${weight}`,
      };
    },
    [fontColor, fontSize, fontWeight],
  );

  return {
    domRef,
    label,
    children,
    style,
    GetLabelProps,
    className,
    ...otherProps,
  };
}
