export type SideProjectTweet = {
  type: "tweet";
  tweetId: string;
  description?: string;
  name: string;
  handle: string;
  avatar?: string;
  text: string;
  images?: string[];
};

export type SideProjectContentBlock = {
  title: string;
  text: string[];
  image?: string;
};

export type Block =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "image"; src: string; alt: string };

export type SideProjectBlog = {
  type: "blog";
  title: string;
  description?: string;
  background?: Block[];
  solution?: Block[];
  role?: Block[];
  content?: (SideProjectContentBlock | Block)[];
  lessons?: Block[];
  outcome?: Block[];
};
