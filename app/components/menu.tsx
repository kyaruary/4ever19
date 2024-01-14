type Props = {
  count: number;
  name: string;
};

export function ClassifyMenu(props: Props) {
  return (
    <div className="flex flex-col gap-1 items-center flex-1 cursor-pointer group">
      <div className="text-lg group-hover:text-blue-300">{props.count}</div>
      <div className="text-xs text-neutral-500 group-hover:text-blue-300">{props.name}</div>
    </div>
  );
}
