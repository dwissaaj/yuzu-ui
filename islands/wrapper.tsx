import { useRef } from "https://esm.sh/v128/preact@10.22.0/hooks/src/index.js";
import Button from "./button/Button.tsx";
import ClosePassword from "./icon/component/ClosePassword.tsx";
import OpenPassword from "./icon/component/OpenPassword.tsx";
import PasswordIcon from "./icon/component/PasswordIcon.tsx";
import Input from "./input/Input.tsx";

export default function Wrapper() {
  const handle = () => {
    alert("hei");
  };
  function onchanges() {
    console.log("ji");
  }
  // const inputRef = useRef(null)
  return (
    <>
      <div class={" flex flex-col gap-2"}>
        <div className={" "}>
          <Input
            required={true}
            type="password"
            // colors="error"
            labelPlacement="right"
            className={""}
            size="large"
            variant="full"
            isFullWidth={false}
            onChange={onchanges}
            placeholder="Your Email"
            label="Name"
          />
        </div>
        <input
          type={"password"}
          placeholder={"testing"}
          className={"focus:border-red-500 focus:border-4"}
        />
      </div>
    </>
  );
}
