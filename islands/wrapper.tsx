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
import SelectGroup from "./inputs/select/select-field/SelectGroup.tsx";
import SelectItem from "./inputs/select/select-item/SelectItem.tsx";
import Input from "./inputs/input/Inputs.tsx";

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
            <Input isRequired classNames={{
              yuzuLabel : "bg-red-100",
              yuzuLabelRequired: "ring-2 ring-blue-500",
              yuzuInputError: "shadow-lg shadow-orange-500",
              yuzuInputReadonly: "ring ring-purple-500"
            }} className={'!bg-green-500'} variant="full" label={"your name"} />
          </div>
        </div>
      </div>
    </>
  );
}
