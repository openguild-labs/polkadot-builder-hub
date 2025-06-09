import { MarkdownPreview } from "@/components/markdown-preview";
import { PostWithAuthor } from "@/types/posts";

export default function ReplyPost({
  replyPost,
}: {
  replyPost: PostWithAuthor;
}) {
  return (
    <div className="flex flex-col gap-2 border-2 border-muted rounded-lg p-4">
      <div className="flex flex-row gap-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={replyPost.user.image || "/todd.jpg"}
          alt="avatar"
          width={20}
          height={20}
          className="rounded-full"
        />
        <p className="text-sm">{replyPost.user.name}</p>
      </div>
      <MarkdownPreview content={replyPost.post.content || ""} />
      <div className="flex flex-row gap-2"></div>
    </div>
  );
}
