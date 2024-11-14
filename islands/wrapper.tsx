import {
  useEffect,
  useRef,
  useState,
} from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";

import SelectGroup from "./inputs/select/select-field/SelectGroup.tsx";
import SelectItem from "./inputs/select/select-item/SelectItem.tsx";
import Button from "./inputs/button/Button.tsx";
import Home from "./icon/component/Home.tsx";

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
            <Button
              variant="solid"
              onClick={toggleDisabled}
              size="small"
              color="secondary"
              endContent={<Home />}
              domRef={fieldsetRef}
            >
              SUBMIT
            </Button>
            <Button
              variant="border"
              onClick={toggleDisabled}
              isLoading={true}
              size="medium"
              color="secondary"
            >
              SUBMIT
            </Button>
            <Button
              variant="light"
              onClick={toggleDisabled}
              isLoading={true}
              size="large"
              color="secondary"
            >
              LIGHT
            </Button>
            <Button
              variant="ghost"
              onClick={toggleDisabled}
              isLoading={true}
              size="large"
              color="secondary"
              
            >
              GHOST
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
