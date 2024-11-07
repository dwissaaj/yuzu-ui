import { forwardRef } from "preact/compat";
import type { ButtonProps } from "./type.ts";
import { useButton } from "./use-button.ts";
import type { JSX } from "preact/jsx-runtime";
/**
 * Button component with custom configuration variant
 * @component
 *
 * @example
 * <Button
 *  size = "small",
 *  variant = "primary",
 *  types = "button",
 *  radius = "md" >
 *    Click Me!!!
 * </Button>
 *
 * @param {Ref<HTMLButtonElement>} props.domRef - The ref for the button element.
 * @param {Function} props.onClick - The click handler for the button.
 * @param {JSX.Element} props.children - The content inside the button.
 * @param {string} [props.className=""] - Additional classes to apply to the button, if no value provided will return empty string
 * @param {JSX.CSSProperties} [props.style] - Inline styles to apply to the button.
 * @param {boolean} [props.isDisabled=false] - Disable the button functionality
 * @param {string} [props.size="small"] - The size of the button can be modified and extended
 * - `small`: Small button
 * - `medium`: Medium button (default)
 * - `large`: Large button
 * @param {string} [props.variant="primary"] - The variant of the button be modified and extended
 * - `primary` (default)
 * - `secondary`
 * - `error`
 * - `success`
 * - `warning`
 * - `custom`: your custom variant
 * @param {string} [props.types="button"] - The type of the button. Options are
 * - `button`: Default button type
 * - `reset`: Reset button type
 * - `submit`: Submit button type
 * @param {string} [props.radius="md"] - The radius of the button be modified and extended
 * - `sm`: small radius
 * - `md`: medium radius (default)
 * - `lg`: large radius
 * @param {string} [props.yuzuDisableStyle=""] - Custom styles for disabled state (optional).
 * @param {boolean} [props.isFullWidth=false] - Set the button to be full width.
 */

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props) => {
  const {
    domRef,
    onClick,
    children,
    className,
    style,
    isDisabled,
    GetButtonClass,
    yuzuDisableStyle,
    GetButtonProps,
    ...otherProps
  } = useButton({ ...props });

  return (
    <button
      {...otherProps}
      onClick={onClick}
      className={`${GetButtonClass.className} ${className} ${yuzuDisableStyle}`}
      style={style}
      disabled={isDisabled}
      ref={domRef}
      type={`${GetButtonProps}`}
    >
      {children}
    </button>
  );
});

export default Button;
