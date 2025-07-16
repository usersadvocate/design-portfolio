const tweetData: Record<
  string,
  {
    tweetId: string;
    description?: string;
    name: string;
    handle: string;
    avatar?: string;
    text: string;
    images?: string[];
  }
> = {
  pet_project: {
    tweetId: "1933152590029861252",
    description:
      "I'm working on a new side project, it'll be here soon. In the meantime, here’s a glimpse into what inspires me and what I'm currently exploring.",
    name: "Julia",
    handle: "itsthearcher",
    avatar: "/images/avatar.jpg",
    text: "We’re an office-first company, but on WFH days @getinflight becomes \n super handy 🫶 I like it because it allows me to provide more context\n rather than leaving text messages around files. \nMore context = more clarity.",
    images: ["/images/tweetpet.jpeg"],
  },
  ai: {
    tweetId: "1945058896319553926",
    description: "I'm working on an AI project, it’ll be live here soon. Until then, take a look at the ideas, tools, and questions I’m currently exploring.",
    name: "Julia",
    handle: "itsthearcher",
    avatar: "/images/avatar.jpg",
    text: "I'm inspired by HOW I AI episode.\n It's the most thoughtful one I've heard so far. And I'm going to do the \n same exercise with my GPT Copywriting framework agent. I've already \nstarted, will share how it goes.",
    images: ["/images/tweetai.jpeg"],
  },
};

export default tweetData;
