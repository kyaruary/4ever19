import clsx from "clsx";
import React from "react";

export function MarkdownCode(props: React.JSX.IntrinsicElements["code"]) {
  const { className, children } = props;
  return <code className={clsx("bg-n-2 rounded-4 py-4 px-8", className)}>{children}</code>;
}
