import { prisma } from "@/database";
import { Preview } from "@/article-preview";
import { isDev } from "../config";

export default async function Page() {
  const articles = await prisma.article.findMany({
    take: 20,
    include: {
      tags: {
        include: {
          tag: true,
        },
      },
      category: true,
    },
    orderBy: {
      updatedAt: "desc",
    },
    where: isDev
      ? undefined
      : {
          published: true,
        },
  });
  const count = await prisma.article.count();
  return (
    <div className="flex-1 min-h-0 min-w-0 flex flex-col gap-16 items-center justify-center">
      {articles.map(article => (
        <Preview key={article.id} article={article} />
      ))}
      {articles.length >= count ? <div className="text-n-4 py-32">-- NO MORE --</div> : null}
    </div>
  );
}
