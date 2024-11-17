import { forwardRef } from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
import type { SelectGroupProps } from "./type.ts";
import { useSelectField } from "./use-select-field.ts";
/**
 * The `SelectGroup` component allows you to group and style a set of `select` options with customizable styling and layout options.
 *
 * @component
 *
 * @example
 * <SelectGroup
 * classNames={{
 * yuzuBase: "border-2 border-red-500",
 * yuzuLabel: "text-blue-500",
 * yuzuBaseError: "bg-yellow-100",
 * yuzuBaseDisabled: "outline outline-2 outline-offset-2",
 * yuzuDescription: "!text-7xl"}}
 * label={"Favorite Fruits"}
 * description={"Select your favorite fruit"}
 * color="primary"
 * variant="full"
 * radius="medium"
 * isError={true}
 * isRequired={true} >
 * <SelectItem isDisabled name={'fruits'}>Orange</SelectItem>
 * <SelectItem name={'fruits'}>Apple</SelectItem>
 * </SelectGroup>
 *
 * @param {Ref<HTMLSelectElement>} [domRef] - A reference to the `select` element, useful for direct DOM manipulation or focusing the `select`.
 * @param {JSX.CSSProperties} [style] - Custom inline styles to apply to the `SelectGroup` container.
 * @param {JSX.Element | JSX.Element[]} [children] - Children elements <SelectItem /> components to be rendered inside the `SelectGroup`.
 * @param {string} [className=""] - Tailwind CSS class names for additional styling. Defaults to an empty string if not provided.
 * @param {string} [label] - A label text that will be displayed for the `SelectGroup` as the label.
 * @param {"primary" | "secondary" | "error" | "success" | "warning" | "default"} [color="default"] - The color scheme of the `SelectGroup`. Options include `"primary"`, `"secondary"`, `"error"`, `"success"`, `"warning"`, and `"default"`.
 * @param {"small" | "medium" | "large" | "none"} [radius="none"] - The border radius of the `select` element. Options include `"small"`, `"medium"`, `"large"`, and `"none"`.
 * @param {"underline" | "full"} [variant="full"] - The variant style of the `SelectGroup`. Determines its overall appearance and can be extended and customize
 * @param {boolean} [isError=false] - Boolean to apply error styles to the `SelectGroup`.
 * @param {boolean} [isRequired=false] - Boolean to add a red asterisk (`*`) to the label indicating the field is required.
 * @param {string} [description] - A description text that will be displayed below the `SelectGroup` label.
 * @param {SelectGroupSlot} [classNames={{}}] - Custom styles for specific component slots. Possible slot keys are:
 * - `yuzuBase`: The base classes applied to the `SelectGroup` container.
 * - `yuzuBaseDisabled`: The classes applied when the `SelectGroup` is disabled.
 * - `yuzuBaseError`: The classes applied when the `SelectGroup` has an error (typically used for border or background color).
 * - `yuzuLabel`: The classes applied to the label of the `SelectGroup`.
 * - `yuzuDescription`: The classes applied to the description of the `SelectGroup`.
 * - `yuzuSelect`: The classes applied to the dropdown/select element inside the `SelectGroup`.
 *
 * @returns {JSX.Element} The `SelectGroup` component with the appropriate styles and layout applied.
 */

const SelectGroup = forwardRef<HTMLSelectElement, SelectGroupProps>((props) => {
  const {
    domRef,
    children,
    className,
    GetLabel,
    GetBaseWrapperProps,
    GetDescription,
    GetSlot,
    GetSelectProps,
    GetError,
    GetColorClass,
    isDisabled,
    ...otherProps
  } = useSelectField({ ...props });

  return (
    <div
      className={`${className} ${GetBaseWrapperProps.className} ${GetError.errorStyle} ${GetSlot?.yuzuBase} ${GetSlot?.yuzuBaseDisabled} ${GetSlot?.yuzuBaseError} `}
    >
      <div className={"w-full flex flex-col gap-1"}>
        <legend
          required={GetLabel?.isRequired}
          className={`px-2 ${GetSlot?.yuzuLabel} ${GetLabel.requiredStyle}`}
        >
          {GetLabel?.label}
        </legend>
        <small
          className={`px-2 ${GetDescription.descriptionStyles} ${GetSlot?.yuzuDescription}`}
        >
          {GetDescription.description}
        </small>
      </div>
      <div className={""}>
        <select
          {...otherProps}
          required={GetLabel.isRequired}
          disabled={isDisabled}
          ref={domRef}
          className={`w-full p-2 ${GetSelectProps.className} ${GetSlot.yuzuSelect}`}
        >
          {children}
        </select>
      </div>
    </div>
  );
});

export default SelectGroup;
