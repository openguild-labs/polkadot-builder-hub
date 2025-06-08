export type Post = {
  id: string;
  title: string;
  content: string;
  repliedTo?: string;
  authorId: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
};