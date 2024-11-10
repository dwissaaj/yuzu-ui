import { forwardRef } from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
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
 * @param {string} [yuzuLabelStyle] - Custom style for the label of the `RadioGroup`, if needed.
 * @returns {JSX.Element} The `RadioGroup` component with the appropriate styles and layout applied.
 */

const RadioGroup = forwardRef<HTMLFieldSetElement, RadioGroupProps>((props) => {
  const {
    domRef,
    style,
    className,
    children,
    GetFieldsetProps,
    GetLabelProps,
    GetCustomLabel,
    ...otherProps
  } = useRadioGroup({ ...props });

  return (
    <fieldset
      {...otherProps}
      ref={domRef}
      style={style}
      className={`${className} ${GetFieldsetProps.className} `}
    >
      <legend className={`${GetCustomLabel} ${GetLabelProps.className}`}>
        {GetLabelProps.label}
      </legend>
      {children}
    </fieldset>
  );
});

export default RadioGroup;
