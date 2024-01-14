"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ComponentProps } from "react";

export function Navigation(props: ComponentProps<typeof Link>) {
  const { className, children, ...attributes } = props;
  const pathname = usePathname();
  return (
    <Link
      className={clsx(
        "flex items-center justify-end text-lg  cursor-pointer",
        pathname === props.href ? "text-blue-400" : "text-neutral-500 hover:text-blue-300",
        className
      )}
      {...attributes}
    >
      {children}
    </Link>
  );
}
