import { forwardRef } from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
export type Icon = {
  children: SVGElement;
  className?: string;
};
const Icon = forwardRef<SVGElement, Icon>((props) => {
  const { children, className } = props;
  return (
    <>
      {children}
    </>
  );
});

/// dont use clone, experemintal or crash!!!!
