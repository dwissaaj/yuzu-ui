import {
  useEffect,
  useRef,
  useState,
} from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";

import Label from "./inputs/label/Labels.tsx";
import Checkbox from "./inputs/checkbox/Checkbox.tsx";
import Fieldset from "./inputs/fieldset/Fieldset.tsx";
import Password from "./inputs/password/Password.tsx";
import Button from "./inputs/button/Button.tsx";
import { Radio, RadioGroup } from "./inputs/radio/index.ts";

export default function Wrapper() {
  const fieldsetRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Check if the fieldset ref is assigned properly
    if (fieldsetRef.current) {
      console.log("Fieldset ref is working:", fieldsetRef.current);
    } else {
      console.log("Fieldset ref is not working.");
    }
  }, []);
  const [isDisabled, setIsDisabled] = useState(false);

  // Toggle the disabled state with a checkbox
  const toggleDisabled = () => {
    console.log("can cliecke");
  };
  return (
    <>
      <div class={"w-full flex flex-col gap-2"}>
        <div className={""}>
          <div className={`w-full flex flex-col gap-2`}>
            <RadioGroup label={"fav fruits"}>
              <Radio
                classNames={{
                  yuzuBase: "",
                  yuzuInput: "",
                  yuzuLabel: "text-5xl",
                  yuzuInputDisabled: "ring-2 ring-red-500",
                }}
                name="fruits"
                label="orange"
                id="orange"
                color="primary"
              />
              <Radio
                classNames={{
                  yuzuBase: "",
                  yuzuInput: "",
                  yuzuLabel: "text-5xl",
                  yuzuInputDisabled: "ring-2 ring-red-500",
                }}
                name="fruits"
                label="apple"
                id="apple"
                color="primary"
              />
            </RadioGroup>
          </div>
        </div>
      </div>
    </>
  );
}
