import Button from "./button/Button.tsx";

export default function Wrapper() {
  const handle = () => {
    alert("hei");
  };
  return (
    <div class={"w-full flex flex-col gap-2"}>
      <div className={"w-1/4 p-8"}>
        <input className={'focus-visible:outline-black'} placeholder={'asds outline'}  />
      </div>
    </div>
  );
}
