import type { AccordionsFragment } from "./type.ts";
import { useState } from "preact/hooks";
export default function Accordions({
  title,
  subtitle,
  onClick,
  classNames,
  isOpen,
  isDisable,
}: AccordionsFragment) {
  const [open, setOpen] = useState(isOpen);
  const opening: typeof onClick = () => {
    setOpen(!open);
  };
  return (
    <div class={`${classNames} p-2 m-2 rounded-md border-2`}>
      <div>
        <button class="flex flex-col " onClick={opening}>
          <span class="text-xl">{title}</span>
          <span class="text-lg font-light opacity-50">{subtitle}</span>
        </button>
      </div>
      {open &&
        <AccordionItem />}
    </div>
  );
}
