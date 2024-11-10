import { useMemo } from "https://esm.sh/v128/preact@10.22.0/compat/src/index.js";
import type { RadioProps } from "./types.ts";
import { RadioVariants } from "./radio-variants.ts";

export function useRadio(props: RadioProps) {
  const {
    domRef,
    style,
    children,
    className = "",
    label,
    color = "default",
    textSize = "medium",
    radioSize = "medium",
    disabledStyle = "",
    isDisabled,
    isError,
    errorStyle = "",
    yuzuErrorStyle = "",
    yuzudisableStyle = "",
    ...otherProps
  } = props;
  const GetCustomError = useMemo(() => (isError ? yuzuErrorStyle : ""), [
    isError,
    yuzuErrorStyle,
  ]);
  const GetCustomDisabled = useMemo(
    () => (isDisabled ? yuzudisableStyle : ""),
    [isDisabled, yuzudisableStyle],
  );
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
  const GetErrorStyle = useMemo(() => ({
    errorStyle: isError ? RadioVariants.errorStyles : "",
  }), [isError, errorStyle]);
  const GetLabelProps = useMemo(
    () => {
      const size = GetTextSize.textSize;
      const error = GetErrorStyle.errorStyle;
      const disable = GetDisabledStyle.disabledStyle;
      return {
        className: `${size} ${error} ${disable}`.trim(),
      };
    },
    [GetTextSize, GetErrorStyle, GetDisabledStyle],
  );
  const GetRadioProps = useMemo(
    () => {
      const color = GetColor.color;
      const size = GetTextSize.textSize;
      const radioSize = GetRadioSize.radioSize;
      const error = GetErrorStyle.errorStyle;
      const disable = GetDisabledStyle.disabledStyle;
      const base = RadioVariants.baseStyles;
      return {
        className: `${base} ${color} ${size} ${radioSize} ${error} ${disable}`
          .trim(),
      };
    },
    [GetColor, GetTextSize, GetRadioSize, GetErrorStyle, GetDisabledStyle],
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
  return {
    domRef,
    style,
    className,
    children,
    GetRadioProps,
    label,
    isDisabled,
    isError,
    GetLabelProps,
    GetParentProps,
    GetCustomError,
    GetCustomDisabled,
    ...otherProps,
  };
}
