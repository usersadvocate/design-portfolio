import ai from "./projects/ai";
import pet_project from "./projects/pet_project";
import { SideProjectTweet, SideProjectBlog } from "../types/sideProject";

const sideProjectsData: Record<string, SideProjectTweet | SideProjectBlog> = {
  ai,
  pet_project,
};

export default sideProjectsData;
