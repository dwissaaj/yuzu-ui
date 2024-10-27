import Button from "./button/Button.tsx";

export default function Wrapper() {
  const handle = () => {
    alert("hei");
  };
  return (
    <div class={'w-full bg-red-500'}>
      <Button className="" isFullWidth={true} isDisabled={true} onClick={handle} variant="warning">
        sadkasfjdlkjlaskljdasjlk
      </Button>
      <button disabled={false} className={'w-full bg-blue-400 cursor-not-allowed brightness-50 '}>lo</button>
    </div>
  );
}
