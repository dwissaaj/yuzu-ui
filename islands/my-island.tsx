import Button from "../islands/inputs/button/Button.tsx";
import CheckBox from "../islands/inputs/checkbox/Checkbox.tsx";
import Fieldset from "./inputs/fieldset/Fieldset.tsx";
import { Input } from "./inputs/input/index.ts";
import Label from "./inputs/label/Labels.tsx";
import { Password } from "./inputs/password/index.ts";

export default function MyIslan() {
  return (
    <div>
      <Fieldset fieldsetDirection="column" fieldsetVariant="full">
        <Label for={""} form={"sss"}>asss</Label>
        <Input form={"as"}  name={"ssss"}/>
        <Password label="pass" form={"ss"} id={"ss"}/>
      </Fieldset>
    </div>
  );
}
