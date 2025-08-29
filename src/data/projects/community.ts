import { SideProjectAbout } from "../../types/sideProject";
import { externalLinkIcon } from "../../utils/externalLinkIcon";

const community: SideProjectAbout = {
  type: "about",
  description: `I'm planning to speak at a meetup soon but haven't nailed down my topic yet. For now, I'm attending <a href='https://www.meetup.com/members/376807802/' target='_blank' rel='noopener noreferrer'>design and engineering meetups ${externalLinkIcon}</a> to dive deeper into the industry and connect with like-minded people.`,
  images: ["/images/community_1.png", "/images/community_2.png"],
  caption: "UX breakfast, Belgrade, Serbia",
};

export default community;
