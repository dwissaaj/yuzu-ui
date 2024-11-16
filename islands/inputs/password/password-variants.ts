export const PasswordsVariants = {
  sizes: {
    small: "p-2 w-52 hover:brightness-105 transition ease-in-out duration-300",
    medium: "p-2 w-64 hover:brightness-105 transition ease-in-out duration-300",
    large: "p-2 w-96 hover:brightness-105 transition ease-in-out duration-300",
    fullWidth:
      "p-2 w-full hover:brightness-105 transition ease-in-out duration-300",
  },
  colors: {
    primary: "primary",
    secondary: "secondary ",
    error: "error",
    success: "success",
    warning: "warning",
    none: "gray-500",
  },

  disabledStyle: "opacity-50 cursor-not-allowed",
  variants: {
    underline: (color: string) => `border-${color} border-b-2 `,
    full: (color: string) => `bg-${color}`,
    error: () => ``,
    border: () => ``,
  },
  inputReadonlyStyles:
    "opacity-50 read-only:opacity-50 read-only:border-50 read-only:outline-50",
  inputDisableStyle: "opacity-50 cursor-not-allowed",
  inputStyle: "w-full !border-0 focus:outline-0 focus:ring-0 focus:border-0",
  buttonStyle: "transition ease-in-out delay-150 duration-300",
  labelStyles: "",
  descriptionStyles: "italic font-thin text-xs",
  errorMessageStyle: "italic text-sm text-error",
};
