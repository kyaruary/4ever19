import { FloatAction } from "@/side-bar/float-action";
import { Analytics } from "@vercel/analytics/react";
import { SideBar } from "@/side-bar";
import { prisma } from "@/database";
import { isDev } from "@/config";
import clsx from "clsx";
import { PropsWithChildren } from "react";

import "./global.css";

export default async function RootLayout(props: PropsWithChildren<unknown>) {
  const [categoryCount, tagCount, articleCount] = await Promise.all([
    prisma.category.count({
      where: isDev
        ? undefined
        : {
            visible: true,
          },
    }),
    prisma.tag.count(),
    prisma.article.count({
      where: isDev
        ? undefined
        : {
            published: true,
          },
    }),
  ]);
  return (
    <html lang="zh-CN" className="text-16 h-full bg-n-1 text-n-5 2xl:text-[1vw]">
      <body className="h-full m-0 text-14">
        <div className={clsx("hidden md:block float-left sticky top-0 pr-0 p-24 h-full w-[18rem]")}>
          <SideBar categoryCount={categoryCount} tagCount={tagCount} articleCount={articleCount} />
        </div>
        <div className="h-full overflow-auto px-24 pt-24">{props.children}</div>
        <FloatAction>
          <SideBar categoryCount={categoryCount} tagCount={tagCount} articleCount={articleCount} />
        </FloatAction>
        <Analytics />
      </body>
    </html>
  );
}
