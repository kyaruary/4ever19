import { PropsWithChildren, ReactNode } from "react";
import { Metadata } from "../../../metadata";
import { prisma } from "../../../database";
import { headers } from "next/headers";
import Image from "next/image";
import { isDev } from "@/config";
import dayjs from "dayjs";
import { notFound } from "next/navigation";
import { Category } from "@/category";
import { Cover } from "@/cover";

type Props = {
  params: {
    id: string;
  };
};

export default async function Layout(props: PropsWithChildren<Props>) {
  const id = +props.params.id;
  const article = await prisma.article.findUnique({
    where: { id, published: isDev ? undefined : true },
    include: {
      tags: {
        include: {
          tag: true,
        },
      },
      category: true,
    },
  });

  if (!article) {
    notFound();
  }

  return (
    <>
      <Cover src={article.cover} />
      <div className="text-32 font-medium">{article.title}</div>
      <div className="mt-8">{dayjs(article.createdAt).format("YYYY/MM/DD HH:mm")}</div>
      <div className="mt-8 flex items-center">
        <Category>{article.category.name}</Category>
      </div>
      <article className="flex flex-col gap-16 py-32">{props.children}</article>
      <div className="sticky bottom-0 bg-n-1 py-24  text-right text-n-4 text-12">
        updated at {dayjs(article.updatedAt).format("YYYY/MM/DD HH:mm")}
      </div>
      {isDev ? (
        <>
          <div className="h-32"></div>
          <Metadata article={article} />
        </>
      ) : null}
    </>
  );
}
