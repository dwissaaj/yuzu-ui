import {
  useEffect,
  useRef,
} from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
import { Button } from "./inputs/button/index.ts";
import Checkbox from "./inputs/checkbox/Checkbox.tsx";
import Fieldset from "./inputs/fieldset/Fieldset.tsx";
import Label from "./inputs/label/label.tsx";
import Password from "./inputs/password/Password.tsx";
import Inputi from "./inputs/inputi/Inputs.tsx";

export default function Wrapper() {
  const fieldsetRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Check if the fieldset ref is assigned properly
    if (fieldsetRef.current) {
      console.log("Fieldset ref is working:", fieldsetRef.current);
    } else {
      console.log("Fieldset ref is not working.");
    }
  }, []);

  return (
    <>
      <div class={"w-full flex flex-col gap-2"}>
        <div>
          <Inputi className={''} label={'username'} labelPlacement="top" variant="underline" id={'name'} form={'forms'} value={'as'} placeholder={'number'}/>
        <Password />
        </div>
      </div>
    </>
  );
}
