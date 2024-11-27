import { useMemo } from "preact/compat"
import type { LabelProps } from "./type.ts";
import { LabelVariants } from "./label-variant.ts";
import { UseLabelReturn } from "./label-return.ts";
/**
 * Custom hook for managing label properties and styles.
 * @param {LabelProps} props - Configuration properties for the label.
 * @returns {object} Processed properties, styles, and class names for the label.
 */
export function useLabel(props: LabelProps): UseLabelReturn {
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

  /**
   * Retrieves the font color class based on the `fontColor` property.
   */
  const getColors = useMemo(
    () => {
      return LabelVariants.fontColors[fontColor];
    },
    [fontColor],
  );

  /**
   * Retrieves the font size class based on the `fontSize` property.
   */
  const getSize = useMemo(
    () => {
      return LabelVariants.fontSizes[fontSize];
    },
    [fontSize],
  );

  /**
   * Retrieves the font weight class based on the `fontWeight` property.
   */
  const getWeight = useMemo(
    () => {
      return LabelVariants.fontWeights[fontWeight];
    },
    [fontWeight],
  );

  /**
   * Retrieves the readonly style if the label is marked as readonly.
   */

  const getReadonly = useMemo(() => {
    const fontReadonly = isReadonly ? LabelVariants.fontReadonly : "";
    return { isReadonly, fontReadonly };
  }, [isReadonly]);

  /**
   * Retrieves the required style if the label is marked as required.
   */
  const getRequired = useMemo(() => {
    const requiredClass = isRequired ? LabelVariants.fontRequired : "";
    return { isRequired, requiredClass };
  }, [isRequired]);

  /**
   * Retrieves the disabled style if the label is marked as disabled.
   */
  const getDisabled = useMemo(() => {
    const disabledClass = isDisabled ? LabelVariants.fontDisabled : "";
    return { isDisabled, disabledClass };
  }, [isDisabled]);

  /**
   * Combines all computed properties into a single object for the label.
   */
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

  /**
   * Combines slot-based styles for the label.
   */
  const GetSlot = useMemo(
    () => {
      const yuzuBase = classNames?.yuzuBase ? classNames?.yuzuBase : "";
      const yuzuLabelDisabled = getDisabled.isDisabled
        ? classNames?.yuzuLabelDisabled || ""
        : "";
      const yuzuLabelReadonly = getReadonly.isReadonly
        ? classNames?.yuzuLabelReadonly || ""
        : "";
      const yuzuLabelRequired = getRequired.isRequired
        ? classNames?.yuzuLabelRequired || ""
        : "";
      return {
        yuzuBase,
        yuzuLabelDisabled,
        yuzuLabelReadonly,
        yuzuLabelRequired,
      };
    },
    [classNames],
  );

  /**
   * Validates the renderable content (either `children` or `label`).
   * Throws an error if both are provided or none is specified.
   */
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
