import { SideProjectBlog } from "../../types/sideProject";

const ai: SideProjectBlog = {
  type: "blog",
  title: "Streamlining Copywriting at Scale: Building an AI-Powered Framework",
  background: [
    {
      type: "paragraph",
      text: "As a small startup with a diverse, non-native English speaking product team, we faced a critical challenge: inconsistent copywriting across our product. Without dedicated copywriters and with everyone already busy with their main responsibilities, our copy often lacked cohesion and required multiple rounds of revisions. This created bottlenecks in our product development process and resulted in inconsistent user experiences.",
    },
    {
      type: "heading",
      text: "The problem was multifaceted:",
    },
    {
      type: "list",
      items: [
        "No standardized approach to writing product copy",
        "Multiple team members writing with different styles and tones",
        "Excessive time spent on copy alignment and revisions",
        "Language barriers affecting copy quality and confidence",
        "No clear guidelines for common scenarios like error messages and empty states",
      ],
    },
  ],
  solution: [
    {
      type: "paragraph",
      text: "I led the development of a comprehensive copywriting framework powered by an AI agent, creating a scalable solution that could serve our entire product team.",
    },
    {
      type: "heading",
      text: "The solution consisted of three key components:",
    },
    {
      type: "list",
      items: [
        "Comprehensive Framework Documentation - A structured guide covering audience definition, content guidelines, tone of voice, and specific scenarios",
        "AI Agent Training - Custom GPT model trained on our framework with extensive good/bad examples",
        "Iterative Refinement Process - Continuous improvement based on team feedback and real-world usage",
      ],
    },
  ],
  role: [
    {
      type: "heading",
      text: "Lead Designer & Framework Architect:",
    },
    {
      type: "list",
      items: [
        "Identified the copywriting consistency problem and its impact on product development",
        "Designed and documented the complete copywriting framework",
        "Collaborated with product and operations teams to validate and refine guidelines",
        "Trained and fine-tuned the AI agent with company-specific examples",
        "Facilitated adoption across teams",
      ],
    },
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
      ],
    },
    {
      type: "heading",
      text: "The framework covered:",
    },
    {
      type: "list",
      items: [
        "Audience & Scenarios: Defining who we're writing for and common use cases",
        "Content Guidelines: Practical rules like using active voice, proper capitalization, and avoiding redundancy",
        "Specific Scenarios: Detailed guidance for error messages, empty states, date formatting and so on",
        "Examples Library: Side-by-side comparisons of good vs. bad copy",
      ],
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
      ],
    },
    {
      type: "heading",
      text: "The training went beyond basic guidelines to include:",
    },
    {
      type: "list",
      items: [
        "Complete framework integration with our Notion documentation uploaded as knowledge base",
        "Detailed persona definition that positioned the AI as a UX-minded copywriter specifically built to support teams building user-friendly B2B platforms",
        "Tone balancing across four core modes: Conversational (friendly, peer-to-peer), Straightforward (clear and concise), Reassuring (supportive and calming), with specific guidance on when to use each",
        "Comprehensive style rules covering everything from capitalization (sentence case only) to voice guidelines (second person for guidance, first person plural for company voice)",
        "Good/bad example pairs showing practical applications of our guidelines",
        "Context-aware recommendations that considered user mental models and real-world scenarios",
      ],
    },
    {
      type: "paragraph",
      text: "The key insight was treating the AI not as a simple text generator, but as a virtual team member who understood our users' context—often non-technical users who might be multitasking or feeling overwhelmed.",
    },
    {
      type: "paragraph",
      text: "This human-centered approach to AI training ensured the output consistently matched our empathetic, user-first approach to product copy.",
    },
    {
      title: "Continuous Improvement",
      text: [
        "The framework remains a living document. As we encounter new copywriting challenges or receive team feedback, we update both the documentation and AI training. This iterative approach ensures the solution evolves with our product and team needs.",
      ],
    },
  ],
  lessons: [
    { type: "heading", text: "Start with Structure, Then Scale" },
    {
      type: "paragraph",
      text: "Building a comprehensive framework first was essential. Without this foundation, the AI agent wouldn't have been effective. The systematic approach made training more efficient and results more consistent.",
    },
    { type: "heading", text: "Collaboration is Key" },
    {
      type: "paragraph",
      text: "The framework's success came from involving multiple stakeholders early. Product, marketing and ops team input was invaluable for creating practical, usable guidelines rather than theoretical best practices.",
    },
    { type: "heading", text: "Examples Drive Understanding" },
    {
      type: "paragraph",
      text: "Abstract guidelines weren't enough. The good/bad example comparisons became the most referenced part of our framework, proving that concrete examples are more valuable than conceptual rules. This insight became even more apparent during AI training, while the framework provided solid conceptual foundation, I discovered that breaking it down into more granular, example-driven components significantly improved the agent's performance. The lesson reinforced that both humans and AI learn best through specific, actionable examples rather than high-level principles.",
    },
  ],
  outcome: [
    { type: "heading", text: "Quantitative Results:" },
    {
      type: "list",
      items: [
        "Significant reduction in copy-related alignment meetings",
        "Faster product development cycles due to fewer copy revision rounds",
        "Increased team confidence in copy creation",
      ],
    },
    { type: "heading", text: "Qualitative Results:" },
    {
      type: "list",
      items: [
        "More consistent brand voice across all product touchpoints",
        "Improved user experience through clearer, more helpful copy",
        "Enhanced team autonomy - non-native speakers now feel confident creating product copy",
        "Established a scalable process that grows with the team",
      ],
    },
    { type: "heading", text: "Future Applications" },
    {
      type: "paragraph",
      text: "The framework has become a template for other process improvements at our startup. The combination of structured documentation and AI assistance is now being applied to other areas like user research synthesis and design system maintenance. This project demonstrated how systematic thinking and emerging AI tools can solve real business problems, turning a process bottleneck into a competitive advantage through better user communication.",
    },
  ],
};

export default ai;
