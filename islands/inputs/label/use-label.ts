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
    isDisabled = false,
    isReadonly = false,
    isRequired = false,
    yuzuFontReadonly = "",
    yuzuFontDisabled = "",
    yuzuFontRequired = "",
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
      if (isReadonly === true) {
        const isReadonly = true;
        const fontReadonly = LabelVariants.fontReadonly;
        return { isReadonly, fontReadonly };
      } else if (isDisabled === false) {
        const isReadonly = false;
        const fontReadonly = "";
        return { fontReadonly, isReadonly };
      }
    },
    [isReadonly],
  );
  const getRequired = useMemo(
    () => {
      if (isRequired === true) {
        const isRequired = true;
        const requiredClass = LabelVariants.fontRequired;
        return { isRequired, requiredClass };
      } else if (isDisabled === false) {
        const isRequired = false;
        const requiredClass = "";
        return { isRequired, requiredClass };
      }
    },
    [isRequired],
  );

  const getDisabled = useMemo(
    () => {
      if (isDisabled === true) {
        const isDisabled = true;
        const disabledClass = LabelVariants.fontDisabled;
        return { isDisabled, disabledClass };
      } else if (isDisabled === false) {
        const isDisabled = false;
        const disabledClass = "";
        return { isDisabled, disabledClass };
      }
    },
    [isDisabled],
  );

  const GetLabelProps = useMemo(
    () => {
      const size = getSize;
      const color = getColors;
      const weight = getWeight;
      const required = getRequired?.requiredClass;
      const readonly = getReadonly?.fontReadonly;
      const disabled = getDisabled?.disabledClass;
      return {
        className:
          `${size} ${color} ${weight} ${readonly} ${required} ${disabled}`
            .trim(),
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
    isDisabled,
    yuzuFontReadonly,
    yuzuFontDisabled,
    yuzuFontRequired,
    ...otherProps,
  };
}
