import type { ButtonProps } from "./type.ts";
export function UseButton(props: ButtonProps) {
    const {
        onClick,
        className,
        isDisabled,

    } = props;

    const getButtonProps = () => ({
        onClick,
        className,
        isDisabled,

      });
    return {
        getButtonProps
    }
}