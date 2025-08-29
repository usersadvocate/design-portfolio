import { externalLinkIcon } from "../../utils/externalLinkIcon";

const onboarding = {
  title: "Onboarding",
  description:
    "Solution to turn IT onboarding chaos into a smooth 5-minute experience",
  year: "2025",
  scope: "Progressive Disclosure",
  cover: "/images/it-onboarding.webp",
  link: "/project/onboarding",
  bodySections: [
    {
      title: "",
      description: `This case is under NDA, so I'm currently reworking all UI elements using 💜 Lovable - it'll be here soon. <br>In the meantime, you can read about how <a href='https://x.com/itsthearcher/status/1956334928657809806' target='_blank' rel='noopener noreferrer'>I work on a Figma plugin ${externalLinkIcon}</a>, <a href='/about/ai' target='_blank' rel='noopener noreferrer'>built a GPT-powered agent for UX copywriting ${externalLinkIcon}</a> or explore my other cases.`,
      image: "",
    },
    {
      title: "",
      description: "",
      image: "",
    },
  ],
  sections: [
    {
      id: "background",
      title: "Background",
      content:
        "Manual employee onboarding required teams to spend hours per employee on account setup and device ordering. Managers handled email and SaaS account creation individually for each new hire, while companies lacked formal processes for security compliance tracking.",
    },
    {
      id: "solution",
      title: "Solution",
      content:
        "Designed an automated onboarding feature to eliminate manual tracking and simplify the experience for non-technical users.",
    },
    {
      id: "role",
      title: "Role",
      content:
        "As the lead designer, I simplified the complex onboarding workflow by breaking it into manageable steps. Applied two key design principles - simplicity and progressive disclosure - to help users navigate the entire process without feeling overwhelmed.",
    },
    {
      id: "lessons",
      title: "Lessons",
      content:
        "The team learned the importance of translating technical concepts into accessible language and setting realistic expectations based on users' actual capabilities rather than assumed technical knowledge.",
    },
    {
      id: "outcome",
      title: "Outcome",
      content:
        "Reduced employee onboarding time by 75%, removing hours of manual work. This feature became a major marketing asset and differentiated us from competitors. The design approach I used proved so effective it became our standard methodology for future projects.",
    },
  ],
};

export default onboarding;
