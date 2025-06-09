"use client";

import { useState } from "react";
import { MarkdownPreview } from "@/components/markdown-preview";
import { PostWithAuthor } from "@/types/posts";
import { Badge } from "@/components/ui/badge";
import { User } from "@/types/users";
import { Pencil, Trash, Save, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2, Check, RotateCcw } from "lucide-react";
import { useForm } from "@tanstack/react-form";
import type { AnyFieldApi } from "@tanstack/react-form";
import { useMutation } from "@tanstack/react-query";
import { UpdatePost } from "@/types/posts";

async function updatePost(postData: UpdatePost) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/post`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
      credentials: "include",
    }
  );

  if (!response.ok) {
    // You might want to parse the error response body for more details
    const errorBody = await response.text();
    throw new Error(`Network response was not ok: ${errorBody}`);
  }

  return response.json(); // Assumes the API returns JSON on success
}

async function deletePost(postId: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/post?id=${postId}`,
    {
      method: "DELETE",
      credentials: "include",
    }
  );

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Network response was not ok: ${errorBody}`);
  }
}

export default function MainPost({
  mainPost,
  user,
  refetch,
}: {
  mainPost: PostWithAuthor | undefined;
  user: User | null;
  refetch: () => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const isOwner = user?.id === mainPost?.user.id;

  const form = useForm({
    defaultValues: {
      id: mainPost?.post.id || '',
      title: mainPost?.post.title || '',
      content: mainPost?.post.content || '',
    },
    onSubmit: async ({ value }) => {
      updatePostMutation(value)
    },
  })

  const {
    mutate: updatePostMutation,
    isPending: isUpdatePostPending,
    isSuccess: isUpdatePostSuccess,
    reset: resetUpdateMutation,
  } = useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      // Reset success state after 0.5 seconds
      setTimeout(() => {
        form.reset();
        resetUpdateMutation();
        setIsEditing(false);
        refetch();
      }, 500);
    },
  });

  const {
    mutate: deletePostMutation,
    isPending: isDeletePostPending,
    isSuccess: isDeletePostSuccess,
    reset: resetDeleteMutation,
  } = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      setTimeout(() => {
        resetDeleteMutation();
        refetch();
      }, 500);
    },
  });

  return (
    <div className="flex flex-col gap-2 border-2 border-muted rounded-lg p-4">
      <div className="flex flex-row gap-2">
        {mainPost &&
          mainPost.post.tags &&
          mainPost.post.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
      </div>
      {isOwner && (
        <div className="flex flex-row gap-2 self-end">
          {
            isEditing ? (
              <Button
                className="hover:cursor-pointer"
                size="icon"
                variant="secondary"
                onClick={() => setIsEditing(false)}
              >
                <X />
              </Button>
            ) : (
              <Button
                className="hover:cursor-pointer"
                size="icon"
                variant="secondary"
                onClick={() => setIsEditing(true)}
              >
                <Pencil />
              </Button>
            )
          }
          <Button
            className="hover:cursor-pointer"
            size="icon"
            variant="destructive"
            onClick={() => deletePostMutation(mainPost?.post.id || '')}
          >
            {isDeletePostPending ? (
              <Loader2 className="animate-spin" />
            ) : isDeletePostSuccess ? (
              <Check className="text-green-500" />
            ) : (
              <Trash />
            )}
          </Button>
        </div>
      )}
      <h1 className="text-2xl font-bold">{mainPost?.post.title}</h1>
      <div className="flex flex-row gap-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={mainPost?.user.image || "/todd.jpg"}
          alt="avatar"
          width={20}
          height={20}
          className="rounded-full"
        />
        <p className="text-sm">{mainPost?.user.name}</p>
      </div>
      {
        !isEditing && (
          <MarkdownPreview content={mainPost?.post.content || ""} />
        )
      }
      {isEditing && (
        <div className="flex flex-col gap-2 mt-4">
          <h1 className="text-lg font-bold">Edit Post</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              form.handleSubmit();
            }}
            className="space-y-6"
          >
            <form.Field
              name="title"
              validators={{
                onChange: ({ value }) =>
                  !value
                    ? "A title is required"
                    : value.length < 1
                    ? "Title must be at least 1 character"
                    : undefined,
              }}
            >
              {(field) => {
                // Avoid hasty abstractions. Render props are great!
                return (
                  <div className="flex flex-col gap-2">
                    <Label htmlFor={field.name}>Title</Label>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      className="text-xl font-medium"
                      placeholder="Post title"
                    />
                    <FieldInfo field={field} />
                  </div>
                );
              }}
            </form.Field>
            <Tabs defaultValue="edit" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="edit">Edit</TabsTrigger>
                <TabsTrigger value="preview">Preview</TabsTrigger>
              </TabsList>
              <TabsContent value="edit" className="mt-0">
                <form.Field
                  name="content"
                  validators={{
                    onChange: ({ value }) =>
                      !value
                        ? "Content is required"
                        : value.length < 1
                        ? "Content must be at least 1 character"
                        : undefined,
                  }}
                >
                  {(field) => {
                    // Avoid hasty abstractions. Render props are great!
                    return (
                      <div className="flex flex-col gap-2">
                        <Label htmlFor={field.name}>Content</Label>
                        <Textarea
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          placeholder="Write your post content in markdown..."
                          className="min-h-[400px] p-4"
                        />
                        <FieldInfo field={field} />
                      </div>
                    );
                  }}
                </form.Field>
              </TabsContent>
              <TabsContent value="preview" className="mt-0">
                <div className="min-h-[400px] border rounded-md p-4 overflow-auto">
                  <form.Subscribe selector={(state) => [state.values.content]}>
                    {([content]) => <MarkdownPreview content={content} />}
                  </form.Subscribe>
                </div>
              </TabsContent>
            </Tabs>
            <form.Subscribe selector={(state) => [state.canSubmit]}>
              {([canSubmit]) => (
                <div className="flex flex-row gap-2 mt-4 justify-end">
                  <Button
                    size="icon"
                    variant="secondary"
                    type="reset"
                    className="hover:cursor-pointer"
                    onClick={() => form.reset()}
                  >
                    <RotateCcw />
                  </Button>
                  <Button
                    type="submit"
                    disabled={!canSubmit}
                    className="hover:cursor-pointer w-[150px]"
                  >
                    {isUpdatePostPending ? (
                      <Loader2 className="animate-spin" />
                    ) : isUpdatePostSuccess ? (
                      <Check className="text-green-500" />
                    ) : (
                      <>
                        <Save />
                        Update post
                      </>
                    )}
                  </Button>
                </div>
              )}
            </form.Subscribe>
          </form>
        </div>
      )}
    </div>
  );
}

function FieldInfo({ field }: { field: AnyFieldApi }) {
  return (
    <div className="text-sm">
      {field.state.meta.isValidating ? (
        "Checking..."
      ) : field.state.meta.isTouched && !field.state.meta.isValid ? (
        <em className="text-muted-foreground">
          {field.state.meta.errors.join(",")}
        </em>
      ) : field.state.meta.isTouched && field.state.meta.isValid ? (
        <div className="text-green-600 flex flex-row gap-2 items-center">
          <Check className="w-5 h-5" />
          ok
        </div>
      ) : (
        <em className="text-red-600">* required</em>
      )}
    </div>
  );
}
