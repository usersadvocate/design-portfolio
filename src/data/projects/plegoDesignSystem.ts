const plego = {
  title: "Plego",
  description: "Team work on scalability of the design system",
  year: "2022",
  scope: "Design system",
  cover: "/images/plego.webp",
  link: "/project/plego-design-system",
  bodySections: [
    {
      title: "The Challenge",
      description:
        "We have an applicant tracking system with more than several dozen of modules and complex hidden logic. A primary user of our UI is a professional, who meets some knowledge prerequisites, to be able to aim his work tasks — eventually, our UI can be determined as complex. The high density of elements, abundance of cognitive load, multilevel navigation, and connectivity of modules are all presented in our product and multiplied even a small design task by the system complexity.",
      image: "",
    },
    {
      title: "Lack of consistency",
      description:
        "We realized that we greatly lack consistency and rigor in our design. There were complex heavy elements. Some of them were quite large, so we separated them to the atomic level. It would allow anyone using the design system to combine the atoms and molecules to form organisms that fit the needs of any page and the content. It was very important for us to eventually get flexible building blocks that could work in combination with each other in any combination.",
      image: "/images/non-consistency.webp",
    },
    {
      title: "",
      description:
        "The color palette was limited to a small number of shades with a clear purpose of use, the same applied to other design tokens. For example, instead of the same shades of gray (#F5F5F5 and #F9F9F9) or buttons with different borders, we established common standards. Such restrictions, of course, bind the hands of designers quite strongly. But this allows us to quickly develop new functions, reusing what is already ready, and not generate unconstitutionality in the future.",
      image: "",
    },
    {
      title: "",
      description: "",
      image: "/images/consistency.webp",
    },
    {
      title: "Building components",
      description:
        "The main goal was to create a Lego-like constructor from which to create a layout. A kind of framework tool within the development team for UX designers. We called our system “Plego” (Potok + Lego). Each component has all possible states, which are switched through the settings panel in a couple of clicks.",
      image: "/images/workspace.webp",
    },
    {
      title: "",
      description:
        "All product pages were moved to the library in the form of layouts, so that the designer did not need to reassemble the pages already, but only make changes to them if necessary.",
      image: "/images/arrangement.webp",
    },
    {
      title: "",
      description:
        "This allowed UX designers to avoid using a separate Wireframe library, and design features to see the result immediately. And most importantly, all this greatly reduced the time from the design sprint to the design review.",
      image: "/images/settings.webp",
    },
    {
      title: "Results",
      description:
        "Passing functions from designers to developers became less error-prone because developers can easily identify the building blocks used in projects and find the appropriate components and styles in the codebase. Standardization helped developers use code as efficiently as possible and ensure that the resulting user interface is consistent with the design.",
      image: "/images/timeline.webp",
    },
  ],
  sections: [
    {
      id: "background",
      title: "Background",
      content:
        "Design backlog was growing because our company product was selling well. We realized that we greatly lack consistency and rigor in our design. Design team hadn't one language with developers. And designer couldn't give a correct estimate of the task’s capacity.",
    },
    {
      id: "solution",
      title: "Solution",
      content:
        "Instead of starting to build a design system from scratch, we carefully looked through what we had already created. We already had a UI kit. We wanted to use atomic approach to building design system.",
    },
    {
      id: "role",
      title: "Role",
      content:
        "I had to maintain it and contribute. Once a month to make a decision about adding/excluding components.",
    },
    {
      id: "lessons",
      title: "Lessons",
      content:
        "Time management plays a key role in this case. The development and implementation of a design system requires the full-time commitment of one designer. The other part of the team, which will use the updated system, should do new tasks within the new system and allocate time to update layouts in old tasks.",
    },
    {
      id: "outcome",
      title: "Outcome",
      content:
        "Just as consistency increased, so did user efficiency. Because designers and developers aren’t caught up in redundant questions or repetitive work, they’re freed up for projects that deliver more business value.",
    },
  ],
};

export default plego;
