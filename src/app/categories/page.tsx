import { prisma } from "@/database";
import { isDev } from "../../config";

export default async function Page() {
  // const categories = await prisma.category.findMany({
  //   where: isDev
  //     ? undefined
  //     : {
  //         visible: true,
  //       },
  // });
  return <div className="h-full flex items-center justify-center text-n-4">-- WORK IN PROGRESS --</div>;
}
