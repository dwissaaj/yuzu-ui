import type { PasswordsProps } from "./type.ts";

export function usePassword(props: PasswordsProps) {
    const {
        domRef,
        className="",
        style="",
        children,
        parentSizes,
        parentColor,
        parentDisableStyle,
        parentVariant,
        
    } = props

    
    return {
        domRef,
        className,
        style,
        children,

    }
}