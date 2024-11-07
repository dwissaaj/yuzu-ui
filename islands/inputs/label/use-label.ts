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
    fontWeight = "medium",
    fontReadonly,
    fontRequired,
    isReadonly=false,
    isRequired=false,
    ...otherProps
  } = props;
  const getColors = useMemo(
    () => {
      return LabelVariants.fontColors[fontColor];
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
  const getReadonly = useMemo(
    () => {
      if(isReadonly === true) {
        const isReadonly = true
        const readOnlyClass = LabelVariants.fontReadonly
        return {isReadonly,readOnlyClass}
      }
    },
    [fontReadonly],
  );
  const getRequired = useMemo(
    () => {
      if(isRequired === true) {
        const isRequired = true
        const requiredClass = LabelVariants.fontRequired
        return {isRequired,requiredClass}
      }
    },
    [fontRequired],
  );
  const GetLabelProps = useMemo(
    () => {
      const size = getSize;
      const color = getColors;
      const weight = getWeight;
      const required = getRequired?.requiredClass
      const readonly = getReadonly?.readOnlyClass
      return {
        className: `${size} ${color} ${weight} ${readonly} ${required}`,
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
    isReadonly,
    isRequired,
    ...otherProps,
  };
}
