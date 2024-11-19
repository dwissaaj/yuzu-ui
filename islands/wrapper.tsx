import {
  useEffect,
  useRef,
  useState,
} from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";

import SelectGroup from "./inputs/select/select-group/SelectGroup.tsx";
import SelectItem from "./inputs/select/select-item/SelectItem.tsx";
import Button from "./inputs/button/Button.tsx";

export default function Wrapper() {
  return (
    <>
      <div class={"w-full flex flex-col gap-2"}>
        <div className={""}>
          <div className={`w-full flex flex-col gap-2`}>
            <Button color="primary">asdss</Button>
          </div>
        </div>
      </div>
    </>
  );
}
