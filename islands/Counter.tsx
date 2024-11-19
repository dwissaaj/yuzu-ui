import type { Signal } from "@preact/signals";

interface CounterProps {
  count: Signal<number>;
}

export default function Counter(props: CounterProps) {
  return (
    <div class="flex gap-8 py-6">
      <p className={"bg-red-500 text-4xl"}>asdasd</p>
    </div>
  );
}
