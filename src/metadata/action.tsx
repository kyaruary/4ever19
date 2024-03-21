"use server";

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
  const file = fd.get("cover");

  await prisma.article.update({
    where: { id: article?.id },
    data: {
      title,
      preface,
      categoryId: categoryId ? +categoryId : undefined,
      published,
    },
  });
  revalidatePath("/article/guide");
}
