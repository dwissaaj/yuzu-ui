import Button from "./button/Button.tsx";

export default function Wrapper() {
  const handle = () => {
    alert("hei");
  };
  return (
    <div class={'w-full bg-red-500 flex flex-col gap-2'}>
      <Button size="small" className="" isFullWidth={false}  isDisabled={false} onClick={handle} variant="warning">
        small
      </Button>
      <Button size="medium" className=""  isDisabled={false} onClick={handle} variant="warning">
        medium
      </Button>
      <Button size="large" className="" isFullWidth={true}  isDisabled={false} onClick={handle} variant="warning">
      large
      </Button>
      <button disabled={false} className={'w-full bg-blue-400 cursor-not-allowed brightness-50 '}>lo</button>
    </div>
  );
}
