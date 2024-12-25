/*
For variant with 2 words for variable need to end with "~/Style"
Can be extended with more variant

*/

export const ButtonVariants = {
  baseStyle: "active:scale-95 transition ease-in-out duration-500",
  disableStyle: "disabled:opacity-20 disabled:cursor-not-allowed ",
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
    solid: (color: string) : string =>
      `hover:bg-${color}/60 bg-${color} active:bg-${color} disabled:bg-${color}/60 disabled:hover:bg-${color}/60 focus:outline-none active:scale-95 focus:outline-none transition ease-in-out duration-500`,
    border: (color: string) : string =>
      `border-2 border-${color} active:bg-${color}/50 hover:border-${color} focus:outline-none transition ease-in-out duration-500 active:scale-95`,
    light: (color: string) : string =>
      `hover:bg-${color}/60 text-${color} active:text-${color} active:scale-95 transition ease-in-out duration-500`,
    ghost: (color: string) : string =>
      `border-2 hover:bg-${color}/50 text-${color} active:text-white active:scale-95 transition ease-in-out duration-500 hover:text-white disabled:text-white disabled:bg-${color}/50`,
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
