"use client";

import GoBack from "@/components/go-back";
import { authClient } from "@/lib/auth-client";
import { useForm } from "@tanstack/react-form";
import type { AnyFieldApi } from "@tanstack/react-form";
import UnauthorizedComponent from "@/components/unauthorized";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Plus, Check, Loader2, RotateCcw } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { MarkdownPreview } from "@/components/markdown-preview";

export default function CreatePostPage() {
  const { data: session, isPending } = authClient.useSession();

  const form = useForm({
    defaultValues: {
      title: '',
      content: '',
    },
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value)
    },
  })

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
        <form
          onSubmit={(e) => {
            e.preventDefault()
            e.stopPropagation()
            form.handleSubmit()
          }}
          className="space-y-6"
        >
          <form.Field
            name="title"
            validators={{
              onChange: ({ value }) =>
                !value
                  ? 'A title is required'
                  : value.length < 1
                    ? 'Title must be at least 1 character'
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
              )
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
                    ? 'Content is required'
                    : value.length < 1
                      ? 'Content must be at least 1 character'
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
              )
            }}
            </form.Field>
            </TabsContent>
            <TabsContent value="preview" className="mt-0">
              <div className="min-h-[400px] border rounded-md p-4 overflow-auto">
                <MarkdownPreview content={form.state.values.content} />
              </div>
            </TabsContent>
          </Tabs>
          <form.Subscribe
            selector={(state) => [state.canSubmit]}
          >
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
                  {/* {isCreateBotPending ? (
                    <Loader2 className="animate-spin" />
                  ) : isCreateBotSuccess ? (
                    <Check />
                  ) : (
                    <>
                      <BadgePlus />
                      Create
                    </>
                  )} */}
                  <Plus />
                  Create post
                </Button>
              </div>
            )}
          </form.Subscribe>
        </form>
      </main>
    );
  }

  return <UnauthorizedComponent />;
}

function FieldInfo({ field }: { field: AnyFieldApi }) {
  return (
    <div className="text-sm">
      {field.state.meta.isValidating ? (
        "Checking..."
      ) : field.state.meta.isTouched && !field.state.meta.isValid ? (
        <em className="text-muted-foreground">{field.state.meta.errors.join(",")}</em>
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