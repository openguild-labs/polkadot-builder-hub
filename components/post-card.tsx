import { PostWithAuthor } from "@/types/posts";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { MarkdownPreview } from "@/components/markdown-preview";
import { formatTimestampToTimeAgo } from "@/lib/utils";

export default function PostCard({ post }: { post: PostWithAuthor }) {
  return (
    <Link href={`/teammate-finder/post/${post.post.id}`} className="flex flex-col gap-2 border-2 border-muted rounded-lg p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-foreground/10 justify-between">
      <div className="flex flex-row gap-2">
        {post.post.tags && post.post.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
      <h2 className="text-lg font-bold">{post.post.title}</h2>
      <div className="flex flex-row gap-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={post.user.image || "/todd.jpg"} alt="avatar" width={20} height={20} className="rounded-full" />
        <p className="text-sm text-muted-foreground">
          {post.user.name}
        </p>
        <p className="text-sm text-muted-foreground">•</p>
        <p className="text-sm text-muted-foreground">
          {formatTimestampToTimeAgo(post.post.createdAt)}
        </p>
      </div>
      <MarkdownPreview content={post.post.content} />
    </Link>
  );
}