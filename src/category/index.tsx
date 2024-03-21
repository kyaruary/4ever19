import clsx from "clsx";
import React from "react";

export function Category(props: React.JSX.IntrinsicElements["div"]) {
  const { children, className, ...attributes } = props;

  return (
    <div className={clsx("text-primary-2 hover:text-primary-3 cursor-pointer", className)} {...attributes}>
      / {children} /
    </div>
  );
}
