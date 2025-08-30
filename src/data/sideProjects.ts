import ai from "./projects/aiCopywritingFramework";
import pet_project from "./projects/figmaPlugin";
import community from "./projects/communityConnections";
import {
  SideProjectTweet,
  SideProjectBlog,
  SideProjectAbout,
} from "../types/SideProjectTypes";

const sideProjectsData: Record<
  string,
  SideProjectTweet | SideProjectBlog | SideProjectAbout
> = {
  "ai-copywriting-framework": ai,
  "figma-plugin": pet_project,
  "community-connections": community,
};

export default sideProjectsData;
