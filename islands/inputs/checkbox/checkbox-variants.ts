export const CheckboxVariants = {
  colors: {
    primary: "text-primary",
    secondary: "text-secondary",
    error: "text-error",
    success: "text-success",
    warning: "text-warning",
    none: "",
  },
  size: {
    small: "text-xl",
    medium: "text-3xl",
    large: "text-5xl",
  },

  disableStyle: "disabled:opacity-20 cursor-not-allowed line-through",
  boxSize: {
    small: "w-5 h-5",
    medium: "w-8 h-8",
    large: "w-12 h-12",
  },
  boxStyle: "appearance-none",

  boxRadius: {
    full: "rounded-full border-2",
    large: "rounded-lg border-2",
    small: "rounded-md border-2",
    none: "rounded-none border-2",
  },
  boxColor: {
    primary:
      "checked:bg-primary peer checked:after:content-['✓'] checked:after:block checked:after:w-full checked:after:h-full checked:after:flex checked:after:items-center checked:after:justify-center",
    secondary:
      "checked:bg-secondary peer checked:after:content-['✓'] checked:after:block checked:after:w-full checked:after:h-full checked:after:flex checked:after:items-center checked:after:justify-center",
    error:
      "checked:bg-error peer checked:after:content-['✓'] checked:after:block checked:after:w-full checked:after:h-full checked:after:flex checked:after:items-center checked:after:justify-center",
    success:
      "checked:bg-success peer checked:after:content-['✓'] checked:after:block checked:after:w-full checked:after:h-full checked:after:flex checked:after:items-center checked:after:justify-center",
    warning:
      "checked:bg-warning peer checked:after:content-['✓'] checked:after:block checked:after:w-full checked:after:h-full checked:after:flex checked:after:items-center checked:after:justify-center",
  },
};
