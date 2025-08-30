export type Project = {
  title: string;
  description: string;
  year: string;
  scope: string;
  cover: string;
  link: string;
  sections: {
    id: string;
    title: string;
    content: string;
  }[];
  bodySections?: {
    title: string;
    description: string;
    image?: string;
  }[];
};
