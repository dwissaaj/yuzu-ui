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
            <Fieldset
              label={"your data"}
              classNames={{
                yuzuBaseDisabled: "cursor-not-allowed",
              }}
            >
              <Password
                isDisabled
                size="fullWidth"
                isIconHidden={false}
                description="you remmeberd it"
                label={"your pass"}
                variant="underline"
                color="primary"
                errorMessage="You are try again"
                classNames={{
                  yuzuBase: "bg-red-100",
                  yuzuBaseDisabled: "bg-",
                  yuzuInput: "",
                  yuzuInputError: "bg-blue-500",
                  yuzuIcon: "bg-red-500",
                  yuzuDescription: "bg-red-500",
                  yuzuLabel: "bg-yellow-500",
                  yuzuLabelRequired: "font-bold",
                  yuzuErrorMessage: "uppercase",
                }}
              />
            </Fieldset>
            <Checkbox label={"did you ready?"} />
            <Label>ads</Label>
          </div>
        </div>
      </div>
    </>
  );
}
