import  { ButtonBase } from "./button/Buttonbase.tsx";

export default function Wrapper() {
  const handle = () => {
    alert("asd");
  };
  return (
    <div>
      <ButtonBase isDisabled={true} onClick={handle}>
        <p>User click</p>
      </ButtonBase>
    </div>
  );
}
