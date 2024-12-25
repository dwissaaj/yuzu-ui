import { useMemo } from "preact/compat"
import type { RadioProps } from "./types.ts";
import { RadioVariants } from "./radio-variants.ts";
import { UseRadioReturn } from "./radio-return.ts";

/**
 * Custom hook for managing radio button styles and properties.
 * @param {RadioProps} props - Configuration properties for the radio button.
 * @returns {object} Processed properties, styles, and class names for the radio button.
 */
export function useRadio(props: RadioProps): UseRadioReturn {
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

  /**
   * Retrieves the color style for the radio button.
   */

  const GetColor = useMemo(
    () => {
      return {
        color: RadioVariants.colors[color],
      };
    },
    [color],
  );

  /**
   * Retrieves the size style for the radio button itself.
   */
  const GetRadioSize = useMemo(
    () => {
      return {
        radioSize: RadioVariants.sizes.radio[radioSize],
      };
    },
    [radioSize],
  );

  /**
   * Retrieves the size style for the radio button's text.
   */
  const GetTextSize = useMemo(
    () => {
      return {
        textSize: RadioVariants.sizes.text[textSize],
      };
    },
    [textSize],
  );

  /**
   * Retrieves the disabled style if the radio button is disabled.
   */
  const GetDisabledStyle = useMemo(() => ({
    disabledStyle: isDisabled ? RadioVariants.disabledStyles : "",
  }), [isDisabled, disabledStyle]);

  /**
   * Retrieves the styles and properties for the label.
   */
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

  /**
   * Retrieves the styles and properties for the radio button element.
   */

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

  /**
   * Retrieves the styles and properties for the parent container of the radio button.
   */
  const GetParentProps = useMemo(
    () => {
      const disable = GetDisabledStyle.disabledStyle;
      return {
        className: `${disable}`.trim(),
      };
    },
    [GetDisabledStyle],
  );

  /**
   * Handles slot-based class names and customizations.
   */
  const GetSlot = useMemo(
    () => {
      const yuzuBase = classNames?.yuzuBase ? classNames?.yuzuBase  || "" : "";
      const yuzuLabel = classNames?.yuzuLabel ? classNames?.yuzuLabel || "": "";
      const yuzuInput = classNames?.yuzuInput ? classNames?.yuzuInput || "" : "";
      const yuzuInputDisabled = isDisabled ? classNames?.yuzuInputDisabled || "" : "";
      return {
        yuzuBase,
        yuzuLabel,
        yuzuInput,
        yuzuInputDisabled,
      };
    },
    [classNames],
  );

  /**
   * Validates rendering conditions, ensuring no conflicting props are provided.
   * Ensures either `label` or `children` is provided, but not both.
   */
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
