export const RadioVariants = {
  sizes: {
    text: {
      small: "text-lg",
      medium: "text-2xl",
      large: "text-3xl",
    },
    radio: {
      small: "w-6 h-6",
      medium: "w-8 h-8",
      large: "w-10 h-10",
    },
  },
  disabledStyles:
    "opacity-50 cursor-not-allowed checked:bg-error focus:outline-none",
  colors: {
    primary: "checked:bg-primary focus:outline-none",
    secondary: "checked:bg-secondary focus:outline-none",
    error: "checked:bg-error focus:outline-none",
    success: "checked:bg-success focus:outline-none",
    warning: "checked:bg-warning focus:outline-none",
    default: "",
  },
  errorStyles:
    "text-error checked:bg-red-500 focus:outline-none transition-all duration-200 relative",
  baseStyles:
    "appearance-none border border-gray-300 rounded-full  focus:outline-none transition-all duration-200 relative",
};
