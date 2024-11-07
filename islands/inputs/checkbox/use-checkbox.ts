import { useMemo } from "https://esm.sh/v128/preact@10.22.0/compat/src/index.js";
import type { CheckboxProps } from "./type.ts";
import { CheckboxVariants } from "./checkbox-variants.ts";

export function useCheckbox(props: CheckboxProps) {
  const {
    domRef,
    children,
    labelPosition = "top",
    boxSize = "medium",
    boxRadius = "none",
    boxVariant = "primary",
    labelColor = "none",
    labelSize = "small",
    label,
    isDisabled,
    yuzudisabledTitleStyle = "",
    yuzudisableBoxStyle = "",
    isIndeterminate,
    className = "",
    ...otherProps
  } = props;

  /**
   * Used for checking input disabled and return class and sate
   * @return { isDisabled, parentDisabledStyle}
   */
  const GetDisabledClass = useMemo(() => {
    if (isDisabled === true) {
      const disabled = true;
      const getParentStyle = "disabled:opacity-20 cursor-not-allowed";
      return { disabled, getParentStyle };
    } else if (isDisabled === false) {
      const disabled = false;
      const getParentStyle = "";
      return { getParentStyle, disabled };
    }
  }, [isDisabled, yuzudisabledTitleStyle, yuzudisableBoxStyle]);

  const GetTextDisabledStyle = useMemo(
    () => (isDisabled ? CheckboxVariants.disableTextStyle : ""),
    [isDisabled],
  );

  const GetColorLabel = useMemo(
    () => {
      return {
        labelColors: CheckboxVariants.labelColors[labelColor],
      };
    },
    [labelColor],
  );
  const GetSizeLabel = useMemo(() => {
    return {
      labelSize: CheckboxVariants.labelSizes[labelSize],
    };
  }, [labelSize]);

  const GetLabelClass = useMemo(() => {
    const getSize = GetSizeLabel.labelSize;
    const getColor = GetColorLabel.labelColors;
    const getPosition = labelPosition;
    const getDisabled = GetTextDisabledStyle;
    return {
      className: `${getSize} ${getColor} ${getDisabled} `.trim(),
      label: `${label}`,
      labelPosition: getPosition,
    };
  }, [label, labelPosition, labelSize, labelColor]);

  const GetBoxRadius = useMemo(() => {
    return {
      boxRadius: CheckboxVariants.boxRadius[boxRadius],
    };
  }, [boxRadius]);

  const GetBoxSize = useMemo(() => {
    return {
      boxSize: CheckboxVariants.boxSizes[boxSize],
    };
  }, [boxSize]);

  const GetBoxVariant = useMemo(() => {
    return {
      boxVariant: CheckboxVariants.boxVariants[boxVariant],
    };
  }, [boxVariant]);

  const GetBoxDisabledStyle = useMemo(
    () => (isDisabled ? CheckboxVariants.disableBoxStyle : ""),
    [isDisabled],
  );

  /**
   * Style for box
   */
  const GetBoxStyle = useMemo(() => {
    const getBoxColor = GetBoxVariant.boxVariant;
    const getBoxsize = GetBoxSize.boxSize;
    const getBoxRadius = GetBoxRadius.boxRadius;
    const getBoxDisabled = GetBoxDisabledStyle;
    return {
      className:
        `${CheckboxVariants.boxAppearance} ${getBoxColor} ${getBoxsize} ${getBoxRadius} ${getBoxDisabled}`
          .trim(),
    };
  }, [boxVariant, boxRadius, boxSize, GetBoxDisabledStyle]);

  /*
   * For state input as props dont add to styling or class name
   * dont use or export disabled class for state
   */

  const GetCheckboxProps = useMemo(() => {
    return {
      isDisabled,
    };
  }, [isDisabled]);

  return {
    domRef,
    children,
    className,
    GetLabelClass,
    GetCheckboxProps,
    GetBoxStyle,
    GetDisabledClass,
    yuzudisabledTitleStyle,
    yuzudisableBoxStyle,
    isIndeterminate,
    ...otherProps,
  };
}
