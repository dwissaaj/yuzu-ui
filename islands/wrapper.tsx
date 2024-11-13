import {
  useEffect,
  useRef,
  useState,
} from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";

import SelectGroup from "./inputs/select/select-field/SelectGroup.tsx";
import SelectItem from "./inputs/select/select-item/SelectItem.tsx";
import Button from "./inputs/button/Button.tsx";

export default function Wrapper() {
  const fieldsetRef = useRef<HTMLSelectElement>(null);

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
    setIsDisabled((prev) => !prev);
  };
  return (
    <>
      <div class={"w-full flex flex-col gap-2"}>
        <div className={"w-full bg-red-500"}>
          <div>
            <Button
              form={"name"}
              name={"ass"}
              onClick={toggleDisabled}
              isLoading={isDisabled}
              size="small"
            >
              asds
            </Button>
            <Button type={"submit"} size="medium">asds</Button>
            <Button type={"reset"} size="large">asds</Button>
            <Button type="button" isFullWidth>asds</Button>
          </div>
        </div>
      </div>
    </>
  );
}
