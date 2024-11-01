import { useMemo } from "https://esm.sh/v128/preact@10.22.0/compat/src/index.js";
import type { CheckboxProps } from "./type.ts";
import { CheckboxVariants } from "./checkbox-variants.ts";
import { colors } from "$fresh/src/server/deps.ts";

export function useCheckbox(props: CheckboxProps) {
  const {
    children,
    type,
    domRef,
    labelPosition,
    color = "none",
    size = "small",
    radius = "none",
    label,
    isDisabled,
    isDisabledStyle,
    indeterminate,
    className,
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


  const GetRadius = useMemo(() => {
    return {
      radius: CheckboxVariants.radius[radius],
    };
  }, [radius]);
  const GetLabelClass = useMemo(() => {
    return {
      labelPosition: CheckboxVariants.labelPosition,
      label: label,
    };
  }, [label, labelPosition]);

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
  const GetInputStle = useMemo(() => {
    const getcolor = GetColor.color;
    const getsize = Getsize.size;
    const getisDisabledStyle = GetDisabledClass?.isDisabledStyle;
    return {
      className:
        `${getcolor} ${getsize}  ${getisDisabledStyle}`,
    };
  }, [colors, size, radius, isDisabledStyle]);

  /**
   * styling for label input
   */

  const GetLabelStyle = useMemo(() => {
    const getcolor = GetColor.color;
    const getsize = Getsize.size;
    const getisDisabledStyle = GetDisabledClass?.isDisabledStyle;
    return {
      parentclass :
        `${getcolor} ${getsize}  ${getisDisabledStyle}`,
    };
  }, [colors, size, radius, isDisabledStyle]);

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
    children,
    type,
    domRef,
    className,
    GetLabelStyle,
    GetLabelClass,
    GetCheckboxProps,
    indeterminate,
  };
}
