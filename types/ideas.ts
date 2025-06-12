export enum Level {
  Easy = "Easy",
  Intermediate = "Intermediate",
  Advanced = "Advanced",
}

export type Idea = {
  id: number;
  title: string;
  description: string;
  content: string;
  category: string;
  userId: string;
  level: Level;
  createdAt: string;
  updatedAt: string;
};

export type IdeaWithUser = {
  idea: Idea;
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

export type IdeasWithUsersResponse = {
  data: IdeaWithUser[];
  meta?: { currentPage: number, limit: number, totalPages: number };
};

export type CreateIdea = {
  title: string;
  description: string;
  content: string;
  category: string;
  level: Level;
};

export type UpdateIdea = {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  level: Level;
};