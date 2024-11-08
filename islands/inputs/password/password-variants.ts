export const PasswordsVariants = {
  sizes: {
    small:
      "m-1 p-2 w-52 hover:brightness-105 transition ease-in-out duration-300 rounded-sm ",
    medium:
      "m-1 p-2 w-64 hover:brightness-105 transition ease-in-out duration-300 rounded-lg ",
    large:
      "m-1 p-2 w-96 hover:brightness-105 transition ease-in-out duration-300 rounded-lg ",
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
    underline: "border-b-2 transition ease-in-out delay-150 duration-300",
    full: "border-2 transition ease-in-out delay-150 duration-300",
  },
  fullWidth:
    "m-1 p-2 w-full hover:brightness-105 transition ease-in-out duration-300 rounded-sm",
  errorStyle:
    "outline-error focus:outline-error invalid:text-error text-error !border-error",
  errorStyleParent: "border-error",
  inputReadonlyStyles:
    "opacity-50 read-only:opacity-50 read-only:border-50 read-only:outline-50",
  inputDisableStyle: "opacity-50 cursor-not-allowed",
  inputStyle: "w-full border-0 focus:outline-0 focus:ring-0 focus:border-0",
  buttonStyle: "transition ease-in-out delay-150 duration-300",
};