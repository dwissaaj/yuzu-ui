/*
For variant with 2 words for variable need to end with "~/Style"
Can be extended with more variant

*/

export const ButtonVariants = {
  baseStyle: "active:scale-95 transition ease-in-out duration-500",
  disableStyle: "disabled:opacity-20 cursor-not-allowed ",
  radiusStyle: {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
  },
  loadingStyle: "brightness-80",
  sizes: {
    buttons: {
      small: "p-2 w-32",
      medium: "p-2 w-36",
      large: "p-2 w-48",
      full: "p-2 w-full",
    },
  },
  spinnersSizes: {
    small: "w-4 h-4 border-2 border-t-transparent rounded-full",
    medium: "w-5 h-5 border-4 border-t-transparent rounded-full",
    large: "w-6 h-6  border-6 border-t-transparent rounded-full",
  },
  variants: {
    solid:
      "active:scale-95 focus:outline-none transition ease-in-out duration-500",
    border: "active:scale-95 transition ease-in-out duration-500 border-2",
    light: "active:scale-95 transition ease-in-out duration-500 delay-150",
    ghost:
      "active:scale-95 transition ease-in-out duration-500 border-1 hover:text-white",
  },
  colors: {
    primary: "primary",
    secondary: "secondary",
    error: "error",
    success: "success",
    warning: "warning",
    none: "",
  },
};
