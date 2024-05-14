"use client";

import { IconMenu } from "@/icons/menu";
import clsx from "clsx";
import { PropsWithChildren, ReactNode, useState } from "react";

type Props = {
  menu?: ReactNode;
};

export function RootLayout(props: PropsWithChildren<Props>) {
  const [visible, setVisible] = useState(false);
  const handleClick = () => setVisible(old => !old);

  return (
    <>
      <div
        className={clsx(
          "sticky top-0 z-10",
          "float-none w-full h-[55px] flex items-center justify-end px-16",
          "md:float-left md:pr-0 md:p-24 md:h-full md:w-[18rem]"
        )}
      >
        <div
          onClick={handleClick}
          className={clsx(
            "fixed top-0 left-0 bg-n-1 bg-opacity-55 backdrop-blur-sm bottom-0 w-screen z-10",
            "md:static md:bg-transparent md:p-0 md:w-full md:h-full md:!translate-x-0",
            visible ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div
            className="w-[80vw] md:bg-transparent max-w-[288px] md:w-full md:max-w-full h-full bg-n-1 p-16 md:p-0"
            onClick={e => e.stopPropagation()}
          >
            {props.menu}
          </div>
        </div>
        <div onClick={handleClick} className="md:hidden flex items-center justify-center w-40 h-40 cursor-pointer shadow-lg">
          <IconMenu className="text-16" />
        </div>
      </div>
      <div className="h-[calc(100%_-_55px)] md:h-full overflow-auto px-24 pt-24">{props.children}</div>
    </>
  );
}
