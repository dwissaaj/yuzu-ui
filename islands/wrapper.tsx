import Button from "./button/Button.tsx";
import ClosePassword from "./icon/component/ClosePassword.tsx";
import OpenPassword from "./icon/component/OpenPassword.tsx";
import PasswordIcon from "./icon/component/PasswordIcon.tsx";
import Input from "./input/Input.tsx";

export default function Wrapper() {
  const handle = () => {
    alert("hei");
  };
  return (
    <div class={"w-full flex flex-col gap-2"}>
      <div className={"w-1/4 p-8 "}>
     <Input placeholder="Your Email" label="Your name" />
      </div>
    </div>
  );
}
