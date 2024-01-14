import { Card } from "./components/card";
import { PostPreview } from "./components/post-preview";

export default function Page() {
  return (
    <div className="flex-1 min-h-0 min-w-0 flex flex-col gap-4 items-center justify-center">
      {Array.from({ length: 100 }).map(() => (
        <PostPreview />
      ))}
    </div>
  );
}
