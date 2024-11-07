import {
  useEffect,
  useRef,
} from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
import { Button } from "./inputs/button/index.ts";
import Checkbox from "./inputs/checkbox/Checkbox.tsx";
import Fieldset from "./inputs/fieldset/Fieldset.tsx";
import Label from "./inputs/label/label.tsx";
import Passwords from "./inputs/passwordField/Passwords.tsx";

export default function Wrapper() {
  const fieldsetRef = useRef<HTMLLabelElement>(null);

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
          <Fieldset isDisabled label={"asd"}>
            <div disabled={true} className={'disabled:bg-red-500 flex flex-col gap-2'}>
              <label >asd</label>
              <input disabled className={'disabled:bg-red-500'} placeholder={'asd'} />
            </div>

          </Fieldset>
        </div>
        <Label >asd</Label>
      </div>
    </>
  );
}
