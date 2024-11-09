import {
  forwardRef,
  useMemo,
} from "https://esm.sh/v128/preact@10.22.0/compat/src/index.js";
import { useInput } from "./use-input.ts";
import type { InputProps } from "./type.ts";
/**
 * @component
 * Component for UI input
 * It can be used for various input-like components with flexible options for styling and behavior.
 *
 * @example
 * <Input
 * domRef={fieldsetRef}
 * className={""}
 * label={"username"}
 * labelPlacement="top"
 * variant="underline"
 * id={"name"}
 * form={"forms"}
 * value={"as"}
 * placeholder={"number"}
 * isRequired
 * yuzuRequiredStyle="bg-blue-500"
 * /> 
 * @param {Ref<HTMLInputElement> } domRef - A reference to the component's DOM element, useful for direct manipulation or focusing.
 * @param {string} [className=""] - Custom class names for additional styling. Default is an empty string.
 * @param {JSX.CSSProperties} [style=""] - Inline styles for the component. Default is an empty string.
 * @param {("small" | "medium" | "large")} [size="medium"] - Specifies the size of the component. Default is `"medium"`.
 * You can extend this property to include custom size values as per your design requirements in variant file
 * .
 * @param {("primary" | "secondary" | "success" | "error" | "none" | "warning")} [color="primary"] - Defines the color scheme of the component. Default is `"primary"`. You can extend this property to include custom size values as per your design requirements in variant file
 * @param {("full" | "outline")} [variant="full"] - Defines the style variant of the component. Default is `"full"`. You can extend this property to include custom size values as per your design requirements in variant file
 * @param {string} [yuzuErrorStyle=""] - Custom styles for the component in an error state. Default is an empty string.
 * @param {string} [yuzuReadonlyStyle=""] - Custom styles for the component when readonly. Default is an empty string.
 * @param {string} [yuzuDisabledStyle=""] - Custom styles for the component when disabled. Default is an empty string.
 * @param {string} [yuzuRequiredStyle=""] - Custom styles for the component when required. Default is an empty string.
 * @param {boolean} [isReadonly=false] - Whether the component is in readonly state. Default is `false`.
 * @param {boolean} [isFullWidth=false] - Whether the component should take up the full width. Default is `false`.
 * @param {boolean} [isDisabled=false] - Whether the component is disabled. Default is `false`.
 * @param {boolean} [isError=false] - Whether the component is in an error state. Default is `false`.
 * @param {boolean} [isRequired=false] - Whether the component is required. Default is `false`.
 * @param {string} label - The label text associated with the component.
 * @param {("top" | "bottom" | "left" | "right")} [labelPlacement="top"] - Specifies the placement of the label relative to the component. Default is `"top"`.
 */
const Input = forwardRef<HTMLInputElement, InputProps>((props) => {
  const {
    domRef,
    className,
    style,
    GetParentsStyle,
    isDisabled,
    isRequired,
    GetInputStyle,
    GetDisabled,
    GetCustomError,
    GetCustomReadonly,
    GetCustomRequired,
    isReadonly,
    GetCustomDisabled,
    GetLabelProps,
    ...otherProps
  } = useInput({ ...props });

  const labelContent = GetLabelProps.label
    ? (
      <span className={`${GetLabelProps.className} ${GetCustomRequired} `}>
        {GetLabelProps.label}
      </span>
    )
    : null;

  const baseContent = (
    <input
      {...otherProps}
      ref={domRef}
      disabled={isDisabled}
      readOnly={isReadonly}
      required={isRequired}
      className={` ${GetInputStyle.className} ${GetCustomError} ${GetCustomDisabled} ${GetCustomReadonly} ${GetDisabled} ${GetCustomDisabled}`}
      style={style}
    />
  );

  const mainWrapper = useMemo(() => {
    if (GetLabelProps.labelPlacement === "top") {
      return (
        <div
          className={`${className} flex flex-col gap-2 ${GetParentsStyle.className} ${GetCustomError} ${GetCustomDisabled} ${GetCustomReadonly} ${GetDisabled} ${GetCustomDisabled} `}
        >
          {labelContent}
          <div
            className={`flex flex-row gap-2 items-center`}
          >
            {baseContent}
          </div>
        </div>
      );
    }
  }, [GetLabelProps]);

  const bottomWrapper = useMemo(() => {
    if (GetLabelProps.labelPlacement === "bottom") {
      return (
        <div
          className={`${className} flex flex-col gap-2 ${GetParentsStyle.className} ${GetCustomError} ${GetCustomDisabled} ${GetCustomReadonly} ${GetDisabled} ${GetCustomDisabled} `}
        >
          <div
            className={` flex flex-row gap-2 items-center
          `}
          >
            {baseContent}
          </div>
          {labelContent}
        </div>
      );
    }
  }, [GetLabelProps]);
  const leftWrapper = useMemo(() => {
    if (GetLabelProps.labelPlacement === "left") {
      return (
        <div
          className={`${className} flex flex-col gap-2 ${GetParentsStyle.className} ${GetCustomError} ${GetCustomDisabled} ${GetCustomReadonly} ${GetDisabled} ${GetCustomDisabled} `}
        >
          <div className={"w-1/5"}>
            {labelContent}
          </div>

          <div
            className={`w-4/5 flex flex-row gap-2 items-center
          `}
          >
            {baseContent}
          </div>
        </div>
      );
    }
  }, [GetLabelProps]);
  const rightWrapper = useMemo(() => {
    if (GetLabelProps.labelPlacement === "right") {
      return (
        <div
          className={`${className} flex flex-col gap-2 ${GetParentsStyle.className} ${GetCustomError} ${GetCustomDisabled} ${GetCustomReadonly} ${GetDisabled} ${GetCustomDisabled} `}
        >
          <div
            className={`w-4/5 flex flex-row gap-2 items-center
          `}
          >
            {baseContent}
          </div>
          <div className={"w-1/5"}>
            {labelContent}
          </div>
        </div>
      );
    }
  }, [GetLabelProps]);

  return (
    <>
      {leftWrapper ? leftWrapper : null}
      {mainWrapper}
      {bottomWrapper ? bottomWrapper : null}
      {rightWrapper ? rightWrapper : null}
    </>
  );
});

export default Input;
