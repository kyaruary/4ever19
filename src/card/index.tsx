import React from "react";
import clsx from "clsx";

export function Card(props: React.JSX.IntrinsicElements["div"]) {
  const { className, children } = props;
  return <div className={clsx("bg-n-2 rounded-8", className)}>{children}</div>;
}
