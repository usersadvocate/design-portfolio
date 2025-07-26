type TweetEntry = {
  type: "tweet";
  tweetId: string;
  description?: string;
  name: string;
  handle: string;
  avatar?: string;
  text: string;
  images?: string[];
};

type BlogContentBlock = {
  title: string;
  text: string[];
  image?: string;
};

type BlogEntry = {
  type: "blog";
  title: string;
  description?: string;
  background?: string[];
  solution?: string[];
  role?: string[];
  content?: BlogContentBlock[];
  lessons?: string[];
  outcome?: string[];
};

const tweetData: Record<string, TweetEntry | BlogEntry> = {
  pet_project: {
    type: "tweet",
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
    type: "blog",
    title:
      "Streamlining Copywriting at Scale: Building an AI-Powered Framework",
    background: [
      "As a small startup with a diverse, non-native English speaking product team, we faced a critical challenge: inconsistent copywriting across our product. Without dedicated copywriters and with everyone already busy with their main responsibilities, our copy often lacked cohesion and required multiple rounds of revisions. This created bottlenecks in our product development process and resulted in inconsistent user experiences.",
      "The problem was multifaceted:\n- No standardized approach to writing product copy\n- Multiple team members writing with different styles and tones\n - Excessive time spent on copy alignment and revisions\n- Language barriers affecting copy quality and confidence\n- No clear guidelines for common scenarios like error messages and empty states",
    ],
    solution: [
      "I led the development of a comprehensive copywriting framework powered by an AI agent, creating a scalable solution that could serve our entire product team. The solution consisted of three key components:",
      "1. Comprehensive Framework Documentation - A structured guide covering audience definition, content guidelines, tone of voice, and specific scenarios\n2. AI Agent Training - Custom GPT model trained on our framework with extensive good/bad examples\n3. Iterative Refinement Process - Continuous improvement based on team feedback and real-world usage",
    ],
    role: [
      "Lead Designer & Framework Architect",
      "- Identified the copywriting consistency problem and its impact on product development\n- Designed and documented the complete copywriting framework\n- Collaborated with product and operations teams to validate and refine guidelines\n- Trained and fine-tuned the AI agent with company-specific examples\n- Facilitated adoption across teams",
    ],
    content: [
      {
        title: "The Challenge Discovery",
        text: [
          "The realization came during a routine product review when we noticed significant inconsistencies in our user-facing copy.\nError messages ranged from technical jargon to overly casual language, empty states provided little guidance, and our tone varied dramatically across different product areas.\nAs the team grew, this problem compounded.",
        ],
      },
      {
        title: "Building the Foundation",
        text: [
          "I started by creating a comprehensive framework in Notion, drawing from UX writing best practices while tailoring it to our specific needs as a startup with international team members.",
          "The framework covered:\n- Audience & Scenarios: Defining who we're writing for and common use cases\n- Content Guidelines: Practical rules like using active voice, proper capitalization, and avoiding redundancy\n- Specific Scenarios: Detailed guidance for error messages, empty states, date formatting and so on\n- Examples Library: Side-by-side comparisons of good vs. bad copy",
        ],
        // image: "/images/foundation.png",
      },
      {
        title: "Collaborative Refinement",
        text: [
          "Rather than working in isolation, I facilitated multiple iteration sessions with the product, marketing and operations teams.\nThese sessions were crucial for ensuring the framework reflected real business needs and team capabilities.\nWe refined terminology, adjusted tone guidelines, and expanded scenario coverage based on actual product challenges.",
        ],
      },
      {
        title: "AI Implementation",
        text: [
          "Once the framework was solid, I began training a custom GPT agent. This wasn't just about uploading the documentation—I created extensive examples showing the AI how to apply our guidelines in practice.",
          'I configured the AI with a specific persona: "The Copywriter" – a UX & Product Copy Specialist for our platform. The agent was designed to embody our brand voice while maintaining the technical expertise needed for B2B SaaS copy.',
          "The training went beyond basic guidelines to include:\n- Complete framework integration with our Notion documentation uploaded as knowledge base\n- Detailed persona definition that positioned the AI as a UX-minded copywriter specifically built to support teams building user-friendly B2B platforms\n- Tone balancing across four core modes: Conversational (friendly, peer-to-peer), Straightforward (clear and concise), Reassuring (supportive and calming), with specific guidance on when to use each\n- Comprehensive style rules covering everything from capitalization (sentence case only) to voice guidelines (second person for guidance, first person plural for company voice)\n- Good/bad example pairs showing practical applications of our guidelines\n- Context-aware recommendations that considered user mental models and real-world scenarios\nThe key insight was treating the AI not as a simple text generator, but as a virtual team member who understood our users' context—often non-technical users who might be multitasking or feeling overwhelmed.",
          "This human-centered approach to AI training ensured the output consistently matched our empathetic, user-first approach to product copy.",
        ],
      },
      {
        title: "Continuous Improvement",
        text: [
          "The framework remains a living document. As we encounter new copywriting challenges or receive team feedback, we update both the documentation and AI training. This iterative approach ensures the solution evolves with our product and team needs.",
        ],
        // image: "/images/continuous.png",
      },
    ],

    lessons: [
      "Start with Structure, Then Scale: Building a comprehensive framework first was essential. Without this foundation, the AI agent wouldn't have been effective. The systematic approach made training more efficient and results more consistent.",
      "Collaboration is Key: The framework's success came from involving multiple stakeholders early. Product, marketing and ops team input was invaluable for creating practical, usable guidelines rather than theoretical best practices.",
      "Examples Drive Understanding: Abstract guidelines weren't enough. The good/bad example comparisons became the most referenced part of our framework, proving that concrete examples are more valuable than conceptual rules.",
      "AI Amplifies Good Processes: The AI agent was only as good as the framework behind it. Rather than replacing human judgment, it scaled our established processes and reduced routine decision-making overhead.",
    ],
    outcome: [
      "Quantitative Results:\n- Significant reduction in copy-related alignment meetings\n- Faster product development cycles due to fewer copy revision rounds\n- Increased team confidence in copy creation",
      "Quantitative Results:\n- More consistent brand voice across all product touchpoints\n- Improved user experience through clearer, more helpful copy\n- Enhanced team autonomy - non-native speakers now feel confident creating product copy\n- Established a scalable process that grows with the team",
      "Future Applications:\nThe framework has become a template for other process improvements at our startup. The combination of structured documentation and AI assistance is now being applied to other areas like user research synthesis and design system maintenance.\nThis project demonstrated how systematic thinking and emerging AI tools can solve real business problems, turning a process bottleneck into a competitive advantage through better user communication.",
    ],
  },
};

export default tweetData;
