import { Card } from "./card";

export function PostPreview() {
  return (
    <Card className="p-4 flex gap-4 w-full">
      <img src="/avatar.webp" alt="" className="w-72 h-36 rounded-sm overflow-hidden shrink-0 object-cover object-center" />
      <div className="flex flex-col gap-2">
        <div className="text-xl text-neutral-100 truncate">
          <span>前端博客建设指南</span>
        </div>

        <div className="text-sm text-neutral-500 h-[3.75rem] line-clamp-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid necessitatibus quasi magnam nesciunt, impedit
          quibusdam harum autem blanditiis amet fugiat voluptatum qui iusto repudiandae exercitationem voluptate? Quos tenetur
          deleniti debitis.
        </div>

        <div className="mt-auto text-xs text-neutral-500 flex items-center">
          <div className="italic">#javascript</div>
          <div className="ml-auto font-mono">2024/01/14</div>
        </div>
      </div>
    </Card>
  );
}
