import { MarkdownPreview } from "@/components/markdown-preview";
import { PostWithAuthor } from "@/types/posts";
import { Badge } from "@/components/ui/badge";

export default function MainPost({ mainPost }: { mainPost: PostWithAuthor[] | undefined }) {
  return (
    <div className="flex flex-col gap-2 border-2 border-muted rounded-lg p-4">
      <div className="flex flex-row gap-2">
        {mainPost && mainPost?.[0].post.tags && mainPost?.[0].post.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
      <h1 className="text-2xl font-bold">{mainPost?.[0].post.title}</h1>
      <div className="flex flex-row gap-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={mainPost?.[0].user.image || "/todd.jpg"} alt="avatar" width={20} height={20} className="rounded-full" />
        <p className="text-sm">{mainPost?.[0].user.name}</p>
      </div>
      <MarkdownPreview content={mainPost?.[0].post.content || ""} />
      <div className="flex flex-row gap-2"></div>
    </div>
  );
}