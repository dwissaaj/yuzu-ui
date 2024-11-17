import {
  useEffect,
  useRef,
  useState,
} from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";

import SelectGroup from "./inputs/select/select-field/SelectGroup.tsx";
import SelectItem from "./inputs/select/select-item/SelectItem.tsx";

export default function Wrapper() {
  return (
    <>
      <div class={"w-full flex flex-col gap-2"}>
        <div className={""}>
          <div className={`w-full flex flex-col gap-2`}>
            <SelectGroup
              label={"pick one"}
              isRequired
              color="primary"
              variant="underline"
            >
              <SelectItem id={"orange"} name={"fruits"}>Orange</SelectItem>
              <SelectItem id={"appple"} name={"fruits"}>applle</SelectItem>
            </SelectGroup>
          </div>
        </div>
      </div>
    </>
  );
}
