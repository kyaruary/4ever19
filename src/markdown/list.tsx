import React from "react";

export function MarkdownUnorderedList(props: React.JSX.IntrinsicElements["ul"]) {
  return <ul className="flex flex-col gap-8 [&>li]:list-disc [&>li]:list-outside ps-16">{props.children}</ul>;
}
