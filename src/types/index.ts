import { Article, Category, Tag } from "@prisma/client";

export type ArticlePreview = Article & { tags: { tag: Tag }[] } & { category: Category };
