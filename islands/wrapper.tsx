import {
  useEffect,
  useRef,
} from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";

import Input from "./inputs/input/Inputs.tsx";
import Password from "./inputs/password/Password.tsx";
import Fieldset from "./inputs/fieldset/Fieldset.tsx";
import RadioGroup from "./inputs/radio/radio-group/RadioGroup.tsx";

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
          <RadioGroup label={'fruits'} variant="plain">
            <Input label={'asds'} />
          </RadioGroup>
        </div>
      </div>
    </>
  );
}
