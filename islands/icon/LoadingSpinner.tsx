import type { JSX } from "preact/jsx-runtime";
export type Loading = {
  className: string;
};
export default function LoadingSpinner(props: Loading): JSX.Element {
  return (
    <span className={props.className}>
    </span>
  );
}
