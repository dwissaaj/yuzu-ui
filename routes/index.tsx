import Accordions from "../islands/accordions/Accordions.tsx";
import Buttonbase from "../islands/button/Buttonbase.tsx";
import Wrapper from "../islands/wrapper.tsx";

Accordions;
Accordions;

export default function Home() {
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <Accordions
        title={"this isaccordion"}
        subtitle={"this is a new"}
        content={"asdjaskdjlasdjlk"}
      />
      <Buttonbase
        onClick={() => console.log("clicks")}
        className={"bg-red-500"}
      >
        <p>User</p>
      </Buttonbase>

      <Wrapper />
    </div>
  );
}
