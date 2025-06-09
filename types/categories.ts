export type Category = {
  id: number;
  name: string;
  slug: string;
  description: string;
  icon: React.ElementType;
  image: string;
  featuredProjects: {
    id: number;
    builderName: string;
    profileImage: string;
  }[];
}