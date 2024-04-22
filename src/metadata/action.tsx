"use server";
import { promises as fs } from "fs";

import { prisma } from "@/database";
import { ArticlePreview } from "@/types";
import { Article } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function updateMetadata(article: ArticlePreview, fd: FormData) {
  const title = fd.get("title")?.toString();
  const preface = fd.get("preface")?.toString();
  const categoryId = fd.get("category")?.toString();
  const published = fd.get("published")?.toString() === "on";
  const tags = fd.getAll("tags");
  const file = fd.get("cover") as File;
  const updateData: Partial<Article> = {
    title,
    preface,
    categoryId: categoryId ? +categoryId : undefined,
    published,
  };

  if (file && file.size > 0 && file.name !== "undefined") {
    const data = await file.arrayBuffer();
    const cover = `/covers/${file.name}`;
    const folder = `${process.cwd()}/public`;
    const path = `${folder}${cover}`;
    const stat = await fs.stat(path).catch(() => {});
    if (!stat) {
      await fs.appendFile(path, Buffer.from(data));
    }
    updateData.cover = cover;
  }

  await prisma.article.update({
    where: { id: article?.id },
    data: updateData,
  });
  revalidatePath("/article/guide");
}
