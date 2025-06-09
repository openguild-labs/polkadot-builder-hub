import { MarkdownPreview } from "@/components/markdown-preview";
import { PostWithAuthor } from "@/types/posts";
import { User } from "@/types/users";
import { Button } from "@/components/ui/button";
import { Pencil, Trash } from "lucide-react";

export default function ReplyPost({
  replyPost,
  user,
}: {
  replyPost: PostWithAuthor | undefined;
  user: User | null;
  refetch: () => void;
}) {
  const isOwner = user?.id === replyPost?.user.id;

  return (
    <div className="flex flex-col gap-2 border-2 border-muted rounded-lg p-4">
      {isOwner && (
        <div className="flex flex-row gap-2 self-end">
          <Button className="hover:cursor-pointer" size="icon" variant="secondary">
            <Pencil />
          </Button>
          <Button className="hover:cursor-pointer" size="icon" variant="destructive">
            <Trash />
          </Button>
        </div>
      )}
      <div className="flex flex-row gap-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={replyPost?.user.image || "/todd.jpg"}
          alt="avatar"
          width={20}
          height={20}
          className="rounded-full"
        />
        <p className="text-sm">{replyPost?.user.name}</p>
      </div>
      <MarkdownPreview content={replyPost?.post.content || ""} />
      <div className="flex flex-row gap-2"></div>
    </div>
  );
}
