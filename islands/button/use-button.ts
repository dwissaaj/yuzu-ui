import type { ButtonProps } from "./type.ts";
export function useButton(props: ButtonProps) {
  const {

    onClick,
    className,
    isDisabled,
    children,
    domRef,
as
  } = props;
  const Component = as || 'button'
  return {
    onClick,
    className,
    isDisabled,
    children,
    domRef,
    Component
  };
}
