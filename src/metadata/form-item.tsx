import { PropsWithChildren, ReactNode } from "react";

type Props = {
  label: ReactNode;
};

export function FormItem(props: PropsWithChildren<Props>) {
  return (
    <div className="flex items-start justify-between">
      <div>{props.label}</div>
      <div className="shrink-0">{props.children}</div>
    </div>
  );
}
