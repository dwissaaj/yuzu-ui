import { useState } from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
import Checkbox from "./inputs/checkbox/Checkbox.tsx";
import Input from "./inputs/input/Input.tsx";
import Passwords from "./inputs/passwordField/Passwords.tsx";
import Label from "./inputs/label/label.tsx";
import Button from "./inputs/button/Button.tsx";

export default function Wrapper() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };
  return (
    <>
      <div class={"w-full flex flex-col gap-2"}>
        <div className={"w-1/2 "}>
        <Checkbox boxColor="error" name={'che'} id={'as'} checked={true} label={'asd'} />
        <input name={'a'} id={'s'} type={'checkbox'} checked />
        </div>
      </div>
    </>
  );
}
