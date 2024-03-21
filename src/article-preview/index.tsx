import clsx from "clsx";
import { Card } from "@/card";
import Link from "next/link";
import { Article, Category as CategoryDAO, Tag as TagDAO } from "@prisma/client";
import dayjs from "dayjs";
import { Category } from "@/category";
import { Tag } from "@/tag";
import { ArticlePreview } from "@/types";

type Props = {
  article: ArticlePreview;
};

export function Preview(props: Props) {
  const { article } = props;
  return (
    <Card className="flex-col lg:flex-row p-16 flex gap-16 w-full">
      <img
        src="/avatar.webp"
        alt=""
        className={clsx(
          "w-full aspect-[3/1] rounded-8 overflow-hidden shrink-0 object-cover object-center",
          "lg:w-[18rem] lg:h-[9rem] "
        )}
      />
      <div className="flex flex-col gap-8 flex-1 min-w-0">
        <div className="text-20 truncate">
          <Link href={`/article/${article.id}/${article.slug}`}>{article.title}</Link>
        </div>

        <div className="text-sm text-n-4 h-[3.75rem] line-clamp-3">{article.preface}</div>

        <div className="mt-auto text-xs flex items-center text-12">
          <Link href={"/categories"}>
            <Category>{article.category.name}</Category>
          </Link>
          {article.tags.map(({ tag }) => (
            <Tag key={tag.id}>{tag.name}</Tag>
          ))}
          <div className="ml-auto text-n-4">{dayjs(article.createdAt).format("YYYY/MM/DD HH:mm")}</div>
        </div>
      </div>
    </Card>
  );
}
