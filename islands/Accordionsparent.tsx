import { signal } from "@preact/signals";
import { useMemo } from "https://esm.sh/v128/preact@10.22.0/hooks/src/index.js";
import { useState } from "preact/hooks";
export default function Accordionsparent() {
  const [open, setOpen] = useState(false);
  const opening = () => {
    console.log("sebelum", open);
    setOpen(!open);
    console.log("after", open);
  };
  return (
    <div class="">
      <div onClick={opening}>
        <button class={"bg-red-400"}>
          <p>asjdasjkd</p>
        </button>
      </div>
      {open &&
        (
          <div class="animate-upAccord">
            <p>aksdjak</p>
          </div>
        )}
    </div>
  );
}
