import { FloatAction } from "@/side-bar/float-action";
import { Analytics } from "@vercel/analytics/react";
import { SideBar } from "@/side-bar";
import { prisma } from "@/database";
import { isDev } from "@/config";
import clsx from "clsx";
import { PropsWithChildren } from "react";
import { RootLayout } from "@/layouts/root";
import "./global.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Kyaru@blog",
    startupImage: "/logo.svg",
  },
};

export default async function Layout(props: PropsWithChildren<unknown>) {
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
        <RootLayout menu={<SideBar categoryCount={categoryCount} tagCount={tagCount} articleCount={articleCount} />}>
          {props.children}
        </RootLayout>
        <Analytics />
      </body>
    </html>
  );
}
