import { forwardRef } from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
import type { PasswordsProps } from "./type.ts";
import { usePassword } from "./use-password.ts";

const Fieldset = forwardRef<HTMLInputElement, PasswordsProps>((props) => {
  const {
    domRef,
    style,
    className,
    children,

    ...otherProps
  } = usePassword({ ...props });

  return (
    <div>

    </div>
  );
});

export default Fieldset;
