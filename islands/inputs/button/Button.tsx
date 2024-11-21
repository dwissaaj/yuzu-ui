import {
  forwardRef,
} from "https://esm.sh/v128/preact@10.22.0/compat/src/index.js";
import type { ButtonProps } from "./type.ts";
import { useButton } from "./use-button.ts";
import LoadingSpinner from "../../icon/LoadingSpinner.tsx";
/**
 * Button component with custom configuration variant
 * @component
 *
 * @example
 * <Button
 *  size = "small",
 *  variant = "solid",
 *  types = "button",
 *  radius = "md"
 *  endContent={<Home />}
 * isLoading={false}>
 *    Click Me!!!
 * </Button>
 *
 * @param {Ref<HTMLButtonElement>} props.domRef - The ref for the button element.
 * @param {JSX.Element} props.children - The content inside the button.
 * @param {string} [props.className=""] - Additional classes to apply to the button, if no value provided will return empty string
 * @param {boolean} [props.isDisabled=false] - Disable the button functionality
 * @param {string} [props.size="small"] - The size of the button can be modified and extended
 * - `small`: Small button
 * - `medium`: Medium button (default)
 * - `large`: Large button
 * - `full`: Full parent button
 * @param {string} [props.color="primary"] - The color of the button be modified and extended
 * - `primary` (default)
 * - `secondary`
 * - `error`
 * - `success`
 * - `warning`
 * - `custom`: your custom variant
 *  * @param {string} [props.variant="primary"] - The variant of the button and can be extended in hooks and variant
 * - `solid`: Solid button with background color.
 * - `border`: Border button with outlined style.
 * - `ghost`: Transparent background with a border and text color.
 * - `flat`: Flat button without background, text color only.
 * @param {string} [props.radius="md"] - The radius of the button be modified and extended
 * - `sm`: small radius
 * - `md`: medium radius (default)
 * - `lg`: large radius
 * @param {string} [classNames] - Custom styles for component
 * - `yuzuBase`: The base classes applied to the button wrapper.
 * - `yuzuDisabled`: The classes applied when the button is disabled.
 * - `yuzuSpinner`: The classes applied to the spinner element inside the button when loading.
 * @param {boolean} [props.isLoading=false] - A flag to indicate if the button is in a loading state.
 * @param {JSX.Element} [endContent] - Add icon to end of title
 * @param {JSX.Element} [startContent] - Add icon to start of title
 */

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props) => {
  const {
    domRef,
    children,
    className,
    isDisabled,
    GetVariantButton,
    isLoading,
    GetButtonProps,
    GetSpinnerProps,
    GetDisabled,
    endContent,
    startContent,
    GetSlot,
    ...otherProps
  } = useButton({ ...props });
  const LoadSpinner = (
    <LoadingSpinner
      className={`${GetSpinnerProps?.className} ${GetSlot.yuzuSpinner}`}
    />
  );
  return (
    <>
      <button
        {...otherProps}
        className={`flex flex-row items-center justify-center gap-2 ${className} ${GetDisabled} ${GetButtonProps.className} ${GetVariantButton} ${GetSlot.yuzuBase} ${GetSlot.yuzuDisabled}`
          .trim()}
        disabled={isDisabled}
        ref={domRef}
      >
        {startContent ? startContent : null}
        {children}
        {endContent ? endContent : null}
        {isLoading ? LoadSpinner : null}
      </button>
    </>
  );
});

export default Button;
