import { useMemo } from "https://esm.sh/v128/preact@10.22.0/compat/src/index.js";
import type { CheckboxProps } from "./type.ts";
import { CheckboxVariants } from "./checkbox-variants.ts";
import { colors } from "$fresh/src/server/deps.ts";

export function useCheckbox(props: CheckboxProps) {
  const {
    domRef,
    labelPosition = "right",
    boxSize = "medium",
    boxRadius = "none",
    boxStyle,
    boxColor = "primary",
    color = "none",
    size = "small",
    label,
    isDisabled,
    isDisabledStyle = "",
    isIndeterminate,
    className = "",
    ...otherProps
  } = props;
  const GetColor = useMemo(
    () => {
      return {
        color: CheckboxVariants.colors[color],
      };
    },
    [color],
  );
  const Getsize = useMemo(() => {
    return {
      size: CheckboxVariants.size[size],
    };
  }, [size]);

  const GetLabelClass = useMemo(() => {
    return {
      labelPosition: labelPosition,
      label: label,
    };
  }, [label, labelPosition]);

  const GetBoxRadius = useMemo(() => {
    return {
      radius: CheckboxVariants.boxRadius[boxRadius],
    };
  }, [boxRadius]);

  const GetBoxSize = useMemo(() => {
    return {
      size: CheckboxVariants.boxSize[boxSize],
    };
  }, [boxSize]);
  const GetBoxColor = useMemo(() => {
    return {
      boxColor: CheckboxVariants.boxColor[boxColor],
    };
  }, [boxColor]);
  const GetDisabledClass = useMemo(() => {
    if (isDisabled === true) {
      const disabled = true;
      const isDisabledStyle = CheckboxVariants.disableStyle;
      return { isDisabledStyle, disabled };
    } else if (isDisabled === false) {
      const disabled = false;
      const isDisabledStyle = " ";
      return { isDisabledStyle, disabled };
    }
  }, [isDisabled, isDisabledStyle]);

  /**
   * Style for box
   */
  const GetBoxStyle = useMemo(() => {
    const getBoxColor = GetBoxColor.boxColor;
    const getBoxsize = Getsize.size;
    const getBoxRadius = GetBoxRadius.radius;
    const getBoxSize = GetBoxSize.size;
    const getisDisabledStyle = GetDisabledClass?.isDisabledStyle;
    const boxStyle = CheckboxVariants.boxStyle;
    return {
      className:
        `${getBoxColor} ${getBoxsize} ${getisDisabledStyle} ${getBoxRadius} ${getBoxSize} ${boxStyle}`,
    };
  }, [boxColor, isDisabledStyle, boxRadius, boxSize]);

  /**
   * styling for label input
   */

  const GetLabelStyle = useMemo(() => {
    const getcolor = GetColor.color;
    const getsize = Getsize.size;
    const getisDisabledStyle = GetDisabledClass?.isDisabledStyle;
    const labelClassname = className;
    return {
      className:
        `${getcolor} ${getsize}  ${getisDisabledStyle} ${labelClassname}`,
    };
  }, [colors, size, isDisabledStyle]);

  /**
   * For state input as props dont add to styling or class name
   * dont use or export disabled class for state
   */
  const GetCheckboxProps = useMemo(() => {
    const isDisable = GetDisabledClass?.disabled;
    return {
      isDisable,
    };
  }, [isDisabled]);
  return {
    domRef,
    className,
    GetLabelStyle,
    GetLabelClass,
    GetCheckboxProps,
    GetBoxStyle,
    isIndeterminate,
    boxStyle,
    ...otherProps,
  };
}
