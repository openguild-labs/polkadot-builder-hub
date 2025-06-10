"use client";

import { useState } from "react";
import { MarkdownPreview } from "@/components/markdown-preview";
import { PostWithAuthor } from "@/types/posts";
import { User } from "@/types/users";
import { Button } from "@/components/ui/button";
import { Pencil, Trash, Save, X } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2, Check, RotateCcw } from "lucide-react";
import { useForm } from "@tanstack/react-form";
import type { AnyFieldApi } from "@tanstack/react-form";
import { useMutation } from "@tanstack/react-query";
import { UpdateReply } from "@/types/replies";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

async function updateReply(postData: UpdateReply) {
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

async function deleteReply(replyId: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/post?id=${replyId}`,
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

export default function ReplyPost({
  replyPost,
  user,
  refetch,
}: {
  replyPost: PostWithAuthor | undefined;
  user: User | null;
  refetch: () => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const isOwner = user?.id === replyPost?.user.id;

  const form = useForm({
    defaultValues: {
      id: replyPost?.post.id || "",
      content: replyPost?.post.content || "",
    },
    onSubmit: async ({ value }) => {
      updateReplyMutation(value);
    },
  });

  const {
    mutate: updateReplyMutation,
    isPending: isUpdateReplyPending,
    isSuccess: isUpdateReplySuccess,
    reset: resetMutation,
  } = useMutation({
    mutationFn: updateReply,
    onSuccess: () => {
      // Reset success state after 0.5 seconds
      setTimeout(() => {
        form.reset();
        resetMutation();
        setIsEditing(false);
        refetch();
      }, 500);
    },
  });

  const {
    mutate: deleteReplyMutation,
    isPending: isDeleteReplyPending,
    isSuccess: isDeleteReplySuccess,
    reset: resetDeleteReplyMutation,
  } = useMutation({
    mutationFn: deleteReply,
    onSuccess: () => {
      setTimeout(() => {
        resetDeleteReplyMutation();
        refetch();
      }, 500);
    },
  });

  return (
    <div className="flex flex-col gap-2 border-2 border-muted rounded-lg p-4">
      {isOwner && (
        <div className="flex flex-row gap-2 self-end">
          {isEditing ? (
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
          )}
          <Dialog>
            <DialogTrigger asChild>
              <Button
                className="hover:cursor-pointer"
                size="icon"
                variant="outline"
              >
                <Trash />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  Are you sure?
                </DialogTitle>
                <DialogDescription>
                  This will permanently delete this reply.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <div className="flex flex-row items-center justify-between w-full">
                  <DialogClose asChild>
                    <Button type="button" variant="secondary" className="hover:cursor-pointer">
                      Close
                    </Button>
                  </DialogClose>
                  <Button
                    className="hover:cursor-pointer"
                    variant="destructive"
                    onClick={() =>
                      deleteReplyMutation(replyPost?.post.id || "")
                    }
                  >
                    {isDeleteReplyPending ? (
                      <Loader2 className="animate-spin" />
                    ) : isDeleteReplySuccess ? (
                      <Check />
                    ) : (
                      <>
                        <Trash />
                        Delete
                      </>
                    )}
                  </Button>
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>
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
      {!isEditing && (
        <MarkdownPreview content={replyPost?.post.content || ""} />
      )}
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
                    {isUpdateReplyPending ? (
                      <Loader2 className="animate-spin" />
                    ) : isUpdateReplySuccess ? (
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
