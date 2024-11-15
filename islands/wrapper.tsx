import {
  useEffect,
  useRef,
  useState,
} from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
import Button from "./inputs/button/Button.tsx";
import Home from "./icon/component/Home.tsx";
import Checkbox from "./inputs/checkbox/Checkbox.tsx";

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
            <Checkbox
              isDisabled={false}
              labelPosition="bottom"
              name={"data"}
              id={"name"}
              label={"did you agree?"}
              boxSize="small"
              indeterminate
              classNames={{
                yuzuLabelDisabled: "bg-red-500",
                yuzuInputDisabled: "outline-4 outline-green-300",
                yuzuBaseDisabled: "ring-4 ring-red-500 bg-red-500",
                yuzuBase: "bg-blue-100",
                yuzuInput: "ring ring-red-300",
                yuzuLabel: "font-bold",
              }}
            />
            <Button
              isDisabled={true}
              classNames={{
                yuzuBase: "bg-red-500",
                yuzuDisabled: "disabled:ring-2 disabled:ring-yellow-500",
              }}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
