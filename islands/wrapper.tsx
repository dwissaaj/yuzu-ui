import { useState } from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";
import Checkbox from "./inputs/checkbox/Checkbox.tsx";
import Input from "./inputs/input/Input.tsx";
import Passwords from "./inputs/passwordField/Passwords.tsx";

export default function Wrapper() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };
  return (
    <>
      <div class={"w-full flex flex-col gap-2"}>
        <div className={"w-1/2 "}>
          <Passwords
            className={""}
            label="password"
            labelPlacement="right"
            size="large"
            variant="underline"
          />
          <Passwords
            className={""}
            label="your password"
            labelPlacement="left"
            size="large"
            variant="underline"
          />
          <Passwords
            className={""}
            label="hello"
            labelPlacement="top"
            size="large"
            variant="underline"
          />
          <Passwords
            className={""}
            label="hello"
            labelPlacement="bottom"
            size="large"
            variant="underline"
          />
        </div>
      </div>
    </>
  );
}
