import { useMemo } from "preact/compat"
import type { SelectGroupProps } from "./type.ts";
import { SelectGroupVariants } from "./select-group-variants.ts";
import { UseSelectGroupReturn } from "./selet-group-return.ts";

/**
 * Custom hook for managing a select group with consistent styles and behaviors.
 * @param {SelectGroupProps} props - The properties for the select group.
 * @returns {object} Processed properties, styles, and class names for the select group.
 */
export function useSelectGroup(props: SelectGroupProps): UseSelectGroupReturn {
  const {
    domRef,
    children,
    className = "",
    classNames,
    isDisabled,
    description,
    radius = "none",
    variant = "full",
    isError,
    isRequired,
    color = "default",
    label,
    ...otherProps
  } = props;

  /**
   * Computes the color class based on the variant and color properties.
   */

  const GetColorClass = useMemo(
    () => {
      if (variant === "underline") {
        const colorSelected = SelectGroupVariants.colors[color];
        return `border-${colorSelected}`;
      } else variant === "full";
      {
        const colorSelected = SelectGroupVariants.colors[color];

        return `bg-${colorSelected}`;
      }
    },
    [color, variant],
  );

  /**
   * Retrieves the radius class for styling the component.
   */
  const GetRadius = useMemo(
    () => {
      return {
        radius: SelectGroupVariants.radiuses[radius],
      };
    },
    [radius],
  );

  /**
   * Retrieves the variant style class.
   */
  const GetVariant = useMemo(
    () => {
      return {
        variant: SelectGroupVariants.variants[variant],
      };
    },
    [variant],
  );

  /**
   * Computes the disabled styles if the select group is disabled.
   */
  const GetDisabled = useMemo(
    () => {
      if (isDisabled === true) {
        const disabledStyles = SelectGroupVariants.disabledStyles;
        return { disabledStyles };
      } else isDisabled === false;
      {
        const disabledStyles = "";
        return { disabledStyles };
      }
    },
    [isDisabled],
  );

  /**
   * Provides base styles for the select element.
   */
  const GetSelectProps = useMemo(
    () => {
      const base = "border-0 focus:outline-0 active:outline-0";
      return {
        className: `${base}`,
      };
    },
    [],
  );

  /**
   * Computes the base wrapper styles for the select group.
   */
  const GetBaseWrapperProps = useMemo(
    () => {
      const disabled = GetDisabled.disabledStyles;
      const base = SelectGroupVariants.base;
      const radius = GetRadius.radius;
      const color = GetColorClass;
      const variant = GetVariant.variant;

      return {
        className: `${base} ${color} ${disabled} ${variant} ${radius}`.trim(),
      };
    },
    [GetDisabled, GetRadius, GetColorClass],
  );

  /**
   * Computes the error styles if there's an error in the select group.
   */
  const GetError = useMemo(
    () => {
      if (isError === true) {
        return {
          errorStyle: SelectGroupVariants.errorStyles,
          isError,
        };
      } else isError === false;
      return {
        errorStyle: "",
        isError,
      };
    },
    [isError],
  );

  /**
   * Computes the label styles, including required indicators.
   */
  const GetLabel = useMemo(
    () => {
      const yuzuLabel = classNames?.yuzuLabel;
      if (isRequired === true) {
        return {
          requiredStyle: SelectGroupVariants.labelRequired,
          label,
          isRequired,
          yuzuLabel,
        };
      } else isRequired === false;
      return {
        requiredStyle: "",
        label,
        isRequired,
        yuzuLabel,
      };
    },
    [label, isRequired, classNames],
  );

  /**
   * Retrieves the description styles for the select group.
   */
  const GetDescription = useMemo(
    () => {
      return {
        descriptionStyles: SelectGroupVariants.descriptionStyles,
        description,
      };
    },
    [description],
  );

  /**
   * Manages slot-based class names for customization.
   */
  const GetSlot = useMemo(
    () => {
      const yuzuBase = classNames?.yuzuBase ? classNames?.yuzuBase || "" : "";
      const yuzuBaseDisabled = classNames?.yuzuBaseDisabled
        ? classNames?.yuzuBaseDisabled || ""
        : "";
      const yuzuBaseError = classNames?.yuzuBaseError
        ? classNames?.yuzuBaseError || ""
        : "";
      const yuzuLabel = classNames?.yuzuLabel ? classNames?.yuzuLabel || "" : "";
      const yuzuDescription = classNames?.yuzuDescription
        ? classNames?.yuzuDescription || ""
        : "";
      const yuzuSelect = classNames?.yuzuSelect ? classNames?.yuzuSelect || "" : "";
      return {
        yuzuBase,
        yuzuBaseDisabled,
        yuzuBaseError,
        yuzuDescription,
        yuzuLabel,
        yuzuSelect,
      };
    },
    [classNames],
  );
  return {
    domRef,
    children,
    className,
    GetBaseWrapperProps,
    GetDescription,
    GetSlot,
    GetSelectProps,
    isDisabled,
    GetColorClass,
    GetLabel,
    GetError,
    ...otherProps,
  };
}
