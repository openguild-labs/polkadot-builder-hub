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
import { useMutation } from "@tanstack/react-query";
import { CreateIdea, Level } from "@/types/ideas";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

async function createIdea(ideaData: CreateIdea) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/idea`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ideaData),
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

export default function SubmitAnIdeaForm() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();
  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
      content: "",
      category: "",
      level: Level.Easy,
    },
    onSubmit: async ({ value }) => {
      createIdeaMutation(value);
    },
  });

  const {
    mutate: createIdeaMutation,
    isPending: isCreateIdeaPending,
    isSuccess: isCreateIdeaSuccess,
    reset: resetMutation,
  } = useMutation({
    mutationFn: createIdea,
    onSuccess: () => {
      // Reset success state after 0.5 seconds
      setTimeout(() => {
        form.reset();
        resetMutation();
        router.push("/idea-submitted");
      }, 500);
    },
  });

  if (isPending) {
    return (
      <main className="flex flex-col gap-8 p-4 max-w-3xl mx-auto">
        <div className="flex flex-row items-center justify-between">
          <Skeleton className="h-[20px] w-[100px]" />
        </div>
        <div className="flex flex-col gap-4">
          <Skeleton className="h-[40px] w-[100px]" />
          <div className="flex flex-col gap-2">
            <Skeleton className="h-[20px] w-[40px]" />
            <Skeleton className="h-[40px] w-full" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Skeleton className="h-[40px] w-[100px]" />
          <div className="flex flex-col gap-2">
            <Skeleton className="h-[300px] w-full" />
          </div>
        </div>
      </main>
    );
  }

  if (session?.user) {
    return (
      <main className="flex flex-col gap-8 p-4 max-w-3xl mx-auto">
        <GoBack href="/teammate-finder" />
        <h1 className="text-2xl font-bold">Submit an Idea</h1>
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
                  : value.length > 100
                  ? "Title must be less than 100 characters"
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
                    placeholder="Idea title"
                  />
                  <FieldInfo field={field} />
                </div>
              );
            }}
          </form.Field>
          <form.Field
            name="description"
            validators={{
              onChange: ({ value }) =>
                !value
                  ? "A description is required"
                  : value.length < 1
                  ? "Description must be at least 1 character"
                  : value.length > 150
                  ? "Description must be less than 150 characters"
                  : undefined,
            }}
          >
            {(field) => {
              // Avoid hasty abstractions. Render props are great!
              return (
                <div className="flex flex-col gap-2">
                  <Label htmlFor={field.name}>Description</Label>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className="text-xl font-medium"
                    placeholder="Idea description"
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
                        placeholder="Write your idea content in markdown..."
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
          <form.Field
            name="category"
            validators={{
              onChange: ({ value }) =>
                !value ? "A category is required" : undefined,
            }}
          >
            {(field) => {
              return (
                <div className="flex flex-col gap-2">
                  <Label htmlFor={field.name}>Category</Label>
                  <Select
                    value={field.state.value}
                    onValueChange={(value) => field.handleChange(value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="defi">DeFi</SelectItem>
                      <SelectItem value="ai">AI</SelectItem>
                      <SelectItem value="nft">NFT</SelectItem>
                      <SelectItem value="payment">Payment</SelectItem>
                      <SelectItem value="depin">DePIN</SelectItem>
                      <SelectItem value="consumer-dapps">
                        Consumer Dapps
                      </SelectItem>
                      <SelectItem value="infrastructure">
                        Infrastructure
                      </SelectItem>
                      <SelectItem value="developer-tools">
                        Developer Tools
                      </SelectItem>
                      <SelectItem value="gaming">Gaming</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              );
            }}
          </form.Field>
          <form.Field
            name="level"
            validators={{
              onChange: ({ value }) =>
                !value ? "A level is required" : undefined,
            }}
          >
            {(field) => {
              return (
                <div className="flex flex-col gap-2">
                  <Label htmlFor={field.name}>Level</Label>
                  <Select
                    value={field.state.value}
                    onValueChange={(value: Level) => field.handleChange(value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={Level.Easy}>Easy</SelectItem>
                      <SelectItem value={Level.Intermediate}>Intermediate</SelectItem>
                      <SelectItem value={Level.Advanced}>Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              );
            }}
          </form.Field>
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
                  {isCreateIdeaPending ? (
                    <Loader2 className="animate-spin" />
                  ) : isCreateIdeaSuccess ? (
                    <Check className="text-green-500" />
                  ) : (
                    <>
                      <Plus />
                      Submit idea
                    </>
                  )}
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
