export const InputVariants = {
  size: {
    small:
      "m-1 py-2 w-52 hover:brightness-105 transition ease-in-out duration-300 rounded-sm ",
    medium:
      "m-1 py-2 w-64 hover:brightness-105 transition ease-in-out duration-300 rounded-lg ",
    large:
      "m-1 py-2 w-96 hover:brightness-105 transition ease-in-out duration-300 rounded-lg ",
  },
  variants: {
    underline: "border-b-2",
    full: "border-2 outline-2",
  },
  colors: {
    primary: "bg-primary",
    secondary: "bg-secondary",
    error: "bg-error",
    success: "bg-success",
    warning: "bg-warning",
    default: "",
  },
  labelPlacement: {
    top: "top",
    left: "left",
    right: "right",
    bottom: "bottom",
  },
  requiredVariant: "after:content-['*'] after:ml-0.5 after:text-red-500 block",
  readonlyVariant:
    "read-only:opacity-20 read-only:border-20 read-only:outline-20 ",
  disabledVariant: "disabled:opacity-20 cursor-not-allowed",
  errorVariant:
    "outline-error border-error text-error placeholder:text-error focus:outline-error invalid:text-error",
};
