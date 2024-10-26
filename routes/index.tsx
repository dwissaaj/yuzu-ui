import { signal } from "https://esm.sh/v135/@preact/signals-core@1.5.1/X-ZS8q/dist/signals-core.js";
import Wrapper from "../islands/wrapper.tsx";
import { todos } from "../islands/theme/use-theme.ts";

export default function Home() {
  console.log("value is", todos.value.error);
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <button class={"bg-error"}>test</button>
      <Wrapper />
    </div>
  );
}
