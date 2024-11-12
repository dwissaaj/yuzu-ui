export const SelectGroupVariants = {
  colors: {
    primary: "primary",
    secondary: "secondary",
    error: "error",
    success: "success",
    warning: "warning",
    default: "",
  },
  radiuses: {
    small: "rounded-sm",
    medium: "rounded-lg",
    large: "rounded-xl",
    none: "rounded-none"
  },
  variants: {
    underline:
      "border-b-2 transition ease-in-out delay-150 duration-300",
    full: "border-2 transition ease-in-out delay-150 duration-300",
  },
  errorStyles: "border-error text-error",
  disabledStyles: "opacity-50 cursor-not-allowed",
  labelRequired: "after:content-['*'] after:ml-0.5 after:text-red-500 block",
  descriptionStyles: "italic text-xs opacity-70",
  base: "m-2 p-2",
};
