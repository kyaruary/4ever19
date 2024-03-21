import { PropsWithChildren } from "react";

type Props = {
  label: string;
};

export function FormItem(props: PropsWithChildren<Props>) {
  return (
    <div className="flex items-center justify-between">
      <div>{props.label}</div>
      <div className="shrink-0">{props.children}</div>
    </div>
  );
}
