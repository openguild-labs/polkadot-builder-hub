export type Post = {
  id: string;
  title: string;
  content: string;
  repliedTo?: string | undefined | null;
  authorId: string;
  tags?: string[] | null;
  createdAt: Date;
  updatedAt: Date;
};

export type CreatePost = {
  title: string;
  content: string;
};