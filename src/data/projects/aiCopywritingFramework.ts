import { SideProjectBlog } from "../../types/SideProjectTypes";
import { externalLinkIcon } from "../../utils/externalLinkIconSvg";

// Helper function to create content blocks
const createContentBlock = (title: string, text: string[]) => ({
  title,
  text,
});

// Helper function to create paragraphs
const createParagraph = (text: string) => ({
  type: "paragraph" as const,
  text,
});

// Helper function to create headings
const createHeading = (text: string) => ({
  type: "heading" as const,
  text,
});

// Helper function to create lists
const createList = (items: string[]) => ({
  type: "list" as const,
  items,
});

// Helper function to create images
const createImage = (src: string, alt: string) => ({
  type: "image" as const,
  src,
  alt,
});

const ai: SideProjectBlog = {
  type: "blog",
  title: "Streamlining Copywriting at Scale: Building an AI-Powered Framework",
  date: "2 August, 2025",

  background: [
    createParagraph(
      "As a small startup with a diverse, non-native English speaking product team, we faced a critical challenge: inconsistent copywriting across our product. Without dedicated copywriters and with everyone already busy with their main responsibilities, our copy often lacked cohesion and required multiple rounds of revisions. This created bottlenecks in our product development process and resulted in inconsistent user experiences."
    ),
    createHeading("The problem was multifaceted:"),
    createList([
      "No standardized approach to writing product copy",
      "Multiple team members writing with different styles and tones",
      "Excessive time spent on copy alignment and revisions",
      "Language barriers affecting copy quality and confidence",
      "No clear guidelines for common scenarios like error messages and empty states",
    ]),
  ],

  solution: [
    createParagraph(
      "I led the development of a comprehensive copywriting framework powered by an AI agent, creating a scalable solution that could serve our entire product team."
    ),
    createHeading("The solution consisted of three key components:"),
    createList([
      "Comprehensive Framework Documentation - A structured guide covering audience definition, content guidelines, tone of voice, and specific scenarios",
      "AI Agent Training - Custom GPT model trained on our framework with extensive good/bad examples",
      "Iterative Refinement Process - Continuous improvement based on team feedback and real-world usage",
    ]),
  ],

  role: [
    createHeading("Lead Designer & Framework Architect:"),
    createList([
      "Identified the copywriting consistency problem and its impact on product development",
      "Designed and documented the complete copywriting framework",
      "Collaborated with product, marketing and operations teams to validate and refine guidelines",
      "Trained and fine-tuned the AI agent with company-specific examples",
      "Facilitated adoption across teams",
    ]),
  ],

  content: [
    // Discovery Phase
    createContentBlock("The Challenge Discovery", [
      "The realization came during a routine product review when we noticed significant inconsistencies in our user-facing copy. Error messages ranged from technical jargon to overly casual language, empty states provided little guidance, and our tone varied dramatically across different product areas.\nAs the team grew, this problem compounded.",
    ]),

    // Framework Development
    createContentBlock("Building the Foundation", [
      "I started by creating a comprehensive framework in Notion, drawing from UX writing best practices while tailoring it to our specific needs as a startup with international team members.",
    ]),
    createHeading("The framework covered:"),
    createList([
      "Audience & Scenarios: Defining who we're writing for and common use cases",
      "Content Guidelines: Practical rules like using active voice, proper capitalization, and avoiding redundancy",
      "Specific Scenarios: Detailed guidance for error messages, empty states, date formatting and so on",
      "Examples Library: Side-by-side comparisons of good vs. bad copy",
    ]),
    createImage(
      "/images/copy-examples.webp",
      "Examples of good and bad copy side-by-side from the framework documentation"
    ),

    // Collaboration
    createContentBlock("Collaborative Refinement", [
      "Rather than working in isolation, I facilitated multiple iteration sessions with the product, marketing and operations teams. These sessions were crucial for ensuring the framework reflected real business needs and team capabilities. We refined terminology, adjusted tone guidelines, and expanded scenario coverage based on actual product challenges.",
    ]),

    // AI Implementation
    createContentBlock("AI Implementation", [
      "Once the framework was solid, I began training a custom GPT agent. This wasn't just about uploading the documentation—I created extensive examples showing the AI how to apply our guidelines in practice.",
      'I configured the AI with a specific persona: "The Copywriter" – a UX Copy Specialist for our platform. The agent was designed to embody our brand voice while maintaining the technical expertise needed for B2B SaaS copy.',
    ]),
    createHeading("The training went beyond basic guidelines to include:"),
    createList([
      "Complete framework integration with our Notion documentation uploaded as knowledge base",
      "Detailed persona definition that positioned the AI as a UX-minded copywriter specifically built to support teams building user-friendly B2B platforms",
      "Tone balancing across core modes: Conversational (friendly, peer-to-peer), Straightforward (clear and concise), Reassuring (supportive and calming), with specific guidance on when to use each",
      "Comprehensive style rules covering everything from capitalization (sentence case only) to voice guidelines",
      "Good/bad example pairs showing practical applications of our guidelines",
      "Context-aware recommendations that considered user mental models and real-world scenarios",
    ]),
    createParagraph(
      "The key insight was treating the AI not as a simple text generator, but as a virtual team member who understood our users' context—often non-technical users who might be multitasking or feeling overwhelmed."
    ),
    createParagraph(
      "This human-centered approach to AI training ensured the output consistently matched our empathetic, user-first approach to product copy."
    ),
    createImage(
      "/images/copy-help.webp",
      "Help messages based on the framework"
    ),

    // Continuous Improvement
    createContentBlock("Continuous Improvement", [
      "The framework remains a living document. As we encounter new copywriting challenges or receive team feedback, we update both the documentation and AI training. This iterative approach ensures the solution evolves with our product and team needs.",
    ]),
  ],

  lessons: [
    createHeading("Start with Structure, Then Scale"),
    createParagraph(
      "Building a comprehensive framework first was essential. Without this foundation, the AI agent wouldn't have been effective. The systematic approach made training more efficient and results more consistent."
    ),
    createHeading("Collaboration is Key"),
    createParagraph(
      "The framework's success came from involving multiple stakeholders early. Product, marketing and ops team input was invaluable for creating practical, usable guidelines rather than theoretical best practices."
    ),
    createHeading("Examples Drive Understanding"),
    createParagraph(
      "Abstract guidelines weren't enough. The good/bad example comparisons became the most referenced part of our framework, proving that concrete examples are more valuable than conceptual rules. This insight became even more apparent during AI training, while the framework provided solid conceptual foundation, I discovered that breaking it down into more granular, example-driven components significantly improved the agent's performance. The lesson reinforced that both humans and AI learn best through specific, actionable examples rather than high-level principles."
    ),
  ],

  outcome: [
    createHeading("Quantitative Results:"),
    createList([
      "Significant reduction in copy-related alignment meetings",
      "Faster product development cycles due to fewer copy revision rounds",
      "Increased team confidence in copy creation",
    ]),
    createHeading("Qualitative Results:"),
    createList([
      "More consistent brand voice across all product touchpoints",
      "Improved user experience through clearer, more helpful copy",
      "Enhanced team autonomy - non-native speakers now feel confident creating product copy",
      "Established a scalable process that grows with the team",
    ]),
    createHeading("Future Applications"),
    createParagraph(
      "The framework has become a template for other process improvements at our startup. The combination of structured documentation and AI assistance is now being applied to other areas like user research synthesis and design system maintenance. This project demonstrated how systematic thinking and emerging AI tools can solve real business problems, turning a process bottleneck into a competitive advantage through better user communication."
    ),
  ],

  closingThoughts: [
    createParagraph(
      `One of the key ingredients for successfully building an AI agent is having experience in the area you're building it for. As a product designer at potok, <a href='https://medium.com/@pchelova.julia/ux-writing-e4ec11b106a6' target='_blank' rel='noopener noreferrer'>UX copywriting ${externalLinkIcon}</a> was part of my responsibilities, and this hands-on experience proved invaluable for training the AI and recognizing quality outputs.`
    ),
  ],
};

export default ai;
