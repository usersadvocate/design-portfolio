import { SideProjectTweet } from "../../types/sideProject";
import { externalLinkIcon } from "../../utils/externalLinkIcon";

const pet_project: SideProjectTweet = {
  type: "tweet",
  tweetId: "1943656784884912547",
  description: `I'm AI-assisted coding <a href='https://github.com/usersadvocate/figma-plugin' target='_blank' rel='noopener noreferrer'>a linter as a Figma plugin ${externalLinkIcon}</a>. It will be here soon. In the meantime, here's a glimpse into what I'm doing as a design engineer at work.`,
  name: "Julia",
  handle: "itsthearcher",
  avatar: "/images/avatar.jpg",
  text: "The tasks I'm working on as a design engineer aren't too complex. I don't write much TS yet, since I'm still at the very beginning. For example, right now I'm transitioning our dashboard layout from CSS Flexbox to CSS Grid 💅",
  images: ["/images/tweet-des-eng.png"],
};

export default pet_project;
