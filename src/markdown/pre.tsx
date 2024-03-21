import React from "react";

export function MarkdownPre(props: React.JSX.IntrinsicElements["pre"]) {
  return <pre className="font-mono p-16 [&>code]:p-0 rounded-8 bg-n-2">{props.children}</pre>;
}
