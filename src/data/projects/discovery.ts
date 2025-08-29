const discovery = {
  title: "Continuous Discovery",
  description:
    "Framework on how to continuously validate and improve products to meet customer needs",
  year: "2022",
  scope: "User Research",
  cover: "/images/discovery.webp",
  link: "/project/discovery",
  bodySections: [
    {
      title: "Collaborative Efforts",
      description:
        "We started our work on the implementation of this research by discussing with analysts, developers, product managers, and designers whether this process is suitable for us at all and whether it is worth investing effort in it. For the research, Teresa suggests creating a trio from the product team members — 1 PM, 1 designer, 1 developer. In our case, we wanted to include an analyst in this process. However, the planning of the research part has been postponed until we figure out how it will work. We organized a meeting with the development team, demonstrated our idea, and asked them to consider how we could implement a separate pool of users into our database, add and remove users from there, and send them invitations every 30 days. Those who have already been contacted should be marked in the database to avoid spamming them with an invitation to an interview for the next 30 days.",
      image: "/images/admin-panel.webp",
    },
    {
      title: "Database Development",
      description:
        "The difficulties during the implementation stage were mostly related to the development and adaptability of our database for panel users. For all the features we were unsure about, we decided to try with an MVP and added an additional column to the database, along with an “if-else” condition when sending invitations from our admin panel.",
      image: "/images/new-popup.webp",
    },
    {
      title: "Saving Time and Resources",
      description:
        "While the developers were thinking about the database architecture, I was creating a user flow to cover all the corner cases. By the next iteration, the analyst had applied the user flow, the tester had applied the requirements, and I already had layouts in which the user could independently include themselves in the pool of loyal users who would help to develop our product. The last stage was verifying the invitations, which we decided to send directly to the application for better conversion with the marketing department.",
      image: "/images/invintation.webp",
    },
    {
      title: "",
      description: "",
      image: "/images/research-pool.webp",
    },
    {
      title: "Results",
      description:
        "The user receives an invitation to an interview every two months. We use Calendly service, which integrates well with all mail tools. In addition, Calendly sends a reminder about the meetings, which saved us from having to develop this process.",
      image: "/images/slots.webp",
    },
  ],
  sections: [
    {
      id: "background",
      title: "Background",
      content:
        "We are faced with the fact that conducting interviews with our users has become very labor-intensive. We need to notify our users about the problem we want to discuss, write to everyone, and arrange a meeting, among other things. It is not profitable for us to pay for companies that help in hiring respondents or use other resources.",
    },
    {
      id: "solution",
      title: "Solution",
      content:
        "The product manager of our team advised the design team to read “Continuous Discovery Habits” by Teresa Torres and consider whether we can use continuous research in our process. This approach is convenient because, once we have made an effort to create an environment for constantly hiring our users for interviews, the team no longer needs to spend resources on finding respondents and sending invitations. This becomes an automated process.",
    },
    {
      id: "role",
      title: "Role",
      content:
        "I read the book “Continuous Discovery Habits” and came up with architectural solution that can be integrated into our interface. Additionally, I became part of a trio that was conducting interviews with users.",
    },
    {
      id: "lessons",
      title: "Lessons",
      content:
        "From an architectural point of view, the Continuous Discovery project was successful, as our product includes both a user interface and admin settings. If you want to bring users onto your platform, it's essential to discuss with architects and developers the capabilities of your codebase and database.",
    },
    {
      id: "outcome",
      title: "Outcome",
      content:
        "During the first week after the project was launched, over 30 respondents responded, and almost all of them agreed to participate in our research.",
    },
  ],
};

export default discovery;
