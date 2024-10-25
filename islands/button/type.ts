import type { Ref } from "https://esm.sh/v128/preact@10.22.0/hooks/src/index.js";
import type { JSX } from "preact/jsx-runtime";

export interface ButtonProps {
  domRef?: Ref<HTMLButtonElement>;

  onClick?: () => void;

  children?: JSX.Element | string;

  className?: JSX.CSSProperties | string;

  isDisabled: boolean;

  as?: any
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
