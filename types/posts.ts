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

export type PostWithAuthor = {
  post: Post;
  user: {
    id: string;
    name: string;
    image: string;
    email: string;
    emailVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
  };
};

export type PostsWithAuthorsResponse = {
  data: PostWithAuthor[];
  meta?: { currentPage: number, limit: number, totalPages: number };
};

export type CreatePost = {
  title: string;
  content: string;
};

export type UpdatePost = {
  id: string;
  title: string;
  content: string;
};