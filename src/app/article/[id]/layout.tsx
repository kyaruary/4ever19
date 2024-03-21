import { PropsWithChildren, ReactNode } from "react";
import { Metadata } from "../../../metadata";
import { prisma } from "../../../database";
import { headers } from "next/headers";
import Image from "next/image";
import { isDev } from "@/config";
import dayjs from "dayjs";
import { notFound } from "next/navigation";
import { Category } from "@/category";

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
      <div className="absolute h-[18rem] left-0 right-0 top-0 -z-[1]">
        <Image width={920} height={192} src={"/avatar.webp"} alt="cover" className="h-full w-full object-cover" />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-n-1 backdrop-blur-[7.5px] bg-opacity-20"></div>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-n-1/[0.78] to-n-1"></div>
      </div>
      <div className="text-32 font-medium">{article.title}</div>
      <div className="mt-8">{dayjs(article.createdAt).format("YYYY/MM/DD HH:mm")}</div>
      <div className="mt-8 flex items-center">
        <Category>{article.category.name}</Category>
      </div>
      <article className="flex flex-col gap-16 py-32">{props.children}</article>
      <div className="sticky bottom-0 bg-n-1 py-16  text-right text-n-4">
        updated at {dayjs(article.updatedAt).format("YYYY/MM/DD HH:mm")}
      </div>
      <div className="h-32"></div>
      {isDev ? <Metadata article={article} /> : null}
    </>
  );
}
