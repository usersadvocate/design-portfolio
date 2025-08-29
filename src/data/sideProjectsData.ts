import ai from "./projects/ai";
import pet_project from "./projects/pet_project";
import community from "./projects/community";
import {
  SideProjectTweet,
  SideProjectBlog,
  SideProjectAbout,
} from "../types/sideProject";

const sideProjectsData: Record<
  string,
  SideProjectTweet | SideProjectBlog | SideProjectAbout
> = {
  ai,
  pet_project,
  community,
};

export default sideProjectsData;
