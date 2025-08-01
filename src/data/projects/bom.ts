const bom = {
  title: "BOM Portal",
  description: "Procurement tool on a cloud platform from scratch",
  year: "2023",
  scope: "Product Market Fit",
  cover: "/images/bom.png",
  link: "/project/bom",
  bodySections: [
    {
      title: "The current UI problems",
      description:
        "1. Some functionality was difficult to discover: Releases, Adding alternates \n2. Users sometimes miss information due to huge horizontal scroll when a BOM has a large amount of data.",
      image: "/images/bom-ui-old.png",
    },
    {
      title: "The new UI advantages",
      description:
        "1. All available features have been brought to the surface \n2. The table data has been revised and grouped in a way that delays the need for horizontal scrolling.",
      image: "/images/bom-ui-new.png",
    },
  ],
  sections: [
    {
      id: "background",
      title: "Background",
      content:
        "The current UI of the BOM Portal doesn’t encourage engagement on the first interaction. As a product team, we understand the tool's importance on the market, but the product itself has difficulty in encouraging users to use it.",
    },
    {
      id: "solution",
      title: "Solution",
      content:
        "The PM supported the idea of reconsidering the UI. We gathered information from different roles who have been using this table and came to the conclusion to redesign it. We decided to reorganize table tools and change their hierarchy. Instead of saving the graphs as a separate tab above the table, we turned them into a widget. In the table, we combined certain columns, highlighted data, and eliminated one-off elements.",
    },
    {
      id: "role",
      title: "Role",
      content:
        "Since I was the lead designer on this project, I sought references and best practices. I took a course related to table layout, rewatched past interviews with customers, and tried to identify new pain points that were missed earlier. I organized a kick-off meeting for PMs of the entire web platform and prepared high-fidelity prototypes for testing.",
    },
    {
      id: "lessons",
      title: "Lessons",
      content:
        "It is better not to blindly follow the design of well-known companies and attempt to replicate it, even if their design addresses the same problem as yours. It is wiser to have a session with your own clients or conduct a survey via email. Additionally, do not rush the development of your design, especially if the design significantly alters the rules of the game. Try to persuade your stakeholders to test your assumptions first with a Figma prototype.",
    },
    {
      id: "outcome",
      title: "Outcome",
      content:
        "After the redesign, it has become easier for sales managers to promote our project. Additionally, for some roles using our product, the task execution time has decreased.",
    },
  ],
};

export default bom;
