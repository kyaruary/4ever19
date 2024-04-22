import { Card } from "@/card";
import { revalidatePath } from "next/cache";
import { prisma } from "../database";
import { ArticlePreview } from "@/types";
import { FormItem } from "./form-item";
import { Toggle } from "./toggle";
import { updateMetadata } from "./action";
import { TagSelect } from "./tag-select";
import { Upload } from "./upload";

type Props = {
  article: ArticlePreview;
};

export async function Metadata(props: Props) {
  const { article } = props;

  const categories = await prisma.category.findMany();

  const tags = await prisma.tag.findMany();

  const handleAction = updateMetadata.bind(null, article);

  return (
    <Card className="p-16 rounded-md mb-32">
      <form action={handleAction} className="flex flex-col gap-16 text-16">
        <input
          name="title"
          type="text"
          defaultValue={article.title}
          placeholder="title"
          className="bg-transparent text-32 border-b-1 outline-none py-4"
        />
        <textarea
          spellCheck={false}
          defaultValue={article.preface}
          name="preface"
          placeholder="preface"
          className="outline-none bg-n-1 p-8 rounded-8"
          rows={3}
        />
        <FormItem label="Published">
          <Toggle defaultChecked={article.published} name="published" />
        </FormItem>
        <FormItem label="Category">
          <select defaultValue={article.category.id} name="category" className="bg-transparent outline-none">
            {categories.map(category => (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </FormItem>
        <FormItem label="Tags">
          <TagSelect name="tags" tags={tags} defaultValue={article.tags.map(each => each.tag)} />
        </FormItem>
        <Upload url={article.cover} />

        <button type="submit" className="bg-primary-3 rounded-6 h-40 hover:bg-primary-2">
          Update
        </button>
      </form>
    </Card>
  );
}
