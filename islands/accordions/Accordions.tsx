import type { Props } from "./type.ts";
import { useState } from "preact/hooks";
export default function Accordions({
  title,
  subtitle,
  context,
  content,
  onClick,
  classNames,
}: Props) {
  const [open, setOpen] = useState(context?.isOpen);
  const opening: typeof onClick = () => {
    setOpen(!open);
  };
  return (
    <div class={`${classNames} p-2 m-2 rounded-md border-2`}>
      <div>
        <button class="flex flex-col " onClick={opening}>
          <span class="text-xl">{title}</span>
          <span class="text-lg font-light">{subtitle}</span>
        </button>
      </div>
      {open &&
        (
          <div class="animate-upAccord">
            {content}
          </div>
        )}
    </div>
  );
}
