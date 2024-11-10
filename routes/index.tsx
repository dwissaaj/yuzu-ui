import { signal } from "https://esm.sh/v135/@preact/signals-core@1.5.1/X-ZS8q/dist/signals-core.js";
import Wrapper from "../islands/wrapper.tsx";
import { todos } from "../islands/theme/use-theme.ts";

export default function Home() {
  return (
    <div class="px-4 py-8 mx-auto ">
      <Wrapper />
    </div>
  );
}
