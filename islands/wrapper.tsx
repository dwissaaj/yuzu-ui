import Button from "./button/Button.tsx";

export default function Wrapper() {
  const handle = () => {
    alert("hei");
  };
  return (
    <div class={'w-full bg-red-500 flex flex-col gap-2'}>
      <div className={'w-1/4'}>
        <input className={''} />
      </div>
    </div>
  );
}
