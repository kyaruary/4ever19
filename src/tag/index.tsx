import clsx from "clsx";
import React from "react";

export function Tag(props: React.JSX.IntrinsicElements["div"]) {
  const { children, className, ...attributes } = props;

  return (
    <div className={clsx("italic text-n-4 hover:text-n-5 cursor-pointer", className)} {...attributes}>
      #{children}
    </div>
  );
}
