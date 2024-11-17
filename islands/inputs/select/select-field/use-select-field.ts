import { useMemo } from "https://esm.sh/v128/preact@10.22.0/compat/src/index.js";
import type { SelectGroupProps } from "./type.ts";
import { SelectGroupVariants } from "./select-field-variants.ts";

export function useSelectField(props: SelectGroupProps) {
  const {
    domRef,
    style,
    children,
    className,
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
  const GetRadius = useMemo(
    () => {
      return {
        radius: SelectGroupVariants.radiuses[radius],
      };
    },
    [radius],
  );
  const GetVariant = useMemo(
    () => {
      return {
        variant: SelectGroupVariants.variants[variant],
      };
    },
    [variant],
  );

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
  const GetSelectFieldProps = useMemo(
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
  const GetLabel = useMemo(
    () => {
      const yuzuLabel = classNames?.yuzuLabel;
      console.log(SelectGroupVariants.labelRequired);
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
  const GetDescription = useMemo(
    () => {
      return {
        descriptionStyles: SelectGroupVariants.descriptionStyles,
        description,
      };
    },
    [description],
  );

  const GetSlot = useMemo(
    () => {
      const yuzuBase = classNames?.yuzuBase ? classNames?.yuzuBase : "";
      const yuzuBaseDisabled = classNames?.yuzuBaseDisabled
        ? classNames?.yuzuBaseDisabled
        : "";
      const yuzuBaseError = classNames?.yuzuBaseError
        ? classNames?.yuzuBaseError
        : "";
      const yuzuLabel = classNames?.yuzuLabel ? classNames?.yuzuLabel : "";
      const yuzuDescription = classNames?.yuzuDescription
        ? classNames?.yuzuDescription
        : "";
      const yuzuSelect = classNames?.yuzuSelect ? classNames?.yuzuSelect : "";
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
    style,
    children,
    className,
    GetSelectFieldProps,
    GetDescription,
    GetSlot,
    isDisabled,
    GetColorClass,
    GetLabel,
    GetError,
    ...otherProps,
  };
}
