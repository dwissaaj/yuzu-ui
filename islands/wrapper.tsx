import  ButtonBase  from "./button/Buttonbase.tsx";

export default function Wrapper() {
  const handle = () => {
    alert("asd");
  };
  return (
    <div>
      <ButtonBase className={'bg-blue-500'} isDisabled={false} onClick={handle}>
        <p>User click</p>
      </ButtonBase>
    </div>
  );
}
