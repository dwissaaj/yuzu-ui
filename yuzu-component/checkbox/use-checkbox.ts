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
    classNames,
    className = "",
    label,
    isDisabled,
    ...otherProps
  } = props;

  /**
   * Used for checking input disabled and return class and sate
   * @return { isDisabled, parentDisabledStyle}
   */
  const GetDisabledWrapper = useMemo(
    () => (isDisabled ? CheckboxVariants.disabledWrapper : ""),
    [isDisabled],
  );
  const GetDisabledLabel = useMemo(
    () => (isDisabled ? CheckboxVariants.disableLabelStyle : ""),
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

  const GetLabelStyle = useMemo(() => {
    const getSize = GetSizeLabel.labelSize;
    const getColor = GetColorLabel.labelColors;
    const getPosition = labelPosition;
    const getDisabled = GetDisabledLabel;
    return {
      className: `${getSize} ${getColor} ${getDisabled} `.trim(),
      labelPosition: getPosition,
    };
  }, [
    label,
    labelPosition,
    labelSize,
    labelColor,
    GetSizeLabel,
    GetDisabledLabel,
    GetColorLabel,
  ]);

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

  const GetBoxDisabled = useMemo(
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
    const getBoxDisabled = GetBoxDisabled;
    return {
      className:
        `${CheckboxVariants.boxAppearance} ${getBoxColor} ${getBoxsize} ${getBoxRadius} ${getBoxDisabled}`
          .trim(),
    };
  }, [boxVariant, boxRadius, boxSize, GetBoxDisabled]);

  /*
   * For state input as props dont add to styling or class name
   * dont use or export disabled class for state
   */
  const GetWrapperStyle = useMemo(
    () => {
      const wrapperBase = CheckboxVariants.wrapperBase;
      const disabled = GetDisabledWrapper;
      return {
        className: `${wrapperBase} ${disabled}`,
      };
    },
    [GetDisabledWrapper],
  );
  const GetCheckboxProps = useMemo(() => {
    return {
      isDisabled,
    };
  }, [isDisabled]);
  const GetSlot = useMemo(
    () => {
      const yuzuBase = classNames?.yuzuBase ? classNames?.yuzuBase : "";
      const yuzuInput = classNames?.yuzuInput ? classNames?.yuzuInput : "";
      const yuzuLabel = classNames?.yuzuLabel ? classNames?.yuzuLabel : "";
      const yuzuLabelDisabled = GetDisabledLabel
        ? classNames?.yuzuLabelDisabled || ""
        : "";
      const yuzuInputDisabled = GetBoxDisabled
        ? classNames?.yuzuInputDisabled || ""
        : "";
      const yuzuBaseDisabled = GetDisabledWrapper
        ? classNames?.yuzuBaseDisabled || ""
        : "";
      return {
        yuzuBase,
        yuzuInput,
        yuzuLabel,
        yuzuLabelDisabled,
        yuzuBaseDisabled,
        yuzuInputDisabled,
      };
    },
    [classNames, GetDisabledWrapper, GetBoxDisabled, GetDisabledLabel],
  );
  const CheckRender = useMemo(
    () => {
      if (label && children) {
        throw new Error(
          "Only Support one, Pick: children as JSX Element or label as string, not both.",
        );
      }
      if (children) {
        return children;
      }
      if (label) {
        return label;
      }
      return new Error("Children or Label not Specified");
    },
    [children, label],
  );
  return {
    domRef,
    children,
    GetLabelStyle,
    GetCheckboxProps,
    GetBoxStyle,
    label,
    CheckRender,
    GetSlot,
    className,
    GetWrapperStyle,
    ...otherProps,
  };
}