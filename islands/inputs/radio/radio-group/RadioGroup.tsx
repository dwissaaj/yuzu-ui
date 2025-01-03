import {
  forwardRef,
  PropsWithoutRef,
  Ref,
} from "preact/compat";
import { FunctionalComponent } from "preact";
import type { RadioGroupProps } from "./type.ts";
import { useRadioGroup } from "./use-radio-group.ts";
/**
 * The `RadioGroup` component allows you to group and style a set of radio buttons with customizable styling and layout options.
 *
 * @component
 *
 * @example
 * <RadioGroup
 * labelColor="primary"
 * direction="column"
 * label={"fruits"}
 * variant="full">
 * </RadioGroup>
 * @param {Ref<HTMLFieldSetElement>} [domRef] - A reference to the DOM element of the `fieldset`, useful for direct DOM manipulation or focusing the fieldset.
 * @param {JSX.CSSProperties} [style] - Custom inline styles to apply to the `RadioGroup` container.
 * @param {JSX.Element | JSX.Element[]} [children] - Children elements (usually `Radio` components) to be rendered inside the `RadioGroup`.
 * @param {string} [className=""] - Tailwind CSS class names for additional styling. Defaults to an empty string if not provided.
 * @param {string} [label] - A label text that will be displayed for the `RadioGroup` as default use <label>{label}</label>
 * @param {"row" | "column"} [direction="row"] - The layout direction for the radio buttons. `"row"` arranges them horizontally, `"column"` arranges them vertically.
 * @param {"full" | "plain"} [variant="full"] - The variant style of the `RadioGroup`. Determines its overall appearance:
 *   - `"full"`: A fully bordered radio group.
 *   - `"plain"`: A radio group with only a bottom border.
 * @param {"primary" | "secondary" | "error" | "success" | "warning" | "default"} [borderColor="primary"] - The border color for the `RadioGroup` anc can be extended and customize, Options include `"primary"`, `"secondary"`, `"error"`, `"success"`, `"warning"`, and `"default"`.
 * @param {"primary" | "secondary" | "error" | "success" | "warning" | "default"} [labelColor="default"] - The label color for the `RadioGroup` anc can be extended and customize Controls the text color of the label.
 * @param {"small" | "medium" | "large"} [labelSize="small"] - The size of the label text. Controls font size, with options like `"small"`, `"medium"`, and `"large"` anc can be extended and customize
 * @param {RadioGroupSlot} [classNames={{}}] - Custom styles for specific component slots. Possible slot keys are:
 * - `yuzuBase`: The base classes applied to the wrapper of the radio group.
 * - `yuzuLabel`: The classes applied to the label of the radio group.
 * @returns {JSX.Element} The `RadioGroup` component with the appropriate styles and layout applied.
 */

const RadioGroup: FunctionalComponent<PropsWithoutRef<RadioGroupProps> & { ref?: Ref<HTMLFieldSetElement> }>  = forwardRef<HTMLFieldSetElement, RadioGroupProps>((props) => {
  const {
    domRef,
    className,
    children,
    GetFieldsetProps,
    GetLabelProps,
    GetSlot,
    ...otherProps
  } = useRadioGroup({ ...props });

  return (
    <fieldset
      {...otherProps}
      ref={domRef}
      className={`${className} ${GetSlot.yuzuBase} ${GetFieldsetProps.className} `}
    >
      <legend className={`${GetLabelProps.className} ${GetSlot.yuzuLabel}`}>
        {GetLabelProps.label}
      </legend>
      {children}
    </fieldset>
  );
});

export default RadioGroup;
