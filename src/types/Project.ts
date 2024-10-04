export type ProjectType = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoLink: string;
  githubLink: string;
  status: "pending" | "done";
};
