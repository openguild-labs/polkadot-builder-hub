"use client";

import { useState } from "react";
import GoBack from "@/components/go-back";
import { authClient } from "@/lib/auth-client";
import UnauthorizedComponent from "@/components/unauthorized";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Clock, Plus } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { MarkdownPreview } from "@/components/markdown-preview";

export default function CreatePostPage() {
  const { data: session, isPending } = authClient.useSession();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the post submission
    console.log({ title, content });
    // Redirect or show success message
  };

  if (isPending) {
    return (
      <div className="flex flex-col gap-4 p-4">
        <Skeleton className="h-[200px] w-full" />
      </div>
    );
  }

  if (session?.user) {
    return (
      <main className="flex flex-col gap-8 p-4 max-w-3xl mx-auto">
        <GoBack href="/teammate-finder" />
        <h1 className="text-2xl font-bold">Create a Post</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              placeholder="Post title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-xl font-medium border-none px-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
          <Tabs defaultValue="edit" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="edit">Edit</TabsTrigger>
              <TabsTrigger value="preview">Preview</TabsTrigger>
            </TabsList>
            <TabsContent value="edit" className="mt-0">
              <Textarea
                placeholder="Write your post content in markdown..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="min-h-[400px] resize-none font-mono p-4 border rounded-md"
              />
            </TabsContent>
            <TabsContent value="preview" className="mt-0">
              <div className="min-h-[400px] border rounded-md p-4 overflow-auto">
                <MarkdownPreview content={content} />
              </div>
            </TabsContent>
          </Tabs>
          <Button type="submit">Create post</Button>
        </form>
      </main>
    );
  }

  return <UnauthorizedComponent />;
}
