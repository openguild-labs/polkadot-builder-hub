export type Post = {
  id: string;
  title: string;
  content: string;
  repliedTo?: string;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
};