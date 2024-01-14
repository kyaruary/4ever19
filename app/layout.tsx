import { PropsWithChildren } from "react";
import "./global.css";
import { SideBar } from "./components/side-bar";
import clsx from "clsx";
import { FloatAction } from "./components/float-action";

export default function RootLayout(props: PropsWithChildren<unknown>) {
  return (
    <html lang="zh-CN" className="text-base h-full bg-neutral-900 text-neutral-100 2xl:text-[1vw]">
      <body className="h-full m-0 text-sm">
        <div className={clsx("hidden md:block float-left sticky top-0 pr-0 p-6 h-full w-72")}>
          <SideBar />
        </div>
        <div className="h-full overflow-auto p-6">{props.children}</div>
        <FloatAction />
      </body>
    </html>
  );
}
