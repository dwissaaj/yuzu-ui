export type Loading = {
  className: string;
};
export default function LoadingSpinner(props: Loading) {
  return (
    <span className={props.className}>
    </span>
  );
}
