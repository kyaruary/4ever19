import React from "react";
import clsx from "clsx";

export function Card(props: React.JSX.IntrinsicElements["div"]) {
  const { className, children } = props;
  return <div className={clsx("bg-neutral-800 rounded-lg text-neutral-100", className)}>{children}</div>;
}
