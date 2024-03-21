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
        "flex items-center justify-end text-18  cursor-pointer",
        pathname === props.href ? "text-primary-3" : "text-n-4 hover:text-primary-2",
        className
      )}
      {...attributes}
    >
      {children}
    </Link>
  );
}
