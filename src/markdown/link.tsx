import clsx from "clsx";
import Link from "next/link";
import React, { DetailedHTMLProps, LinkHTMLAttributes } from "react";

export function MarkdownLink(props: React.JSX.IntrinsicElements["a"]) {
  const { children, className, href, ...attributes } = props;
  if (!href) {
    return children;
  }
  return (
    <Link href={href} className={clsx("underline text-primary-2 hover:text-primary-3", className)} {...attributes}>
      {children}
    </Link>
  );
}
