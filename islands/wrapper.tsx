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
            isError={true}
            isErrorStyle="border-yellow-500 bg-yellow-500"
            required={true}
            type="password"
            labelPlacement="top"
            className={""}
            size="large"
            variant="full"
            isFullWidth={false}
            onChange={onchanges}
            placeholder="Your Email"
            label="Name"
          />
          <Input
            isError={true}
            required={true}
            type="password"
            labelPlacement="bottom"
            className={""}
            size="large"
            variant="underline"
            isFullWidth={false}
            onChange={onchanges}
            placeholder="Your Email"
            label="Name"
          />
          <Input
            required={true}
            type="password"
            labelPlacement="left"
            className={""}
            size="large"
            variant="full"
            isFullWidth={false}
            onChange={onchanges}
            placeholder="Your Email"
            label="Name"
          />
          <Input
            required={true}
            type="password"
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
      </div>
    </>
  );
}
