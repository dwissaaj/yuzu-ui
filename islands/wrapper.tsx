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
  return (
    <>
      <div class={" flex flex-col gap-2"}>
        <div className={"p-8 "}>
          <Input
            isError
            colors="primary"
            labelPlacement="top"
            className={"focus:border-red-500"}
            size="large"
            variant="full"
            isFullWidth={false}
            onChange={onchanges}
            placeholder="Your Email"
            label="Your name"
          />
        </div>
        <input
         type={'password'}
          placeholder={"testing"}
          className={"focus:border-red-500 focus:border-4"}
        />
      </div>
    </>
  );
}
