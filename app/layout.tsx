import { PropsWithChildren } from "react";
import "./global.css";
import { SideBar } from "./components/side-bar";

export default function RootLayout(props: PropsWithChildren<unknown>) {
  return (
    <html lang="zh-CN" className="text-base h-full bg-neutral-900 text-neutral-100 2xl:text-[1vw]">
      <body className="h-full m-0 text-sm">
        <div className="h-full float-left w-72 sticky top-0 py-6 pl-6">
          <SideBar />
        </div>
        <div className="h-full overflow-auto p-6">{props.children}</div>
      </body>
    </html>
  );
}
