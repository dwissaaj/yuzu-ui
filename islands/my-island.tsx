import Button from "../islands/inputs/button/Button.tsx";
import CheckBox from "../islands/inputs/checkbox/Checkbox.tsx";
import Fieldset from "../islands/inputs/fieldset/Fieldset.tsx"
export default function MyIslan() {
  return (
    <div>
     
      <Fieldset >
        <Button>asdasd</Button>
        <CheckBox labelColor="success" label="ARE U SURE" />
      </Fieldset>
    </div>
  );
}
