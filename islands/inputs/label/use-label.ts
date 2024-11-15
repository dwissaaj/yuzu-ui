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
    className = "",
    fontWeight = "medium",
    isDisabled = false,
    isReadonly = false,
    isRequired = false,
    classNames,
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
  const getReadonly = useMemo(() => {
    const fontReadonly = isReadonly ? LabelVariants.fontReadonly : "";
    return { isReadonly, fontReadonly };
  }, [isReadonly]);
  const getRequired = useMemo(() => {
    const requiredClass = isRequired ? LabelVariants.fontRequired : "";
    return { isRequired, requiredClass };
  }, [isRequired]);

  const getDisabled = useMemo(() => {
    const disabledClass = isDisabled ? LabelVariants.fontDisabled : "";
    return { isDisabled, disabledClass };
  }, [isDisabled]);

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

  const GetSlot = useMemo(
    () => {
      const yuzuBase = classNames?.yuzuBase ? classNames?.yuzuBase : "";
      const yuzuLabelDisabled = getDisabled.isDisabled ? classNames?.yuzuLabelDisabled  : "";
      const yuzuLabelReadonly = getReadonly.isReadonly ? classNames?.yuzuLabelReadonly : "";
      const yuzuLabelRequired = getRequired.isRequired ? classNames?.yuzuLabelRequired : "";
      return {
        yuzuBase,
        yuzuLabelDisabled,
        yuzuLabelReadonly,
        yuzuLabelRequired,
      };
    },
    [classNames],
  );
  const CheckRender = useMemo(
    () => {
      if (label && children) {
        throw new Error("Only Support one, Pick: children as JSX Element or label as string, not both.");
      }
      if (children) {
        return children;
      }
      if (label) {
        return label;
      }
      return new Error("Children or Label not Specified");
     
    }, [children, label])
  return {
    domRef,
    label,
    children,
    GetLabelProps,
    className,
    CheckRender,
    isReadonly,
    isRequired,
    isDisabled,
    GetSlot,
    ...otherProps,
  };
}
