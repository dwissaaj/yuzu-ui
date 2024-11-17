import { useMemo } from "https://esm.sh/v128/preact@10.22.0/compat/src/index.js";
import type { RadioProps } from "./types.ts";
import { RadioVariants } from "./radio-variants.ts";

export function useRadio(props: RadioProps) {
  const {
    domRef,
    className = "",
    label,
    children,
    color = "default",
    textSize = "medium",
    radioSize = "medium",
    disabledStyle = "",
    isDisabled,
    classNames,
    ...otherProps
  } = props;

  const GetColor = useMemo(
    () => {
      return {
        color: RadioVariants.colors[color],
      };
    },
    [color],
  );

  const GetRadioSize = useMemo(
    () => {
      return {
        radioSize: RadioVariants.sizes.radio[radioSize],
      };
    },
    [radioSize],
  );
  const GetTextSize = useMemo(
    () => {
      return {
        textSize: RadioVariants.sizes.text[textSize],
      };
    },
    [textSize],
  );
  const GetDisabledStyle = useMemo(() => ({
    disabledStyle: isDisabled ? RadioVariants.disabledStyles : "",
  }), [isDisabled, disabledStyle]);

  const GetLabelProps = useMemo(
    () => {
      const size = GetTextSize.textSize;
      const disable = GetDisabledStyle.disabledStyle;
      return {
        className: `${size} ${disable}`.trim(),
      };
    },
    [GetTextSize, GetDisabledStyle],
  );
  const GetRadioProps = useMemo(
    () => {
      const color = GetColor.color;
      const size = GetTextSize.textSize;
      const radioSize = GetRadioSize.radioSize;
      const disable = GetDisabledStyle.disabledStyle;
      const base = RadioVariants.baseStyles;
      return {
        className: `${base} ${color} ${size} ${radioSize} ${disable}`
          .trim(),
      };
    },
    [GetColor, GetTextSize, GetRadioSize, GetDisabledStyle],
  );
  const GetParentProps = useMemo(
    () => {
      const disable = GetDisabledStyle.disabledStyle;
      console.log(disable);
      return {
        className: `${disable}`.trim(),
      };
    },
    [GetDisabledStyle],
  );

  const GetSlot = useMemo(
    () => {
      const yuzuBase = classNames?.yuzuBase ? classNames?.yuzuBase : "";
      const yuzuLabel = classNames?.yuzuLabel ? classNames?.yuzuLabel : "";
      const yuzuInput = classNames?.yuzuInput ? classNames?.yuzuInput : "";
      const yuzuInputDisabled = isDisabled ? classNames?.yuzuInputDisabled : "";
      return {
        yuzuBase,
        yuzuLabel,
        yuzuInput,
        yuzuInputDisabled,
      };
    },
    [classNames],
  );
  const CheckRender = useMemo(
    () => {
      if (label && children) {
        throw new Error(
          "You both add label and children together, currently supported one",
        );
      } else if (children) {
        return children;
      } else if (label) {
        return label;
      } else !children || !label;
      {
        throw new Error(
          "Specify children or label",
        );
      }
    },
    [label, children],
  );
  return {
    domRef,
    className,
    GetRadioProps,
    label,
    isDisabled,
    children,
    GetSlot,
    CheckRender,
    GetLabelProps,
    GetParentProps,
    ...otherProps,
  };
}
