import {
  useEffect,
  useRef,
} from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";

import Input from "./inputs/input/Inputs.tsx";
import Password from "./inputs/password/Password.tsx";
import Fieldset from "./inputs/fieldset/Fieldset.tsx";
import RadioGroup from "./inputs/radio/radio-group/RadioGroup.tsx";
import Radio from "./inputs/radio/radio/Radio.tsx";

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
          <RadioGroup labelColor="primary"  direction="column" label={"fruits"} variant="full">
            <Radio
              isDisabled
              textSize="small"
              id={"orange"}
              name={"fruits"}
              color="secondary"
              label={"orange"}
            />
            <Radio
              radioSize="small"
              id={"apel"}
              name={"fruits"}
              color="primary"
              label={"apel"}
            />
          </RadioGroup>
        </div>
      </div>
    </>
  );
}
