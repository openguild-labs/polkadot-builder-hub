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

export type AdminIdea = {
  id: number;
  title: string;
  description: string;
  content: string;
  category: string;
  userId: string;
  level: Level;
  status: string;
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

export type AdminIdeaWithUser = {
  idea: AdminIdea;
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

export type AdminIdeasWithUsersResponse = {
  data: AdminIdeaWithUser[];
  meta?: { currentPage: number, limit: number, totalPages: number };
};

export type CreateIdea = {
  title: string;
  description: string;
  content: string;
  category: string;
  level: Level;
};

export type CreateAdminIdea = {
  title: string;
  description: string;
  content: string;
  category: string;
  level: Level;
  status: string;
};

export type UpdateIdea = {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  level: Level;
};

export type UpdateAdminIdea = {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  level: Level;
  status: string;
};