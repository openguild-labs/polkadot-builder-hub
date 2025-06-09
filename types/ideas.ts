export enum Level {
  Easy = "Easy",
  Intermediate = "Intermediate",
  Advanced = "Advanced",
}

export type Idea = {
  id: number;
  title: string;
  description: string;
  category: string;
  builder: string;
  builderImage: string;
  level: Level;
  dateAdded: string;
};