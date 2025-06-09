import { Post } from "@/types/posts";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/teammate-finder/post/${post.id}`} className="flex flex-col gap-2 border-2 border-muted rounded-lg p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-foreground/10 justify-between">
      <div className="flex flex-row gap-2">
        {post.tags && post.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
      <h2 className="text-lg font-bold">{post.title}</h2>
      <div className="flex flex-row gap-2">
        <Image src="/todd.jpg" alt="avatar" width={20} height={20} className="rounded-full" />
        <p className="text-sm text-muted-foreground">
          Tin Chung
        </p>  
      </div>
      <p className="text-sm text-muted-foreground line-clamp-4">{post.content}</p>
    </Link>
  );
}