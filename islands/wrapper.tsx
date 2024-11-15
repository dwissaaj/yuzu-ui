import {
  useEffect,
  useRef,
  useState,
} from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
import Button from "./inputs/button/Button.tsx";
import Home from "./icon/component/Home.tsx";
import Checkbox from "./inputs/checkbox/Checkbox.tsx";
import Fieldset from "./inputs/fieldset/Fieldset.tsx";
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
            <Fieldset
              label={"fruits"}
              classNames={{
                yuzuBase: "",
                yuzuLabel: "bg-blue-500",
                yuzuBaseDisabled: "bg-blue-500",
                yuzuLabelDisabled: "font-bold",
              }}
              isDisabled={false}
              fieldsetDirection="column"
            >
              <Input label={"name"} />
              <Input label={"name"} />
            </Fieldset>
          </div>
        </div>
      </div>
    </>
  );
}
