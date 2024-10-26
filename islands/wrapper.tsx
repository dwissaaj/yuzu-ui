import Button from "./button/Button.tsx";

export default function Wrapper() {
  const handle = () => {
    alert("hei");
  };
  return (
    <div>
      <Button isDisabled={false} onClick={handle} variant="error">
        <p class={'bg-error'}>asdasd</p>
      </Button>
    </div>
  );
}
