import Button from "../islands/inputs/button/Button.tsx";
import CheckBox from "../islands/inputs/checkbox/Checkbox.tsx";
import Fieldset from "./inputs/fieldset/Fieldset.tsx";
import { Input } from "./inputs/input/index.ts";

export default function MyIslan() {
  return (
    <div>
      <Fieldset fieldsetVariant="full">
        <Input form={"as"}  name={"ssss"}/>
      </Fieldset>
    </div>
  );
}
