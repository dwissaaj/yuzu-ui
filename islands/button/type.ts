import type { JSX } from "preact/jsx-runtime";

export interface ButtonProps {
  onClick?: () => void;

  children?: JSX.Element | string;

  className?: JSX.CSSProperties | string;

  isDisabled: boolean;


}

// export function UseButtonProps(props: ButtonProps) {
//   const {
//     onClick,
//     children,
//     className,
//     isDisabled,
//   } = props;

//   return {
//     onClick,
//     children,
//     className,
//     isDisabled,
//   };
// }
