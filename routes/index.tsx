import MyIslan from "../islands/my-island.tsx";
import { Button } from "../yuzu-component/mod.ts";

export default function Home() {
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <MyIslan />
      </div>
    </div>
  );
}
