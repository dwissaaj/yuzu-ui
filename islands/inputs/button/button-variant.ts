/*
For variant with 2 words for variable need to end with "~/Style"
Can be extended with more variant

*/

export const ButtonVariants = {
  disableStyle:
    "disabled:hover:opacity-50 disabled:opacity-50 cursor-not-allowed ",
  radiusStyle: {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
  },
  loadingStyle: "brightness-80",
  sizes: {
    buttons: {
      small:
        "shadow-md py-4 px-4 w-28 h-6",
      medium:
        "shadow-lg py-5 px-4 w-32 h-8",
      large:
        "shadow-xl py-6 px-4 w-44  h-10",
      full:
        "shadow-xl py-6 px-4 w-full h-14",
    },
  },
  spinnersSizes: {
    small: "w-4 h-4 border-4 border-t-transparent rounded-full",
    medium: "w-6 h-6 border-4 border-t-transparent rounded-full",
    large: "w-8 h-5 border-4 border-t-transparent rounded-full",
  },
  spinnerStop: "animate-none",
  spinnerAnimate: "animate-spin",
  variantsStyle: {
    primary:
      "bg-primary active:bg-primary/20 focus:outline-2 focus:outline-primary/80 ",
    secondary:
      "bg-secondary active:bg-secondary/20 focus:outline-2 focus:outline-secondary/80",
    error: "bg-error active:bg-error/20 focus:outline-2 focus:outline-error/80",
    success:
      "bg-success active:bg-success/20 focus:outline-2 focus:outline-success/80",
    warning:
      "bg-warning active:bg-warning/20 focus:outline-2 focus:outline-warning/80",
  },
  variants: {
    solid:
      "primary active:bg-primary/20 focus:outline-2 focus:outline-primary/80 hover:opacity-80 transition ease-in-out duration-500",
    flat: "",
    border: "",
    ghost: "",
  },
  types: {
    button: "button",
    reset: "reset",
    submit: "submit",
  },
};
