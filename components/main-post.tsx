import { MarkdownPreview } from "@/components/markdown-preview";
import { PostWithAuthor } from "@/types/posts";
import { Badge } from "@/components/ui/badge";
import { User } from "@/types/users";
import { Pencil, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MainPost({ mainPost, user }: { mainPost: PostWithAuthor | undefined, user: User | null }) {
  console.log('MainPost - user:', user);
  console.log('MainPost - mainPost:', mainPost);
  const isOwner = user?.id === mainPost?.user.id;
  console.log('MainPost - isOwner:', isOwner);
  
  return (
    <div className="flex flex-col gap-2 border-2 border-muted rounded-lg p-4">
      <div className="flex flex-row gap-2">
        {mainPost && mainPost.post.tags && mainPost.post.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
      {
        isOwner && (
          <div className="flex flex-row gap-2 self-end">
            <Button size="icon" variant="secondary">
              <Pencil />
            </Button>
            <Button size="icon" variant="destructive">
              <Trash />
            </Button>
          </div>
        )
      }
      <h1 className="text-2xl font-bold">{mainPost?.post.title}</h1>
      <div className="flex flex-row gap-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={mainPost?.user.image || "/todd.jpg"} alt="avatar" width={20} height={20} className="rounded-full" />
        <p className="text-sm">{mainPost?.user.name}</p>
      </div>
      <MarkdownPreview content={mainPost?.post.content || ""} />
      <div className="flex flex-row gap-2"></div>
    </div>
  );
}