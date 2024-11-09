import {
  useEffect,
  useRef,
} from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";

import Input from "./inputs/input/Inputs.tsx";
import Password from "./inputs/password/Password.tsx";

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
          <Input
            domRef={fieldsetRef}
            className={""}
            label={"username"}
            labelPlacement="top"
            variant="underline"
            id={"name"}
            form={"forms"}
            value={"as"}
            placeholder={"number"}
           
          />
          <Password isError yuzuErrorStyle="bg-red-500" />
        </div>
      </div>
    </>
  );
}
