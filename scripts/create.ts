import { promises as fs } from "fs";
import { prisma } from "../src/database";
async function run() {
  const slug = process.argv[2];
  try {
    if (!slug) {
      throw new Error("specific a slug");
    }
    const dir = `./src/app/article/[id]/${slug}`;
    const dirStat = await fs.stat(dir).catch(() => {});
    if (!dirStat) {
      await fs.mkdir(dir);
    } else if (!dirStat.isDirectory()) {
      throw new Error(`${dir} is not a directory`);
    }
    const pagePath = `${dir}/page.mdx`;
    const pageStat = await fs.stat(pagePath).catch(() => {});
    if (!pageStat) {
      await fs.writeFile(pagePath, "# Untitled", { encoding: "utf-8" });
    } else if (!pageStat.isFile()) {
      throw new Error(`${pagePath} is not a file`);
    }
    const article = await prisma.article.findFirst({ where: { slug } });
    if (article !== null) {
      throw new Error(`slug ${slug} exist in database`);
    }
    let draft = await prisma.category.findFirst({
      where: {
        visible: false,
        OR: [
          {
            name: "Draft",
          },
        ],
      },
    });
    if (!draft) {
      draft = await prisma.category.create({
        data: {
          visible: false,
          name: "draft",
        },
      });
    }
    const result = await prisma.article.create({
      data: {
        slug,
        title: "Untitled",
        categoryId: draft.id,
        preface:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptate nemo cum. Nemo veniam amet, hic ducimus quasi natus vero quisquam cumque temporibus corporis voluptatum animi. Consequatur distinctio eligendi laboriosam.",
        published: false,
      },
    });
    console.log("\x1b[34m", `[slug] -- ${slug}, create article success! id is ${result.id}`);
  } catch (e) {
    if (e instanceof Error) {
      console.error("\x1b[31m", `${e.message}`);
    }
    process.exit();
  }
}

run();
