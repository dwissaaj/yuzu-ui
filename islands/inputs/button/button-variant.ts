/*
For variant with 2 words for variable need to end with "~/Style"
Can be extended with more variant

*/

export const ButtonVariants = {
  disableStyle:
    "disabled:active:opacity-20 active:opacity-20 disabled:opacity-20 cursor-not-allowed ",
  radiusStyle: {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
  },
  loadingStyle: "brightness-80",
  sizes: {
    buttons: {
      small: "py-4 px-4 w-28 h-6 transition duration-150 ease-in-out",
      medium: "py-5 px-4 w-32 h-8 transition duration-150 ease-in-out",
      large: "py-6 px-4 w-44  h-10 transition duration-150 ease-in-out",
      full: "py-6 px-4 w-full h-14 transition duration-150 ease-in-out",
    },
  },
  spinnersSizes: {
    small: "w-4 h-4 border-4 border-t-transparent rounded-full",
    medium: "w-5 h-5 border-4 border-t-transparent rounded-full",
    large: "w-8 h-8 border-4 border-t-transparent rounded-full",
  },
  spinnerStop: "animate-none transition ease-in-out duration-150",
  spinnerAnimate: "animate-spin transition ease-in-out duration-150",
  // variantsStyle: {
  //   primary:
  //     "bg-primary active:bg-primary/20 focus:outline-2 focus:outline-primary/80 ",
  //   secondary:
  //     "bg-secondary active:bg-secondary/20 focus:outline-2 focus:outline-secondary/80",
  //   error: "bg-error active:bg-error/20 focus:outline-2 focus:outline-error/80",
  //   success:
  //     "bg-success active:bg-success/20 focus:outline-2 focus:outline-success/80",
  //   warning:
  //     "bg-warning active:bg-warning/20 focus:outline-2 focus:outline-warning/80",
  // },
  variants: {
    solid: "bg-",
    border: "border-2 border-",
    light: "hover:bg-",
    ghost: "hover:bg-",
    shadow: "shadow-md shadow-white bg-",
  },
  colors: {
    primary: "primary",
    secondary: "secondary",
    error: "error",
    success: "success",
    warning: "warning",
    none: "",
  },
  types: {
    button: "button",
    reset: "reset",
    submit: "submit",
  },
};
