import {
  useEffect,
  useRef,
} from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
import { Button } from "./inputs/button/index.ts";
import Checkbox from "./inputs/checkbox/Checkbox.tsx";

export default function Wrapper() {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Check if the ref is working (on mount)
  const handleClick = () => {
    if (buttonRef.current) {
      console.log("Button clicked, and it's available:", buttonRef.current);
    } else {
      console.log("Button domRef is not set");
    }
  };

  return (
    <>
      <div class={"w-full flex flex-col gap-2"}>
        <div >
         <Checkbox boxRadius="circle"  labelColor="primary"  labelPosition="top" label={'orange'} value={'data'} form={'asd'} id={'as'} name={'as'} className={""}/>
        </div>
      </div>
    </>
  );
}
