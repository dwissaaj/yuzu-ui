export const CheckboxVariants = {
  labelColors: {
    primary: "text-primary",
    secondary: "text-secondary",
    error: "text-error",
    success: "text-success",
    warning: "text-warning",
    none: "",
  },
  labelSizes: {
    small: "text-xl",
    medium: "text-3xl",
    large: "text-5xl",
  },
  disableLabelStyle: "opacity-20 cursor-not-allowed line-through",
  disableBoxStyle: "disabled:opacity-50 disabled:cursor-not-allowed",
  disabledWrapper: "cursor-not-allowed",
  boxSizes: {
    small: "w-5 h-5",
    medium: "w-8 h-8",
    large: "w-12 h-12",
  },
  boxAppearance: "appearance-none",
  boxRadius: {
    full: "rounded-full border-2",
    large: "rounded-lg border-2",
    small: "rounded-md border-2",
    none: "rounded-none border-2",
  },
  boxVariants: {
    primary:
      "checked:bg-primary peer checked:after:content-['✓'] checked:after:block checked:after:w-full checked:after:h-full checked:after:flex checked:after:items-center checked:after:justify-center transition duration-150 ease-in-out",
    secondary:
      "checked:bg-secondary peer checked:after:content-['✓'] checked:after:block checked:after:w-full checked:after:h-full checked:after:flex checked:after:items-center checked:after:justify-center transition duration-150 ease-in-out",
    error:
      "checked:bg-error peer checked:after:content-['✓'] checked:after:block checked:after:w-full checked:after:h-full checked:after:flex checked:after:items-center checked:after:justify-center transition duration-150 ease-in-out",
    success:
      "checked:bg-success peer checked:after:content-['✓'] checked:after:block checked:after:w-full checked:after:h-full checked:after:flex checked:after:items-center checked:after:justify-center transition duration-150 ease-in-out",
    warning:
      "checked:bg-warning peer checked:after:content-['✓'] checked:after:block checked:after:w-full checked:after:h-full checked:after:flex checked:after:items-center checked:after:justify-center transition duration-150 ease-in-out",
  },
  wrapperBase: "p-2 m-2",
};
