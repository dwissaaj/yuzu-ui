import { useState } from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
import Checkbox from "./inputs/checkbox/Checkbox.tsx";
import Input from "./inputs/input/Input.tsx";

export default function Wrapper() {
  const handle = () => {
    alert("hei");
  };
  function onchanges() {
    console.log("ji");
  }
  // const inputRef = useRef(null)
  const [check, setCheck] = useState("");
  return (
    <>
      <div class={" flex flex-col gap-2"}>
        <div className={" "}>
          <Checkbox size="small"  label={"school"} />
          <Input isRequired label={"name"} variant="full" />
        </div>
      </div>
    </>
  );
}
