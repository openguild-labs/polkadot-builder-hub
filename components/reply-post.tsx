import { MarkdownPreview } from "@/components/markdown-preview";
import { PostWithAuthor } from "@/types/posts";

export default function ReplyPost({ replyPost }: { replyPost: PostWithAuthor }) {
  return (
    <div className="flex flex-col gap-2 border-2 border-muted rounded-lg p-4">
      <MarkdownPreview content={replyPost.post.content || ""} />
      <div className="flex flex-row gap-2"></div>
    </div>
  );
}