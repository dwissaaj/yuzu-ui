import Button from "./button/Button.tsx";
import ClosePassword from "./icon/component/ClosePassword.tsx";
import OpenPassword from "./icon/component/OpenPassword.tsx";
import PasswordIcon from "./icon/component/PasswordIcon.tsx";
import Input from "./input/Input.tsx";

export default function Wrapper() {
  const handle = () => {
    alert("hei");
  };
  function onchanges(){
    console.log('ji')
  }
  return (
<>
<div class={" flex flex-col gap-2"}>
      <div className={"p-8 "}>
     <Input onChange={onchanges} placeholder="Your Email" label="Your name" />
      </div>
      
    </div>
    <Button onClick={handle} size={"large"} isFullWidth={false} isDisabled={false}>ads</Button>
    </>
  );
}
