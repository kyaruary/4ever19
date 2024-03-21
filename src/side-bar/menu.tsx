"use client";

import clsx from "clsx";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

type Props = {
  count: number;
  name: string;
  href: string;
};

export function ClassifyMenu(props: Props) {
  const pathname = useSelectedLayoutSegment();
  const active = pathname && props.href.includes(pathname);
  return (
    <Link href={props.href} className={clsx("flex flex-col gap-4 items-center flex-1 cursor-pointer group")}>
      <div className={clsx("text-18", active ? "text-primary-3" : "group-hover:text-primary-2")}>{props.count}</div>
      <div className={clsx("text-12", active ? "text-primary-3" : "text-n-4 group-hover:text-primary-2")}>{props.name}</div>
    </Link>
  );
}
