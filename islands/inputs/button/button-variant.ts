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
  } as { [key: string]: string },
  sizes: {
    small:
      "shadow-md py-1 px-4 w-20 hover:brightness-105 transition ease-in-out duration-500",
    medium:
      "shadow-lg py-1 px-4 w-32 hover:brightness-105 transition ease-in-out duration-500",
    large:
      "shadow-xl py-1 px-4 w-44 hover:brightness-105 transition ease-in-out duration-500",
  } as { [key: string]: string },

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
  } as { [key: string]: string },
  types: {
    button: "button",
    reset: "reset",
    submit: "submit",
  },
};
