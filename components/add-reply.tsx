"use client";

import { useForm } from "@tanstack/react-form";
import type { AnyFieldApi } from "@tanstack/react-form";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Plus, Check, Loader2, RotateCcw } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { MarkdownPreview } from "@/components/markdown-preview";
import { useMutation } from "@tanstack/react-query";
import { CreatePost } from "@/types/posts";

async function createReply(postData: CreatePost) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/post`,
    {
      method: "POST",
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

export default function AddReply({ id }: { id: string }) {
  const form = useForm({
    defaultValues: {
      content: "",
    },
    onSubmit: async ({ value }) => {
      console.log(value);
      const postData = {
        title: "Reply to " + id,
        content: value.content,
        repliedTo: id,
      };
      createReplyMutation(postData);
    },
  });

  const {
    mutate: createReplyMutation,
    isPending: isCreatePostPending,
    isSuccess: isCreatePostSuccess,
    reset: resetMutation,
  } = useMutation({
    mutationFn: createReply,
    onSuccess: () => {
      // Reset success state after 0.5 seconds
      setTimeout(() => {
        resetMutation();
      }, 500);
    },
  });

  return (
    <div className="flex flex-col gap-4 mt-4 border-t-2 border-gray-200 pt-4">
      <h1 className="text-xl font-bold">Add Reply</h1>
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
                {isCreatePostPending ? (
                  <Loader2 className="animate-spin" />
                ) : isCreatePostSuccess ? (
                  <Check />
                ) : (
                  <>
                    <Plus />
                    Create reply
                  </>
                )}
              </Button>
            </div>
          )}
        </form.Subscribe>
      </form>
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
